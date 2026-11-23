"use client";

import Link from "next/link";
import Script from "next/script";
import { useActionState, useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, Loader2 } from "lucide-react";
import { submitProposal } from "@/lib/leads/actions";
import { EMPLOYEE_RANGES, proposalSchema, type FieldErrors, type ProposalState } from "@/lib/leads/schema";
import { Button } from "@/components/ui/Button";
import { readAttribution } from "./AttributionCapture";

type Values = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  employees: string;
  message: string;
  consent: boolean;
};

const ATTR_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "referrer", "landingPage"];

export function ProposalForm({
  services,
  countryOptions,
  defaultCountry,
  privacyHref,
}: {
  services: { slug: string; name: string }[];
  countryOptions: string[];
  defaultCountry: string;
  privacyHref: string;
}) {
  const [state, formAction, pending] = useActionState<ProposalState, FormData>(submitProposal, { status: "idle" });
  const [values, setValues] = useState<Values>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    country: defaultCountry,
    service: "",
    employees: "",
    message: "",
    consent: false,
  });
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const [attribution, setAttribution] = useState<Record<string, string>>({});
  const startedAt = useRef<HTMLInputElement>(null);
  const startedAtValue = useRef<string>("");
  const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  // Mount-only read of browser-only state (sessionStorage, URL), which isn't available during prerender.
  useEffect(() => {
    startedAtValue.current = String(Date.now());
    if (startedAt.current) startedAt.current.value = startedAtValue.current;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAttribution(readAttribution());
    const slug = new URLSearchParams(window.location.search).get("service");
    const match = services.find((s) => s.slug === slug);
    if (match) setValues((v) => ({ ...v, service: match.name }));
  }, [services]);

  // React resets uncontrolled inputs after an action; restore the fill-time stamp.
  useEffect(() => {
    if (startedAt.current && !startedAt.current.value) startedAt.current.value = startedAtValue.current;
  }, [state]);

  const serverErrors = state.status === "error" ? state.fieldErrors ?? {} : {};
  const errors: FieldErrors = { ...serverErrors, ...clientErrors };

  const update = (key: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    if (clientErrors[key as keyof FieldErrors]) setClientErrors((ce) => ({ ...ce, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const result = proposalSchema.safeParse({ ...values, consent: values.consent ? "on" : undefined });
    if (!result.success) {
      e.preventDefault();
      const fe: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fe[key]) fe[key] = issue.message;
      }
      setClientErrors(fe);
      const first = Object.keys(fe)[0];
      if (first) document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setClientErrors({});
  };

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-white p-8 sm:p-12">
        <p className="text-sm font-semibold text-accent-dark">Request received</p>
        <h2 className="mt-3 text-2xl font-bold">Thank you — we&apos;ve received your request</h2>
        <p className="mt-3 max-w-md text-body">
          A member of our team will be in touch shortly to understand your requirements and prepare your proposal.
        </p>
        {state.reference !== "received" && (
          <p className="mt-6 text-sm text-muted">
            Your reference: <span className="font-mono font-semibold text-ink">{state.reference}</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 sm:p-10">
      {state.status === "error" && (
        <div role="alert" className="mb-6 flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName}>
          <input id="f-fullName" name="fullName" autoComplete="name" required value={values.fullName} onChange={update("fullName")} {...aria("fullName", errors)} className={inputCls(errors.fullName)} />
        </Field>
        <Field id="businessName" label="Business name" error={errors.businessName}>
          <input id="f-businessName" name="businessName" autoComplete="organization" required value={values.businessName} onChange={update("businessName")} {...aria("businessName", errors)} className={inputCls(errors.businessName)} />
        </Field>
        <Field id="email" label="Business email" error={errors.email}>
          <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required value={values.email} onChange={update("email")} {...aria("email", errors)} className={inputCls(errors.email)} />
        </Field>
        <Field id="phone" label="Phone number" hint="Include your country code, e.g. +94" error={errors.phone}>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required value={values.phone} onChange={update("phone")} {...aria("phone", errors)} className={inputCls(errors.phone)} />
        </Field>
        <Field id="country" label="Country" error={errors.country}>
          <select id="f-country" name="country" required value={values.country} onChange={update("country")} {...aria("country", errors)} className={inputCls(errors.country)}>
            {countryOptions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field id="employees" label="Estimated employees" error={errors.employees}>
          <select id="f-employees" name="employees" required value={values.employees} onChange={update("employees")} {...aria("employees", errors)} className={inputCls(errors.employees)}>
            <option value="" disabled>
              Select a range
            </option>
            {EMPLOYEE_RANGES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>
        <Field id="service" label="Service required" error={errors.service} className="sm:col-span-2">
          <select id="f-service" name="service" required value={values.service} onChange={update("service")} {...aria("service", errors)} className={inputCls(errors.service)}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field
          id="message"
          label="Message (optional)"
          hint="Please don't include salaries, ID numbers or employee files. We'll arrange a secure way to share data later."
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea id="f-message" name="message" rows={4} maxLength={2000} value={values.message} onChange={update("message")} {...aria("message", errors)} className={`${inputCls(errors.message)} resize-y`} />
        </Field>
      </div>

      {/* Anti-spam: honeypot (hidden from people and assistive tech) and a fill-time stamp. */}
      <div aria-hidden className="absolute -start-[9999px] size-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input ref={startedAt} type="hidden" name="startedAt" defaultValue="" />
      {ATTR_FIELDS.map((k) => (
        <input key={k} type="hidden" name={k} value={attribution[k] ?? ""} readOnly />
      ))}

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm text-body">
          <input
            id="f-consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={update("consent")}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "e-consent" : undefined}
            className="mt-0.5 size-4 shrink-0 rounded border-line accent-brand"
          />
          <span>
            I agree that my details will be used to respond to this request, as described in the{" "}
            <Link href={privacyHref} className="font-medium text-brand underline-offset-2 hover:underline">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="e-consent" className="mt-1.5 ps-7 text-sm text-red-700">
            {errors.consent}
          </p>
        )}
      </div>

      {turnstileKey && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div className="cf-turnstile mt-6" data-sitekey={turnstileKey} />
        </>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Your details are sent securely and never shared for marketing.
        </p>
        <Button type="submit" size="lg" arrow={!pending} disabled={pending} className="w-full sm:w-auto">
          {pending && <Loader2 aria-hidden className="size-4 animate-spin" />}
          {pending ? "Sending…" : "Request my proposal"}
        </Button>
      </div>
    </form>
  );
}

const HAS_HINT = new Set<keyof FieldErrors>(["phone", "message"]);

function aria(key: keyof FieldErrors, errors: FieldErrors) {
  return {
    "aria-invalid": !!errors[key],
    "aria-describedby": [errors[key] ? `e-${key}` : null, HAS_HINT.has(key) ? `h-${key}` : null].filter(Boolean).join(" ") || undefined,
  };
}

function inputCls(error?: string) {
  return `block w-full rounded-xl border bg-canvas px-4 py-3 text-ink outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted/70 focus:bg-white focus:ring-4 ${
    error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-line focus:border-brand focus:ring-brand/15"
  }`;
}

function Field({
  id,
  label,
  hint,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`f-${id}`} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {hint && (
        <p id={`h-${id}`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`e-${id}`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

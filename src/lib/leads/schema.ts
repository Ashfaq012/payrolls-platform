import { z } from "zod";

export const EMPLOYEE_RANGES = ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,000+"] as const;

/** Shared by the client form and the server action. */
export const proposalSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  businessName: z.string().trim().min(2, "Please enter your business name.").max(160),
  email: z.email("Please enter a valid business email address.").trim().max(200),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 ()-]{7,20}$/, "Please enter a valid phone number, including the country code."),
  country: z.string().trim().min(2, "Please select a country.").max(80),
  service: z.string().trim().min(2, "Please select a service.").max(80),
  employees: z.enum(EMPLOYEE_RANGES, { error: "Please select an employee range." }),
  message: z.string().trim().max(2000, "Please keep your message under 2,000 characters.").optional().default(""),
  consent: z.literal("on", { error: "Please confirm you agree to the privacy policy." }),
});

export type ProposalInput = z.infer<typeof proposalSchema>;

export const attributionSchema = z.object({
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  gclid: z.string().max(300).optional(),
  referrer: z.string().max(500).optional(),
  landingPage: z.string().max(500).optional(),
});

export type Attribution = z.infer<typeof attributionSchema>;

export type FieldErrors = Partial<Record<keyof ProposalInput, string>>;

export type ProposalState =
  | { status: "idle" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string; fieldErrors?: FieldErrors; values?: Partial<Record<string, string>> };

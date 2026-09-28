import { interests } from "./site";

export type ProposalInput = {
  name: string;
  organisation: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof ProposalInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared by the client form and the API route. The server result is the one that counts. */
export function validateProposal(input: ProposalInput): FieldErrors {
  const errors: FieldErrors = {};
  if (input.name.trim().length < 2) errors.name = "Enter your name.";
  if (input.name.length > 100) errors.name = "Keep your name under 100 characters.";
  if (input.organisation.trim().length < 2) errors.organisation = "Enter your school or organisation.";
  if (input.organisation.length > 150) errors.organisation = "Keep this under 150 characters.";

  const phone = input.phone.trim();
  const email = input.email.trim();
  if (!phone && !email) {
    errors.phone = "Enter a phone or WhatsApp number, or an email address, so we can reply.";
  }
  if (phone && !/^[+()\d\s-]{6,30}$/.test(phone)) errors.phone = "Enter a valid phone number.";
  if (email && (!emailPattern.test(email) || email.length > 200)) errors.email = "Enter a valid email address.";

  if (!interests.some((i) => i.value === input.interest)) errors.interest = "Choose what you are asking about.";
  if (input.message.length > 2000) errors.message = "Keep your message under 2000 characters.";
  return errors;
}

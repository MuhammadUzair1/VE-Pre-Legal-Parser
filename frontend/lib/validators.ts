import { NDAFormData } from "@/types/nda";

type ValidationErrors = Partial<Record<keyof NDAFormData, string>>;

const REQUIRED_FIELDS: (keyof NDAFormData)[] = [
  "party1Name",
  "party1Address",
  "party2Name",
  "party2Address",
  "effectiveDate",
  "confidentialityTerm",
  "governingLaw",
  "purpose",
];

export function validateNDAForm(data: NDAFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || !data[field].trim()) {
      errors[field] = "This field is required.";
    }
  }

  if (data.effectiveDate && Number.isNaN(Date.parse(data.effectiveDate))) {
    errors.effectiveDate = "Enter a valid date.";
  }

  if (
    data.party1Name &&
    data.party2Name &&
    data.party1Name.trim().toLowerCase() === data.party2Name.trim().toLowerCase()
  ) {
    errors.party2Name = "Party 2 must be different from Party 1.";
  }

  return errors;
}

export function isFormValid(errors: ValidationErrors): boolean {
  return Object.keys(errors).length === 0;
}

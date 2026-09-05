export interface NDAFormData {
  party1Name: string;
  party1Address: string;
  party2Name: string;
  party2Address: string;
  effectiveDate: string;
  confidentialityTerm: string;
  governingLaw: string;
  purpose: string;
}

export const NDA_FIELD_LABELS: Record<keyof NDAFormData, string> = {
  party1Name: "Party 1 Name",
  party1Address: "Party 1 Address",
  party2Name: "Party 2 Name",
  party2Address: "Party 2 Address",
  effectiveDate: "Effective Date",
  confidentialityTerm: "Confidentiality Term",
  governingLaw: "Governing Law",
  purpose: "Purpose of Disclosure",
};

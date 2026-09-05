"use client";

import { useForm } from "react-hook-form";
import { NDAFormData, NDA_FIELD_LABELS } from "@/types/nda";
import { validateNDAForm, isFormValid } from "@/lib/validators";

interface NDAFormProps {
  onGenerate: (data: NDAFormData) => void;
}

const DEFAULT_VALUES: NDAFormData = {
  party1Name: "",
  party1Address: "",
  party2Name: "",
  party2Address: "",
  effectiveDate: "",
  confidentialityTerm: "1 year",
  governingLaw: "",
  purpose: "Evaluating a potential business relationship",
};

const TEXTAREA_FIELDS: (keyof NDAFormData)[] = [
  "party1Address",
  "party2Address",
  "purpose",
];

export default function NDAForm({ onGenerate }: NDAFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<NDAFormData>({ defaultValues: DEFAULT_VALUES });

  const onSubmit = (data: NDAFormData) => {
    const validationErrors = validateNDAForm(data);
    clearErrors();

    if (!isFormValid(validationErrors)) {
      for (const [field, message] of Object.entries(validationErrors)) {
        setError(field as keyof NDAFormData, { type: "manual", message });
      }
      return;
    }

    onGenerate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-gray-900">Party 1</legend>
        <FormInput
          id="party1Name"
          label={NDA_FIELD_LABELS.party1Name}
          register={register("party1Name")}
          error={errors.party1Name?.message}
        />
        <FormInput
          id="party1Address"
          label={NDA_FIELD_LABELS.party1Address}
          register={register("party1Address")}
          error={errors.party1Address?.message}
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-gray-900">Party 2</legend>
        <FormInput
          id="party2Name"
          label={NDA_FIELD_LABELS.party2Name}
          register={register("party2Name")}
          error={errors.party2Name?.message}
        />
        <FormInput
          id="party2Address"
          label={NDA_FIELD_LABELS.party2Address}
          register={register("party2Address")}
          error={errors.party2Address?.message}
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-gray-900">Agreement Terms</legend>
        <FormInput
          id="effectiveDate"
          label={NDA_FIELD_LABELS.effectiveDate}
          type="date"
          register={register("effectiveDate")}
          error={errors.effectiveDate?.message}
        />
        <FormInput
          id="confidentialityTerm"
          label={NDA_FIELD_LABELS.confidentialityTerm}
          register={register("confidentialityTerm")}
          error={errors.confidentialityTerm?.message}
          placeholder="e.g. 1 year"
        />
        <FormInput
          id="governingLaw"
          label={NDA_FIELD_LABELS.governingLaw}
          register={register("governingLaw")}
          error={errors.governingLaw?.message}
          placeholder="e.g. State of Delaware"
        />
        <FormInput
          id="purpose"
          label={NDA_FIELD_LABELS.purpose}
          register={register("purpose")}
          error={errors.purpose?.message}
        />
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Generate NDA
      </button>
    </form>
  );
}

interface FormInputProps {
  id: keyof NDAFormData;
  label: string;
  register: ReturnType<ReturnType<typeof useForm<NDAFormData>>["register"]>;
  error?: string;
  type?: string;
  placeholder?: string;
}

function FormInput({ id, label, register, error, type = "text", placeholder }: FormInputProps) {
  const isTextarea = TEXTAREA_FIELDS.includes(id);
  const sharedClassName = `w-full rounded-md border px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    error ? "border-red-500" : "border-gray-300"
  }`;

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {isTextarea ? (
        <textarea id={id} rows={2} placeholder={placeholder} className={sharedClassName} {...register} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} className={sharedClassName} {...register} />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

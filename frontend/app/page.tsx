"use client";

import { useRef, useState } from "react";
import NDAForm from "@/components/NDAForm";
import NDAPreview from "@/components/NDAPreview";
import DocumentDownload from "@/components/DocumentDownload";
import { NDAFormData } from "@/types/nda";
import { generateNDAHtml } from "@/lib/documentGenerator";

export default function Home() {
  const [documentHtml, setDocumentHtml] = useState<string | null>(null);
  const [parties, setParties] = useState<{ party1: string; party2: string } | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (data: NDAFormData) => {
    setDocumentHtml(generateNDAHtml(data));
    setParties({ party1: data.party1Name, party2: data.party2Name });
  };

  const filename = parties
    ? `Mutual-NDA-${slugify(parties.party1)}-${slugify(parties.party2)}.pdf`
    : "Mutual-NDA.pdf";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Mutual NDA Generator</h1>
          <p className="mt-1 text-sm text-gray-600">
            Fill in the details below to generate a Mutual Non-Disclosure Agreement based on
            the Common Paper template.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">1. Enter Details</h2>
            <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
              <NDAForm onGenerate={handleGenerate} />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">2. Preview &amp; Download</h2>
            {documentHtml ? (
              <div className="space-y-4">
                <NDAPreview ref={previewRef} html={documentHtml} />
                <DocumentDownload targetRef={previewRef} filename={filename} />
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-md border border-dashed border-gray-300 bg-white text-sm text-gray-500">
                Your generated NDA will appear here.
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

function slugify(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "party";
}

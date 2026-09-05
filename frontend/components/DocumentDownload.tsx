"use client";

import { useState } from "react";
import { downloadElementAsPdf } from "@/lib/pdfGenerator";

interface DocumentDownloadProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  filename: string;
}

export default function DocumentDownload({ targetRef, filename }: DocumentDownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!targetRef.current) {
      setError("Nothing to download yet — generate the NDA first.");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      await downloadElementAsPdf(targetRef.current, filename);
    } catch {
      setError("Something went wrong while creating the PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleDownload}
        disabled={isGenerating}
        className="w-full rounded-md bg-green-600 px-4 py-2.5 font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isGenerating ? "Preparing PDF..." : "Download as PDF"}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

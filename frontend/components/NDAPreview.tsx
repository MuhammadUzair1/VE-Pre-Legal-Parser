import { forwardRef } from "react";

interface NDAPreviewProps {
  html: string;
}

const NDAPreview = forwardRef<HTMLDivElement, NDAPreviewProps>(({ html }, ref) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <div
        ref={ref}
        className="nda-preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
});

NDAPreview.displayName = "NDAPreview";

export default NDAPreview;

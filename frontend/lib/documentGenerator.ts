import { NDAFormData } from "@/types/nda";

/**
 * Generates the Mutual NDA document as HTML, combining a "Cover Page" of
 * user-supplied details with the standard Common Paper Mutual NDA terms
 * (CC BY 4.0 — https://github.com/commonpaper/Mutual-NDA).
 */
export function generateNDAHtml(data: NDAFormData): string {
  return `
<div class="nda-document">
  <h1>Mutual Non-Disclosure Agreement</h1>

  <section class="cover-page">
    <h2>Cover Page</h2>
    <table class="cover-table">
      <tbody>
        <tr><td class="label">Party 1</td><td>${escapeHtml(data.party1Name)}</td></tr>
        <tr><td class="label">Party 1 Address</td><td>${escapeHtml(data.party1Address)}</td></tr>
        <tr><td class="label">Party 2</td><td>${escapeHtml(data.party2Name)}</td></tr>
        <tr><td class="label">Party 2 Address</td><td>${escapeHtml(data.party2Address)}</td></tr>
        <tr><td class="label">Effective Date</td><td>${escapeHtml(data.effectiveDate)}</td></tr>
        <tr><td class="label">Confidentiality Term</td><td>${escapeHtml(data.confidentialityTerm)}</td></tr>
        <tr><td class="label">Governing Law</td><td>${escapeHtml(data.governingLaw)}</td></tr>
        <tr><td class="label">Purpose</td><td>${escapeHtml(data.purpose)}</td></tr>
      </tbody>
    </table>
  </section>

  <section class="standard-terms">
    <h2>Common Paper Mutual Non-Disclosure Agreement (Version 1.0)</h2>

    <h3>1. Confidential Information</h3>
    <p>"Confidential Information" means any data that either party discloses to the other, identified as confidential or reasonably understood to be proprietary due to its nature and disclosure circumstances. This includes:</p>
    <ul>
      <li>Technical or business information</li>
      <li>Product designs or roadmaps</li>
      <li>Requirements and pricing</li>
      <li>Security and compliance documentation</li>
      <li>Technology, inventions and know-how</li>
      <li>The Agreement's existence</li>
      <li>Cover Page information</li>
    </ul>

    <h3>2. Use and Protection</h3>
    <p>The receiving party must:</p>
    <ol>
      <li>Use information solely for the stated Purpose on the Cover Page</li>
      <li>Restrict third-party disclosure (except to bound representatives)</li>
      <li>Protect Confidential Information using at least the same protections the Receiving Party uses for its own similar information</li>
    </ol>

    <h3>3. Exceptions</h3>
    <p>Protections don't apply to information that is:</p>
    <ul>
      <li>Publicly available (through no fault of the Recipient)</li>
      <li>Previously known without confidentiality obligation</li>
      <li>Lawfully obtained elsewhere without confidentiality obligation</li>
      <li>Independently developed without using Discloser's information</li>
    </ul>

    <h3>4. Required Disclosures</h3>
    <p>If law requires disclosure, the receiving party should provide reasonable advance notice to allow the disclosing party to seek confidential treatment.</p>

    <h3>5. Term and Survival</h3>
    <p>This Agreement is effective as of <strong>${escapeHtml(data.effectiveDate)}</strong>. Confidentiality obligations survive termination for <strong>${escapeHtml(data.confidentialityTerm)}</strong>, or until the information loses trade secret status, whichever applies per the Cover Page.</p>

    <h3>6. Return or Destruction</h3>
    <p>Upon termination, information must be returned or destroyed, though backup copies may be retained under standard policies.</p>

    <h3>7. Intellectual Property Retention</h3>
    <p>The Discloser retains all intellectual property rights. Disclosure does not grant any license or rights except to review and evaluate per the Agreement's stated Purpose.</p>

    <h3>8. Disclaimer</h3>
    <p>Information is provided "AS IS" without warranties of accuracy, completeness, or fitness for any purpose.</p>

    <h3>9. Governing Law</h3>
    <p>This Agreement is governed by the laws of <strong>${escapeHtml(data.governingLaw)}</strong> and any designated jurisdiction therein.</p>

    <h3>10. Equitable Remedies</h3>
    <p>Breaches may cause irreparable harm. The non-breaching party may seek injunctive relief or specific performance without posting bond.</p>

    <h3>11. General Provisions</h3>
    <p><strong>Entire Agreement:</strong> This Agreement supersedes all prior statements about its subject.</p>
    <p><strong>Modifications:</strong> Changes require written agreement signed by both parties.</p>
    <p><strong>Severability:</strong> If any term is invalid, remaining terms stay in effect.</p>
    <p><strong>Waiver:</strong> Failure to enforce doesn't constitute waiver of the right.</p>
    <p><strong>Assignment:</strong> Neither party may assign without prior written consent.</p>
    <p><strong>Notices:</strong> All notices must be in writing and sent to the address designated on the Cover Page.</p>
    <p><strong>Independent Contractors:</strong> Parties are independent contractors, not agents, partners, or joint venturers.</p>
    <p><strong>No Third-Party Beneficiary:</strong> The Agreement creates no third-party beneficiary rights.</p>
    <p><strong>Signature:</strong> May be signed in counterparts, including electronically.</p>

    <h3>12. Definitions</h3>
    <ul>
      <li><strong>Recipient:</strong> Party receiving Confidential Information</li>
      <li><strong>Discloser:</strong> Party providing Confidential Information</li>
      <li><strong>Purpose:</strong> ${escapeHtml(data.purpose)}</li>
      <li><strong>MNDA Term:</strong> ${escapeHtml(data.confidentialityTerm)} from the Effective Date</li>
      <li><strong>Governing Law &amp; Jurisdiction:</strong> ${escapeHtml(data.governingLaw)}</li>
    </ul>
  </section>

  <section class="signature-block">
    <div class="signature-column">
      <p class="signature-line">&nbsp;</p>
      <p><strong>${escapeHtml(data.party1Name)}</strong></p>
      <p>Date: _______________</p>
    </div>
    <div class="signature-column">
      <p class="signature-line">&nbsp;</p>
      <p><strong>${escapeHtml(data.party2Name)}</strong></p>
      <p>Date: _______________</p>
    </div>
  </section>

  <footer class="license-footer">
    <p><em>Based on the Common Paper Mutual Non-Disclosure Agreement (Version 1.0) — free to use under CC BY 4.0.</em></p>
    <p><em>Source: https://github.com/commonpaper/Mutual-NDA</em></p>
  </footer>
</div>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

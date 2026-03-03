import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Kochukov & Blume",
  description:
    "Terms governing use of Kochukov & Blume Incorporated's website and legal services.",
};

type TermsSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const sections: TermsSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "These Terms of Service (\"Terms\") govern your access to and use of the Kochukov & Blume Incorporated website, including all related pages, content, communications, and online enquiry functionality (collectively, the \"Website\").",
      "By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Website.",
    ],
  },
  {
    title: "2. About Us",
    paragraphs: [
      "Kochukov & Blume Incorporated is a South African law firm based in Sandton, Johannesburg.",
      "For purposes of these Terms, \"the Firm\", \"we\", \"us\", and \"our\" refer to Kochukov & Blume Incorporated.",
    ],
    bullets: [
      "Physical address: 1st Floor, 145 Second Street, Sandton, Johannesburg, 2196, South Africa",
      "Email: info@kblegal.co.za",
      "Telephone: 010 300 0247",
    ],
  },
  {
    title: "3. Informational Use Only",
    paragraphs: [
      "Content published on this Website is provided for general informational purposes only and does not constitute legal advice.",
      "You should not act or refrain from acting based solely on content on this Website. You should obtain legal advice tailored to your specific circumstances before making legal or commercial decisions.",
    ],
  },
  {
    title: "4. No Attorney-Client Relationship",
    paragraphs: [
      "Use of this Website, including sending messages through contact forms, email links, or consultation requests, does not by itself create an attorney-client relationship between you and the Firm.",
      "An attorney-client relationship is formed only once a formal engagement has been accepted by the Firm in writing and any required onboarding and conflict checks have been completed.",
    ],
  },
  {
    title: "5. Accuracy and Availability",
    paragraphs: [
      "We take reasonable steps to keep Website content accurate and up to date. However, we do not warrant that all content is complete, accurate, reliable, or current at all times.",
      "We may modify, suspend, or discontinue any part of the Website at any time without notice.",
    ],
  },
  {
    title: "6. Acceptable Use",
    paragraphs: [
      "You agree to use the Website lawfully and not to misuse the Website or its systems.",
    ],
    bullets: [
      "attempting unauthorized access to the Website, servers, accounts, or related infrastructure;",
      "introducing malware, malicious code, or harmful automated traffic;",
      "using the Website in any way that could impair, damage, or overburden Website functionality;",
      "submitting false, misleading, defamatory, or unlawful information through any Website form or communication channel;",
      "infringing any intellectual property, privacy, confidentiality, or other legal rights of the Firm or any third party.",
    ],
  },
  {
    title: "7. Confidentiality of Communications",
    paragraphs: [
      "Do not send highly sensitive, confidential, or time-critical information through unencrypted website forms unless and until you have been expressly instructed to do so by the Firm.",
      "While we take reasonable steps to protect communications, internet-based transmission is not completely secure, and any transmission is at your own risk.",
    ],
  },
  {
    title: "8. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, all content on the Website, including text, layout, graphics, logos, design elements, and underlying source material, is owned by or licensed to the Firm and is protected by applicable intellectual property laws.",
      "You may view and download content for personal, non-commercial use only. You may not reproduce, republish, distribute, modify, or commercially exploit Website content without the Firm's prior written consent.",
    ],
  },
  {
    title: "9. Third-Party Links and Services",
    paragraphs: [
      "The Website may include links to third-party websites, tools, maps, or platforms for convenience. We do not control and are not responsible for third-party content, security, availability, or privacy practices.",
      "Your use of any third-party service is at your own risk and subject to that third party's terms and policies.",
    ],
  },
  {
    title: "10. Fees and Engagement Terms",
    paragraphs: [
      "Any legal services provided by the Firm are governed by a separate written mandate, engagement letter, fee agreement, or other service-specific terms.",
      "In the event of any conflict between these Website Terms and a signed engagement agreement, the signed engagement agreement will prevail for the legal services covered by that agreement.",
    ],
  },
  {
    title: "11. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, the Firm shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from or connected to your use of, inability to use, or reliance on the Website or its content.",
      "This includes, without limitation, loss of data, business interruption, loss of profits, delay, cyber incidents, or damage resulting from errors, omissions, or service interruptions.",
      "Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law.",
    ],
  },
  {
    title: "12. Indemnity",
    paragraphs: [
      "You agree to indemnify and hold harmless the Firm and its directors, attorneys, employees, and agents from and against claims, losses, liabilities, costs, and expenses (including legal costs on an attorney-and-own-client scale where permitted) arising out of or in connection with your breach of these Terms or unlawful use of the Website.",
    ],
  },
  {
    title: "13. Privacy and Data Protection",
    paragraphs: [
      "Your use of the Website is also subject to our Privacy Policy, which explains how we collect, use, process, store, and protect Personal Information.",
      "By using the Website, you acknowledge that you have read the Privacy Policy and understand that your Personal Information may be processed in accordance with applicable law, including POPIA and, where relevant, the GDPR.",
    ],
  },
  {
    title: "14. Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms are governed by the laws of the Republic of South Africa.",
      "Subject to any mandatory dispute resolution requirements under applicable law, you consent to the jurisdiction of the competent courts of South Africa in respect of any dispute arising from or related to these Terms or your use of the Website.",
    ],
  },
  {
    title: "15. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Updated Terms will be published on this page with a revised \"Last updated\" date.",
      "Your continued use of the Website after changes are posted constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "16. Contact Us",
    paragraphs: [
      "If you have questions about these Terms, please contact us:",
    ],
    bullets: [
      "Kochukov & Blume Incorporated",
      "Email: info@kblegal.co.za",
      "Telephone: 010 300 0247",
      "Address: 1st Floor, 145 Second Street, Sandton, Johannesburg, 2196, South Africa",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Kochukov & Blume
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-600">Last updated: March 3, 2026</p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="mb-5 border-l-4 border-slate-900 pl-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                {section.title}
              </h2>

              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-slate-700 sm:text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-[15px]">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

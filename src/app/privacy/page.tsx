import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  title: "Privacy Policy | Kochukov & Blume",
  description: "Kochukov and Blume Incorporated privacy policy.",
};

const privacyPolicyText = readFileSync(
  path.join(process.cwd(), "src/content/privacy-policy.txt"),
  "utf8",
);

const sectionHeadings = new Set([
  "Definitions",
  "Purpose",
  "Application",
  "Legal Professional Privilege",
  "Collecting Personal Information",
  "Lawful Processing of Personal Information",
  "Special Personal Information and Personal Information of Children",
  "Purpose of Processing Personal Information",
  "Keeping Personal Information Accurate",
  "Storage and Processing of Personal Information by the Firm and Third Party Service Providers",
  "Personal Information for Direct Marketing Purposes",
  "Retention of Personal Information",
  "Failure to Provide Personal Information",
  "Safe Keeping of Personal Information",
  "Limitation of Security Assurances",
  "Breaches of Personal Information",
  "Provision of Personal Information to Third Party Service Providers",
  "Cross-border transfers of Personal Information",
  "Access to Personal Information",
  "Time Periods",
  "Costs of Access to Personal Information",
  "Use of Website Cookies",
  "Changes to this Policy",
  "Our Contact Details",
]);

type Section = {
  heading: string;
  lines: string[];
};

function parseSections(text: string): { title: string; sections: Section[] } {
  const rawLines = text.split("\n");
  const title = rawLines[0]?.trim() ?? "Privacy Policy";
  const lines = rawLines.slice(1);

  const sections: Section[] = [];
  let currentSection: Section = { heading: "Overview", lines: [] };

  for (const line of lines) {
    const trimmed = line.trim();

    if (sectionHeadings.has(trimmed)) {
      if (currentSection.lines.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { heading: trimmed, lines: [] };
      continue;
    }

    currentSection.lines.push(line);
  }

  if (currentSection.lines.length > 0) {
    sections.push(currentSection);
  }

  return { title, sections };
}

export default function PrivacyPage() {
  const { title, sections } = parseSections(privacyPolicyText);

  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Kochukov & Blume
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-600">{title}</p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="mb-5 border-l-4 border-slate-900 pl-4 text-xl font-semibold text-slate-900 sm:text-2xl">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.lines.map((line, index) => (
                  <p
                    key={`${section.heading}-${index}`}
                    className="whitespace-pre-wrap text-sm leading-7 text-slate-700 sm:text-[15px]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

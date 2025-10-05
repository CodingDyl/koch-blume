// src/app/seo.config.ts
import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Kochukov & Blume | South African Attorneys",
  description: "Kochukov & Blume is a South African law firm that provides legal advice and representation for individuals and businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kochukovblume.com/",
    siteName: "Kochukov & Blume | South African Attorneys",
  },
};

export default config;

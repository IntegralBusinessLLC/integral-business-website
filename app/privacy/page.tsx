import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Integral Business LLC",
  description: "How Integral Business LLC handles information submitted through its towing and vehicle offer forms.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Integral Business LLC",
    description: "Information about website forms, service providers and privacy contact details.",
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

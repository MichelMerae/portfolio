import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://michel-merae.com"),
  title: {
    default: "Michel Merae | AI automation for support and operations",
    template: "%s | Michel Merae",
  },
  description:
    "Hamburg-based AI engineer building n8n workflows, human-reviewed Zendesk drafts, personalized email and operations reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

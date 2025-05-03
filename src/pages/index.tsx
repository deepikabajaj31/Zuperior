import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/Card";
import Timeline from "@/components/Timeline";
import Packages from "@/components/Packages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Card
        buttonText="Our Process"
        headingTextBefore="Become a"
        highlightedText="Zuperior Pro"
        headingTextAfter="in sec..."
        footerText="🚀 Sign up. Fund. Trade."
      />
      <Timeline />
      <Card
        buttonText="Compare Plans"
        headingTextBefore="Compare your"
        highlightedText="Zuper"
        headingTextAfter="plan"
        footerText="Flexible Deposits for Every Trader"
      />
      <Packages />
      <Card
        buttonText="Prop Firm"
        headingTextBefore="Get Funded Up to"
        highlightedText="$10,000"
        headingTextAfter=""
        footerText="Prove your skills, get funded, and trade like a pro."
      />
    </div>
  );
}

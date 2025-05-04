import Card from "@/components/Card";
import Timeline from "@/components/Steps";
import Packages from "@/components/Packages";
import Video from "@/components/Video";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div style={{ paddingTop: "80px" }} className=" flex flex-col items-center justify-center">
      <Card
        buttonText="Our Process"
        headingTextBefore="Become a"
        highlightedText="Zuperior Pro"
        headingTextAfter="in sec..."
        footerText="🚀 Sign up. Fund. Trade."
      />
      <Timeline />
      <Button label="Open FREE Account"/>
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
      <Video />
    </div>
  );
}

import Banner from "@/components/Banner";
import Timeline from "@/components/Steps";
import Packages from "@/components/Packages";
import Video from "@/components/Video";
import Button from "@/components/Button";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div
      style={{ paddingTop: "80px" }}
      className=" flex flex-col items-center justify-center"
    >
      <Banner
        buttonText="Our Process"
        headingTextBefore="Become a"
        highlightedText="Zuperior Pro"
        headingTextAfter="in sec..."
        footerText="🚀 Sign up. Fund. Trade."
      />
      <Timeline />
      <Button label="Open FREE Account" bgColor="#6242A5" />
      <Banner
        buttonText="Compare Plans"
        headingTextBefore="Compare your"
        highlightedText="Zuper"
        headingTextAfter="plan"
        footerText="Flexible Deposits for Every Trader"
        textDirection="left"
      />
      <Packages />
      <Banner
        buttonText="Prop Firm"
        headingTextBefore="Get Funded Up to"
        highlightedText="$10,000"
        footerText="Prove your skills, get funded, and trade like a pro."
      />
      <Video />
      <Banner
        buttonText="Payouts"
        headingTextBefore="We’ve Paid Out Over <br/> $1M to Traders"
        footerText="Your Trust is Our Fuel—Power Up with Zuperior"
        blurAnimation={true}
      />
      <Counter />
      <Footer/>
      
    </div>
  );
}

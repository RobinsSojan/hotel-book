import Image from "next/image";
import Homepage from "./_ui/homepage";
import Instagram from "./_ui/instagram";
import Overview from "./_ui/overview";
import Testimonial from "./_ui/testimonial";
import Experience from "./_ui/experience";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Instagram />
      <Overview />
      <Testimonial />
      <Experience />
    </div>
  );
}

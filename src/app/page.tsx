import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection/EventSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar></Navbar>
      <main className="">
        <Banner></Banner>
        <EventSection eventStatus={"Upcoming"}></EventSection>
        <EventSection eventStatus={"Previous"}></EventSection>
      </main>
      <Footer></Footer>
    </div>
  );
}

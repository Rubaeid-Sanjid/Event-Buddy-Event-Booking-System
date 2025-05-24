import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import UpcomingEventSection from "@/components/UpcomingEventSection/UpcomingEventSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar></Navbar>
      <main className="">
        <Banner></Banner>
        <UpcomingEventSection></UpcomingEventSection>
        

        
      </main>
      <Footer></Footer>
    </div>
  );
}

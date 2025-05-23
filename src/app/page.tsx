import Banner from "@/components/Banner/Banner";
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}

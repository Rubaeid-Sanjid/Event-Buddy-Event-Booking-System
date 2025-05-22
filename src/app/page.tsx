import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar></Navbar>
      <main className="">
        <Banner></Banner>
        

        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}

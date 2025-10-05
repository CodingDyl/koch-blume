import Hero from "@/components/layout/Hero";
import AreaOfExpertise from "@/components/sections/AreaOfExpertise";
import ProvenTrackRecord from "@/components/sections/ProvenTrackRecord";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <AreaOfExpertise />
      <ProvenTrackRecord />
      <Testimonials />
    </main>
  );
}

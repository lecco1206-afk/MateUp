import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyMateUp from "@/components/WhyMateUp";
import TeamRecruitmentForm from "@/components/TeamRecruitmentForm";
import AdvertiserSection from "@/components/AdvertiserSection";
import Footer from "@/components/Footer";

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onScrollToForm={scrollToForm} />
      <WhyMateUp />
      <div ref={formRef}>
        <TeamRecruitmentForm />
      </div>
      <AdvertiserSection />
      <Footer />
    </div>
  );
}

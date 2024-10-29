import "../App.css";
import { NavBar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ArticleSection } from "@/components/Article";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}


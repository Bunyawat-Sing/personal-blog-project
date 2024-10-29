import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ViewPost } from "@/components/View";

export function ViewPage() {
    return (
    <div className="flex flex-col">
      <NavBar />
      <ViewPost />
      <Footer />
    </div>
    )
}
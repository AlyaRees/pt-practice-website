import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Services } from "../../components/Services"
import { About } from "../../components/About";
import { Testimonials } from "../../components/Testimonials";
import { Packages } from "../../components/Packages";
import { ContactForm } from "../../components/ContactForm";
import { Footer } from "../../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center bg-black">
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Packages />
        <ContactForm />
        <Footer />
    </div>
  );
}

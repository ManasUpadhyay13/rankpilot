import Hero from "../components/home/Hero";
import CheckMarquee from "../components/home/CheckMarquee";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import DarkCta from "../components/home/DarkCta";
import Testimonials from "../components/home/Testimonials";
import Pricing from "../components/home/Pricing";
import Footer from "../components/home/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <CheckMarquee />
            <Features />
            <HowItWorks />
            <DarkCta />
            <Testimonials />
            <Pricing />
            <Footer />
        </div>
    );
}

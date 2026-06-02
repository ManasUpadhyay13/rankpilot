import { ArrowRightIcon, SearchX, GaugeCircle, ImageOff, Link2Off } from "lucide-react";
import { Link } from "react-router-dom";

const problems = [
    { icon: <SearchX size={18} />, text: "Missing or duplicate meta tags silently hurting your rankings" },
    { icon: <GaugeCircle size={18} />, text: "Slow page loads costing you visitors before they even arrive" },
    { icon: <ImageOff size={18} />, text: "Images without alt text invisible to search engines" },
    { icon: <Link2Off size={18} />, text: "Broken heading structure confusing crawlers" },
];

export default function DarkCta() {
    return (
        <section className="px-4 py-24">
            <div className="max-w-6xl mx-auto rounded-3xl bg-[#0e2a47] relative overflow-hidden px-6 sm:px-12 py-16 sm:py-20">
                {/* subtle pattern */}
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                            The SEO problems you <span className="text-[#5aa9ff]">don't know</span> you have
                        </h2>
                        <p className="text-white/70 leading-relaxed mb-8">Most websites lose traffic to issues no one ever notices. Rank Pilot renders your pages in a real browser, finds what's broken, and tells you exactly how to fix it.</p>
                        <Link to="/register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold transition-colors">
                            Run a Free Checkup
                            <ArrowRightIcon size={15} />
                        </Link>
                    </div>

                    <ul className="space-y-4">
                        {problems.map((p) => (
                            <li key={p.text} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5">
                                <span className="text-[#5aa9ff] mt-0.5 shrink-0">{p.icon}</span>
                                <span className="text-sm text-white/85 leading-relaxed">{p.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

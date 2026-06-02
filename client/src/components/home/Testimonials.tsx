import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Founder, Bloom & Co.",
        quote: "Rank Pilot found 12 critical issues our agency missed for months. Our organic traffic is up 40% since we fixed them.",
    },
    {
        name: "David Chen",
        role: "Marketing Lead, Nuvio",
        quote: "The daily rank tracking is set-and-forget. I open the dashboard every morning and instantly know where we stand on Google.",
    },
    {
        name: "Priya Sharma",
        role: "Indie Maker",
        quote: "I'm not an SEO expert — the AI recommendations are specific enough that I can just follow them step by step. Brilliant.",
    },
];

export default function Testimonials() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-24">
            <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-foreground">
                    Loved by <span className="gradient-text">Site Owners</span>
                </h2>
                <p className="text-muted-foreground">Real results from people who took their SEO seriously.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                    <div key={t.name} className="bg-card border border-border rounded-2xl p-7 shadow-sm flex flex-col">
                        <div className="flex items-center gap-1 mb-4 text-warning">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                            ))}
                        </div>
                        <p className="text-sm text-foreground/90 leading-relaxed flex-1 mb-6">“{t.quote}”</p>
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-accent-soft text-primary flex items-center justify-center text-sm font-bold">{t.name.charAt(0)}</div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

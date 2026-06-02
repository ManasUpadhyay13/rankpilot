import { CheckCircle2 } from "lucide-react";

const checks = ["Meta Tags", "Page Speed", "Alt Text", "Heading Structure", "Canonical URLs", "Open Graph", "Keyword Density", "Mobile Viewport", "Internal Links", "Twitter Cards", "Word Count", "Charset"];

export default function CheckMarquee() {
    const items = [...checks, ...checks]; // duplicated for seamless loop

    return (
        <div className="relative border-y border-border bg-card/60 py-4 overflow-hidden">
            {/* edge fade */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee flex w-max items-center gap-10">
                {items.map((c, i) => (
                    <span key={i} className="inline-flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                        <CheckCircle2 size={14} className="text-success" />
                        {c}
                    </span>
                ))}
            </div>
        </div>
    );
}

import { SearchIcon, ArrowRightIcon, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const heroStats = [
    { value: "30+", label: "SEO signals analyzed" },
    { value: "Top 50", label: "Google results scanned" },
    { value: "24/7", label: "Automated rank tracking" },
    { value: "AI", label: "Powered recommendations" },
];

const categoryBars = [
    { label: "SEO", value: 92, color: "var(--success)" },
    { label: "Performance", value: 78, color: "var(--primary)" },
    { label: "Accessibility", value: 85, color: "var(--success)" },
    { label: "Best Practices", value: 64, color: "var(--warning)" },
];

export default function Hero() {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    const handleQuickAnalyze = (e: React.SubmitEvent) => {
        e.preventDefault();
        navigate(`/analyze?url=${encodeURIComponent(url)}`);
    };

    return (
        <section className="relative overflow-hidden">
            {/* Atmosphere layers */}
            <div className="absolute inset-0 hero-glow pointer-events-none -z-10"></div>
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10"></div>

            <div className="max-w-3xl mx-auto px-4 pt-36 sm:pt-40 text-center">
                <h1 className="reveal reveal-d1 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-foreground">
                    Analyze & Boost Your <span className="gradient-text">SEO Rankings</span>
                </h1>
                <p className="reveal reveal-d2 text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">Get instant AI-powered SEO audits for any website. Uncover hidden issues, optimize performance, and outrank your competition.</p>

                {/* URL Input Bar */}
                <form onSubmit={handleQuickAnalyze} className="reveal reveal-d3 max-w-2xl mx-auto relative">
                    <div className="bg-card border border-border focus-within:border-primary/50 rounded-full px-2 py-1.5 flex items-center gap-2 animate-pulse-glow shadow-sm transition-colors">
                        <div className="flex items-center gap-2 flex-1 px-3">
                            <SearchIcon size={16} className="text-muted-foreground shrink-0" />
                            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter website URL (e.g., example.com)" className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm py-2" id="hero-url-input" />
                        </div>

                        <button type="submit" className="bg-primary px-6 py-2.5 rounded-full text-primary-foreground text-sm font-semibold hover:bg-primary-dark transition-colors shrink-0 flex items-center gap-2" id="hero-analyze-btn">
                            Checkup
                            <ArrowRightIcon size={14} />
                        </button>
                    </div>
                </form>

                <p className="reveal reveal-d4 text-muted-foreground text-sm mt-6">Free — No credit card required • 5 analyses per day</p>

                {/* Trust stats */}
                <div className="reveal reveal-d5 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-2xl mx-auto">
                    {heroStats.map((s) => (
                        <div key={s.label}>
                            <p className="text-2xl sm:text-3xl font-extrabold text-primary">{s.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating mock audit report */}
            <div className="reveal reveal-d6 max-w-3xl mx-auto px-4 mt-16 pb-24">
                <div className="animate-float bg-card border border-border rounded-2xl shadow-[0_24px_80px_-24px_rgba(29,125,240,0.35)] overflow-hidden">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-muted/40">
                        <div className="flex items-center gap-1.5">
                            <span className="size-2.5 rounded-full bg-danger/70"></span>
                            <span className="size-2.5 rounded-full bg-warning/70"></span>
                            <span className="size-2.5 rounded-full bg-success/70"></span>
                        </div>
                        <div className="flex-1 max-w-xs mx-auto bg-background border border-border rounded-full px-4 py-1 text-[11px] text-muted-foreground truncate">yourwebsite.com — SEO Report</div>
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-success bg-success/10 border border-success/20 rounded-full px-2.5 py-0.5">Live</span>
                    </div>

                    {/* Report body */}
                    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 p-6 sm:p-8 text-left items-center">
                        {/* Score gauge */}
                        <div className="flex flex-col items-center gap-2 mx-auto">
                            <div className="relative size-32 rounded-full" style={{ background: "conic-gradient(var(--success) 0% 87%, var(--muted) 87% 100%)" }}>
                                <div className="absolute inset-2.5 rounded-full bg-card flex flex-col items-center justify-center">
                                    <span className="text-4xl font-extrabold text-success leading-none">87</span>
                                    <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wide">Overall</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-success font-semibold">
                                <TrendingUp size={13} />
                                +12 this week
                            </div>
                        </div>

                        {/* Categories + issues */}
                        <div className="min-w-0">
                            <div className="space-y-3 mb-6">
                                {categoryBars.map((c) => (
                                    <div key={c.label} className="flex items-center gap-3">
                                        <span className="text-xs text-muted-foreground w-24 shrink-0">{c.label}</span>
                                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                                            <div className="animate-bar h-full rounded-full" style={{ width: `${c.value}%`, background: c.color }}></div>
                                        </div>
                                        <span className="text-xs font-bold w-7 text-right" style={{ color: c.color }}>
                                            {c.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 text-[11px] severity-critical rounded-full px-3 py-1">
                                    <AlertTriangle size={11} />
                                    Missing meta description
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] severity-warning rounded-full px-3 py-1">
                                    <AlertTriangle size={11} />3 images without alt text
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] text-success bg-success/8 border border-success/20 rounded-full px-3 py-1">
                                    <CheckCircle2 size={11} />
                                    Canonical OK
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

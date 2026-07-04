import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const works = [
  {
    id: 1,
    category: "Brand Strategy",
    context: "WPP Next Gen Program",
    date: "Nov 2025",
    title: "Rebuilding Nestlé for a Gen Z audience",
    summary: "A brand strategy deck unifying Nestlé's sister brands under one identity for a younger audience — presented directly to Nestlé's Brand Manager.",
    tags: ["brand architecture", "gen z"],
    challenge: "Nestlé's sub-brands felt disconnected to Gen Z shoppers, who related to individual products but not the parent brand.",
    strategy: "Proposed a unifying identity system and community-first content approach, plus a physical 'experience store' concept to make the house of brands tangible.",
    result: "Presented to Nestlé's Brand Manager, who commended the work directly.",
    swatches: ["#C8102E", "#4A2E1F", "#F4EDE1"],
  },
  {
    id: 2,
    category: "Brand Strategy",
    context: "New Product Development, USYD",
    date: "Mar–Jun 2026",
    title: "NOVO Shoes: the case for detachable heels",
    summary: "A go-to-market strategy for a new product line, built around 2026's 'Fiercely Unfiltered' consumer trend and Australian women who want authenticity.",
    tags: ["product strategy", "trend research"],
    challenge: "Design a viable new product line for NOVO Shoes that felt distinct in a crowded, price-sensitive footwear market.",
    strategy: "Positioned 'detachable heels' around affordability and everyday authenticity, tying the launch narrative to the 'Fiercely Unfiltered' trend report.",
    result: "Recognised by the unit coordinator and tutor as a standout project among all groups.",
    swatches: ["#1A1A1A", "#EBC9C0", "#FFFFFF"],
  },
  {
    id: 3,
    category: "Data & Insight",
    context: "Data Visualisation, USYD",
    date: "Aug–Oct 2025",
    title: "A dashboard for the 'should I move to Australia?' decision",
    summary: "A live, GitHub-hosted dashboard, coded in Python, turning Australian Government employment data into a clear tool for international students.",
    tags: ["python", "live data"],
    challenge: "International students had no single, honest source for post-study employability outlook by industry.",
    strategy: "Built and coded a dashboard pulling live data from Australian Government sources, with industry outlooks a prospective student could actually act on.",
    result: "A live, publicly hosted dashboard that transforms complex government labour market data into an accessible decision-making tool for prospective international students.",
    swatches: ["#00274D", "#FFD200", "#FFFFFF"],
  },
  {
    id: 4,
    category: "Data & Insight",
    context: "Management Consulting, USYD",
    date: "Apr–May 2026",
    title: "Fifth Frame: when a merger meets culture clash",
    summary: "A solutions roadmap for a real M&A case study centred on post-merger culture conflict — shortlisted to present directly to the client.",
    tags: ["consulting", "stakeholder strategy"],
    challenge: "Two merging organisations with incompatible cultures, risking talent loss and stalled integration.",
    strategy: "Developed a phased plan of action addressing culture alignment alongside commercial priorities.",
    result: "One of the projects shortlisted from the unit to present directly to the client.",
    swatches: ["#33414E", "#8C97A1", "#F2F2F2"],
  },
  {
    id: 5,
    category: "Social Impact",
    context: "Marketing for Social Change, USYD",
    date: "Mar 2026",
    title: "Guide Dogs Australia: 'Same Job, Different Timelines'",
    summary: "A social marketing campaign built with Guide Dogs Australia to raise awareness of Rule 26 and push for inclusive recruitment of people with low vision.",
    tags: ["social marketing", "accessibility"],
    challenge: "Employers were unaware of Rule 26 and defaulted away from hiring candidates with low vision.",
    strategy: "Framed the campaign around equal capability on different timelines — reframing accommodation as normal, not exceptional.",
    result: "The only project selected by the teaching team to be submitted to Guide Dogs Australia for client review.",
    swatches: ["#F58220", "#1A1A1A", "#FFFFFF"],
  },
  {
    id: 6,
    category: "Social Impact",
    context: "Marketing for Social Change, USYD — Individual",
    date: "Mar 2026",
    title: "'Words That Stick': naming BDD before it's diagnosed",
    summary: "A social marketing campaign addressing undiagnosed Body Dysmorphic Disorder among teenage girls in Australia, built to reach a group that suffers quietly.",
    tags: ["social marketing", "youth mental health"],
    challenge: "BDD in teen girls is widespread and under-named, so it rarely gets addressed before it's diagnosed.",
    strategy: "Positioned schools as the primary intervention point, combining peer-led messaging with community support to encourage early recognition of BDD and lower barriers to help-seeking.",
    result: "Independently led the project from insight generation to campaign strategy and creative execution.",
    swatches: ["#B7A6D9", "#DCEAF0", "#FFFFFF"],
  },
];

const categoryColors: Record<string, string> = {
  "Brand Strategy": "bg-pastel-blue",
  "Data & Insight": "bg-pastel-green",
  "Social Impact": "bg-pastel-lavender",
};

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const categories = ["All work", "Brand Strategy", "Data & Insight", "Social Impact"];
  const filteredWorks = filter === "All work" ? works : works.filter((w) => w.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="font-serif font-black text-xl tracking-tighter uppercase">Jivika Jain.</div>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#approach" className="hover:text-primary transition-colors">Approach</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#toolkit" className="hover:text-primary transition-colors">Toolkit</a>
          <a href="#recognition" className="hover:text-primary transition-colors">Journey</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button size="sm" className="rounded-none bg-foreground text-background hover:bg-primary font-bold tracking-widest uppercase hidden md:flex text-xs" asChild>
          <a href="mailto:jivikajain90@gmail.com">Say hello</a>
        </Button>
      </nav>

      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="px-6 md:px-12 lg:px-24 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pastel-blue rotate-[-8deg]">
                <path d="M50 5 L50 95 M5 50 L95 50 M25 25 L75 75 M25 75 L75 25" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              </svg>
              <p className="font-hand text-2xl text-foreground/60">hi, I'm</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-black leading-[0.95] tracking-tight mb-8">
              Jivika Jain
            </h1>

            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80 max-w-2xl border-l-4 border-pastel-green pl-6">
              A marketing strategist based in Sydney. I look for the patterns in the data that matter, and turn them into strategy that fits the brand DNA.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background text-sm h-12 px-8 uppercase tracking-widest font-bold" asChild>
                <a href="#work">Explore my work <ArrowRight className="ml-3 h-4 w-4" /></a>
              </Button>
              <div className="relative inline-block rotate-[2deg]">
                <span className="absolute -inset-1 bg-pastel-yellow -z-10"></span>
                <a href="mailto:jivikajain90@gmail.com" className="relative font-hand text-xl px-2 hover:text-foreground/70 transition-colors">
                  Or just get in touch →
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* APPROACH SECTION */}
        <section id="approach" className="py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight mb-4">
                  How I Work
                </h2>
                <p className="text-base text-muted max-w-xs">
                  Three principles behind every project.
                </p>
              </div>
              <div className="md:col-span-8 grid gap-0 border-t border-border/30">
                {[
                  { numeral: "i.", title: "Challenge assumptions with data.", desc: "I begin by finding the metrics that don't fit the narrative, using them to uncover the real drivers behind customer and business outcomes." },
                  { numeral: "ii.", title: "Connect insight to strategy.", desc: "I synthesise research, analytics, and market context into recommendations that strengthen brand positioning and support commercial objectives." },
                  { numeral: "iii.", title: "Communicate for decision-making.", desc: "I present findings through clear reports and dashboards that make complex analysis easy to understand, discuss, and act on." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="py-8 border-b border-border/30 group"
                  >
                    <div className="flex gap-6 items-baseline">
                      <div className="font-serif text-xl font-bold text-primary shrink-0 w-8">{item.numeral}</div>
                      <div>
                        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Strategy, made visible. A mix of client, academic and independent projects. Open a card for the full case — challenge, strategy, result.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-none border text-xs font-bold tracking-widest uppercase transition-all ${filter === c ? "bg-foreground border-foreground text-background" : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="font-hand text-lg text-foreground/50 mb-12">
            psst — the swatches on each card are pulled from that brand's real palette, not a template.
          </p>

          <div className="flex flex-col gap-0 border-t border-border">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, idx) => (
                <WorkCard key={work.id} work={work} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-16 p-10 bg-secondary border border-border">
            <p className="text-lg font-serif max-w-2xl">
              a few more — Kearney National Case Competition, an innovation commercialisation plan, and a Transport for NSW road-safety campaign — happy to walk through these on a call.
            </p>
            <a href="mailto:jivikajain90@gmail.com" className="inline-flex items-center gap-2 mt-6 text-sm font-bold uppercase tracking-widest border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors pb-1">
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* TOOLKIT SECTION */}
        <section id="toolkit" className="py-24 px-6 md:px-12 lg:px-24 bg-pastel-lavender text-foreground">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-3">Toolkit</h2>
            <p className="text-lg text-foreground/70 mb-16">The capabilities behind the strategy</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
              {[
                { name: "Data & Insight", desc: "Turning data into evidence.", tools: ["Python", "SQL", "Tableau", "Power BI", "SPSS", "Excel"] },
                { name: "Brand & Strategy", desc: "Turning evidence into strategic direction.", tools: ["Brand positioning", "Brand architecture", "Go-to-market strategy", "Social marketing", "Consumer insights & market research"] },
                { name: "Research & Measurement", desc: "Measuring what matters.", tools: ["Google Analytics 4 (GA4)", "Adobe Analytics", "SEMrush", "Google Trends", "Google Keyword Planner"] },
                { name: "Visualisation & Communication", desc: "Making complex ideas easy to understand.", tools: ["Figma", "Canva", "WordPress", "Miro"] },
                { name: "Channel Execution", desc: "Putting strategy into market.", tools: ["Meta Ads", "Google Ads", "LinkedIn Ads", "DV360", "AppsFlyer"] },
                { name: "AI-Assisted Workflow", desc: "Accelerating research, synthesis, and communication.", tools: ["ChatGPT", "Claude", "GitHub Copilot"] },
              ].map((category, i) => (
                <div key={i} className="flex flex-col">
                  <h3 className="text-lg font-serif font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-foreground/60 mb-5">{category.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.tools.map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1.5 bg-background/50 border border-foreground/15 font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECOGNITION SECTION */}
        <section id="recognition" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-3">Recognition</h2>
          <p className="text-lg text-muted-foreground mb-14">A few milestones that shaped my journey.</p>

          <div className="grid gap-0 border-t border-foreground/20">
            {[
              { year: "2025", title: "Landor Next Gen", desc: "Selected for a competitive 5-week global brand strategy programme, alongside participants from 70+ countries." },
              { year: "2025", title: "Kearney National Case Competition", desc: "Competed as a 4-person team on profitability and market differentiation for a meal-planning company." },
              { year: "2024", title: "GroupM APAC Rising Star (Nominated)", desc: "Recognised for outstanding performance across the Paid Digital Media India team." },
              { year: "2024", title: "President's Recognition, GroupM India", desc: "For data-driven optimisation strategies that lifted campaign performance 150% and ad revenue 80%." },
            ].map((item, i) => (
              <div key={i} className="py-7 border-b border-border flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10 hover:bg-secondary/40 transition-colors px-3 -mx-3">
                <div className="w-20 shrink-0">
                  <span className="font-hand text-2xl text-foreground/60">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-1.5">{item.title}</h3>
                  <p className="text-base text-muted-foreground max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-hand text-xl text-pastel-pink mb-6">Let's talk</p>

            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight leading-tight mb-4">
              Every good strategy starts with a question.
            </h2>
            <p className="text-lg text-background/70 mb-12">Let's explore yours.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-none bg-pastel-pink text-foreground hover:bg-background hover:text-foreground h-14 px-8 text-sm tracking-widest uppercase font-bold" asChild>
                <a href="mailto:jivikajain90@gmail.com">jivikajain90@gmail.com</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none border border-background/30 hover:bg-background hover:text-foreground h-14 px-8 text-sm tracking-widest uppercase font-bold" asChild>
                <a href="https://www.linkedin.com/in/jivika-jain-2001/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
            <p className="mt-10 text-base font-medium opacity-60">+61 410 123 983</p>
          </div>
        </section>
      </main>

      <footer className="py-10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 font-bold uppercase tracking-widest text-xs border-t border-border bg-background">
        <div>Jivika Jain — Sydney, Australia</div>
        <div className="text-center md:text-right text-muted-foreground">Student Visa (500), part-time · Graduate Visa (485) eligible 2027</div>
      </footer>
    </div>
  );
}

function WorkCard({ work, index }: { work: any; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const categoryColor = categoryColors[work.category] ?? "bg-pastel-pink";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border-b border-border py-10"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
        <div className="flex md:flex-col gap-2 md:w-40 shrink-0">
          <div className="flex gap-1.5">
            {work.swatches.map((c: string, i: number) => (
              <span key={i} className="w-4 h-4 rounded-full border border-foreground/10" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span className={`inline-block w-fit px-3 py-1 ${categoryColor} text-foreground text-[11px] font-bold uppercase tracking-widest`}>
            {work.category}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{work.context} — {work.date}</p>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-3">{work.title}</h3>

          <p className="text-base md:text-lg leading-relaxed text-foreground/80">
            {work.summary}{" "}
            {work.tags.map((tag: string) => (
              <span key={tag} className="text-sm text-foreground/50">#{tag} </span>
            ))}
            <button
              onClick={() => setExpanded(!expanded)}
              className="font-bold text-primary hover:underline whitespace-nowrap"
            >
              → {expanded ? "close case" : "open case"}
            </button>
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-3 pt-6 text-base leading-relaxed">
                  <p><span className="font-bold">Challenge:</span> {work.challenge}</p>
                  <p><span className="font-bold">Strategy:</span> {work.strategy}</p>
                  <p><span className="font-bold">Result:</span> {work.result}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

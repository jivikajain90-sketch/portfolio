import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const works = [
  {
    id: 1,
    category: "Brand Strategy",
    context: "WPP Next Gen Program",
    title: "Rebuilding Nestlé for a Gen Z audience",
    date: "Nov 2025",
    summary: "A brand strategy deck unifying Nestlé's sister brands under one identity for a younger audience — presented directly to Nestlé's Brand Manager.",
    tags: ["brand architecture", "gen z"],
    challenge: "Nestlé's sub-brands felt disconnected to Gen Z shoppers, who related to individual products but not the parent brand.",
    strategy: "Proposed a unifying identity system and community-first content approach, plus a physical 'experience store' concept to make the house of brands tangible.",
    result: "Presented to Nestlé's Brand Manager, who commended the work directly."
  },
  {
    id: 2,
    category: "Brand Strategy",
    context: "New Product Development, USYD",
    title: "NOVO Shoes: the case for detachable heels",
    date: "Mar–Jun 2026",
    summary: "A go-to-market strategy for a new product line, built around 2026's 'Fiercely Unfiltered' consumer trend and Australian women who want authenticity.",
    tags: ["product strategy", "trend research"],
    challenge: "Design a viable new product line for NOVO Shoes that felt distinct in a crowded, price-sensitive footwear market.",
    strategy: "Positioned 'detachable heels' around affordability and everyday authenticity, tying the launch narrative to the 'Fiercely Unfiltered' trend report.",
    result: "Recognised by the unit coordinator and tutor as a standout project among all groups."
  },
  {
    id: 3,
    category: "Data & Insight",
    context: "Data Visualisation, USYD",
    title: "A dashboard for the 'should I move to Australia?' decision",
    date: "Aug–Oct 2025",
    summary: "A live, GitHub-hosted dashboard, coded in Python, turning Australian Government employment data into a clear tool for international students.",
    tags: ["python", "live data"],
    challenge: "International students had no single, honest source for post-study employability outlook by industry.",
    strategy: "Built and coded a dashboard pulling live data from Australian Government sources, with industry outlooks a prospective student could actually act on.",
    result: "A live, publicly hosted dashboard that transforms complex government labour market data into an accessible decision-making tool for prospective international students."
  },
  {
    id: 4,
    category: "Data & Insight",
    context: "Management Consulting, USYD",
    title: "Fifth Frame: when a merger meets culture clash",
    date: "Apr–May 2026",
    summary: "A solutions roadmap for a real M&A case study centred on post-merger culture conflict — shortlisted to present directly to the client.",
    tags: ["consulting", "stakeholder strategy"],
    challenge: "Two merging organisations with incompatible cultures, risking talent loss and stalled integration.",
    strategy: "Developed a phased plan of action addressing culture alignment alongside commercial priorities.",
    result: "One of the projects shortlisted from the unit to present directly to the client."
  },
  {
    id: 5,
    category: "Social Impact",
    context: "Marketing for Social Change, USYD",
    title: "Guide Dogs Australia: 'Same Job, Different Timelines'",
    date: "Mar 2026",
    summary: "A social marketing campaign built with Guide Dogs Australia to raise awareness of Rule 26 and push for inclusive recruitment of people with low vision.",
    tags: ["social marketing", "accessibility"],
    challenge: "Employers were unaware of Rule 26 and defaulted away from hiring candidates with low vision.",
    strategy: "Framed the campaign around equal capability on different timelines — reframing accommodation as normal, not exceptional.",
    result: "The only project selected by the teaching team to be submitted to Guide Dogs Australia for client review."
  },
  {
    id: 6,
    category: "Social Impact",
    context: "Marketing for Social Change, USYD — Individual",
    title: "'Words That Stick': naming BDD before it's diagnosed",
    date: "Mar 2026",
    summary: "A social marketing campaign addressing undiagnosed Body Dysmorphic Disorder among teenage girls in Australia, built to reach a group that suffers quietly.",
    tags: ["social marketing", "youth mental health"],
    challenge: "BDD in teen girls is widespread and under-named, so it rarely gets addressed before it's diagnosed.",
    strategy: "Positioned schools as the primary intervention point, combining peer-led messaging with community support to encourage early recognition of BDD and lower barriers to help-seeking.",
    result: "Independently led the project from insight generation to campaign strategy and creative execution."
  }
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Brand Strategy", "Data & Insight", "Social Impact"];
  const filteredWorks = filter === "All" ? works : works.filter(w => w.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="font-serif font-black text-2xl tracking-tighter uppercase">Jivika Jain.</div>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest">
          <a href="#approach" className="hover:text-primary transition-colors">Approach</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#toolkit" className="hover:text-primary transition-colors">Toolkit</a>
          <a href="#recognition" className="hover:text-primary transition-colors">Journey</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button className="rounded-none bg-foreground text-background hover:bg-primary font-bold tracking-widest uppercase hidden md:flex" asChild>
          <a href="mailto:jivikajain90@gmail.com">Say hello</a>
        </Button>
      </nav>

      <main className="pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto w-full relative"
          >
            <div className="absolute -top-12 -left-6 md:-left-12 rotate-[-8deg] opacity-90 text-pastel-blue">
              <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 L50 95 M5 50 L95 50 M25 25 L75 75 M25 75 L75 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            
            <p className="font-sans font-semibold uppercase tracking-[0.2em] text-sm md:text-base text-foreground/60 mb-6 flex items-center gap-4">
              Marketing Strategist, based in Sydney
            </p>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black leading-[0.85] tracking-tighter mb-10">
              <span className="block">FINDING</span>
              <span className="block italic text-primary">PATTERNS.</span>
              <span className="block">BUILDING</span>
              <span className="block">STRATEGY.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <p className="text-xl md:text-3xl font-medium leading-tight border-l-4 border-pastel-green pl-6">
                I look for the patterns in the data that matter, and turn them into strategy that fits the brand DNA.
              </p>
              
              <div className="flex flex-col justify-end items-start gap-4">
                <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background text-lg h-16 px-10 uppercase tracking-widest font-bold" asChild>
                  <a href="#work">Explore my work <ArrowRight className="ml-3 h-5 w-5" /></a>
                </Button>
                <div className="relative inline-block mt-4 rotate-[3deg]">
                  <span className="absolute -inset-1 bg-pastel-yellow -z-10"></span>
                  <a href="mailto:jivikajain90@gmail.com" className="relative font-hand text-2xl px-2 hover:text-foreground/70 transition-colors">
                    Or just get in touch →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* APPROACH SECTION */}
        <section id="approach" className="py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-5">
                <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-none mb-6">
                  THREE<br/>PRINCIPLES.
                </h2>
                <p className="text-xl text-muted">
                  My approach to bridging the gap between raw data and actionable brand strategy.
                </p>
                
                <div className="mt-16 hidden md:block text-pastel-yellow opacity-90">
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-[spin_10s_linear_infinite]">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="md:col-span-7 grid gap-0 border-t border-border/30">
                {[
                  { title: "Challenge assumptions with data.", desc: "I begin by finding the metrics that don't fit the narrative, using them to uncover the real drivers behind customer and business outcomes." },
                  { title: "Connect insight to strategy.", desc: "I synthesise research, analytics, and market context into recommendations that strengthen brand positioning and support commercial objectives." },
                  { title: "Communicate for decision-making.", desc: "I present findings through clear reports and dashboards that make complex analysis easy to understand, discuss, and act on." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="py-12 border-b border-border/30 group relative"
                  >
                    <div className="flex gap-8">
                      <div className="font-serif text-5xl font-bold text-primary opacity-50">0{i+1}</div>
                      <div>
                        <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="relative">
              <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter uppercase relative z-10">
                Selected Work
              </h2>
              <div className="absolute -bottom-8 -right-12 text-pastel-green rotate-[-10deg] hidden md:block">
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 35 Q 25 5 50 15 T 95 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  <path d="M85 0 L97 5 L90 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-6 py-2 rounded-none border-2 text-sm font-bold tracking-widest uppercase transition-all ${filter === c ? 'bg-foreground border-foreground text-background' : 'border-border text-foreground hover:border-foreground'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, idx) => (
                <WorkCard key={work.id} work={work} index={idx} />
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-32 p-12 bg-secondary relative">
            <div className="absolute -top-6 -left-6 bg-pastel-yellow text-foreground font-hand text-2xl px-4 py-1 rotate-[-5deg] shadow-lg">
              Plus a few more!
            </div>
            <p className="text-xl md:text-2xl font-serif max-w-3xl">
              Kearney National Case Competition, an innovation commercialisation plan, and a Transport for NSW road-safety campaign.
            </p>
            <a href="mailto:jivikajain90@gmail.com" className="inline-flex items-center gap-2 mt-8 text-lg font-bold border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors pb-1">
              Happy to walk through these on a call <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* TOOLKIT SECTION */}
        <section id="toolkit" className="py-32 px-6 md:px-12 lg:px-24 bg-pastel-lavender text-foreground relative overflow-hidden">
          {/* Decorative giant text */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-10 overflow-hidden">
            <span className="text-[30vw] font-serif font-black whitespace-nowrap text-outline">TOOLKIT</span>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center justify-between mb-24">
              <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter">THE TOOLKIT</h2>
              <div className="w-24 h-24 bg-background rounded-full hidden md:flex items-center justify-center text-foreground font-hand text-2xl rotate-[15deg]">
                Skills!
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
              {[
                { name: "Data & Insight", desc: "Turning data into evidence.", tools: ["Python", "SQL", "Tableau", "Power BI", "SPSS", "Excel"] },
                { name: "Brand & Strategy", desc: "Turning evidence into strategic direction.", tools: ["Brand positioning", "Brand architecture", "Go-to-market strategy", "Social marketing", "Consumer insights & market research"] },
                { name: "Research & Measurement", desc: "Measuring what matters.", tools: ["Google Analytics 4", "Adobe Analytics", "SEMrush", "Google Trends", "Keyword Planner"] },
                { name: "Visualisation", desc: "Making complex ideas easy to understand.", tools: ["Figma", "Canva", "WordPress", "Miro"] },
                { name: "Channel Execution", desc: "Putting strategy into market.", tools: ["Meta Ads", "Google Ads", "LinkedIn Ads", "DV360", "AppsFlyer"] },
                { name: "AI-Assisted Workflow", desc: "Accelerating research and synthesis.", tools: ["ChatGPT", "Claude", "GitHub Copilot"] }
              ].map((category, i) => (
                <div key={i} className="flex flex-col relative group">
                  <div className="absolute -left-4 top-0 w-1 h-0 bg-foreground group-hover:h-full transition-all duration-300 ease-out" />
                  <h3 className="text-2xl font-serif font-bold mb-3">{category.name}</h3>
                  <p className="text-lg opacity-80 mb-6">{category.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.tools.map(tool => (
                      <span key={tool} className="text-sm px-4 py-2 bg-background/40 border border-foreground/20 font-medium">
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
        <section id="recognition" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-24">JOURNEY &<br/><span className="text-primary italic">MILESTONES</span></h2>
          
          <div className="grid gap-0 border-t-4 border-foreground">
            {[
              { year: "2025", title: "Landor Next Gen", desc: "Selected for a competitive 5-week global brand strategy programme, alongside participants from 70+ countries." },
              { year: "2025", title: "Kearney National Case Competition", desc: "Competed as a 4-person team on profitability and market differentiation for a meal-planning company." },
              { year: "2024", title: "GroupM APAC Rising Star", desc: "Nominated. Recognised for outstanding performance across the Paid Digital Media India team." },
              { year: "2024", title: "President's Recognition", desc: "GroupM India. For data-driven optimisation strategies that lifted campaign performance 150% and ad revenue 80%." }
            ].map((item, i) => (
              <div key={i} className="py-12 border-b border-border flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16 hover:bg-secondary/50 transition-colors px-4 -mx-4">
                <div className="w-32 shrink-0">
                  <span className="font-hand text-4xl text-foreground/70">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-serif font-bold mb-4">{item.title}</h3>
                  <p className="text-xl text-muted-foreground max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background">
          <div className="max-w-5xl mx-auto text-center relative">
            <div className="absolute top-0 right-10 rotate-[12deg] text-pastel-yellow">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor"/>
              </svg>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-[0.9] mb-16">
              EVERY GOOD STRATEGY<br/>STARTS WITH A <span className="italic text-pastel-pink">QUESTION.</span>
            </h2>
            <p className="font-hand text-4xl text-pastel-pink mb-12 -rotate-2">Let's explore yours.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="rounded-none bg-pastel-pink text-foreground hover:bg-background hover:text-foreground h-20 px-10 text-xl tracking-widest uppercase font-bold" asChild>
                <a href="mailto:jivikajain90@gmail.com">jivikajain90@gmail.com</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none border-2 border-background/30 hover:bg-background hover:text-foreground h-20 px-10 text-xl tracking-widest uppercase font-bold" asChild>
                <a href="https://www.linkedin.com/in/jivika-jain-2001/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="ml-3 h-6 w-6" /></a>
              </Button>
            </div>
            <p className="mt-16 text-xl font-medium opacity-60">+61 410 123 983</p>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6 font-bold uppercase tracking-widest text-xs border-t border-border bg-background">
        <div>Jivika Jain — Sydney, Australia</div>
        <div className="text-center md:text-right text-muted-foreground">Student Visa (500), part-time<br/>Graduate Visa (485) eligible 2027</div>
      </footer>
    </div>
  );
}

const categoryColors: Record<string, string> = {
  "Brand Strategy": "bg-pastel-blue",
  "Data & Insight": "bg-pastel-green",
  "Social Impact": "bg-pastel-lavender",
};

function WorkCard({ work, index }: { work: any, index: number }) {
  const [expanded, setExpanded] = useState(false);
  const rotation = index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]";
  const categoryColor = categoryColors[work.category] ?? "bg-pastel-pink";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-white border-2 border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_hsl(var(--pastel-pink))] transition-all duration-300 ${rotation}`}
    >
      <div className="p-8 md:p-12">
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <span className={`px-4 py-1 ${categoryColor} text-foreground text-xs font-bold uppercase tracking-widest border border-foreground/10`}>
              {work.category}
            </span>
            <span className="font-hand text-xl text-foreground/70">{work.date}</span>
          </div>
          
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">{work.context}</p>
            <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{work.title}</h3>
          </div>
        </div>
        
        <p className="text-xl leading-relaxed mb-8">{work.summary}</p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {work.tags.map((tag: string) => (
            <span key={tag} className="font-hand text-lg px-2 text-foreground/70 border-b border-dashed border-foreground/30">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="border-t-2 border-border pt-6">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="w-full flex justify-between items-center font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors"
          >
            <span>{expanded ? 'Hide details' : 'Challenge, Strategy & Result'}</span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-8 pt-8 pb-4">
                  <div>
                    <h4 className="font-serif text-2xl font-bold mb-2">The Challenge</h4>
                    <p className="text-lg leading-relaxed">{work.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold mb-2">The Strategy</h4>
                    <p className="text-lg leading-relaxed">{work.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold mb-2">The Result</h4>
                    <p className="text-lg leading-relaxed">{work.result}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

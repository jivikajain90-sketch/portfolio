import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ExternalLink } from "lucide-react";
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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="font-serif font-bold text-xl tracking-wider">JIVIKA JAIN</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#approach" className="hover:text-foreground transition-colors">Approach</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#toolkit" className="hover:text-foreground transition-colors">Toolkit</a>
          <a href="#recognition" className="hover:text-foreground transition-colors">Journey</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <Button variant="outline" className="rounded-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hidden md:flex" asChild>
          <a href="mailto:jivikajain90@gmail.com">Say hello</a>
        </Button>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-primary"></span> Marketing Strategist, based in Sydney
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold leading-[1.1] mb-8 text-gradient">
              Finding the <span className="italic font-light">patterns</span> in the data.<br/>
              Building <span className="text-gradient-primary">strategy</span> that fits the DNA.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
              A marketing strategist based in Sydney. I look for the patterns in the data that matter, and turn them into strategy that fits the brand DNA.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8" asChild>
                <a href="#work">Explore my work <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8" asChild>
                <a href="mailto:jivikajain90@gmail.com">Get in touch</a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* APPROACH SECTION */}
        <section id="approach" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Three principles behind every project.</h2>
                <p className="text-muted-foreground">My approach to bridging the gap between raw data and actionable brand strategy.</p>
              </div>
              <div className="md:col-span-8 grid gap-8">
                {[
                  { title: "Challenge assumptions with data.", desc: "I begin by finding the metrics that don't fit the narrative, using them to uncover the real drivers behind customer and business outcomes." },
                  { title: "Connect insight to strategy.", desc: "I synthesise research, analytics, and market context into recommendations that strengthen brand positioning and support commercial objectives." },
                  { title: "Communicate for decision-making.", desc: "I present findings through clear reports and dashboards that make complex analysis easy to understand, discuss, and act on." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="p-8 rounded-2xl glass-panel relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                    <h3 className="text-xl font-serif mb-3 flex items-center gap-4">
                      <span className="text-primary font-sans text-sm">0{i+1}</span>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-8">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Selected Work</h2>
              <p className="text-muted-foreground max-w-2xl text-lg">Case studies demonstrating data-driven strategy and clear commercial outcomes.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === c ? 'bg-foreground text-background' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, idx) => (
                <WorkCard key={work.id} work={work} index={idx} />
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-16 text-center text-muted-foreground italic">
            <p>Plus a few more — Kearney National Case Competition, an innovation commercialisation plan, and a Transport for NSW road-safety campaign.</p>
            <a href="mailto:jivikajain90@gmail.com" className="text-primary hover:underline not-italic font-medium mt-2 inline-block">Happy to walk through these on a call.</a>
          </div>
        </section>

        {/* TOOLKIT SECTION */}
        <section id="toolkit" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">The Toolkit</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Data & Insight", desc: "Turning data into evidence.", tools: ["Python", "SQL", "Tableau", "Power BI", "SPSS", "Excel"] },
                { name: "Brand & Strategy", desc: "Turning evidence into strategic direction.", tools: ["Brand positioning", "Brand architecture", "Go-to-market strategy", "Social marketing", "Consumer insights & market research"] },
                { name: "Research & Measurement", desc: "Measuring what matters.", tools: ["Google Analytics 4 (GA4)", "Adobe Analytics", "SEMrush", "Google Trends", "Google Keyword Planner"] },
                { name: "Visualisation & Communication", desc: "Making complex ideas easy to understand.", tools: ["Figma", "Canva", "WordPress", "Miro"] },
                { name: "Channel Execution", desc: "Putting strategy into market.", tools: ["Meta Ads", "Google Ads", "LinkedIn Ads", "DV360", "AppsFlyer"] },
                { name: "AI-Assisted Workflow", desc: "Accelerating research, synthesis, and communication.", tools: ["ChatGPT", "Claude", "GitHub Copilot"] }
              ].map((category, i) => (
                <div key={i} className="p-8 rounded-2xl glass-panel flex flex-col">
                  <h3 className="text-xl font-serif mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 h-10">{category.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.tools.map(tool => (
                      <span key={tool} className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground/80 border border-white/5">
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
        <section id="recognition" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Recognition & Milestones</h2>
          <div className="grid gap-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
              { year: "2025", title: "Landor Next Gen", desc: "Selected for a competitive 5-week global brand strategy programme, alongside participants from 70+ countries." },
              { year: "2025", title: "Kearney National Case Competition", desc: "Competed as a 4-person team on profitability and market differentiation for a meal-planning company." },
              { year: "2024", title: "GroupM APAC Rising Star (Nominated)", desc: "Recognised for outstanding performance across the Paid Digital Media India team." },
              { year: "2024", title: "President's Recognition, GroupM India", desc: "For data-driven optimisation strategies that lifted campaign performance 150% and ad revenue 80%." }
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-primary font-bold">{item.year}</span>
                    <h3 className="text-lg font-serif">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center p-12 md:p-20 rounded-3xl glass-panel relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 relative z-10">Every good strategy starts with a question. Let's explore yours.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base" asChild>
                <a href="mailto:jivikajain90@gmail.com">jivikajain90@gmail.com</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base" asChild>
                <a href="https://www.linkedin.com/in/jivika-jain-2001/" target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
            <p className="mt-8 text-muted-foreground relative z-10">+61 410 123 983</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 px-6 md:px-12 lg:px-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground relative z-10">
        <div>Jivika Jain — Sydney, Australia</div>
        <div>Student Visa (500), part-time · Graduate Visa (485) eligible 2027</div>
      </footer>
    </div>
  );
}

function WorkCard({ work, index }: { work: any, index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl glass-panel overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
    >
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium tracking-wider uppercase text-primary">{work.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-muted-foreground">{work.date}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif mb-2">{work.title}</h3>
            <p className="text-muted-foreground font-medium">{work.context}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
            {work.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-lg leading-relaxed mb-8">{work.summary}</p>
        
        <div className="border-t border-white/5 pt-6">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {expanded ? 'Hide details' : 'View Challenge, Strategy & Result'}
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-4 h-4" />
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
                <div className="grid md:grid-cols-3 gap-8 pt-8 pb-4">
                  <div>
                    <h4 className="font-serif text-lg mb-3 text-white">The Challenge</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{work.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-3 text-white">The Strategy</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{work.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-3 text-white">The Result</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{work.result}</p>
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

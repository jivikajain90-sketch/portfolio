import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Linkedin, Phone, Send, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const capabilities = [
  { label: "Strategy", color: "bg-pastel-blue", items: ["Brand Strategy", "Marketing Strategy", "Go-to-Market", "Innovation"] },
  { label: "Analytics", color: "bg-pastel-green", items: ["Marketing Analytics", "SQL", "Python", "Tableau", "AI-Assisted Analysis"] },
  { label: "Research", color: "bg-pastel-lavender", items: ["Consumer Insight", "Market Research", "Data Storytelling", "Performance Measurement"] },
];

const toolkitCategories = [
  { name: "Research & Insight", tools: ["Google Trends", "SEMrush", "Google Keyword Planner", "Adobe Analytics", "GA4"] },
  { name: "Analytics & Visualisation", tools: ["Python", "SQL", "Tableau", "Power BI", "SPSS", "Excel", "GitHub", "Natural Language Processing"] },
  { name: "Strategy", tools: ["Brand Positioning", "Consumer Research", "Go-to-Market", "Social Marketing", "Commercialisation"] },
  { name: "Strategic Frameworks", tools: ["SWOT", "PESTLE", "Porter's Five Forces", "3C Analysis", "McKinsey 7S", "BCG Matrix", "Value Chain Analysis"] },
  { name: "Problem-Solving & Communication", tools: ["MECE", "Issue Tree Mapping", "Hypothesis-driven Analysis", "Stakeholder Mapping", "Pyramid Principle", "Executive Storytelling"] },
  { name: "Marketing Platforms", tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "DV360", "AppsFlyer", "Affise"] },
  { name: "Design & Collaboration", tools: ["Figma", "Canva", "Miro", "WordPress"] },
  { name: "AI Workflow", tools: ["ChatGPT", "Claude", "Copilot", "Gemini", "Google NotebookLM", "Replit"] },
];

const works = [
  {
    id: 1,
    category: "Brand Strategy",
    title: "Nestlé — Rebuilding a House of Brands for Gen Z",
    summary: "A brand strategy developed through the WPP Next Gen Program.",
    challenge: "Nestlé's sub-brands resonated individually with Gen Z, but the parent brand lacked a clear identity and emotional connection.",
    strategy: "Created a unifying brand architecture, community-first content strategy and experience-store concept to strengthen the relationship between Nestlé and younger consumers.",
    result: "Presented directly to Nestlé's Brand Manager, who commended the strategic direction.",
    skills: ["Brand Strategy", "Brand Architecture", "Consumer Insight", "Experience Design"],
    swatches: ["#C8102E", "#4A2E1F", "#F4EDE1"],
  },
  {
    id: 2,
    category: "Brand Strategy",
    title: "NOVO Shoes — The Case for Detachable Heels",
    summary: "A go-to-market strategy built around emerging consumer trends.",
    challenge: "Design a commercially viable product for a crowded and price-sensitive footwear market.",
    strategy: "Positioned detachable heels around affordability, versatility and authenticity using the 2026 Fiercely Unfiltered consumer trend.",
    result: "Recognised by the unit coordinator and tutor as one of the strongest projects in the cohort.",
    skills: ["Go-to-Market", "Trend Research", "Product Strategy"],
    swatches: ["#1A1A1A", "#EBC9C0", "#FFFFFF"],
  },
  {
    id: 3,
    category: "Data & Insight",
    title: "Employability Dashboard",
    summary: "Helping international students make informed decisions.",
    challenge: "Employment data existed across multiple government sources but wasn't accessible or actionable.",
    strategy: "Developed a live Python dashboard combining labour market data into an intuitive decision-making tool.",
    result: "Delivered a publicly hosted dashboard translating complex datasets into practical career insights.",
    skills: ["Python", "Tableau", "Data Analytics", "Visualisation"],
    swatches: ["#00274D", "#FFD200", "#FFFFFF"],
  },
  {
    id: 4,
    category: "Consulting",
    title: "Vestagrid x South Ridge",
    summary: "A consulting roadmap for post-merger culture integration.",
    challenge: "Two organisations faced significant cultural conflict following a merger.",
    strategy: "Developed a phased integration roadmap balancing commercial objectives with organisational culture.",
    result: "Shortlisted to present the solution directly to the client, Fifth Frame.",
    skills: ["Consulting", "Stakeholder Strategy", "Change Management"],
    swatches: ["#33414E", "#8C97A1", "#F2F2F2"],
  },
  {
    id: 5,
    category: "Social Impact",
    title: "Guide Dogs Australia",
    summary: "Encouraging more inclusive recruitment.",
    challenge: "Many employers misunderstood Rule 26 and overlooked candidates with low vision.",
    strategy: "Designed a behaviour-change campaign reframing workplace accommodations as normal rather than exceptional.",
    result: "Selected by the teaching team for submission to Guide Dogs Australia.",
    skills: ["Social Marketing", "Behaviour Change", "Accessibility"],
    swatches: ["#F58220", "#1A1A1A", "#FFFFFF"],
  },
  {
    id: 6,
    category: "Social Impact",
    title: "Words That Stick",
    summary: "Raising awareness of Body Dysmorphic Disorder before diagnosis.",
    challenge: "Body Dysmorphic Disorder often goes unrecognised among teenage girls until symptoms become severe.",
    strategy: "Positioned schools and peer conversations as the first point of intervention through a preventative awareness campaign.",
    result: "Independently developed the strategy from research through creative execution.",
    skills: ["Health Communication", "Consumer Behaviour", "Social Marketing"],
    swatches: ["#B7A6D9", "#DCEAF0", "#FFFFFF"],
  },
];

const recognitions = [
  { title: "Landor Next Gen 2025", desc: "Selected for a global brand strategy programme with participants from 70+ countries.", color: "bg-pastel-blue" },
  { title: "Kearney National Case Competition 2025", desc: "Developed a commercial growth strategy for a national business case.", color: "bg-pastel-green" },
  { title: "McKinsey Forward Program 2026", desc: "Selected for a global management consulting programme focused on developing managerial skills.", color: "bg-pastel-yellow" },
  { title: "GroupM APAC Rising Star 2024 (Nominated)", desc: "Recognised for outstanding performance across the Paid Digital Media India team.", color: "bg-pastel-lavender" },
  { title: "President's Recognition — GroupM India", desc: "Awarded for data-driven optimisation strategies that significantly improved campaign performance.", color: "bg-pastel-pink" },
];

const categoryColors: Record<string, string> = {
  "Brand Strategy": "bg-pastel-blue",
  "Consulting": "bg-pastel-yellow",
  "Data & Insight": "bg-pastel-green",
  "Social Impact": "bg-pastel-lavender",
};

const navLinks = [
  { id: "work", label: "Projects" },
  { id: "toolkit", label: "Toolkit" },
  { id: "recognition", label: "Recognition" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const categories = ["All work", "Brand Strategy", "Consulting", "Data & Insight", "Social Impact"];
  const filteredWorks = filter === "All work" ? works : works.filter((w) => w.category === filter);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({ title: "Please fill in every field", description: "Name, email and message are all required." });
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${contactForm.name}`);
    const body = encodeURIComponent(`${contactForm.message}\n\n— ${contactForm.name} (${contactForm.email})`);
    window.location.href = `mailto:jivikajain90@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…", description: "Your message is ready to send." });
    setContactForm({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border py-5 px-6 md:px-12 flex justify-between items-center">
  <div className="font-serif font-black text-xl tracking-tighter uppercase">Jivika Jain</div>

  <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
    {navLinks.map((link) => (
      
        key={link.id}
        href={`#${link.id}`}
        className={`relative pb-1 transition-colors hover:text-primary ${
          activeSection === link.id ? "text-primary" : ""
        }`}
      >
        {link.label}
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary transition-all duration-300 ${
            activeSection === link.id ? "w-full" : "w-0"
          }`}
        />
      </a>
    ))}
  </div>

  <Button size="sm" className="rounded-none bg-foreground text-background hover:bg-primary font-bold tracking-widest uppercase hidden md:flex text-xs transition-transform hover:scale-105" asChild>
    <a href="mailto:jivikajain90@gmail.com">Say hello</a>
  </Button>

  <button
    onClick={() => setMobileMenuOpen((v) => !v)}
    className="md:hidden p-2 -mr-2"
    aria-label="Toggle menu"
  >
    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>

  {mobileMenuOpen && (
    <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border flex flex-col py-4 px-6">
      {navLinks.map((link) => (
        
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMobileMenuOpen(false)}
          className={`py-3 text-sm font-semibold uppercase tracking-widest border-b border-border/50 last:border-none ${
            activeSection === link.id ? "text-primary" : ""
          }`}
        >
          {link.label}
        </a>
      ))}
      
        href="mailto:jivikajain90@gmail.com"
        onClick={() => setMobileMenuOpen(false)}
        className="mt-4 text-center bg-foreground text-background py-3 text-xs font-bold uppercase tracking-widest"
      >
        Say hello
      </a>
    </div>
  )}
</nav>

      <main>
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-5xl mx-auto w-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pastel-blue rotate-[-8deg]">
                <path d="M50 5 L50 95 M5 50 L95 50 M25 25 L75 75 M25 75 L75 25" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              </svg>
              <p className="font-hand text-4xl text-foreground/60">hi, I'm</p>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-black leading-[0.95] tracking-tight mb-3">
              Jivika Jain
            </h1>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80 max-w-2xl border-l-4 border-pastel-green pl-6 mb-14">
              Turning data, consumer insight and AI-assisted analysis into strategies that create meaningful business impact.
            </p>

            <div className="mb-14">
              <p className="text-base font-bold uppercase tracking-widest text-foreground/60 mb-5">Capabilities</p>
              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl">
                {capabilities.map((cap) => (
                  <div key={cap.label} className="transition-transform hover:-translate-y-1">
                    <span className={`inline-block px-3 py-1 mb-3 ${cap.color} text-foreground text-[10px] font-bold uppercase tracking-widest transition-transform hover:scale-105`}>
                      {cap.label}
                    </span>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {cap.items.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="group rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background text-sm h-12 px-8 uppercase tracking-widest font-bold transition-transform hover:scale-105 active:scale-95" asChild>
                <a href="#work">Explore my work <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </Button>
              <div className="relative inline-block rotate-[2deg] transition-transform hover:rotate-0 hover:scale-105">
                <span className="absolute -inset-1 bg-pastel-yellow -z-10"></span>
                <a href="#contact" className="relative font-hand text-xl px-2 hover:text-foreground/70 transition-colors">
                  or just get in touch →
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-background/70 max-w-2xl leading-relaxed">
                Strategy, made visible. Six projects across brand strategy, marketing analytics, consulting and social impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2 rounded-none border text-xs font-bold tracking-widest uppercase transition-all ${filter === c ? "bg-background border-background text-foreground" : "border-background/30 text-background/70 hover:border-background hover:text-background"}`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredWorks.map((work, idx) => (
                  <WorkCard key={work.id} work={work} index={idx} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* TOOLKIT SECTION */}
        <section id="toolkit" className="py-16 px-6 md:px-12 lg:px-24 bg-pastel-lavender text-foreground">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">Strategic Toolkit</h2>
            <p className="text-lg text-foreground/70 mb-10">The methods behind every strategy.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {toolkitCategories.map((category, i) => (
                <div key={i} className="flex flex-col bg-background/50 border border-foreground/10 p-5 h-full">
                  <h3 className="text-lg font-serif font-bold mb-2.5">{category.name}</h3>
                  <div className="flex flex-wrap content-start gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-sm px-3 py-1.5 bg-background/60 border border-foreground/15 font-semibold transition-all hover:bg-foreground hover:text-background hover:border-foreground cursor-default"
                      >
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
        <section id="recognition" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-3">Recognition</h2>
          <p className="text-lg text-muted-foreground mb-14">Highlights along the way.</p>

          <div className="grid md:grid-cols-2 gap-4">
            {recognitions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative border border-border p-5 overflow-hidden transition-shadow hover:shadow-lg ${i === recognitions.length - 1 ? "md:col-span-2" : ""}`}
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full ${item.color}`} />
                <span className="font-serif text-4xl md:text-5xl font-black text-foreground/10 leading-none block mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-serif font-bold mb-1.5 -mt-5 relative">{item.title}</h3>
                <p className="text-base text-muted-foreground max-w-md">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-pastel-blue/15 text-foreground">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-3">About</h2>
            <p className="text-lg text-muted-foreground mb-8">A little about me.</p>
            <p className="text-xl leading-relaxed text-foreground/80 border-l-4 border-pastel-lavender pl-6">
              I enjoy solving problems where consumer psychology, analytics and creativity intersect. Whether I'm developing a strategy, analysing performance or exploring AI-assisted workflows, I'm motivated by creating work that delivers meaningful business value while strengthening the relationship between brands and people.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight leading-tight mb-6">
              Let's connect.
            </h2>
            <p className="text-lg text-background/70 mb-2 max-w-xl mx-auto leading-relaxed">
              Whether it's a strategy challenge, collaboration or simply a conversation about brands, I'd love to hear from you.
            </p>
            <p className="text-lg text-background/70 mb-12 max-w-xl mx-auto leading-relaxed">
              Bonus points if it's over coffee, I'm always up for a coffee chat!
            </p>

            <form onSubmit={handleContactSubmit} className="text-left flex flex-col gap-4 max-w-lg mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-background/50">Name</label>
                  <Input
                    id="contact-name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="rounded-none border-background/25 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-pastel-pink h-11"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-background/50">Email</label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="rounded-none border-background/25 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-pastel-pink h-11"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-background/50">Message</label>
                <Textarea
                  id="contact-message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="What's on your mind?"
                  rows={4}
                  className="rounded-none border-background/25 bg-background/5 text-background placeholder:text-background/40 focus-visible:ring-pastel-pink resize-none"
                />
              </div>

              <Button
                type="submit"
                className="self-start bg-pastel-pink text-foreground hover:bg-pastel-pink/90 rounded-none font-bold tracking-wide px-6 h-11 transition-transform hover:scale-105 active:scale-95"
              >
                Send message
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </form>

            <p className="text-xs font-bold uppercase tracking-widest text-background/40 mb-5">Or reach out directly</p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-5 mb-4">
              <a
                href="mailto:jivikajain90@gmail.com"
                className="flex items-center gap-2 text-sm md:text-base font-bold tracking-wide hover:text-pastel-pink transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                jivikajain90@gmail.com
              </a>

              <span className="hidden sm:block h-4 w-px bg-background/25" />

              <a
                href="https://www.linkedin.com/in/jivika-jain-2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-base font-bold tracking-wide hover:text-pastel-pink transition-colors"
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <span className="hidden sm:block h-4 w-px bg-background/25" />

              <a
                href="tel:+61410123983"
                className="flex items-center gap-2 text-sm md:text-base font-bold tracking-wide hover:text-pastel-pink transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +61 410 123 983
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-12 lg:px-24 pt-16 pb-8 bg-background border-t border-border">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10">
          <div className="max-w-xs">
            <div className="font-serif font-black text-xl tracking-tighter uppercase mb-3">Jivika Jain</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategy • Consumer Insights • AI &amp; Analytics
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Explore</p>
              <a href="#work" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
              <a href="#toolkit" className="text-sm font-medium hover:text-primary transition-colors">Toolkit</a>
              <a href="#recognition" className="text-sm font-medium hover:text-primary transition-colors">Recognition</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Connect</p>
              <a href="mailto:jivikajain90@gmail.com" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
              <a href="https://www.linkedin.com/in/jivika-jain-2001/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a href="tel:+61410123983" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5" /> +61 410 123 983
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <div>Jivika Jain — Sydney, Australia</div>
          <div className="text-center md:text-right">
            Student Visa (500) working hours (24h/week) till Mar’27 | Eligible for Graduate Visa (485) Full-time (Dec’26 - Jan’30)
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkCard({ work, index }: { work: any; index: number }) {
  const [open, setOpen] = useState(false);
  const categoryColor = categoryColors[work.category] ?? "bg-pastel-pink";

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, delay: index * 0.04 }}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="group bg-background text-foreground p-6 flex flex-col h-full cursor-pointer transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex gap-1.5">
            {work.swatches.map((c: string, i: number) => (
              <span key={i} className="w-3.5 h-3.5 rounded-full border border-foreground/10 transition-transform group-hover:scale-125" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span className={`inline-block px-3 py-1 ${categoryColor} text-foreground text-[10px] font-bold uppercase tracking-widest`}>
            {work.category}
          </span>
        </div>

        <h3 className="text-2xl font-serif font-bold leading-tight mb-3 transition-colors group-hover:text-primary">{work.title}</h3>

        <p className="text-base leading-relaxed text-foreground/80 mb-4">
          {work.summary}
        </p>

        <span className="font-bold text-primary text-sm mt-auto pt-2 inline-flex items-center gap-1">
          <span className="transition-transform group-hover:translate-x-1">→</span> View Case Study
        </span>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl rounded-none p-0 gap-0 max-h-[85vh] overflow-y-auto">
          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex gap-1.5">
                {work.swatches.map((c: string, i: number) => (
                  <span key={i} className="w-4 h-4 rounded-full border border-foreground/10" style={{ backgroundColor: c }} />
                ))}
              </div>
              <span className={`inline-block px-3 py-1 ${categoryColor} text-foreground text-[10px] font-bold uppercase tracking-widest`}>
                {work.category}
              </span>
            </div>

            <DialogTitle className="text-3xl md:text-4xl font-serif font-black leading-tight mb-4">
              {work.title}
            </DialogTitle>

            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              {work.summary}
            </p>

            <div className="flex flex-col gap-6 text-base leading-relaxed border-t border-border pt-8">
              <div>
                <p className="font-bold text-primary uppercase tracking-widest text-xs mb-2">Challenge</p>
                <p>{work.challenge}</p>
              </div>
              <div>
                <p className="font-bold text-primary uppercase tracking-widest text-xs mb-2">Strategy</p>
                <p>{work.strategy}</p>
              </div>
              <div>
                <p className="font-bold text-primary uppercase tracking-widest text-xs mb-2">Result</p>
                <p>{work.result}</p>
              </div>
              <div>
                <p className="font-bold text-primary uppercase tracking-widest text-xs mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {work.skills.map((skill: string) => (
                    <span key={skill} className="text-sm px-3 py-1.5 bg-foreground/5 border border-foreground/15 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone, Globe, ChevronRight, ExternalLink, Cpu, Shield, Zap, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";


const HudParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
      />
    ))}
  </div>
);


const Navbar = () => (
  <motion.nav
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
  >
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full arc-reactor-glow animate-pulse" />
        <span className="font-heading text-lg font-bold tracking-[0.3em] text-gradient-jarvis" style={{ fontFamily: 'Orbitron' }}>
          JRD
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-mono-tech text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <a href="/resume.pdf?v=1" download="JaiRagulD_Resume.pdf">
        <Button size="sm" className="bg-primary/10 border border-primary/40 text-primary hover:bg-primary/20 gap-2 font-mono-tech text-xs tracking-wider">
          <Download className="w-4 h-4" />
          DOWNLOAD RESUME
        </Button>
      </a>
    </div>
  </motion.nav>
);


const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 scanlines">
      <div className="absolute inset-0 hud-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] arc-reactor-glow opacity-10" />

      <motion.div style={{ opacity }} className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 max-w-md"
          />

          <p className="font-mono-tech text-primary text-xs mb-6 tracking-[0.5em] uppercase">
            &gt; System Online • Web Developer • Software Tester
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-[0.15em]" style={{ fontFamily: 'Orbitron' }}>
            JAI RAGUL <span className="text-gradient-jarvis">D</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono-tech text-xs text-muted-foreground tracking-[0.3em] mb-8"
          >
            [ PORTFOLIO INTERFACE v2.0 ]
          </motion.div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building responsive web applications and ensuring quality through meticulous testing.
            Passionate about delivering reliable and user-friendly software.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:jairaguldhanapal@gmail.com">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-mono-tech text-xs tracking-wider hud-glow-strong">
                <Mail className="w-5 h-5" /> INITIATE CONTACT
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 gap-2 font-mono-tech text-xs tracking-wider">
                <Terminal className="w-5 h-5" /> VIEW PROJECTS
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            {[
              { icon: Github, href: "https://github.com/jairagul28", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/-jai-ragul-/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:jairaguldhanapal@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px hsl(200 100% 50% / 0.4)" }}
                className="p-3 rounded-lg border border-border hover:border-primary/60 bg-card/50 transition-colors text-muted-foreground hover:text-primary"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 max-w-md"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
    <span className="font-mono-tech text-[10px] tracking-[0.4em] text-primary/70 uppercase">{text}</span>
  </div>
);


const About = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <SectionLabel text="System Profile" />
        <h2 className="section-heading mb-4">
          About <span className="text-gradient-jarvis">Me</span>
        </h2>
        <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm a Web Developer and Software Tester with strong knowledge of building
              responsive web applications and ensuring quality through manual testing.
            </p>
            <p>
              Skilled in HTML, CSS, JavaScript, backend development, test case design, and bug
              reporting. Currently pursuing B.E. in Computer Science and Engineering at NSCET, Theni
              with a CGPA of 8.1.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "CGPA", value: "8.1", icon: Zap },
              { label: "Semester", value: "4th", icon: Cpu },
              { label: "Languages", value: "3", icon: Globe },
              { label: "Projects", value: "4+", icon: Code2 },
            ].map(({ label, value, icon: Icon }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-lg bg-card hud-border hover-hud hud-corners text-center relative overflow-hidden"
              >
                <Icon className="w-4 h-4 text-primary/40 mx-auto mb-2" />
                <p className="text-3xl font-bold text-gradient-jarvis" style={{ fontFamily: 'Orbitron' }}>{value}</p>
                <p className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground mt-2 uppercase">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);


const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React.js"],
  "Backend": ["Node.js", "Express.js", "MongoDB"],
  "Languages": ["Python", "C"],
  "Tools": ["Git", "GitHub", "VS Code", "Postman"],
  "Testing": ["Manual Testing", "BDD", "Test Cases", "Bug Reporting"],
  "Soft Skills": ["Communication", "Time Management", "Adaptability"],
};

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute inset-0 hud-grid opacity-10" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div {...fadeUp}>
        <SectionLabel text="Capabilities Database" />
        <h2 className="section-heading mb-4">
          Tech <span className="text-gradient-jarvis">Stack</span>
        </h2>
        <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-card hud-border hover-hud hud-corners relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-primary/60" />
                <h3 className="font-mono-tech text-xs tracking-[0.2em] text-primary uppercase">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded bg-primary/5 text-primary/80 border border-primary/15 font-mono-tech tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);


const Experience = () => (
  <section id="experience" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <SectionLabel text="Mission Log" />
        <h2 className="section-heading mb-4">
          Work <span className="text-gradient-jarvis">Experience</span>
        </h2>
        <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="relative pl-8 border-l border-primary/30 space-y-12">
          <div className="relative">
            <div className="absolute -left-[1.15rem] top-1 w-3 h-3 rounded-full bg-primary hud-glow-strong" />
            <div className="p-6 rounded-lg bg-card hud-border hover-hud hud-corners relative overflow-hidden">
              <span className="font-mono-tech text-[10px] tracking-[0.4em] text-primary uppercase">Jul 2025</span>
              <h3 className="text-xl font-semibold mt-2" style={{ fontFamily: 'Orbitron', fontSize: '1rem' }}>
                Web Development Intern
              </h3>
              <p className="font-mono-tech text-xs text-muted-foreground mt-1 tracking-wider">LITZ TECH, Coimbatore</p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Worked on responsive UI development using HTML, CSS, JS; contributed to React.js
                dashboard features, optimized performance, and collaborated using Git/GitHub.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[1.15rem] top-1 w-3 h-3 rounded-full bg-primary/50 border-2 border-primary/30" />
            <div className="p-6 rounded-lg bg-card hud-border hover-hud hud-corners relative overflow-hidden">
              <span className="font-mono-tech text-[10px] tracking-[0.4em] text-primary uppercase">Testing Protocol</span>
              <h3 className="text-xl font-semibold mt-2" style={{ fontFamily: 'Orbitron', fontSize: '1rem' }}>
                Software Testing Experience
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Wrote test cases for projects</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Learned to create BDD scenarios</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Performed manual testing for functionality & input validation</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Cross-device & cross-browser testing for consistent performance</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);


const projects = [
  {
    title: "Cafe Website",
    desc: "A responsive café website designed to showcase menu items, offers, and seamless customer interaction.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/jairagul28/coffee-shop-table-reservation"
  },
  {
    title: "Turf Booking",
    desc: "A web-based turf booking platform enabling users to search, reserve, and manage sports grounds efficiently.",
    tags: ["React.js", "Node.js"],
    link: "https://github.com/jairagul28/turf-booking"
  },
  {
    title: "Movie Ticket Booking",
    desc: "A responsive platform for booking movie tickets with real-time show and seat availability.",
    tags: ["React.js", "CSS", "JavaScript"],
    link: "https://github.com/jairagul28/movie-ticket-booking"
  },
  {
    title: "Library Book Management",
    desc: "Full-stack CRUD system using Node.js & Express.js for managing library books.",
    tags: ["Node.js", "Express.js"],
    link: "https://github.com/jairagul28/Library-Book-Management"
  },
];

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="absolute inset-0 hud-grid opacity-10" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div {...fadeUp}>
        <SectionLabel text="Project Archives" />
        <h2 className="section-heading mb-4">
          Featured <span className="text-gradient-jarvis">Projects</span>
        </h2>
        <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-lg bg-card hud-border hover-hud hud-corners relative overflow-hidden block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors tracking-wider" style={{ fontFamily: 'Orbitron', fontSize: '0.9rem' }}>
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] rounded bg-primary/8 text-primary/70 border border-primary/15 font-mono-tech tracking-[0.15em] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);


const Education = () => (
  <section className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <SectionLabel text="Training Records" />
        <h2 className="section-heading mb-4">
          <span className="text-gradient-jarvis">Education</span>
        </h2>
        <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent mb-12" />

        <div className="space-y-6">
          <motion.div whileHover={{ scale: 1.01 }} className="p-6 rounded-lg bg-card hud-border hover-hud hud-corners relative overflow-hidden">
            <span className="font-mono-tech text-[10px] tracking-[0.4em] text-primary uppercase">2023 – 2027 (Expected)</span>
            <h3 className="font-semibold mt-2" style={{ fontFamily: 'Orbitron', fontSize: '0.9rem' }}>
              B.E. Computer Science and Engineering
            </h3>
            <p className="text-sm text-muted-foreground mt-1">NSCET, Theni</p>
            <p className="font-mono-tech text-xs text-primary mt-2 tracking-wider">CGPA: 8.1 up to 4th semester</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="p-6 rounded-lg bg-card hud-border hover-hud hud-corners relative overflow-hidden">
            <span className="font-mono-tech text-[10px] tracking-[0.4em] text-primary uppercase">2023</span>
            <h3 className="font-semibold mt-2" style={{ fontFamily: 'Orbitron', fontSize: '0.9rem' }}>
              HSC – Mary Matha Matric School
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Theni — 76%</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);


const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="absolute inset-0 hud-grid opacity-10" />
    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
      <motion.div {...fadeUp}>
        <SectionLabel text="Communication Channel" />
        <h2 className="section-heading mb-4">
          Let's <span className="text-gradient-jarvis">Connect</span>
        </h2>
        <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent mb-8 mx-auto" />

        <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:jairaguldhanapal@gmail.com">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-mono-tech text-xs tracking-wider hud-glow-strong">
              <Mail className="w-5 h-5" /> jairaguldhanapal@gmail.com
            </Button>
          </a>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {["Tamil: Native", "English: Fluent", "Telugu: Conversational"].map((lang) => (
            <span key={lang} className="px-3 py-1 text-[10px] rounded bg-primary/5 text-primary/60 border border-primary/15 font-mono-tech tracking-[0.15em] uppercase">
              {lang}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-2">
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-2" />
      <p className="font-mono-tech text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
        © 2026 Jai Ragul D • Powered by JRD
      </p>
    </div>
  </footer>
);


const Index = () => (
  <div className="min-h-screen bg-background relative">
    <HudParticles />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
  </div>
);

export default Index;

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <motion.nav
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border"
  >
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <span className="font-heading text-xl font-bold text-gradient">JRD</span>
      <div className="hidden md:flex items-center gap-8">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <a href="/resume.png" download="JaiRagulD_Resume.png">
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          <Download className="w-4 h-4" />
          Resume
        </Button>
      </a>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </div>
    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Web Developer · Software Tester</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight">
          JAI RAGUL <span className="text-gradient">D</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Building responsive web applications and ensuring quality through meticulous testing.
          Passionate about delivering reliable and user-friendly software.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="mailto:jairaguldhanapal@gmail.com">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Mail className="w-5 h-5" /> Get In Touch
            </Button>
          </a>
          <a href="#projects">
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              View Projects
            </Button>
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 mt-10">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/jai-ragul", label: "LinkedIn" },
            { icon: Mail, href: "mailto:jairaguldhanapal@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+919043624840", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="section-heading mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-8" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Web Developer and Software Tester with a strong knowledge of building
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
              { label: "CGPA", value: "8.1" },
              { label: "Semester", value: "4th" },
              { label: "Languages", value: "3" },
              { label: "Projects", value: "4+" },
            ].map(({ label, value }) => (
              <div key={label} className="p-6 rounded-xl bg-card border border-border hover-glow text-center">
                <p className="text-3xl font-heading font-bold text-primary">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
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
  <section id="skills" className="py-24 bg-card/30">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="section-heading mb-4">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border hover-glow"
            >
              <h3 className="font-heading font-semibold text-primary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
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
        <h2 className="section-heading mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-12" />

        <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
          <div className="relative">
            <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <div className="p-6 rounded-xl bg-card border border-border hover-glow">
              <span className="text-xs font-mono text-primary">JUL 2025</span>
              <h3 className="font-heading text-xl font-semibold mt-2">Web Development Intern</h3>
              <p className="text-sm text-muted-foreground mt-1">LITZ TECH, Coimbatore</p>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Worked on responsive UI development using HTML, CSS, JS; contributed to React.js
                dashboard features, optimized performance, and collaborated using Git/GitHub.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary/50 border-4 border-background" />
            <div className="p-6 rounded-xl bg-card border border-border hover-glow">
              <span className="text-xs font-mono text-primary">TESTING</span>
              <h3 className="font-heading text-xl font-semibold mt-2">Software Testing Experience</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Wrote test cases for projects</li>
                <li>• Learned to create BDD scenarios</li>
                <li>• Performed manual testing for functionality & input validation</li>
                <li>• Cross-device & cross-browser testing for consistent performance</li>
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
  },
  {
    title: "Turf Booking",
    desc: "A web-based turf booking platform enabling users to search, reserve, and manage sports grounds efficiently.",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Movie Ticket Booking",
    desc: "A responsive platform for booking movie tickets with real-time show and seat availability.",
    tags: ["React.js", "CSS", "JavaScript"],
  },
  {
    title: "Library Book Management",
    desc: "Full-stack CRUD system using Node.js & Express.js for managing library books.",
    tags: ["Node.js", "Express.js", "MongoDB"],
  },
];

const Projects = () => (
  <section id="projects" className="py-24 bg-card/30">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="section-heading mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-12" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl bg-card border border-border hover-glow hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
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

const Education = () => (
  <section className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div {...fadeUp}>
        <h2 className="section-heading mb-4">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-12" />
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-card border border-border hover-glow">
            <span className="text-xs font-mono text-primary">2023 – 2027 (Expected)</span>
            <h3 className="font-heading text-lg font-semibold mt-2">B.E. Computer Science and Engineering</h3>
            <p className="text-sm text-muted-foreground mt-1">NSCET, Theni</p>
            <p className="text-sm text-primary mt-2 font-medium">CGPA: 8.1 up to 4th semester</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border hover-glow">
            <span className="text-xs font-mono text-primary">2023</span>
            <h3 className="font-heading text-lg font-semibold mt-2">HSC – Mary Matha Matric School</h3>
            <p className="text-sm text-muted-foreground mt-1">Theni — 76%</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-card/30">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.div {...fadeUp}>
        <h2 className="section-heading mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-8 mx-auto" />
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:jairaguldhanapal@gmail.com">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Mail className="w-5 h-5" /> jairaguldhanapal@gmail.com
            </Button>
          </a>
          <a href="tel:+919043624840">
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2">
              <Phone className="w-5 h-5" /> +91-9043624840
            </Button>
          </a>
        </div>
        <div className="flex justify-center gap-3 mt-6">
          <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Tamil: Native</span>
          <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">English: Fluent</span>
          <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Telugu: Conversational</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground">
        © 2026 Jai Ragul D. Built with passion.
      </p>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
};

export default Index;

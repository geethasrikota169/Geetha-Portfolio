import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Send, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const technologies = {
    "Languages": ["C", "Java", "Python", "JavaScript", "CSS", "HTML"],
    "Frameworks/Libraries": ["React.js", "Spring Boot","Jasmine","Maven"],
    "Tools": ["Postman", "MySQL", "PostgreSQL", "Eclipse", "Git","GitHub", "IntelliJ IDEA"],
    "Other Skills": ["Video Editing","UI/UX Design","Testing"]
  };

  const projects = [
    {
      title: "YouTube Clone",
      description: "A responsive YouTube clone built with HTML and CSS, replicating the core UI features of the platform",
      tech: ["HTML", "CSS"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "E-commerce Website",
      description: "Developed an Amazon-inspired project utilizing JavaScript features such as DOM manipulation, OOP, modules, async programming, and testing. Integrated Git for version control and implemented a seamless user interface with advanced functionality.",
      tech: ["HTML", "CSS", "JavaScript", "Testing"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Task Management System (In Progress)",
      description: "Developed a responsive task management system using Spring Boot, React, and SQL, with complete functionality for task tracking and management. Enhanced user experience by adding intuitive features and optimizing performance for efficiency.",
      tech: ["CSS","JavaScript","ReactJs", "Spring Boot", "MySQL","Postman","RestAPI","Maven","JDBC"],
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-1 rounded-md">GS</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#technologies" className="hover:text-primary transition-colors">Technologies</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="ml-4"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-muted rounded-md">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-muted rounded-md">About</a>
              <a href="#technologies" className="block px-3 py-2 hover:bg-muted rounded-md">Technologies</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-muted rounded-md">Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-muted rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-3xl opacity-20 dark:opacity-30"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                GEETHA SRI KOTA
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">Full Stack Developer | Student at KL University</p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/geethasrikota169" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/geethasrikota1697" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-violet-100 dark:from-pink-950/20 dark:to-violet-950/20 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">About Me</h2>
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/50 dark:bg-black/20 p-6 rounded-lg shadow-xl">
            <p className="text-lg mb-4">
              I'm a second-year B.Tech student at KL University, Vaddeswaram, pursuing Computer Science and Information Technology. With a strong academic record (CGPA: 9.7), I'm passionate about web development and constantly exploring new technologies.
            </p>
            <p className="text-lg">
              As a developer, I combine my knowledge of frontend and backend technologies to create comprehensive web solutions. I'm also skilled in video editing, bringing a creative approach to my development projects.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Technologies & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technologies).map(([category, skills], index) => (
              <Card key={category} className="hover:shadow-xl transition-all duration-300 border-t-4 hover:-translate-y-1" style={{
                borderColor: `hsl(${(index * 60) + 220}, 70%, 60%)`
              }}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4" style={{
                    color: `hsl(${(index * 60) + 220}, 70%, 60%)`
                  }}>{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-100 to-cyan-100 dark:from-violet-950/20 dark:to-cyan-950/20 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/50 dark:bg-black/20">
                <CardContent className="pt-6">
                  <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className={`bg-gradient-to-r ${project.gradient} text-white border-none`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input placeholder="Name" className="hover:border-primary focus:border-primary backdrop-blur-sm bg-white/50 dark:bg-black/20" />
              <Input type="email" placeholder="Email" className="hover:border-primary focus:border-primary backdrop-blur-sm bg-white/50 dark:bg-black/20" />
              <Textarea placeholder="Message" className="min-h-[150px] hover:border-primary focus:border-primary backdrop-blur-sm bg-white/50 dark:bg-black/20" />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition-opacity">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center space-x-6">
              <a href="mailto:geethasrikota169@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
              </a>
              <a href="https://github.com/geethasrikota169" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/geethasrikota1697" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
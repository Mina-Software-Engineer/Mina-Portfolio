import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Github, ExternalLink, PlayCircle, Globe, Smartphone, Cpu, FileText, Scan, Stethoscope, Calculator, QrCode, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: "Museum Guide",
    description: "an interactive companion that lets visitors control a guide robot via an on-screen museum map. Users can ask questions through voice commands and receive AI-powered responses from the robot. The app also enables QR code scanning of exhibits to instantly display detailed information. It seamlessly blends physical navigation, and digital content for an enriched museum experience.",
    image: "/logos/museumguide.png",
    icon: Smartphone,
    techStack: ["Room Database", "Clean Architecture", "Kotlin"],
    metrics: { type: "Graduation Project" },
    features: ["Enhanced UI", "Digital Content", "Accessibility"],
    links: {
      github: "https://github.com/Mina-Software-Engineer/Museum-Guide-App"
    }
  },
  // Added projects from user request (inserted after Zervista)
  {
    title: "Asteroid Radar",
    description: "NASA API integration app displaying near-Earth asteroids with Room Database caching.",
    image: "/projects/asteroid_logo.png",
    icon: Globe,
    techStack: ["Modern UI", "Responsive Design"],
    metrics: { type: "Project" },
    features: ["Real-time update", "Asteroids sorting"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Quotes App",
    description: "Daily inspiration app with quote sharing functionality and local database storage.",
    image: "/projects/quoteslogo.png",
    icon: Smartphone,
    techStack: ["Room Database", "Kotlin", "RESTful API"],
    metrics: { type: "Project" },
    features: [""],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Moonchat",
    description: "Real-time messaging application with Firebase, Room Database",
    image: "/projects/moonchat.png",
    icon: Smartphone,
    techStack: ["Kotlin", "Firebase", "Room Database", "MVVM", "Pagination"],
    metrics: { type: "Impact", value: "Accessibility" },
    features: ["Modern UI", "Real-time messaging"],
    links: {
      github: "#",
      demo: "#"
    }
  }
];

const Projects = () => {
  return (
    <section className="bg-[#121212] py-20 relative overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        {/* Animated background pattern - contained within viewport */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute w-80 h-80 bg-[#3DDC84] rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-[#3DDC84] rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-1000"></div>
        </div>

        <ScrollReveal direction="up" duration={600} delay={100}>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of innovative solutions spanning mobile
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <ScrollReveal 
                key={index}
                direction="up" 
                duration={600} 
                delay={200 + (index * 100)}
                threshold={0.1}
              >
                <article className="project-card bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 hover:border-[#3DDC84] group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#3DDC84] bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
                      <IconComponent className="w-6 h-6 text-[#3DDC84]" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#3DDC84] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-[#3DDC84] bg-opacity-10 text-[#3DDC84] px-3 py-1 rounded-full text-xs border border-[#3DDC84] border-opacity-30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <span className="text-[#3DDC84]">●</span>
                        <span>{project.metrics.type}: {project.metrics.value}</span>
                      </div>
                      <div className="space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="w-1 h-1 bg-[#3DDC84] rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4 border-t border-gray-800">
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          className="project-link"
                          title="Live Demo"
                          aria-label={`View live demo of ${project.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.playStore && (
                        <a 
                          href={project.links.playStore} 
                          className="project-link"
                          title="Play Store"
                          aria-label={`Download ${project.title} from Play Store`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PlayCircle className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          className="project-link"
                          title="GitHub Repository"
                          aria-label={`View ${project.title} source code on GitHub`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
        
        <ScrollReveal direction="up" duration={600} delay={300}>
          <div className="text-center mt-12 relative z-10">
            <a 
              href="https://github.com/Mina-Software-Engineer" 
              className="btn-primary inline-flex items-center gap-2 bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
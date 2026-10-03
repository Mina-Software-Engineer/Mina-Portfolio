import React from 'react';
import { Smartphone, Brain, Globe, Cloud, Database, MapPin, Layers, ScanText, Monitor, GitBranch } from 'lucide-react';

const competencies = [
  {
    icon: Smartphone,
    title: "Android Development",
    description: "Native Android apps with Kotlin/Java and modern architecture patterns",
    skills: ["Kotlin", "Java", "Repository Pattern", "MVVM", "Dependency Injection"]
  },
  {
    icon: Brain,
    title: "Problem-Solving & Architecture",
    description: "Clean code architecture, design patterns, and efficient algorithm implementation",
    skills: ["Clean Architecture", "Design Patterns", "DSA", "OOP"]
  },
  {
    icon: Smartphone,
    title: "Modern Android UI Development",
    description:
      "Building polished, responsive Android interfaces with modern UI frameworks and navigation patterns",
    skills: [
      "Jetpack Compose",
      "XML Layouts",
      "Material Design 3",
      "Navigation Component",
      "Coroutines & Flow"
    ]
  },
  {
    icon: Globe,
    title: "Backend & API Integration",
    description:
      "Integrating mobile applications with RESTful services, authentication systems, and external APIs",
    skills: [
      "REST APIs",
      "Retrofit",
      "OkHttp",
      "JSON Serialization",
      "OAuth 2.0"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Real-Time Services",
    description:
      "Implementing cloud-backed features, user authentication, and real-time application updates",
    skills: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Cloud Storage",
      "Real-Time Data"
    ]
  },
  {
    icon: Database,
    title: "Database & Data Management",
    description:
      "Designing data models, managing persistent storage, and supporting offline-first experiences",
    skills: [
      "Room Database",
      "SQLite",
      "MySQL",
      "Data Caching",
      "Data Synchronization"
    ]
  },
  {
    icon: MapPin,
    title: "Maps & Location Services",
    description:
      "Developing location-aware features for navigation, delivery, and ride-hailing applications",
    skills: [
      "Google Maps SDK",
      "Mapbox",
      "Location Services",
      "Geocoding",
      "Route Visualization"
    ]
  },
  {
    icon: Layers,
    title: "Cross-Platform Development",
    description:
      "Building cross-platform mobile applications with reusable UI components and shared logic",
    skills: [
      "Flutter",
      "Dart",
      "State Management",
      "Reusable Widgets",
      "Responsive UI"
    ]
  },
  {
    icon: ScanText,
    title: "OCR & Workflow Automation",
    description:
      "Automating document processing, extracting information from images, and validating business data",
    skills: [
      "OCR",
      "Image Processing",
      "Data Validation",
      "Excel Automation",
      "Automated Reporting"
    ]
  },
  {
    icon: Monitor,
    title: "Desktop Application Development",
    description:
      "Creating desktop software for business workflows, data processing, and operational automation",
    skills: [
      "Python",
      "C#",
      "C++",
      "File Processing",
      "Business Automation"
    ]
  },
  {
    icon: GitBranch,
    title: "Development Tools & Quality",
    description:
      "Applying version control, testing, debugging, and collaborative engineering practices",
    skills: [
      "Git",
      "GitHub",
      "Debugging",
      "Unit Testing",
      "Agile Development"
    ]
  }
];

const CoreCompetencies = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competencies.map((competency, index) => {
          const IconComponent = competency.icon;
          return (
            <div 
              key={index}
              className="bg-[#2D2D2D] rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-[#3DDC84]"
            >
              <div className="bg-[#3DDC84] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-8 h-8 text-[#3DDC84]" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{competency.title}</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">{competency.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {competency.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-[#3DDC84] bg-opacity-10 text-[#3DDC84] px-3 py-1 rounded-full text-sm border border-[#3DDC84] border-opacity-30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreCompetencies;

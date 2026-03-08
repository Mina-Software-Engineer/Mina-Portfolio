import ScrollReveal from '../ScrollReveal';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    company: "Advanced Android Application Development",
    position: "Android Developer",
    duration: "Sep 2022 - Nov 2022 · 3 mos",
    location: "Cairo, Egypt · Online",
    achievements: [
      "Developed native Android applications using Kotlin",
      "Implemented modern Android architecture patterns (MVVM, Clean Architecture)"
    ],
    technologies: ["Kotlin", "Firebase", "Android SDK", "MVVM", "Room Database"],
    logo: "logos/Udacity.png"
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#121212] py-20 relative overflow-hidden" id="timeline">
      {/* Animated background pattern - contained within viewport */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-[#3DDC84] rounded-full blur-3xl top-20 right-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-[#61DAFB] rounded-full blur-3xl bottom-10 left-10 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-[#3DDC84] rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up" duration={600} delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building innovative Android applications across diverse technology stacks
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <ScrollReveal 
              key={index}
              direction="up" 
              duration={600} 
              delay={200 + (index * 150)}
              threshold={0.1}
            >
              <TimelineItem {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
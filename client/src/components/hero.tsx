import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-primary pt-16">
      <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:20px_20px] opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Professional entrepreneur portrait */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
              alt="Professional entrepreneur portrait" 
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            Ideas First, <span className="text-primary">AI Always</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
            Transforming Visionary AI Concepts Into Impactful Products
          </p>
          
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
            Based in Melbourne, Australia, I specialize in discovering, validating, and launching innovative AI products. With an <em>idea-first</em> approach, I combine cross-domain expertise, rapid prototyping, and a strong network to bring bold AI solutions to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Partner With Me
            </Button>
            <Button 
              onClick={() => scrollToSection('insights')}
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Read Insights
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}

import { Code2, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
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

  const developerBenefits = [
    "Clear project requirements and technical specifications",
    "Remote-first collaboration with flexible schedules", 
    "Portfolio-building opportunities with innovative AI projects"
  ];

  const investorBenefits = [
    "Pre-validated market opportunities and MVP demonstrations",
    "Direct founder engagement with proven execution track record",
    "Transparent progress reporting and milestone achievements"
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Who Partners with JackOfAI</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building strategic partnerships with developers, investors, and industry leaders to create impactful AI solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Developers & Technical Experts */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            {/* Team collaboration image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Diverse team collaborating on AI projects in modern workspace" 
              className="w-full h-48 object-cover rounded-xl mb-6" 
            />
            
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Developers & Technical Experts</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              Join projects with clear direction, strong leadership, and opportunities to grow your portfolio with cutting-edge AI implementations.
            </p>
            
            <ul className="space-y-3 mb-6">
              {developerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-slate-600">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
            
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-primary font-semibold hover:text-primary/80 p-0 h-auto"
            >
              Join Our Developer Network
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          {/* VCs & Investors */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            {/* Startup workspace image */}
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Modern startup workspace with investment and growth charts" 
              className="w-full h-48 object-cover rounded-xl mb-6" 
            />
            
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">VCs & Investors</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              Gain early access to validated, high-potential AI startups with direct founder engagement and transparent progress tracking.
            </p>
            
            <ul className="space-y-3 mb-6">
              {investorBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-slate-600">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
            
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-primary font-semibold hover:text-primary/80 p-0 h-auto"
            >
              Explore Investment Opportunities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Track Record & Testimonial */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-indigo-50 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">Track Record</h3>
            <p className="text-slate-600 mb-6">Portfolio highlights and anonymized case studies coming soon.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
            <blockquote className="text-lg text-slate-700 text-center italic mb-4">
              "Working with JackOfAI.com was seamless—clear vision, strong leadership, and a focus on real results."
            </blockquote>
            <div className="text-center">
              <cite className="text-primary font-semibold">— Collaborator, AI Developer</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              JackOfAI
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="text-slate-600 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Insights
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
              >
                Community
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Contact
              </Button>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('insights')}
              className="text-slate-600 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              Insights
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-slate-600 dark:text-slate-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
            >
              Community
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white mx-3 mt-4 w-[calc(100%-1.5rem)]"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

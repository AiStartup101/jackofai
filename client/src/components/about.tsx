import { Check, Lightbulb, BarChart3, Zap, Clock, Users } from "lucide-react";

export default function About() {
  const missionItems = [
    {
      title: "Spot Opportunities",
      description: "Uncover and refine high-potential, market-driven AI product ideas."
    },
    {
      title: "Lead Teams", 
      description: "Assemble and guide remote, multidisciplinary teams to turn concepts into reality."
    },
    {
      title: "Accelerate Impact",
      description: "Partner with investors and collaborators to scale AI ventures that matter."
    }
  ];

  const differentiators = [
    {
      icon: Lightbulb,
      title: "Cross-Industry Fluency",
      description: "Rapidly research and adapt to new sectors, ensuring every project is informed by the latest trends."
    },
    {
      icon: BarChart3,
      title: "Strategic Orchestration", 
      description: "Bridge the gap between business vision and technical execution with actionable roadmaps."
    },
    {
      icon: Zap,
      title: "AI-First Mindset",
      description: "Approach every challenge with AI as a core driver, while balancing practical constraints."
    },
    {
      icon: Clock,
      title: "Fast Execution",
      description: "Deliver prototypes and MVPs quickly using advanced tools and skilled professionals."
    },
    {
      icon: Users,
      title: "Community Leadership",
      description: "Share knowledge, build networks, and contribute to the AI startup ecosystem."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">About JackOfAI</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Redefining what's possible with AI by building standout products and cultivating a reputation as a creative, trusted founder.
          </p>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-secondary mb-6">Mission</h3>
            <div className="space-y-4">
              {missionItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* AI technology concept image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="AI technology and innovation concept with neural networks" 
              className="rounded-xl w-full h-full object-cover shadow-lg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
        
        {/* What Makes JackOfAI Different */}
        <div className="bg-gradient-to-br from-primary/5 to-indigo-50 p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">What Makes JackOfAI Different</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-secondary mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

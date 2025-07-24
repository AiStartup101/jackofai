import { Mail, Calendar, Users, Briefcase } from "lucide-react";

export default function Community() {
  const communityFeatures = [
    {
      icon: Mail,
      title: "Newsletter",
      description: "Project updates, exclusive insights, and community news delivered monthly."
    },
    {
      icon: Calendar,
      title: "Events", 
      description: "Local and virtual meetups, demo days, and pitch sessions for the AI community."
    },
    {
      icon: Users,
      title: "Advisory Board",
      description: "Supported by experienced technical and investment advisors from the Australian ecosystem."
    },
    {
      icon: Briefcase,
      title: "Partnerships",
      description: "Collaborations with accelerators, universities, and the Australian startup community."
    }
  ];

  const brandMessages = [
    {
      context: "Networking Event",
      message: "\"I help founders turn bold ideas into AI-powered products.\""
    },
    {
      context: "Social Media Bio",
      message: "\"AI-first founder | Orchestrator | Bridging vision and execution.\""
    },
    {
      context: "Investor Meeting", 
      message: "\"I de-risk early-stage AI opportunities by validating and building with expert teams.\""
    },
    {
      context: "Workshop Intro",
      message: "\"I guide teams from idea to product using structured sprints and deep research.\""
    }
  ];

  return (
    <section id="community" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Community & Ecosystem</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building a thriving network of AI innovators, developers, and investors in Melbourne and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Community Features */}
          <div className="space-y-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Team collaboration image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team meeting discussing AI strategies and innovation" 
              className="rounded-2xl w-full h-full object-cover shadow-lg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent rounded-2xl"></div>
          </div>
        </div>
        
        {/* Brand Messaging */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Brand Messaging by Context</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-secondary">Context</th>
                  <th className="text-left py-4 px-4 font-semibold text-secondary">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {brandMessages.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-primary">{item.context}</td>
                    <td className="py-4 px-4 text-slate-600">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

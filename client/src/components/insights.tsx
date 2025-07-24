import { Button } from "@/components/ui/button";

export default function Insights() {
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

  const featuredTopics = [
    {
      category: "AI Product Ideation",
      example: "Spotting Market Gaps for AI Solutions"
    },
    {
      category: "Team Collaboration", 
      example: "Building Remote AI Product Teams That Deliver"
    },
    {
      category: "Founder-Investor Fit",
      example: "What VCs Look for in Early-Stage AI Startups"
    },
    {
      category: "Execution Insights",
      example: "From Idea to MVP: Lessons in Product Development"
    },
    {
      category: "Industry Perspectives",
      example: "Why Generalist Founders Will Shape the Next AI Wave"
    }
  ];

  const channels = [
    {
      name: "LinkedIn",
      description: "In-depth articles and founder updates",
      color: "bg-blue-100 text-blue-600",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Twitter/X",
      description: "Quick takes and project news", 
      color: "bg-sky-100 text-sky-600",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: "Communities",
      description: "Indie Hackers & Reddit insights",
      color: "bg-orange-100 text-orange-600", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Insights & Thought Leadership</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep insights on AI product development, team building, and the evolving startup landscape.
          </p>
        </div>
        
        {/* Featured Topics Table */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Featured Topics</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-secondary">Category</th>
                  <th className="text-left py-4 px-4 font-semibold text-secondary">Example Posts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {featuredTopics.map((topic, index) => (
                  <tr key={index} className="hover:bg-white transition-colors">
                    <td className="py-4 px-4 font-medium text-primary">{topic.category}</td>
                    <td className="py-4 px-4 text-slate-600">{topic.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Content Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {channels.map((channel, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                {channel.icon}
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">{channel.name}</h4>
              <p className="text-slate-600 text-sm">{channel.description}</p>
            </div>
          ))}
        </div>
        
        {/* AI technology concepts image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Futuristic AI and machine learning visualization with data streams" 
            className="w-full h-64 object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/90 mb-4">Get the latest insights on AI product development and startup strategies.</p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary hover:bg-slate-100"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

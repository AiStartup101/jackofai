import { Award, Building, FileText, Globe } from "lucide-react";

export default function Government() {
  const programs = [
    {
      icon: Award,
      title: "Innovation Grants",
      description: "Exploring federal and state grants for AI research and development projects.",
      status: "Active Research"
    },
    {
      icon: Building,
      title: "Local Innovation Support",
      description: "Partnerships with Melbourne innovation precincts and government accelerators.",
      status: "In Progress"
    },
    {
      icon: FileText,
      title: "R&D Tax Incentives",
      description: "Leveraging Australian government R&D tax incentive programs for AI development.",
      status: "Implemented"
    },
    {
      icon: Globe,
      title: "Export Market Development",
      description: "Accessing Austrade support for international AI product expansion.",
      status: "Planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Research":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Implemented":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Planned":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <section id="government" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Government Programs</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Leveraging government support and innovation programs to accelerate AI development and market expansion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-secondary dark:text-white">{program.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(program.status)}`}>
                      {program.status}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-indigo-50 dark:from-primary/10 dark:to-indigo-900/20 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">Australian Innovation Ecosystem</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
              Actively engaging with government programs to support AI innovation, create jobs, and contribute to Australia's position as a global AI leader.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                Victorian Innovation Programs
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                Federal R&D Incentives
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                Export Development Grants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
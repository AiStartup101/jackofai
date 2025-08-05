import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Twitter, MapPin, Building, Star, Filter } from "lucide-react";
import { useState } from "react";
import type { Talent, Opportunity } from "@shared/schema";
import AnalyticsDashboard from "./analytics-dashboard";

interface TalentCardProps {
  talent: Talent;
}

function TalentCard({ talent }: TalentCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg text-slate-900 dark:text-white">{talent.name}</CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{talent.title}</p>
            {talent.company && (
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-500 mt-1">
                <Building className="w-4 h-4 mr-1" />
                {talent.company}
              </div>
            )}
            {talent.location && (
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-500 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                {talent.location}
              </div>
            )}
          </div>
          <div className="flex items-center ml-4">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {talent.aiScore}/100
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
          {talent.bio}
        </p>
        
        {talent.skills && talent.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {talent.skills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {talent.skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{talent.skills.length - 4} more
              </Badge>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {talent.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={talent.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            {talent.linkedinUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={talent.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            )}
            {talent.twitterUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={talent.twitterUrl} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
          
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface OpportunityCardProps {
  opportunity: Opportunity;
}

function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'startup': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'job': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'funding': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'project': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`text-xs ${getTypeColor(opportunity.type)}`}>
                {opportunity.type.toUpperCase()}
              </Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {opportunity.matchScore}/100
                </span>
              </div>
            </div>
            <CardTitle className="text-lg text-slate-900 dark:text-white line-clamp-2">
              {opportunity.title}
            </CardTitle>
            {opportunity.company && (
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-500 mt-1">
                <Building className="w-4 h-4 mr-1" />
                {opportunity.company}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-3">
          {opportunity.description}
        </p>
        
        {opportunity.tags && opportunity.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {opportunity.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {opportunity.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{opportunity.tags.length - 3} more
              </Badge>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-500">
            {opportunity.publishedAt && new Date(opportunity.publishedAt).toLocaleDateString()}
          </span>
          
          <Button size="sm" variant="outline" asChild>
            <a href={opportunity.url || '#'} target="_blank" rel="noopener noreferrer">
              View <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TalentFeed() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<string>('');
  const [showAnalytics, setShowAnalytics] = useState(false);

  const { data: talentsData, isLoading: talentsLoading } = useQuery({
    queryKey: ['/api/talents'],
    refetchInterval: 60000, // Refresh every minute
  });

  const { data: opportunitiesData, isLoading: opportunitiesLoading } = useQuery({
    queryKey: ['/api/opportunities'],
    refetchInterval: 60000, // Refresh every minute  
  });

  const talents: Talent[] = (talentsData as any)?.talents || [];
  const opportunities: Opportunity[] = (opportunitiesData as any)?.opportunities || [];

  const indianCities = ['Bangalore', 'Hyderabad', 'Pune', 'Gurgaon', 'Mumbai', 'Chennai'];
  const topSkills = ['TensorFlow', 'PyTorch', 'Machine Learning', 'Computer Vision', 'NLP', 'Deep Learning'];

  if (talentsLoading && opportunitiesLoading) {
    return (
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              🚀 Live Talent & Opportunity Feed
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Loading AI-powered discoveries...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded mb-4 w-3/4"></div>
                <div className="h-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="talent-feed" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            🇮🇳 AI-Powered Indian Talent Scouting System
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
            Advanced talent discovery framework targeting Bangalore, Hyderabad, Pune, and Gurgaon. 
            Built to integrate with LinkedIn API, freelance platforms, and AI communities.
          </p>
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Demo Mode:</strong> Currently displaying mock data to demonstrate the system's capabilities. 
              Real LinkedIn/API integration requires proper authentication and API keys.
            </p>
          </div>
          
          {/* Analytics Toggle */}
          <div className="mt-6">
            <Button 
              onClick={() => setShowAnalytics(!showAnalytics)}
              variant={showAnalytics ? "default" : "outline"}
              className="mr-4"
            >
              {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
            </Button>
            
            {/* City Filter */}
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
              className="mr-4 px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="">All Cities</option>
              {indianCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            {/* Skill Filter */}
            <select 
              value={selectedSkill} 
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="">All Skills</option>
              {topSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Analytics Dashboard */}
        {showAnalytics && <AnalyticsDashboard />}

        {/* Talent Section */}
        {talents.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              🎯 Indian AI Talent Discoveries
              <Badge className="ml-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {talents.filter(t => t.location?.includes('India')).length} from India
              </Badge>
              <Badge className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                {talents.length} Total
              </Badge>
            </h3>
            
            {/* Source Breakdown */}
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                LinkedIn API: {talents.filter(t => t.source?.includes('linkedin')).length}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Freelance Platforms: {talents.filter(t => t.source?.includes('upwork') || t.source?.includes('toptal')).length}
              </Badge>
              <Badge variant="outline" className="text-xs">
                AI Communities: {talents.filter(t => t.source?.includes('community')).length}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {talents.slice(0, 9).map((talent: Talent) => (
                <TalentCard key={talent.id} talent={talent} />
              ))}
            </div>
          </div>
        )}

        {/* Opportunities Section */}
        {opportunities.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              💼 Hot Opportunities
              <Badge className="ml-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                {opportunities.length} Available
              </Badge>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.slice(0, 6).map((opportunity: Opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>
          </div>
        )}

        {talents.length === 0 && opportunities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              🔍 Advanced AI talent scout is initializing across Indian tech hubs... 
              <br />Connecting to LinkedIn API, freelance platforms, and AI communities...
            </p>
          </div>
        )}
        
        {/* Technology Stack Info */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-8">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            🛠️ Production-Ready Scouting Technology Framework
          </h4>
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Ready for Production:</strong> This system is architected to integrate with real APIs when you provide authentication keys. 
              Current demo uses realistic mock data to show the user experience and data structure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h5 className="font-semibold text-slate-900 dark:text-white">LinkedIn Integration</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Advanced search filters for AI roles in Indian cities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h5 className="font-semibold text-slate-900 dark:text-white">Freelance Platforms</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Upwork, Toptal, Freelancer.com talent discovery</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h5 className="font-semibold text-slate-900 dark:text-white">AI Communities</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Reddit, Kaggle, Analytics Vidhya monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h5 className="font-semibold text-slate-900 dark:text-white">AI Scoring</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Machine learning-based talent ranking system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
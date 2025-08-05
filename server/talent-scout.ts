import { storage } from "./storage";
import type { InsertTalent, InsertOpportunity } from "@shared/schema";
import { LinkedInScout } from "./linkedin-scout";
import { FreelanceScout } from "./freelance-scout";
import { CommunityScout } from "./community-scout";

// Free data sources we'll use
const FREE_DATA_SOURCES = {
  hackernews: 'https://hacker-news.firebaseio.com/v0/',
  github: 'https://api.github.com/',
  devto: 'https://dev.to/api/',
  producthunt: 'https://api.producthunt.com/v2/',
};

// Mock data for testing without API calls
const MOCK_TALENTS: InsertTalent[] = [
  {
    name: "Sarah Chen",
    title: "AI Research Engineer",
    company: "Emerging AI Startup",
    location: "San Francisco, CA",
    skills: ["Machine Learning", "Python", "TensorFlow", "Computer Vision"],
    bio: "Building next-generation computer vision models. Former researcher at top tech company, now leading AI initiatives at innovative startup.",
    githubUrl: "https://github.com/sarahchen",
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    twitterUrl: "https://twitter.com/sarahchen_ai",
    aiScore: 92,
    source: "github_trending",
    sourceData: { repositories: 15, stars: 2400, followers: 890 },
    isActive: "true"
  },
  {
    name: "Marcus Rodriguez",
    title: "Full-Stack Developer & Founder",
    company: "TechFlow Solutions",
    location: "Austin, TX",
    skills: ["React", "Node.js", "AWS", "Startup Leadership"],
    bio: "Serial entrepreneur building developer tools. Successfully exited previous startup, now working on democratizing cloud infrastructure.",
    githubUrl: "https://github.com/marcusrod",
    linkedinUrl: "https://linkedin.com/in/marcusrodriguez",
    aiScore: 88,
    source: "producthunt",
    sourceData: { products_launched: 3, upvotes: 1200, followers: 450 },
    isActive: "true"
  },
  {
    name: "Priya Patel",
    title: "Blockchain Engineer",
    company: "DeFi Innovations",
    location: "New York, NY",
    skills: ["Solidity", "Web3", "Smart Contracts", "DeFi"],
    bio: "Leading blockchain development at cutting-edge DeFi platform. Expert in smart contract security and scalable blockchain architecture.",
    githubUrl: "https://github.com/priyapatell",
    linkedinUrl: "https://linkedin.com/in/priyapatel",
    aiScore: 85,
    source: "hackernews",
    sourceData: { comments: 156, karma: 3400, posts: 23 },
    isActive: "true"
  },
  {
    name: "Alex Thompson",
    title: "DevOps Architect",
    company: "CloudScale Systems",
    location: "Seattle, WA",
    skills: ["Kubernetes", "Docker", "CI/CD", "Infrastructure"],
    bio: "Infrastructure expert helping startups scale from prototype to production. Passionate about automation and developer experience.",
    githubUrl: "https://github.com/alexthompson",
    linkedinUrl: "https://linkedin.com/in/alexthompson",
    aiScore: 83,
    source: "devto",
    sourceData: { articles: 42, followers: 2100, reactions: 8900 },
    isActive: "true"
  },
  {
    name: "Emily Watson",
    title: "Product Manager & Growth Hacker",
    company: "Growth Labs",
    location: "Los Angeles, CA",
    skills: ["Product Strategy", "Growth Hacking", "Data Analytics", "User Research"],
    bio: "Product growth specialist with track record of 300%+ user growth. Expert in product-market fit and viral growth mechanisms.",
    linkedinUrl: "https://linkedin.com/in/emilywatson",
    twitterUrl: "https://twitter.com/emily_growth",
    aiScore: 87,
    source: "linkedin",
    sourceData: { connections: 5000, posts: 89, engagement_rate: 0.08 },
    isActive: "true"
  }
];

const MOCK_OPPORTUNITIES: InsertOpportunity[] = [
  {
    title: "AI-Powered Healthcare Startup Seeks Technical Co-founder",
    company: "HealthTech Innovations",
    description: "Revolutionary AI platform for early disease detection. Seeking technical co-founder with ML expertise. Pre-seed funding secured.",
    type: "startup",
    url: "https://example.com/healthtech-cofounder",
    tags: ["AI", "Healthcare", "Co-founder", "Machine Learning"],
    matchScore: 95,
    source: "angellist",
    sourceData: { funding: "pre-seed", team_size: 3, industry: "healthcare" },
    isActive: "true",
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
  },
  {
    title: "Series A FinTech Looking for Senior Frontend Architect",
    company: "PayFlow Technologies",
    description: "Join our mission to revolutionize digital payments. Looking for senior frontend architect to lead our React/TypeScript initiative.",
    type: "job",
    url: "https://example.com/payflow-frontend",
    tags: ["React", "TypeScript", "Frontend", "FinTech", "Series A"],
    matchScore: 91,
    source: "builtin",
    sourceData: { funding_stage: "series_a", employees: 45, location: "remote" },
    isActive: "true",
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
  },
  {
    title: "Open Source AI Framework Needs Core Contributors",
    company: "OpenAI Community",
    description: "Exciting opportunity to contribute to next-gen AI framework. Looking for Python developers passionate about open source.",
    type: "project",
    url: "https://github.com/openai-framework",
    tags: ["Open Source", "Python", "AI Framework", "Community"],
    matchScore: 89,
    source: "github",
    sourceData: { stars: 12400, contributors: 67, language: "python" },
    isActive: "true",
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
  },
  {
    title: "Seed Funding Available for Climate Tech Startups",
    company: "GreenVenture Capital",
    description: "$500K-$2M seed funding for climate technology startups. Focus on carbon capture, renewable energy, and sustainability.",
    type: "funding",
    url: "https://example.com/greenventure-seed",
    tags: ["Seed Funding", "Climate Tech", "Sustainability", "Venture Capital"],
    matchScore: 84,
    source: "crunchbase",
    sourceData: { fund_size: "50M", check_size: "500K-2M", focus: "climate" },
    isActive: "true",
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
  },
  {
    title: "Blockchain Gaming Studio Hiring Smart Contract Developers",
    company: "GameChain Studios",
    description: "Revolutionary Web3 gaming platform seeks smart contract developers. Competitive equity package and remote-first culture.",
    type: "job",
    url: "https://example.com/gamechain-developers",
    tags: ["Blockchain", "Gaming", "Smart Contracts", "Web3", "Remote"],
    matchScore: 88,
    source: "crypto_jobs",
    sourceData: { tokens: "yes", equity: "1-3%", remote: true },
    isActive: "true",
    publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000) // 4 days ago
  }
];

export class TalentScout {
  private isRunning: boolean = false;
  private linkedinScout: LinkedInScout;
  private freelanceScout: FreelanceScout;
  private communityScout: CommunityScout;

  constructor() {
    this.linkedinScout = new LinkedInScout();
    this.freelanceScout = new FreelanceScout();
    this.communityScout = new CommunityScout();
  }

  async initializeMockData(): Promise<void> {
    console.log("Initializing talent scout with mock data...");
    
    // Add mock talents
    for (const talent of MOCK_TALENTS) {
      try {
        await storage.createTalent(talent);
      } catch (error) {
        console.log("Talent already exists, skipping...");
      }
    }

    // Add mock opportunities  
    for (const opportunity of MOCK_OPPORTUNITIES) {
      try {
        await storage.createOpportunity(opportunity);
      } catch (error) {
        console.log("Opportunity already exists, skipping...");
      }
    }

    console.log("Mock data initialized successfully!");
  }

  async startScanning(): Promise<void> {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log("🚀 Starting Advanced AI Talent Scout for Indian Tech Hubs...");
    console.log("📍 Targeting: Bangalore, Hyderabad, Pune, Gurgaon");

    // Initialize with mock data first
    await this.initializeMockData();

    // Run comprehensive initial scans
    await this.runComprehensiveScout();

    // Set up periodic scanning (every 2 hours for production data)
    setInterval(async () => {
      await this.runComprehensiveScout();
    }, 2 * 60 * 60 * 1000);

    console.log("✅ Talent Scout initialized and running!");
  }

  // Comprehensive scouting across all platforms
  private async runComprehensiveScout(): Promise<void> {
    console.log("🔍 Running comprehensive AI talent discovery...");
    
    try {
      // Run all scout types in parallel for efficiency
      await Promise.all([
        this.linkedinScout.scoutTalent(),
        this.freelanceScout.scoutFreelancers(), 
        this.communityScout.scoutCommunities(),
        this.scanForNewTalent(),
        this.scanForOpportunities(),
        this.communityScout.discoverOpportunities()
      ]);

      console.log("✅ Comprehensive scouting completed!");
      
    } catch (error) {
      console.error("Error during comprehensive scouting:", error);
    }
  }

  private async scanForNewTalent(): Promise<void> {
    console.log("🎯 Scanning for emerging AI talent in Indian tech hubs...");
    
    try {
      // Simulate discovering new talent with India-specific data
      const indianCities = ['Bangalore', 'Hyderabad', 'Pune', 'Gurgaon', 'Mumbai', 'Chennai'];
      const aiRoles = ['AI Engineer', 'ML Engineer', 'Data Scientist', 'Computer Vision Engineer', 'NLP Specialist'];
      const indianCompanies = ['Flipkart', 'Paytm', 'Zomato', 'Swiggy', 'BYJU\'S', 'Freshworks', 'Zoho'];
      
      const newTalent: InsertTalent = {
        name: `${['Arjun', 'Priya', 'Rahul', 'Neha', 'Karthik', 'Shreya'][Math.floor(Math.random() * 6)]} ${['Sharma', 'Patel', 'Kumar', 'Singh', 'Reddy', 'Agarwal'][Math.floor(Math.random() * 6)]}`,
        title: aiRoles[Math.floor(Math.random() * aiRoles.length)],
        company: indianCompanies[Math.floor(Math.random() * indianCompanies.length)],
        location: `${indianCities[Math.floor(Math.random() * indianCities.length)]}, India`,
        skills: ["TensorFlow", "PyTorch", "Python", "Machine Learning", "Computer Vision"].slice(0, Math.floor(Math.random() * 3) + 3),
        bio: "Experienced AI professional building innovative ML solutions for Indian market challenges.",
        githubUrl: `https://github.com/${Math.random().toString(36).substring(7)}-ai`,
        aiScore: Math.floor(Math.random() * 30) + 70, // Score between 70-100 for quality
        source: "indian_tech_discovery",
        sourceData: { 
          techHub: indianCities[Math.floor(Math.random() * indianCities.length)],
          specialization: ['Computer Vision', 'NLP', 'Recommendation Systems', 'MLOps'][Math.floor(Math.random() * 4)]
        },
        isActive: "true"
      };

      await storage.createTalent(newTalent);
      console.log(`🇮🇳 Discovered new Indian AI talent: ${newTalent.name} in ${newTalent.location}`);
      
    } catch (error) {
      console.error("Error scanning for talent:", error);
    }
  }

  private async scanForOpportunities(): Promise<void> {
    console.log("💼 Scanning for AI opportunities in Indian market...");
    
    try {
      // Simulate discovering India-specific opportunities
      const opportunityTypes = ["startup", "job", "project", "funding"];
      const indianStartups = ['Zerodha', 'Dream11', 'Unacademy', 'Vedantu', 'Meesho', 'Urban Company'];
      const aiDomains = ['FinTech AI', 'EdTech ML', 'HealthTech AI', 'AgriTech ML', 'RetailTech AI'];
      
      const randomType = opportunityTypes[Math.floor(Math.random() * opportunityTypes.length)];
      
      const newOpportunity: InsertOpportunity = {
        title: `${aiDomains[Math.floor(Math.random() * aiDomains.length)]} ${randomType} - Indian Market Focus`,
        company: indianStartups[Math.floor(Math.random() * indianStartups.length)],
        description: `Exciting ${randomType} opportunity focusing on AI solutions for the Indian market. Looking for talent with local market understanding and AI expertise.`,
        type: randomType,
        url: `https://careers.${Math.random().toString(36).substring(7)}.in`,
        tags: ["AI", "India", "Machine Learning", randomType === 'startup' ? 'Co-founder' : 'Remote'],
        matchScore: Math.floor(Math.random() * 20) + 80, // Score between 80-100 for quality
        source: "indian_market_discovery",
        sourceData: { 
          market: "India",
          focus: aiDomains[Math.floor(Math.random() * aiDomains.length)],
          discovered_at: new Date().toISOString() 
        },
        isActive: "true",
        publishedAt: new Date()
      };

      await storage.createOpportunity(newOpportunity);
      console.log(`🇮🇳 Discovered new Indian AI opportunity: ${newOpportunity.title}`);
      
    } catch (error) {
      console.error("Error scanning for opportunities:", error);
    }
  }

  async calculateTalentScore(talent: any): Promise<number> {
    // Simple scoring algorithm for testing
    let score = 50; // Base score

    // GitHub metrics
    if (talent.sourceData?.stars) score += Math.min(talent.sourceData.stars / 100, 20);
    if (talent.sourceData?.followers) score += Math.min(talent.sourceData.followers / 50, 15);
    if (talent.sourceData?.repositories) score += Math.min(talent.sourceData.repositories * 2, 10);

    // Skills relevance
    const hotSkills = ["AI", "Machine Learning", "React", "TypeScript", "Blockchain", "AWS"];
    const skillMatch = talent.skills?.filter((skill: string) => 
      hotSkills.some(hot => skill.toLowerCase().includes(hot.toLowerCase()))
    ).length || 0;
    score += skillMatch * 3;

    return Math.min(Math.max(score, 0), 100);
  }

  async getTopTalents(limit: number = 10): Promise<any[]> {
    return await storage.getTalents(limit);
  }

  async getTopOpportunities(limit: number = 10): Promise<any[]> {
    return await storage.getOpportunities(limit);
  }

  // Get analytics for the talent scouting system
  async getScoutingAnalytics(): Promise<any> {
    const talents = await storage.getTalents(100);
    const opportunities = await storage.getOpportunities(100);
    
    return {
      totalTalents: talents.length,
      totalOpportunities: opportunities.length,
      indianTalents: talents.filter(t => t.location?.includes('India')).length,
      averageAIScore: Math.round(talents.reduce((sum, t) => sum + (t.aiScore || 0), 0) / talents.length),
      topSkills: this.getTopSkills(talents),
      topLocations: this.getTopLocations(talents),
      sourcesBreakdown: this.getSourcesBreakdown(talents),
      recentActivity: {
        talentsLastWeek: talents.filter(t => 
          new Date(t.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
        ).length,
        opportunitiesLastWeek: opportunities.filter(o => 
          new Date(o.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
        ).length
      }
    };
  }

  private getTopSkills(talents: any[]): string[] {
    const skillCounts: { [key: string]: number } = {};
    talents.forEach(talent => {
      talent.skills?.forEach((skill: string) => {
        skillCounts[skill] = (skillCounts[skill] || 0) + 1;
      });
    });
    
    return Object.entries(skillCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([skill]) => skill);
  }

  private getTopLocations(talents: any[]): string[] {
    const locationCounts: { [key: string]: number } = {};
    talents.forEach(talent => {
      if (talent.location) {
        locationCounts[talent.location] = (locationCounts[talent.location] || 0) + 1;
      }
    });
    
    return Object.entries(locationCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([location]) => location);
  }

  private getSourcesBreakdown(talents: any[]): { [key: string]: number } {
    const sourceCounts: { [key: string]: number } = {};
    talents.forEach(talent => {
      sourceCounts[talent.source] = (sourceCounts[talent.source] || 0) + 1;
    });
    return sourceCounts;
  }
}

export const talentScout = new TalentScout();
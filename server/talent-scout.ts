import { storage } from "./storage";
import type { InsertTalent, InsertOpportunity } from "@shared/schema";

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
    console.log("Starting talent scout scanning...");

    // Initialize with mock data first
    await this.initializeMockData();

    // Set up periodic scanning (every 30 minutes)
    setInterval(async () => {
      await this.scanForNewTalent();
      await this.scanForOpportunities();
    }, 30 * 60 * 1000);

    // Run initial scan
    await this.scanForNewTalent();
    await this.scanForOpportunities();
  }

  private async scanForNewTalent(): Promise<void> {
    console.log("Scanning for new talent...");
    
    try {
      // In a real implementation, we would:
      // 1. Fetch from GitHub API for trending repositories
      // 2. Parse HackerNews for active contributors
      // 3. Check dev.to for prolific writers
      // 4. Monitor ProductHunt for makers
      
      // For now, we'll simulate discovering new talent
      const newTalent: InsertTalent = {
        name: `Developer ${Math.floor(Math.random() * 1000)}`,
        title: "Software Engineer",
        company: "Tech Startup",
        location: "Remote",
        skills: ["JavaScript", "React", "Node.js"],
        bio: "Passionate developer working on innovative projects.",
        githubUrl: `https://github.com/dev${Math.floor(Math.random() * 1000)}`,
        aiScore: Math.floor(Math.random() * 40) + 60, // Score between 60-100
        source: "github_discovery",
        sourceData: { repositories: Math.floor(Math.random() * 20) + 5 },
        isActive: "true"
      };

      await storage.createTalent(newTalent);
      console.log(`Discovered new talent: ${newTalent.name}`);
      
    } catch (error) {
      console.error("Error scanning for talent:", error);
    }
  }

  private async scanForOpportunities(): Promise<void> {
    console.log("Scanning for new opportunities...");
    
    try {
      // In a real implementation, we would:
      // 1. Parse job boards and startup directories
      // 2. Monitor funding announcements
      // 3. Check for new open source projects
      // 4. Analyze market trends
      
      // For now, simulate discovering new opportunities
      const opportunityTypes = ["startup", "job", "project", "funding"];
      const randomType = opportunityTypes[Math.floor(Math.random() * opportunityTypes.length)];
      
      const newOpportunity: InsertOpportunity = {
        title: `New ${randomType} Opportunity #${Math.floor(Math.random() * 1000)}`,
        company: `Innovation Co ${Math.floor(Math.random() * 100)}`,
        description: `Exciting ${randomType} opportunity in the tech space. Great potential for growth and impact.`,
        type: randomType,
        url: `https://example.com/opportunity${Math.floor(Math.random() * 1000)}`,
        tags: ["Technology", "Innovation", "Remote"],
        matchScore: Math.floor(Math.random() * 30) + 70, // Score between 70-100
        source: "auto_discovery",
        sourceData: { discovered_at: new Date().toISOString() },
        isActive: "true",
        publishedAt: new Date()
      };

      await storage.createOpportunity(newOpportunity);
      console.log(`Discovered new opportunity: ${newOpportunity.title}`);
      
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
}

export const talentScout = new TalentScout();
import { 
  contacts, newsletters, talents, opportunities,
  type Contact, type InsertContact, 
  type Newsletter, type InsertNewsletter,
  type Talent, type InsertTalent,
  type Opportunity, type InsertOpportunity
} from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletters(): Promise<Newsletter[]>;
  
  // Talent methods
  createTalent(talent: InsertTalent): Promise<Talent>;
  getTalents(limit?: number): Promise<Talent[]>;
  updateTalentScore(id: number, score: number): Promise<void>;
  
  // Opportunity methods
  createOpportunity(opportunity: InsertOpportunity): Promise<Opportunity>;
  getOpportunities(limit?: number): Promise<Opportunity[]>;
  updateOpportunityScore(id: number, score: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private talents: Map<number, Talent>;
  private opportunities: Map<number, Opportunity>;
  private contactId: number;
  private newsletterId: number;
  private talentId: number;
  private opportunityId: number;

  constructor() {
    this.contacts = new Map();
    this.newsletters = new Map();
    this.talents = new Map();
    this.opportunities = new Map();
    this.contactId = 1;
    this.newsletterId = 1;
    this.talentId = 1;
    this.opportunityId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === insertNewsletter.email
    );
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = this.newsletterId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  // Talent methods
  async createTalent(insertTalent: InsertTalent): Promise<Talent> {
    const id = this.talentId++;
    const talent: Talent = {
      ...insertTalent,
      id,
      createdAt: new Date(),
      lastUpdated: new Date(),
      title: insertTalent.title || null,
      company: insertTalent.company || null,
      location: insertTalent.location || null,
      skills: insertTalent.skills || null,
      bio: insertTalent.bio || null,
      githubUrl: insertTalent.githubUrl || null,
      linkedinUrl: insertTalent.linkedinUrl || null,
      twitterUrl: insertTalent.twitterUrl || null,
      aiScore: insertTalent.aiScore || 0,
      sourceData: insertTalent.sourceData || null,
      isActive: insertTalent.isActive || "true",
    };
    this.talents.set(id, talent);
    return talent;
  }

  async getTalents(limit: number = 50): Promise<Talent[]> {
    const talents = Array.from(this.talents.values())
      .sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0))
      .slice(0, limit);
    return talents;
  }

  async updateTalentScore(id: number, score: number): Promise<void> {
    const talent = this.talents.get(id);
    if (talent) {
      talent.aiScore = score;
      talent.lastUpdated = new Date();
    }
  }

  // Opportunity methods
  async createOpportunity(insertOpportunity: InsertOpportunity): Promise<Opportunity> {
    const id = this.opportunityId++;
    const opportunity: Opportunity = {
      ...insertOpportunity,
      id,
      createdAt: new Date(),
      company: insertOpportunity.company || null,
      description: insertOpportunity.description || null,
      url: insertOpportunity.url || null,
      tags: insertOpportunity.tags || null,
      matchScore: insertOpportunity.matchScore || 0,
      sourceData: insertOpportunity.sourceData || null,
      isActive: insertOpportunity.isActive || "true",
      publishedAt: insertOpportunity.publishedAt || null,
    };
    this.opportunities.set(id, opportunity);
    return opportunity;
  }

  async getOpportunities(limit: number = 50): Promise<Opportunity[]> {
    const opportunities = Array.from(this.opportunities.values())
      .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
      .slice(0, limit);
    return opportunities;
  }

  async updateOpportunityScore(id: number, score: number): Promise<void> {
    const opportunity = this.opportunities.get(id);
    if (opportunity) {
      opportunity.matchScore = score;
    }
  }
}

export const storage = new MemStorage();

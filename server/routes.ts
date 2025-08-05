import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { talentScout } from "./talent-scout";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize talent scout
  await talentScout.startScanning();

  // Talent Scout API endpoints
  app.get("/api/talents", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const talents = await storage.getTalents(limit);
      res.json({ success: true, talents });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch talents" 
      });
    }
  });

  app.get("/api/opportunities", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const opportunities = await storage.getOpportunities(limit);
      res.json({ success: true, opportunities });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch opportunities" 
      });
    }
  });

  // Analytics endpoint
  app.get("/api/scout/analytics", async (req, res) => {
    try {
      const analytics = await talentScout.getScoutingAnalytics();
      res.json({ success: true, analytics });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch analytics" 
      });
    }
  });

  // Filter talents by location
  app.get("/api/talents/location/:location", async (req, res) => {
    try {
      const location = req.params.location;
      const limit = parseInt(req.query.limit as string) || 20;
      const allTalents = await storage.getTalents(100);
      const filteredTalents = allTalents
        .filter(talent => talent.location?.toLowerCase().includes(location.toLowerCase()))
        .slice(0, limit);
      
      res.json({ success: true, talents: filteredTalents, count: filteredTalents.length });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch talents by location" 
      });
    }
  });

  // Filter talents by skill
  app.get("/api/talents/skill/:skill", async (req, res) => {
    try {
      const skill = req.params.skill;
      const limit = parseInt(req.query.limit as string) || 20;
      const allTalents = await storage.getTalents(100);
      const filteredTalents = allTalents
        .filter(talent => 
          talent.skills?.some(s => s.toLowerCase().includes(skill.toLowerCase()))
        )
        .slice(0, limit);
      
      res.json({ success: true, talents: filteredTalents, count: filteredTalents.length });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch talents by skill" 
      });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(newsletterData);
      res.json({ success: true, newsletter });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid email address", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message === "Email already subscribed") {
        res.status(409).json({ 
          success: false, 
          message: "This email is already subscribed to our newsletter" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Get all newsletter subscribers (for admin purposes)
  app.get("/api/newsletters", async (req, res) => {
    try {
      const newsletters = await storage.getNewsletters();
      res.json({ success: true, newsletters });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch newsletter subscribers" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

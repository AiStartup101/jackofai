import { pgTable, text, serial, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  category: text("category").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const talents = pgTable("talents", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title"),
  company: text("company"),
  location: text("location"),
  skills: text("skills").array(),
  bio: text("bio"),
  githubUrl: text("github_url"),
  linkedinUrl: text("linkedin_url"),
  twitterUrl: text("twitter_url"),
  aiScore: integer("ai_score").default(0),
  source: text("source").notNull(),
  sourceData: jsonb("source_data"),
  isActive: text("is_active").default("true"),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const opportunities = pgTable("opportunities", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company"),
  description: text("description"),
  type: text("type").notNull(), // startup, job, project, funding
  url: text("url"),
  tags: text("tags").array(),
  matchScore: integer("match_score").default(0),
  source: text("source").notNull(),
  sourceData: jsonb("source_data"),
  isActive: text("is_active").default("true"),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  createdAt: true,
});

export const insertTalentSchema = createInsertSchema(talents).omit({
  id: true,
  createdAt: true,
  lastUpdated: true,
});

export const insertOpportunitySchema = createInsertSchema(opportunities).omit({
  id: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

export type InsertTalent = z.infer<typeof insertTalentSchema>;
export type Talent = typeof talents.$inferSelect;

export type InsertOpportunity = z.infer<typeof insertOpportunitySchema>;
export type Opportunity = typeof opportunities.$inferSelect;

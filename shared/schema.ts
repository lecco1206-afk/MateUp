import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const teamRecruitments = pgTable("team_recruitments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  school: text("school").notNull(),
  department: text("department").notNull(),
  studentId: text("student_id").notNull(),
  phone: text("phone").notNull(),
  recruitmentFields: text("recruitment_fields").array().notNull(),
  projectName: text("project_name").notNull(),
  introduction: text("introduction").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const advertiserApplications = pgTable("advertiser_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  ceoName: text("ceo_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const adminUsers = pgTable("admin_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertTeamRecruitmentSchema = createInsertSchema(teamRecruitments).omit({
  id: true,
  createdAt: true,
});

export const insertAdvertiserApplicationSchema = createInsertSchema(advertiserApplications).omit({
  id: true,
  createdAt: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
});

export type InsertTeamRecruitment = z.infer<typeof insertTeamRecruitmentSchema>;
export type TeamRecruitment = typeof teamRecruitments.$inferSelect;

export type InsertAdvertiserApplication = z.infer<typeof insertAdvertiserApplicationSchema>;
export type AdvertiserApplication = typeof advertiserApplications.$inferSelect;

export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;

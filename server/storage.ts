import { 
  type TeamRecruitment, 
  type InsertTeamRecruitment,
  type AdvertiserApplication,
  type InsertAdvertiserApplication,
  type AdminUser,
  type InsertAdminUser
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getTeamRecruitment(id: string): Promise<TeamRecruitment | undefined>;
  getAllTeamRecruitments(): Promise<TeamRecruitment[]>;
  createTeamRecruitment(data: InsertTeamRecruitment): Promise<TeamRecruitment>;
  
  getAdvertiserApplication(id: string): Promise<AdvertiserApplication | undefined>;
  getAllAdvertiserApplications(): Promise<AdvertiserApplication[]>;
  createAdvertiserApplication(data: InsertAdvertiserApplication): Promise<AdvertiserApplication>;
  
  getAdminByUsername(username: string): Promise<AdminUser | undefined>;
  createAdmin(data: InsertAdminUser): Promise<AdminUser>;
}

export class MemStorage implements IStorage {
  private teamRecruitments: Map<string, TeamRecruitment>;
  private advertiserApplications: Map<string, AdvertiserApplication>;
  private admins: Map<string, AdminUser>;

  constructor() {
    this.teamRecruitments = new Map();
    this.advertiserApplications = new Map();
    this.admins = new Map();
  }

  async getTeamRecruitment(id: string): Promise<TeamRecruitment | undefined> {
    return this.teamRecruitments.get(id);
  }

  async getAllTeamRecruitments(): Promise<TeamRecruitment[]> {
    return Array.from(this.teamRecruitments.values());
  }

  async createTeamRecruitment(insertData: InsertTeamRecruitment): Promise<TeamRecruitment> {
    const id = randomUUID();
    const data: TeamRecruitment = { 
      ...insertData, 
      id,
      createdAt: new Date()
    };
    this.teamRecruitments.set(id, data);
    return data;
  }

  async getAdvertiserApplication(id: string): Promise<AdvertiserApplication | undefined> {
    return this.advertiserApplications.get(id);
  }

  async getAllAdvertiserApplications(): Promise<AdvertiserApplication[]> {
    return Array.from(this.advertiserApplications.values());
  }

  async createAdvertiserApplication(insertData: InsertAdvertiserApplication): Promise<AdvertiserApplication> {
    const id = randomUUID();
    const data: AdvertiserApplication = { 
      ...insertData, 
      id,
      createdAt: new Date()
    };
    this.advertiserApplications.set(id, data);
    return data;
  }

  async getAdminByUsername(username: string): Promise<AdminUser | undefined> {
    return Array.from(this.admins.values()).find(
      (admin) => admin.username === username,
    );
  }

  async createAdmin(insertData: InsertAdminUser): Promise<AdminUser> {
    const id = randomUUID();
    const admin: AdminUser = { ...insertData, id };
    this.admins.set(id, admin);
    return admin;
  }
}

export const storage = new MemStorage();

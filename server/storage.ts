import { type ContactFormData } from "@shared/schema";

export interface IStorage {
  saveContactSubmission(data: ContactFormData): Promise<{ id: string }>;
  getContactSubmissions(): Promise<ContactFormData[]>;
}

export class MemStorage implements IStorage {
  private submissions: Map<string, ContactFormData>;

  constructor() {
    this.submissions = new Map();
  }

  async saveContactSubmission(data: ContactFormData): Promise<{ id: string }> {
    const id = crypto.randomUUID();
    this.submissions.set(id, data);
    return { id };
  }

  async getContactSubmissions(): Promise<ContactFormData[]> {
    return Array.from(this.submissions.values());
  }
}

export const storage = new MemStorage();
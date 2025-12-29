import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().optional(),
  message: z.string().min(10, "Please tell us more about your project"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}
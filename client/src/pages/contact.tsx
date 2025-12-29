import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, MessageCircle, Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Layout } from "@/components/layout/layout";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

const services = [
  { value: "construction", label: "Construction & Building" },
  { value: "renovations", label: "Renovations" },
  { value: "tiling", label: "Tiling Services" },
  { value: "cleaning", label: "Cleaning Services" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const sendMail = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/send-mail", data);
      return response;
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    sendMail.mutate(data);
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your building and cleaning services.`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <Layout>
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-contact-heading">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to start building, renovating, or cleaning? Get in touch with us today for a free quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get a Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-[#25D366]" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            {...form.register("name")}
                            data-testid="input-name"
                          />
                          {form.formState.errors.name && (
                            <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Your phone number"
                            {...form.register("phone")}
                            data-testid="input-phone"
                          />
                          {form.formState.errors.phone && (
                            <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email address"
                            {...form.register("email")}
                            data-testid="input-email"
                          />
                          {form.formState.errors.email && (
                            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed</Label>
                          <Select onValueChange={(value) => form.setValue("service", value)}>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us what you're building or renovating..."
                          rows={5}
                          {...form.register("message")}
                          data-testid="input-message"
                        />
                        {form.formState.errors.message && (
                          <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto gap-2 bg-[#F39A1E] hover:bg-[#E08A0E] text-white"
                        disabled={sendMail.isPending}
                        data-testid="button-submit"
                      >
                        {sendMail.isPending ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Get a Free Quote
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-4 p-4 rounded-md bg-muted/50 hover-elevate"
                    data-testid="link-contact-phone"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F39A1E]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#F39A1E]" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p className="text-muted-foreground">084 569 4531</p>
                    </div>
                  </a>

                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center gap-4 p-4 rounded-md bg-muted/50 hover-elevate w-full text-left"
                    data-testid="button-contact-whatsapp"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">Chat with us</p>
                    </div>
                  </button>

                  <a
                    href="mailto:info@theelandbuildingconandcleaningserv.co.za"
                    className="flex items-center gap-4 p-4 rounded-md bg-muted/50 hover-elevate"
                    data-testid="link-contact-email"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">Get in touch</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-md bg-muted/50">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Service Area</p>
                      <p className="text-muted-foreground">South Africa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1E3A5F] text-white border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Prefer to Call?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Speak directly with Christopher about your project
                  </p>
                  <Button
                    size="lg"
                    onClick={handleCall}
                    className="w-full gap-2 bg-[#F39A1E] hover:bg-[#E08A0E] text-white"
                    data-testid="button-card-call"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
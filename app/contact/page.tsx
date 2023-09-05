"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { Compass, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

interface CopyToClipboardTooltipProps {
  trigger: string;
  successMessage?: string;
}

const CopyToClipboardTooltip = ({
  trigger,
  successMessage,
}: CopyToClipboardTooltipProps) => {
  const { toast } = useToast();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className="cursor-pointer duration-200 active:scale-95"
            onClick={() => {
              navigator.clipboard.writeText(trigger);
              toast({
                variant: "default",
                title: "Copied to clipboard",
                description: `${
                  successMessage
                    ? successMessage.charAt(0).toUpperCase() +
                      successMessage.slice(1)
                    : trigger
                } copied to clipboard`,
              });
            }}
          >
            {trigger}
          </span>
        </TooltipTrigger>
        <TooltipContent side="left">Copy to clipboard</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const FormSection = () => {
  return (
    <section className="grid max-w-6xl w-full mx-auto p-4 py-12">
      <h3 className="uppercase font-medium lg:text-lg">
        have be any questions?
      </h3>
      <h2 className="text-2xl lg:text-4xl font-bold mt-2">
        Feel free to get in touch with us at any time
      </h2>
      <div className="grid gap-4 pt-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <Input
            className="bg-slate-700 border border-slate-500 focus:border-slate-200"
            type="text"
            id="firstName"
            placeholder="First name *"
          />
          <Input
            className="bg-slate-700 border border-slate-500 focus:border-slate-200"
            type="text"
            id="lastName"
            placeholder="Last name *"
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Input
            className="bg-slate-700 border border-slate-500 focus:border-slate-200"
            type="email"
            id="email"
            placeholder="Your email *"
          />
          <Input
            className="bg-slate-700 border border-slate-500 focus:border-slate-200"
            type="text"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <Textarea
          className="bg-slate-700 border border-slate-500 focus:border-slate-200"
          id="message"
          placeholder="Your message..."
        />
        <Button variant="default">Send message</Button>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="grid bg-center relative bg-no-repeat bg-cover bg-[url('/assets/contact-header.jpg')]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800 z-10"></div>
      <div className="grid max-w-6xl p-4 mx-auto w-full z-20">
        <div className="mb-12">
          <Navbar />
        </div>
        <div className="gap-4 lg:grid-cols-3 grid">
          <Card className="bg-slate-700 border-slate-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass size={18} strokeWidth={2} />
                Address
              </CardTitle>
              <CardDescription className="text-slate-200 text-base pt-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="#MapSection">
                        123 Main Street
                        <br />
                        New York, NY 12345
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>View on map</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-slate-700 border-slate-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone size={18} strokeWidth={2} />
                Phone
              </CardTitle>
              <CardDescription className="text-slate-200 text-base pt-2">
                Mobile:{" "}
                {CopyToClipboardTooltip({
                  trigger: "+1 133 005 1996",
                  successMessage: "Mobile number",
                })}
                <br />
                Hotline:{" "}
                {CopyToClipboardTooltip({
                  trigger: "+1 133 005 1996",
                  successMessage: "Hotline number",
                })}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-slate-700 border-slate-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail size={18} strokeWidth={2} />
                Email
              </CardTitle>
              <CardDescription className="text-slate-200 text-base pt-2">
                {CopyToClipboardTooltip({ trigger: "info@pixoto.com" })}
                <br />
                {CopyToClipboardTooltip({ trigger: "contact@pixoto.com" })}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="grid w-full my-12" id="MapSection">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16049.148558300005!2d-73.99870451382385!3d40.716504528662846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1693239999375!5m2!1suk!2sua"
        width="600"
        height="600"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </section>
  );
};

const ContactPage = () => {
  return (
    <>
      <HeroSection />
      <FormSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default ContactPage;

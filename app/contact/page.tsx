
import ContactFoot from "@/components/ContactFoot";
import ContactHead from "@/components/ContactHead";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact " + siteConfig.name ,
}
 
export default function Contact() {
  return (
    <main className="overflow-hidden">
    <ContactHead/>
  <ContactFoot/>
    </main>
  );
}

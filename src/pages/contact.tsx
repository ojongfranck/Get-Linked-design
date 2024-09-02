import ContactForm from "@/components/contact/form";
import react from "react"
export default function Contact() {
  return (
    <section>
      <div className="container">
        <h1 className="text-xl font-bold">Contact page</h1>
        <div className="grid grid-cols-2">
          <div className=""></div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

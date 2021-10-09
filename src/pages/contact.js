import React from "react";
import { ContactForm } from "../components/contactForm";
import { Layout } from "../components/layout";
import { PageTitle } from "../components/pageTitle";

const Contact = () => {
  return (
    <Layout>
      <PageTitle title={"Contact"} />

      <div className="flex items-center w-full h-full justify-center">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;

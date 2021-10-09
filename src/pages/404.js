import React from "react";
import { Layout } from "../components/layout";

const Error404 = () => {
  return (
    <Layout>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="text-text-primary text-5xl font-semibold">
          Page not found
        </div>
        <div className="text-text-primary text-3xl">
          Oops! The page you are looking for does not exist.
        </div>
      </div>
    </Layout>
  );
};

export default Error404;

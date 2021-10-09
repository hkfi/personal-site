import React from "react";
import { Helmet } from "react-helmet";

export const HTMLHeader = () => {
  return (
    <Helmet>
      <title>hirokicodes</title>
      <meta name="description" content="Full-Stack Developer" />
      <meta
        name="keywords"
        content="hirokicodes, developer, software engineer, full-stack, JavaScript, GraphQL, Vue, React"
      />
      <meta name="author" content="hirokicodes" />
    </Helmet>
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PersonData {
  name: string;
  jobTitle: string;
  url: string;
  email?: string;
  sameAs?: string[];
  skills?: string[];
}

const StructuredData = ({
  name = "Niwahang",
  jobTitle = "Web Developer",
  url = "https://niwahang.com.np",
  email = "niwahang00@gmail.com",
  sameAs = [
    "https://github.com/Niwahan",
    "https://linkedin.com/in/Niwahan"
  ],
  skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Express", 
    "MongoDB", "SQL", "HTML", "CSS", "Tailwind CSS"
  ]
}: PersonData) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    email,
    sameAs,
    knowsAbout: skills
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${name}'s Portfolio`,
    url,
    description: `${name}'s personal portfolio showcasing web development projects and skills`,
    author: {
      "@type": "Person",
      name
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({
  title = "Niwahang Portfolio - Web Developer & Designer",
  description = "Niwahang's portfolio showcasing web development projects, skills in React, TypeScript, and modern web technologies",
  canonical = "https://niwahang.com.np",
  ogImage = "/og-image.jpg",
  ogType = "website"
}: SEOProps) => {
  const siteTitle = title.includes("Niwahang") ? title : `${title} | Niwahang's Portfolio`;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
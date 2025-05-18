import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundElements from "./BackgroundElements";
import SEO from "./SEO";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const Layout = ({
  children,
  title,
  description,
  canonical,
  ogImage,
  ogType,
}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        ogType={ogType}
      />
      <BackgroundElements />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

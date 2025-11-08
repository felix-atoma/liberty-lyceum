import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Liberty Lyceum - Premier Christian International School in Baatsona Spintex, Accra",
  description = "Liberty Lyceum offers world-class IB & Cambridge International curricula with Christian values in Ghana. Nurturing winners and more than conquerors through innovative edutainment. Enroll today for quality education in Accra.",
  keywords = "international school Ghana, IB school Accra, Cambridge curriculum Ghana, Christian school Accra, Baatsona Spintex school, best schools in Accra, international education Ghana, British curriculum Ghana, American curriculum Ghana, private school Accra, quality education Ghana, Christian international school, IB World School Ghana, Cambridge International School, preschool Accra, primary school Accra, secondary school Accra",
  image = "https://libertylyceum.edu.gh/og-image.jpg",
  url = "https://libertylyceum.edu.gh",
  type = "website",
  author = "Liberty Lyceum",
  locale = "en_GH"
}) => {
  const siteName = "Liberty Lyceum"
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en-GH" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="GH-AA" />
      <meta name="geo.placename" content="Accra" />
      <meta name="geo.position" content="5.6037;-0.1870" />
      <meta name="ICBM" content="5.6037, -0.1870" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Liberty Lyceum International School Campus" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Liberty Lyceum International School" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Enhanced Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": siteName,
          "alternateName": "Liberty Lyceum International School",
          "description": description,
          "url": url,
          "logo": `${url}/logo.png`,
          "image": image,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Baatsona, Spintex Road",
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra",
            "postalCode": "00233",
            "addressCountry": "GH"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "5.6037",
            "longitude": "-0.1870"
          },
          "telephone": "+233-24-123-4567",
          "email": "info@libertylyceum.edu.gh",
          "areaServed": {
            "@type": "City",
            "name": "Accra"
          },
          "curriculumType": ["IB Curriculum", "Cambridge International"],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "IB World School"
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Cambridge International School"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/libertylyceum",
            "https://www.instagram.com/libertylyceum",
            "https://twitter.com/libertylyceum",
            "https://www.linkedin.com/company/libertylyceum"
          ],
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Additional Schema for Educational Programs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "Course",
              "name": "IB Primary Years Programme",
              "provider": {
                "@type": "EducationalOrganization",
                "name": siteName
              },
              "courseCode": "PYP"
            },
            {
              "@type": "Course",
              "name": "Cambridge International Curriculum",
              "provider": {
                "@type": "EducationalOrganization",
                "name": siteName
              },
              "courseCode": "CAMBRIDGE"
            }
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO
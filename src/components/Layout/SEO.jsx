import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Liberty Lyceum - Premier Christian International School in Baatsona Spintex",
  description = "Liberty Lyceum offers IB & Cambridge curricula with Christian values. Nurturing winners more than conquerors through innovative edutainment in Ghana.",
  keywords = "international school Ghana, IB school Accra, Cambridge curriculum, Christian school, Baatsona Spintex",
  image = "/og-image.jpg",
  url = "https://libertylyceum.edu.gh",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Liberty Lyceum",
          "description": description,
          "url": url,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Baatsona, Spintex Road",
            "addressLocality": "Accra",
            "addressCountry": "GH"
          },
          "telephone": "+233-24-123-4567"
        })}
      </script>
    </Helmet>
  )
}

export default SEO
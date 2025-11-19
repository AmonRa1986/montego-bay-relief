import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEOHead({ 
  title = "Montego Bay Relief | Hurricane Melissa Disaster Relief & Jamaica Humanitarian Aid",
  description = "Montego Bay Relief, Inc. provides urgent hurricane disaster relief, humanitarian aid, educational support, and community rebuilding to families in Montego Bay, Jamaica affected by Hurricane Melissa. 501(c)(3) pending nonprofit founded by individuals with deep roots in the Montego Bay community.",
  keywords = "Montego Bay relief, Jamaica disaster relief, Hurricane Melissa aid, Caribbean hurricane recovery, Jamaica humanitarian aid, Montego Bay nonprofit, Jamaica charity, hurricane relief Jamaica, Montego Bay donations, Jamaica emergency relief, Caribbean disaster response, Jamaica community development, Montego Bay families, Jamaica relief organization, hurricane recovery Jamaica, Montego Bay humanitarian support, Jamaica relief fund, Caribbean relief efforts, Jamaica nonprofit organization, Montego Bay disaster response"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags for social sharing
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Montego Bay Relief, Inc.', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    
  }, [title, description, keywords]);
  
  return null;
}

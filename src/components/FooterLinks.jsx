import React from 'react';

function FooterLinks() {
  const footerSections = [
    {
      title: 'Product',
      links: ['Pricing', 'Solutions', 'Education', 'Team plans']
    },
    {
      title: 'About us',
      links: ['About', 'Branding', 'Newsroom', 'Partnerships', 'Affiliates', 'Careers']
    },
    {
      title: 'Help and support',
      links: ['Help center', 'Contact us', 'Privacy & Terms', 'Safety information', 'Sitemap']
    },
    {
      title: 'Community',
      links: ['Agencies', 'Freelancers', 'Engineers']
    }
  ];

  return (
    <div className="flex gap-10 items-start mt-10 text-sm text-stone-500 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-base text-zinc-800">{section.title}</h3>
            {section.links.map((link, linkIndex) => (
              <a key={linkIndex} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="mt-2">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterLinks;
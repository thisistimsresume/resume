import './globals.css';

export const metadata = {
  title: 'Tim Curtis | Marketing Automation and Operations Expert',
  description: 'Technical marketing automation and operations portfolio showcasing automation, email development, and cross-functional project work.',
  keywords: 'marketing operations, email marketing, marketing automation, Marketo, HubSpot, Salesforce Marketing Cloud',
  authors: [{ name: 'Tim Curtis' }],
  creator: 'Tim Curtis',
  metadataBase: new URL('https://thisistimsresume.com'),
  openGraph: {
    title: 'Tim Curtis | Marketing Automation and Operations Expert',
    description: 'Technical marketing operations and automatioin portfolio showcasing development projects, and cross-functional project work.',
    url: 'https://thisistimsresume.com',
    siteName: 'This is Tims Resume',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/stylesheet.css" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

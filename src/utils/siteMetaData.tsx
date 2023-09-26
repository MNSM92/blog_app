const siteMetadata: {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  theme: 'system' | 'dark' | 'light'; // System, dark, or light theme
  siteUrl: string; // Your website URL
  siteLogo: string;
  socialBanner: string; // Add social banner in the public folder
  email: string;
  github: string;
  twitter: string;
  facebook: string;
  youtube: string;
  linkedin: string;
  dribbble: string;
  locale: string;
} = {
  title: 'Next.js Blog With Tailwind CSS and Contentlayer',
  author: 'CodeBucks',
  headerTitle: 'Next.js Blog',
  description: 'A blog created with Next.js, Tailwind.css and contentlayer.',
  language: 'en-us',
  theme: 'system', // System, dark, or light theme
  siteUrl: 'https://create-blog-with-nextjs.vercel.app', // Your website URL
  siteLogo: '/logo.png',
  socialBanner: '/social-banner.png', // Add social banner in the public folder
  email: 'codebucks27@gmail.com',
  github: 'https://github.com/codebucks27',
  twitter: 'https://twitter.com/code_bucks',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com/codebucks',
  linkedin: 'https://www.linkedin.com/in/codebucks/',
  dribbble: 'https://www.dribbble.com',
  locale: 'en-US',
};

export default siteMetadata;

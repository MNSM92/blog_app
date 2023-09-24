import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Head from 'next/head';
import Link from 'next/link';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about me and my background.',
};

const About: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have a project in mind? Reach out to me{' '}
        <span role="link">
        <Link href="/contact" className="underline underline-offset-2" passHref>
          Contact Us
        </Link>
        </span>{' '}
        and let&apos;s make it happen. 📞
      </h2>
    </>
  );
};

export default About;

export interface Blog {
    title: string;
    publishedAt: string;
    updatedAt?: string;
    description: string;
    image?: {
        filePath: string;
        relativeFilePath: string;
        format: string;
        height: number;
        width: number;
        aspectRatio: number;
        blurhashDataUrl: string;
      };
      _id: string;
    _raw: {
        sourceFilePath: string;
        sourceFileName: string;
        sourceFileDir: string;
        contentType: string;
        flattenedPath: string;
    };
    type: string;
    url: string;
    readingTime: {
        text: string;
        minutes: number;
        time: number;
        words: number
    }
    isPublished: boolean;
    author: string;
    tags?: string[];
    body: {
        raw: string;
    }
    toc: {
      level: string;
      text: string;
      slug: string;
    }[]
  }


  export interface BlogPageProps {
    params: { slug: string };

  }

  export interface JsonLdAuthor {
    "@type": "Person";
    "name": string[];
    "url": string;
  }

  export interface JsonLd {
    "@context": string;
    "@type": string;
    "headline": string;
    "description": string;
    "image": string[];
    "datePublished": string;
    "dateModified": string;
    "author": JsonLdAuthor[];
  }

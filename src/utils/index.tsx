import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: string[]): string =>
  classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs: { publishedAt: string }[]): {
  publishedAt: string;
}[] => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

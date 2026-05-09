import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "Sachin Gautam — Writing",
    description:
      "Notes from an AI product manager building in public. Product, AI, and the occasional half-built prototype.",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.dek,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      author: "sachingautam017@gmail.com (Sachin Gautam)",
    })),
    customData: `<language>en-us</language>`,
  });
}

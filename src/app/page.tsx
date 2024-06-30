import { getTopStories } from "@/services/hn";
import Link from "next/link";

export default async function Home() {
  const topstories = await getTopStories();

  return (
    <main>
      { topstories.map((story, index) => {
        const url = new URL(story.url);

        return (
          <div className="leading-none mb-4">
            <a title={story.title} href={story.url} target="_blank" className="whitespace-nowrap text-ellipsis overflow-hidden block font-bold visited:text-slate-500">{index+1}. {story.title}</a>
            <div className="text-xs text-slate-700">{url.host} - <Link href={`/${story.id}`}>{story.score} poäng - {story.descendants || 'Inga'} kommentarer - {Math.floor(Date.now()/1000 - story.time)} sekunder sedan</Link></div>
          </div>
        )
      }) }
    </main>
  );
}

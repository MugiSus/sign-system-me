import { Metadata } from "next";
import Demo from "./demo";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ t: string }>;
}): Promise<Metadata> {
  const paramsText = (await searchParams).t || "";
  const encodedText = encodeURIComponent(paramsText);

  return {
    title: "Sign System Me",
    description: "Love metro signs",
    openGraph: {
      images: [
        {
          url: paramsText ? `/api/og?text=${encodedText}` : "/api/og",
          width: 1200,
          height: 630,
          alt: "Sign System Me",
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-svh justify-center items-center overflow-x-hidden">
      <Demo />
    </main>
  );
}

import { Metadata } from "next";
import Demo from "./demo";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ t: string }>;
}): Promise<Metadata> {
  const paramsText = (await searchParams).t || "";
  const encodedText = encodeURIComponent(paramsText);

  const pool = paramsText.match(/[gmhtcyznfeais]/g) ?? "signsystemme".split('');
  const char = pool[Math.floor(Math.random() * pool.length)];

  return {
    title: "Sign System Me",
    description: "❤️ Metro Signs",
    icons: {
      icon: `/api/icon?char=${char}`,
    },
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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ t: string }>;
}) {
  const defaultText = (await searchParams).t || "sign\nsystem\nme";

  return (
    <main className="flex min-h-full flex-col items-center justify-center overflow-x-hidden">
      <Demo defaultText={defaultText} />
    </main>
  );
}

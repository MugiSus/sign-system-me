import { Metadata } from "next";
import Demo from "./demo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sign System Me",
    description: "Love metro signs",
    openGraph: {
      images: [
        {
          url: "/api/og",
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

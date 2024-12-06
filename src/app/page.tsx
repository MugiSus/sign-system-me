"use client";

import { useState } from "react";

import Ginza from "./signs/ginza.svg"; // G
import Marunouchi from "./signs/marunouchi.svg"; // M
import Hibiya from "./signs/hibiya.svg"; // H
import Tozai from "./signs/tozai.svg"; // T
import Chiyoda from "./signs/chiyoda.svg"; // C
import Yurakucho from "./signs/yurakucho.svg"; // Y
import Hanzomon from "./signs/hanzomon.svg"; // Z
import Namboku from "./signs/namboku.svg"; // N
import Fukutoshin from "./signs/fukutoshin.svg"; // F
import Asakusa from "./signs/asakusa.svg"; // A
import Oedo from "./signs/oedo.svg"; // E
import Mita from "./signs/mita.svg"; // I
import Shinjuku from "./signs/shinjuku.svg"; // S

export default function Home() {
  const [string, setString] = useState("sign\nsystem\nme");

  return (
    <main className="flex flex-col min-h-svh justify-center items-center overflow-x-hidden">
      <div className="flex flex-col my-auto">
        {string.split("\n").map((line, i) => (
          <div key={i} className="flex">
            {line
              .trim()
              .toLowerCase()
              .split("")
              .map((char, j) => {
                switch (char) {
                  case "g":
                    return <Ginza key={j} />;
                  case "m":
                    return <Marunouchi key={j} />;
                  case "z":
                    return <Hanzomon key={j} />;
                  case "e":
                    return <Oedo key={j} />;
                  case "c":
                    return <Chiyoda key={j} />;
                  case "y":
                    return <Yurakucho key={j} />;
                  case "n":
                    return <Namboku key={j} />;
                  case "f":
                    return <Fukutoshin key={j} />;
                  case "t":
                    return <Tozai key={j} />;
                  case "h":
                    return <Hibiya key={j} />;
                  case "i":
                    return <Mita key={j} />;
                  case "s":
                    return <Shinjuku key={j} />;
                  case "a":
                    return <Asakusa key={j} />;
                  case " ":
                    return <div key={j} className="w-16" />;
                  default:
                    return <div key={j} className="w-16" />;
                }
              })}
          </div>
        ))}
      </div>
      <textarea
        className="absolute bottom-0 font-mono w-full max-w-xs resize-none outline-none text-center bg-transparent text-slate-300 hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600 px-4 py-2 rounded-t-md duration-200"
        defaultValue={string}
        onChange={(e) => setString(e.target.value)}
        rows={3}
      />
    </main>
  );
}

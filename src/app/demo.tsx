"use client";

import { useState } from "react";

import SignSystemMe from "@/components/sign-system-me";

export default function Demo({ defaultText }: { defaultText: string }) {
  const [text, setText] = useState(defaultText);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    const trimmedNewText = newText.trim();

    const url = new URL(window.location.href);

    if (trimmedNewText) url.searchParams.set("t", trimmedNewText);
    else url.searchParams.delete("t");

    window.history.replaceState(null, "", url.toString());
  };

  return (
    <main className="flex flex-col min-h-svh justify-center items-center overflow-x-hidden">
      <div className="flex flex-col my-auto">
        <SignSystemMe text={text} />
      </div>
      <textarea
        className="absolute bottom-0 font-mono w-full max-w-xs resize-none outline-none text-center bg-transparent text-slate-300 hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600 px-4 py-2 rounded-t-md duration-200"
        defaultValue={text}
        onChange={handleTextChange}
        rows={Math.min(text.split("\n").length, 3)}
        spellCheck="false"
      />
    </main>
  );
}

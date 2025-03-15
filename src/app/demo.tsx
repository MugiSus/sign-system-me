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
    <main className="flex min-h-svh flex-col items-center justify-center">
      <div className="my-auto flex flex-col">
        <SignSystemMe text={text} isAnimated />
      </div>
      <textarea
        className={`absolute bottom-0 m-2 w-full max-w-xs resize-none rounded-lg px-4 py-2 text-center font-mono text-slate-300 outline-none duration-200 hover:bg-slate-200 hover:text-slate-700 focus:bg-slate-200 focus:text-slate-700 ${
          !text.trim() ? 'bg-slate-200/60' : 'bg-transparent'
        }`}
        defaultValue={text}
        onChange={handleTextChange}
        rows={Math.min(text.split("\n").length, 3)}
        spellCheck="false"
      />
    </main>
  );
}

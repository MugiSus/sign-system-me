"use client";

import { useState } from "react";

import SignSystemMeAnim from "@/components/sign-system-me-anim";

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
    <main className="flex flex-col min-h-svh justify-center items-center">
      <div className="flex flex-col my-auto">
        <SignSystemMeAnim text={text} />
      </div>
      <textarea
        className="absolute bottom-0 font-mono w-full max-w-xs resize-none outline-none text-center bg-transparent text-slate-300 hover:bg-slate-200 hover:text-slate-700 focus:bg-slate-200 focus:text-slate-700 px-4 py-2 rounded-t-lg duration-200"
        defaultValue={text}
        onChange={handleTextChange}
        rows={Math.min(text.split("\n").length, 3)}
        spellCheck="false"
      />
    </main>
  );
}

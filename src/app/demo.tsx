"use client";

import { useState, useEffect } from "react";

import SignSystemMe from "@/components/sign-system-me";
import { useSearchParams } from "next/navigation";

export default function Demo() {
  const searchParams = useSearchParams();
  const defaultText = searchParams.get("t") || "sign\nsystem\nme";
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    const textFromParams = searchParams.get("t");
    if (textFromParams) {
      setText(textFromParams);
    }
  }, [searchParams]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value.trim();
    setText(newText);
    const url = new URL(window.location.href);
    if (newText) url.searchParams.set("t", newText);
    else url.searchParams.delete("t");
    window.history.replaceState(null, "", url.toString());
  };

  return (
    <>
      <div className="flex flex-col my-auto">
        <SignSystemMe text={text} />
      </div>
      <textarea
        className="absolute bottom-0 font-mono w-full max-w-xs resize-none outline-none text-center bg-transparent text-slate-300 hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600 px-4 py-2 rounded-t-md duration-200"
        defaultValue={text}
        onChange={handleTextChange}
        rows={3}
      />
    </>
  );
}

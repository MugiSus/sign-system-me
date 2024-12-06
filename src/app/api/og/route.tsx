import { ImageResponse } from "next/og";
// App router includes @vercel/og.

import Asakusa from "./asakusa.svg";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Asakusa />
        <div style={{ fontSize: 16 }}>アイネクライネ・オートマチーク</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

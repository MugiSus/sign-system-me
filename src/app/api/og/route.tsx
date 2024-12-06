import { ImageResponse } from "next/og";

import SignSystemMe from "@/components/sign-system-me";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fcfcfc",
        }}
      >
        <SignSystemMe text={"sign\nsystem\nme"} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

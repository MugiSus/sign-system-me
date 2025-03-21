import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

import SignSystemMe from "@/components/sign-system-me";
import SignSystemMeLogo from "./sign-system-me-logo.svg";

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get("text") || "sign\nsystem\nme";

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
        <SignSystemMeLogo
          style={{
            position: "absolute",
            bottom: "1rem",
            scale: "sale(1.5)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "scale(2)",
          }}
        >
          <SignSystemMe text={text} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fcfcfc",
            transform: "scale(2)",
          }}
        >
          <SignSystemMe text={text} />
        </div>
        <SignSystemMeLogo
          style={{ position: "absolute", bottom: "0.6rem", left: "0.8rem" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

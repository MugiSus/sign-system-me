import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

import Sign from "@/components/sign";

// Image generation
export async function GET(request: NextRequest) {
  const char = request.nextUrl.searchParams.get("char") || "m";

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Sign char={char} />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      width: 64,
      height: 64,
    }
  );
}

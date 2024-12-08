import Sign from "@/components/sign";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";

// Image metadata
export const size = {
  width: 64,
  height: 64,
};

const pool = "gnhtcyznfeais";

// Image generation
export async function GET() {
  const char = pool.charAt(Math.floor(Math.random() * pool.length));

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
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

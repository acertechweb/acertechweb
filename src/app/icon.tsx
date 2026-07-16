import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#252A2E",
          color: "#FFFFFF",
          fontSize: 38,
          fontWeight: 900,
          fontFamily: "Arial",
          position: "relative"
        }}
      >
        A
        <div style={{ position: "absolute", right: 9, bottom: 9, width: 18, height: 5, background: "#F26A21" }} />
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#252A2E",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          fontFamily: "Arial"
        }}
      >
        <div style={{ fontSize: 58, fontWeight: 800, letterSpacing: 2 }}>ACERTECH</div>
        <div style={{ width: 180, height: 8, background: "#F26A21", margin: "34px 0" }} />
        <div style={{ fontSize: 42, lineHeight: 1.15, maxWidth: 900 }}>Metal İşleme Teknolojilerinde Güvenilir Çözüm Ortağınız</div>
        <div style={{ fontSize: 26, marginTop: 40, color: "#F4F5F6" }}>acertech.com.tr</div>
      </div>
    ),
    size
  );
}

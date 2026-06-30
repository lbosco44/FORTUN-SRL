import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Fortun SRL — Petroleum products and by-products trading";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #101826 0%, #0a0e14 100%)",
          padding: "72px 80px",
          color: "#f5f2ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#c99a4e", textTransform: "uppercase" }}>
          International trading · Oil &amp; Gas
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
            FORTUN
          </div>
          <div style={{ display: "flex", fontSize: 37, color: "#c99a4e", marginTop: 12 }}>
            Petroleum products and by-products trading
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#93a1b3" }}>
          Rome · Rotterdam · Houston · Fujairah
        </div>
      </div>
    ),
    size
  );
}

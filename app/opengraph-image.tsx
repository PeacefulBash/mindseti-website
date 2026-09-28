import { ImageResponse } from "next/og";

export const alt = "Mindset.i. Inspire change. Awaken potential.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#033b44", position: "relative", padding: 80 }}>
        <div
          style={{
            position: "absolute",
            right: 150,
            top: 60,
            width: 120,
            height: 520,
            borderRadius: 60,
            background: "#8dba0b",
            transform: "rotate(40deg)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 760 }}>
          <div style={{ color: "#ffffff", fontSize: 30, letterSpacing: 8, fontWeight: 700 }}>MINDSET.i</div>
          <div style={{ color: "#ffffff", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Your learners already carry what they need.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

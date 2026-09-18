import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — scenic Kandy hospitality website`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#17201d",
          color: "#faf8f3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 999,
            top: -310,
            right: 40,
            background: "rgba(214, 174, 121, 0.23)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "auto 0 0",
            height: 210,
            background: "#263e39",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -80,
            right: -80,
            bottom: 150,
            height: 230,
            background: "#3f5a51",
            clipPath:
              "polygon(0 55%, 14% 40%, 28% 58%, 42% 32%, 57% 52%, 71% 24%, 84% 48%, 100% 36%, 100% 100%, 0 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "72px 80px",
            width: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              opacity: 0.75,
              marginBottom: 22,
            }}
          >
            Kandy · Sri Lanka
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 0.92,
              maxWidth: 760,
              letterSpacing: -2,
            }}
          >
            Above the landscape. Away from the rush.
          </div>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              opacity: 0.72,
              marginTop: 28,
            }}
          >
            {siteConfig.name}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

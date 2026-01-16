import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Débora Pieri Arquitetura";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1917",
          backgroundImage:
            "linear-gradient(to bottom right, #1C1917 0%, #292524 50%, #1C1917 100%)",
        }}
      >
        {/* Accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: "#C9A86C",
          }}
        />

        {/* Logo circle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 180,
            height: 180,
            borderRadius: "50%",
            backgroundColor: "#292524",
            border: "3px solid #C9A86C",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              color: "#C9A86C",
            }}
          >
            DP
          </span>
        </div>

        {/* Main title */}
        <span
          style={{
            fontSize: 56,
            fontFamily: "Georgia, serif",
            color: "#FFFFFF",
            marginBottom: 12,
          }}
        >
          Débora Pieri
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: 22,
            letterSpacing: 10,
            color: "#C9A86C",
            marginBottom: 32,
          }}
        >
          ARQUITETURA
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 16,
          }}
        >
          Arquitetura que Conecta Forma, Função e Identidade
        </span>

        {/* Location */}
        <span
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Mirassol • São José do Rio Preto • Região
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}

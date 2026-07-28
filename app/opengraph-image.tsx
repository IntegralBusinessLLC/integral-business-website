import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Integral Business LLC - Professional Towing & Roadside Assistance";

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
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 84% 18%, rgba(250,204,21,0.22), transparent 27%), linear-gradient(135deg, #050505 0%, #121212 55%, #050505 100%)",
          color: "white",
          padding: "64px 78px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "15px",
            display: "flex",
            background: "#facc15",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-125px",
            bottom: "-125px",
            width: "600px",
            height: "600px",
            display: "flex",
            borderRadius: "999px",
            border: "3px solid rgba(250,204,21,0.14)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-30px",
            bottom: "-30px",
            width: "390px",
            height: "390px",
            display: "flex",
            borderRadius: "999px",
            border: "3px solid rgba(250,204,21,0.18)",
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#facc15",
              fontSize: "25px",
              fontWeight: 800,
              letterSpacing: "7px",
            }}
          >
            24/7 TOWING & ROADSIDE ASSISTANCE
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "30px",
              fontSize: "88px",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-4px",
            }}
          >
            Integral Business
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "8px",
              color: "#facc15",
              fontSize: "88px",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-4px",
            }}
          >
            LLC
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "34px",
              color: "rgba(255,255,255,0.76)",
              fontSize: "32px",
              fontWeight: 500,
            }}
          >
            Fast, reliable towing and roadside assistance in Orlando.
          </div>

          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: "34px",
              color: "#050505",
              background: "#facc15",
              borderRadius: "999px",
              padding: "17px 30px",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            CALL NOW · (407) 360-6109
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
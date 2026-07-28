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
  const logo = new URL("../public/images/logo.png", import.meta.url).toString();

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
            "radial-gradient(circle at 82% 18%, rgba(250,204,21,0.18), transparent 30%), linear-gradient(135deg, #050505 0%, #101010 55%, #050505 100%)",
          color: "white",
          padding: "62px 76px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "14px",
            display: "flex",
            background: "#facc15",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-130px",
            bottom: "-160px",
            width: "560px",
            height: "560px",
            display: "flex",
            borderRadius: "999px",
            border: "2px solid rgba(250,204,21,0.16)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-45px",
            bottom: "-75px",
            width: "390px",
            height: "390px",
            display: "flex",
            borderRadius: "999px",
            border: "2px solid rgba(250,204,21,0.12)",
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div
            style={{
              width: "290px",
              height: "290px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "34px",
              background: "rgba(255,255,255,0.96)",
              border: "5px solid #facc15",
              boxShadow: "0 0 48px rgba(250,204,21,0.30)",
              padding: "18px",
            }}
          >
            <img
              src={logo}
              width="250"
              height="250"
              alt="Integral Business LLC logo"
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#facc15",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "7px",
                textTransform: "uppercase",
              }}
            >
              24/7 TOWING & ROADSIDE ASSISTANCE
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "18px",
                fontSize: "68px",
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-3px",
              }}
            >
              Integral Business
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "10px",
                color: "#facc15",
                fontSize: "68px",
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-3px",
              }}
            >
              LLC
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "30px",
                color: "rgba(255,255,255,0.76)",
                fontSize: "30px",
                fontWeight: 500,
              }}
            >
              Professional Towing in Orlando
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
                color: "#050505",
                background: "#facc15",
                borderRadius: "999px",
                padding: "15px 28px",
                fontSize: "34px",
                fontWeight: 800,
              }}
            >
              📞 (407) 360-6109
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
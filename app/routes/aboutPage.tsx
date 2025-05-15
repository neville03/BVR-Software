import { FadeSlideshow } from "../components/FadeSlider";
import { COLORS } from "~/constants/colors";

import type { index } from "@react-router/dev/routes";
import { AboutPageData } from "~/constants/siteData";

export default function AboutPage() {
  return (
    <div className="bg-white ">
      {/* Header Section */}
      <header
        className="relative h-64"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=3480&h=1920)`,
        }}
      >
        {/* <FadeSlideshow
  fadeImages={[
  { url: "/assets/image1.jpg", caption: "Image 1" },
  { url: "/assets/image2.jpg", caption: "Image 2" },
  { url: "/assets/image3.jpg", caption: "Image 3" },
  ]}
  /> */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <h1
            style={{
              color: COLORS.primary,
              fontSize: "3em",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            ABOUT<span style={{ color: COLORS.seconday }}>US</span>
          </h1>
        </div>
      </header>

      {/* Vision Section */}
      <section className="container mx-auto py-8">
        {AboutPageData.map((section, index) => (
          <div className="mb-5" key={index}>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg shadow-sm px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>
            </div>
            <div className="p-10">
              {typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

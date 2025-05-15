import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


interface FadeSlideshowProps {
  fadeImages: { url: string; caption: string }[];
}

export const FadeSlideshow = ({ fadeImages }: FadeSlideshowProps) => {
  return (
    <div className="">
      <Fade indicators arrows={false} transitionDuration={1000}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              className="rounded-md "
              alt="image"
              style={{ width: "100%" }}
              src={fadeImage.url}
            />
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
  );
};

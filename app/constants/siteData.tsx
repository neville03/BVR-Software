import type { JSX } from "react";

export interface IAboutPage {
  title: string;
  content: string | JSX.Element;
}

export const AboutPageData: IAboutPage[] = [
  {
    title: "Our Why",
    content: `At BVR Innovation Group, we believe that businesses and institutions must constantly evolve to remain impactful — but without losing what makes them great.
  We exist to help ideas and innovations cross the gap between potential and performance, by delivering thoughtful solutions, intelligent execution, and commercial growth strategies.`,
  },
  {
    title: "Our Philosophy: Bend the Future",
    content: (
      <>
        <p>
          We don’t fear change — we work with it. The market is always shifting,
          and uncertainty is inevitable — but we believe innovation thrives in
          motion.
        </p>

        <p>
          Our role is to turn that motion into momentum for entrepreneurs,
          development partners, and ecosystems who are ready to lead in the next
          economy.
        </p>
      </>
    ),
  },
];

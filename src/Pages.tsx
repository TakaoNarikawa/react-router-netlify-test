import React from "react";
import Page3 from "src/containers/Page3";
import Page2 from "src/containers/Page2";
import Page1 from "src/containers/Page1";

type Page = {
  path: string;
  View: React.FC;
};

const pages: Page[] = [
  {
    path: "/",
    View: Page1,
  },
  {
    path: "/page2",
    View: Page2,
  },
  {
    path: "/page3",
    View: Page3,
  },
];
export default pages;

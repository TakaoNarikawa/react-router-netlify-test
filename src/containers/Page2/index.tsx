import React from "react";
import { useHistory } from "react-router-dom";

const Page2: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Page2</h1>
      <button onClick={() => history.push("/")}>Page1</button>
      <button onClick={() => history.push("/page2")}>Page2</button>
      <button onClick={() => history.push("/page3")}>Page3</button>
    </>
  );
};

export default Page2;

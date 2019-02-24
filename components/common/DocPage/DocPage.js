import React from "react";
import Wrapper from "../Wrapper";
import Header from "./Header";

export const DocPage = ({ title }) => {
  return (
    <Wrapper title={title}>
      <Header title={title} image="/static/images/docs/1.jpg" />
    </Wrapper>
  );
};

export default DocPage;

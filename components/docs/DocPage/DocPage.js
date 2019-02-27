import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown/with-html";
import Wrapper from "../../common/Wrapper";
import Header from "../Header";
import DocNav from "../DocNav";
import Container from "./elements/Container";
import Main from "./elements/Main";
import docNavItems from "./docNavItems";

export const DocPage = ({ title, id }) => {
  const activeItem = docNavItems.find(items => items.id === id);
  const { md } = activeItem;
  console.log("md", md);
  return (
    <Wrapper title={title}>
      <Header title={title} image="/static/images/docs/1.jpg" />
      <Container>
        <DocNav items={docNavItems} activeId={id} />
        <Main>
          <ReactMarkdown source={md} escapeHtml={false} />
        </Main>
      </Container>
    </Wrapper>
  );
};

DocPage.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default DocPage;

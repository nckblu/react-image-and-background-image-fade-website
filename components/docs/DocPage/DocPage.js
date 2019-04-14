import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../common/Wrapper";
import Container from "./elements/Container";
import Main from "./elements/Main";
import { Image, BackgroundImage } from "react-image-and-background-image-fade";
import docNavItems from "./docNavItems";
import demoNavItems from "./demoNavItems";
import Markdown from "markdown-to-jsx";
import Demo from "../../common/Demo";

export const DocPage = ({ title, id }) => {
  const activeItem = docNavItems
    .concat(demoNavItems)
    .find(items => items.id === id);
  const { md } = activeItem;
  return (
    <Wrapper title={title}>
      <Container>
        <Main>
          <div className="markdown-body">
            <Markdown
              options={{
                overrides: {
                  Image: {
                    component: Image,
                  },
                  BackgroundImage: {
                    component: BackgroundImage,
                  },
                  Demo: {
                    component: Demo,
                  },
                },
              }}
            >
              {md}
            </Markdown>
          </div>
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

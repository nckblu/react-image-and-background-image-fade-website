import React from 'react'
import Link from 'next/link'
import Wrapper from '../components/common/Wrapper'
import Header from '../components/home/Header'
import HeaderBackgroundImage from '../elements/home/HeaderBackgroundImage'
import FeatureBackgroundImage from '../elements/home/FeatureBackgroundImage'
import HeaderContent from '../elements/home/HeaderContent'
import HeaderH1 from '../elements/home/HeaderH1'
import HeaderContentButtons from '../elements/home/HeaderContentButtons'
import Button from '../elements/common/Button'
import FeaturePanelContainer from '../elements/home/FeaturePanelContainer'
import FeaturePanel from '../components/common/FeaturePanel'
import FeatureLoaderContainer from '../elements/home/FeatureLoaderContainer'

export const Home = () => (
  <Wrapper>
    <Header>
      <HeaderBackgroundImage
        width='100%'
        height='100%'
        src='/static/images/home/header.jpg'
      >
        <HeaderContent>
          <HeaderH1>
            react image and <br /> background image fade
          </HeaderH1>
          <HeaderContentButtons>
            <a
              href='https://github.com/nckblu/react-image-and-background-image-fade'
              target='_blank'
            >
              <Button light>github</Button>
            </a>
            <Link href='/docs'>
              <Button light>docs</Button>
            </Link>
            <Link href='/demos'>
              <Button light>demos</Button>
            </Link>
          </HeaderContentButtons>
        </HeaderContent>
      </HeaderBackgroundImage>
    </Header>
    <FeaturePanelContainer>
      <FeaturePanel
        title='features'
        renderDescription={() => (
          <ul>
            <li>Fade in images and background images</li>
            <li>Lazy loading</li>
            <li>Custom loaders</li>
            <li>Responsive</li>
            <li>Flexible</li>
          </ul>
        )}
        renderFeature={() => (
          <FeatureBackgroundImage
            src='/static/images/home/feature1.jpg'
            width='836px'
            height='668px'
            isResponsive
          />
        )}
        link='/docs'
        linkText='see docs'
      />
      <FeaturePanel
        title='lazy loading'
        renderDescription={() =>
          'Lazy loading out of the box using React Visibility Sensor'
        }
        renderFeature={() => (
          <FeatureBackgroundImage
            src='/static/images/home/feature2.jpg'
            width='836px'
            height='668px'
            isResponsive
            lazyLoad
          />
        )}
        link='/docs'
        linkText='see docs'
        alternate
      />

      <FeaturePanel
        title='custom loaders'
        renderDescription={() =>
          'Use the default loader or any component you like'
        }
        renderFeature={() => (
          <FeatureBackgroundImage
            src='/static/images/home/feature3.jpg'
            width='836px'
            height='668px'
            isResponsive
            lazyLoad
          />
        )}
        link='/docs'
        linkText='see docs'
      />
    </FeaturePanelContainer>
  </Wrapper>
)

export default Home

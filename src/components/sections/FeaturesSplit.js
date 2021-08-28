import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Highlights",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">
                  Founding Creative Director at LightTwist
                </h3>
                <p className="m-0">
                  LightTwist YC21 is democratizing access to high end virtual
                  production for every creator.
                </p>
                <p className="m-0">.</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://twitter.com/vikasreddy/status/1429865089356615683?s=20"
                    >
                      Demo
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://lighttwist.io/"
                    >
                      Site
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("/Users/jamescoholan/Desktop/Desktop - James’s MacBook Pro (2)/Production Code/JamesCoholanWebsite/src/assets/Lighttwist2.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">SYB Creative Media</h3>
                <p className="m-0">
                  New Hollywood - A creative firm focused on collapsing the
                  music indsutry pipeline end to end digitally.
                </p>
                <p className="m-0">.</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.syb-media.com/"
                    >
                      SYB Media
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://www.experienceagora.com/"
                    >
                      Agora
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Hero-Solutions-Media-Entertainment.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Investor</h3>
                <p className="m-0">High Growth Investing</p>
                <p className="m-0">.</p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.campanileholdings.com/"
                    >
                      Campanile Holdings
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://jamescoholan.medium.com/campanile-holdings-investor-letter-971bda5d2a23"
                    >
                      Investment Thesis
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/affiliated-companies-1024x614.webp")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;

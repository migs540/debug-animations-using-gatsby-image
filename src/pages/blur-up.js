import React from "react"
import Img from "gatsby-image"
import Lorem from "../components/lorem"
import Ipsum from "../components/ipsum"
import { rhythm, options } from "../utils/typography"
import { injectGlobal, css, keyframes } from "styled-components"
import styled from "styled-components"

const swingDown = keyframes`
  100% { transform: translateX(0%); }
`

export const AboutContents = styled.div`
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  animation: ${swingDown} 1s forwards;
  animation-fill-mode: forwards;
  position: relative;
  z-index: 10;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.15);
`

const BlurUp = ({ data }) => (
  <div>
    {" "}
    <AboutContents>
      <h1>I transition in ... twice</h1>
      <h2>Once on page load (html) and once on js bootstrap loads</h2>

      <Img
        style={{ display: `inherit` }}
        css={{
          marginBottom: rhythm(options.blockMarginBottom * 2),
          marginLeft: rhythm(options.blockMarginBottom * 2),
          float: `right`,
          "&": {
            "@media (min-width: 500px)": {
              display: `none`,
            },
          },
        }}
        title={`Photo by Redd Angelo on Unsplash`}
        resolutions={data.reddImageMobile.resolutions}
      />
      <Img
        style={{ display: `inherit` }}
        css={{
          marginBottom: rhythm(options.blockMarginBottom * 2),
          marginLeft: rhythm(options.blockMarginBottom * 2),
          float: `right`,
          display: `none`,
          "@media (min-width: 500px)": {
            display: `inline-block`,
          },
        }}
        title={`Photo by Redd Angelo on Unsplash`}
        resolutions={data.reddImage.resolutions}
      />
      <Lorem />
      <Img
        sizes={data.kenImage.sizes}
        title={`Photo by Ken Treloar on Unsplash`}
      />
      <Ipsum />
    </AboutContents>
  </div>
)

export default BlurUp

export const query = graphql`
  query BlurUpQuery {
    reddImageMobile: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 125) {
        ...GatsbyImageSharpResolutions
      }
    }
    reddImage: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    kenImage: imageSharp(id: { regex: "/ken-treloar/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

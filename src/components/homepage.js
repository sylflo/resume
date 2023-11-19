import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"

const background = require("../../static/background.jpg")

const Background = styled.div`
  ${tw`h-screen`}
  background-image: url(${background.default});
  background-size: auto, 256px 256px;
  background-position: 50%, 50%;
  background-repeat: no-repeat, repeat;
`

const FullHeight = styled.div`
  ${tw`h-full flex items-center justify-center`}
  background: rgba(211,211,211,0.4);
`

const Content = styled.div`
  border-left-style: solid;
  border-right-style: solid;
  border-left-color: #fff;
  border-right-color: #fff;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  max-width: 100%;
  text-color: white;
`

const InnerContent = styled.div`
  -webkit-transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
  padding: 3rem 2rem;
  max-height: 40rem;
  overflow: hidden;
`

const Brand = styled.h1`
  letter-spacing: 0.5rem;
  font-size: 2.25rem;
  line-height: 1.3;
  color: #fff;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;

  @media (max-width: 640px) {
    margin-top: 10rem;
  }
`

const Description = styled.p`
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  line-height: 2;
  margin: 0 0 2rem;
`

const Homepage = () => (
  <Background id="about-me">
    <FullHeight>
      <Content>
        <InnerContent>
          <Brand>Dev drizzle</Brand>
          <Description>
            I am a fullstack developer passionated about DevOps. My day to day
            tools are software like Ansible, Terraform and also Kubernetes
            during my spare time.
          </Description>
        </InnerContent>
      </Content>
    </FullHeight>
  </Background>
)

export default Homepage

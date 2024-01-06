import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Image = styled.img`
  height: 85%;
  ${tw`mx-0 my-auto`}
`
const logo = require("../../../static/logo.png")


const Brand = () => (
  <Image
    src={logo.default}
    alt="Company Logo"
  />
)

export default Brand

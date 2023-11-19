import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Image = styled.img`
  height: 85%;
  ${tw`mx-0 my-auto`}
`

const Brand = () => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/440px-Kubernetes_logo_without_workmark.svg.png"
    alt="Company Logo"
  />
)

export default Brand

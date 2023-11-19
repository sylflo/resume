import React from "react"
import styled from "@emotion/styled"
import tw from "twin.macro"

const Title = styled.h2`
  ${tw`text-lg text-black font-bold tracking-wider uppercase mt-0 my-0 mb-5`}
  font-family: Raleway,Helvetica,sans-serif;
  line-height: 0.7;
`

const CompanyName = styled.span`
  font-size: 0.5em;
`

const Inner = tw.div`
  mt-12
`

const Description = styled.p`
  ${tw`text-black pb-4 pt-4`}
  border-top: 2px solid black;
`

const Metadata = styled.ul`
  ${tw`text-black pt-4`}
`

const Item = ({ title, content, companyName, location, date }) => (
  <Inner>
    <div>
      <Title>
        {title} <br />
        <CompanyName>at {companyName}</CompanyName>
      </Title>
      <Description>{content}</Description>
      <Metadata>
        <li>{date}</li>
        <li>{location}</li>
      </Metadata>
    </div>
  </Inner>
)

export default Item

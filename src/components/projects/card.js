import React from "react"
import tw from "twin.macro"

const star = require("../../../static/star.svg")
const fork = require("../../../static/fork.svg")

const CardCss = tw.div`
  p-4 bg-white shadow h-56`

const BoxContent = tw.div`
  py-4 px-0`

const Title = tw.h4`
  text-black m-0 p-0 mb-6 font-bold`

const Description = tw.p`
  text-gray-600 m-0 p-0 mb-6`

const Stats = tw.div`
  flex items-center`

const InnerStat = tw.div`
  flex`

const InnerStatImg = tw.img`
  m-0`

const InnerStatCount = tw.span`
  mx-2`

const Card = ({ title, forkCount, starCount, description }) => (
  <CardCss>
    <BoxContent>
      <Title>{title}</Title>
      <Description>
        {description.length > 60 ? (
          <>{description.slice(0, 60)}...</>
        ) : (
          <>{description}</>
        )}
      </Description>
    </BoxContent>
    <Stats>
      <InnerStat>
        <InnerStatImg src={star.default} alt="stars" />
        <InnerStatCount>{starCount}</InnerStatCount>
      </InnerStat>
      <InnerStat>
        <InnerStatImg src={fork.default} alt="fork" />
        <InnerStatCount>{forkCount}</InnerStatCount>
      </InnerStat>
    </Stats>
  </CardCss>
)

export default Card

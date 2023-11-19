import tw from "twin.macro"
import styled from "@emotion/styled"

const Container = tw.div`
  px-4 py-16 md:px-24 lg:px-56 xl:px-56`

const Title = tw.h2`
  font-bold mx-0 mb-10 text-2xl leading-none tracking-widest uppercase
`

const GridProject = styled.div`
  ${tw`items-center`}
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export { Container, Title, GridProject }

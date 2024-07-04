import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"
import { Container, Title, GridProject } from "../style"

const PullRequests = () => {
  const {
    github: {
      viewer: {
        pullRequests: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pullRequests(
              first: 50
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
              edges {
                node {
                  id
                  merged
                  url
                  title
                  repository {
                    name
                    url
                    description
                    forkCount
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const filteredPullRequests = edges.filter(
    (node) =>
      !node.node.url.includes("sylflo") && node.node.merged
  )

  return (
    <Container id="pull-requests">
      <Title>Pull Request</Title>
      <GridProject>
        {filteredPullRequests.map(({ node }) => (
          <a key={node.url} href={node.url}>
            <Card
              title={node.title}
              forkCount={node.repository.forkCount}
              starCount={node.repository.stargazers.totalCount}
              description={node.repository.description}
            />
          </a>
        ))}
      </GridProject>
    </Container>
  )
}

export default PullRequests

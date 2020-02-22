import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Card from './card';
import { Container, Title, GridProject } from '../style';


export default () => {
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
            pullRequests(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
              edges {
                node {
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
  );

  const filteredPullRequests = edges.filter(
    node =>  node.node.repository.name === "kubespray" ||
             node.node.repository.name === "kotlin-android-starter");

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

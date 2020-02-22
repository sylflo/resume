import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Card from './card';
import { Container, Title, GridProject } from '../style';


export default () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
    {
      github {
        viewer {
          repositories(first: 8, isFork: false, privacy: PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
              node {
                url
                description
                name
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
    `
  );

  return (
    <Container id="projects">
      <Title>Projects</Title>
      <GridProject>
      {edges.map(({ node }) => (
        <a href={node.url} key={node.name}>
          <Card
            title={node.name}
            forkCount={node.forkCount}
            starCount={node.stargazers.totalCount}
            description={node.description}
          />
        </a>
      ))}
      </GridProject>
    </Container>
  )
}

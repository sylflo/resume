import React from "react"
import styled from "@emotion/styled"
import Item from "./item"
import { Container, Title } from "../style"

const Wrapper = styled.div`
  background-color: white;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const WorkExperience = () => (
  <Container id="work">
    <Title>Work experience</Title>
    <Wrapper>
      <Grid>
        <Item
          title="Full-Stack dev"
          companyName="Sysdream"
          content="Mainly work on Flask/React, also provisioning on VMware vm on esxi using Terraform/Ansible"
          location="Levallois-Perret - France"
          date="Apr 2017 to Present"
        />
        <Item
          title="Android dev"
          companyName="Ineis"
          content="
            Development of a native Android application to help users manage their events. 
            The Back-End was put in production using Nginx and Gunicorn since it was develop in Django."
          location="Paris - France"
          date="Sep 2016 to Feb 2017"
        />
        <Item
          title="Web dev"
          companyName="Webiaprod"
          content="
            Front end development with css and jquery, and some back end with Django. Mainly on showcase website"
          location="Grenoble - France"
          date="Apr 2015 to Aug 2015"
        />
        <Item
          title="Web dev"
          companyName="Gouts de web"
          content="
            Development on different cms like Wordpress, Prestashop..."
          location="Bordeaux - France"
          date="Sep 2014 to Mar 2015"
        />
      </Grid>
    </Wrapper>
  </Container>
)

export default WorkExperience

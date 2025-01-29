import React from "react"
import styled from "@emotion/styled"
import Item from "./item"
import { Container, Title } from "../style"
import tw from "twin.macro"


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

const InnerDescription = styled.li`
  ${tw`mb-2`}
`;

const WorkExperience = () => (
  <Container id="work">
    <Title>Work experience</Title>
    <Wrapper>
      <Grid>
      <Item
        title="Backend end python dev"
        companyName="Outscale"
        location="Saint cloud - France"
        date="Oct 2021 to Dec 2024"
      >
        <InnerDescription>
          Responsible for developing cloud orchestration, utilizing QEMU for virtualization and RabbitMQ for inter-service communication.
        </InnerDescription>
        <InnerDescription>
          Proficient in Python and experienced with GitLab for code management.
        </InnerDescription>
        <InnerDescription>
          Proactively engaged in learning deployment aspects to enhance overall understanding of operational processes.
        </InnerDescription>
      </Item>
      <Item
        title="Full-Stack dev"
        companyName="Sysdream"
        location="Levallois-Perret - France"
        date="Apr 2017 to Oct 2021"
      >
        <InnerDescription>
          Played a pivotal role in the development of 'Malice', a versatile training platform, handling everything from pentest scenario creation to technical implementation with vmWare, Python, and React.
        </InnerDescription>
        <InnerDescription>
          Actively engaged in organizing and provisioning for Capture The Flag (CTF) events, leveraging Ansible for efficient setup and network management. Also contributed to the physical setup of these events.
        </InnerDescription>
        <InnerDescription>
          Deployed a monitoring stack with Prometheus and Grafana, handling all the configurations and settings.
        </InnerDescription>
      </Item>
      <Item
        title="Android dev"
        companyName="Ineis"
        location="Paris - France"
        date="Sep 2016 to Feb 2017"
      >
        <InnerDescription>
          Developed an Android application for event management
        </InnerDescription>
        <InnerDescription>
          Contributed to enhancing the application's performance and reliability
        </InnerDescription>
        <InnerDescription>
          Backend deployment using Django, Nginx, Gunicorn, and Ansible
        </InnerDescription>
      </Item>
      <Item
        title="Web dev"
        companyName="Webiaprod"
        location="Grenoble - France"
        date="Apr 2015 to Aug 2015"
      >
        <InnerDescription>
          Engaged in front-end development utilizing CSS and jQuery, along with back-end development in Django
        </InnerDescription>
        <InnerDescription>
          Mainly focused on the development of engaging and functional showcase websites
        </InnerDescription>
      </Item>
      <Item
        title="Web dev"
        companyName="Gouts de web"
        location="Bordeaux - France"
        date="Sep 2014 to Mar 2015"
      >
        <InnerDescription>
          Experienced in developing on a range of content management systems, including WordPress, PrestaShop, and others, showcasing versatility in adapting to different platforms
        </InnerDescription>
      </Item>
      </Grid>
    </Wrapper>
  </Container>
)

export default WorkExperience

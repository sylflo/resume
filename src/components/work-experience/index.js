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
          title="Backend end python dev"
          companyName="Outscale"
          content="Responsible for developing cloud orchestration, utilizing QEMU for virtualization and RabbitMQ for inter-service communication. Proficient in Python and experienced with GitLab for code management. Proactively engaged in learning deployment aspects to enhance overall understanding of operational processes."
          location="Saint cloud - France"
          date="Oct 2021 to present"
        />
        <Item
          title="Full-Stack dev"
          companyName="Sysdream"
          content="Involved in key projects focusing on cybersecurity training and event management. Played a pivotal role in the development of 'Malice', a versatile training platform, handling everything from pentest scenario creation to technical implementation with vmWare, Python, and React. Actively engaged in organizing and provisioning for Capture The Flag (CTF) events, leveraging Ansible for efficient setup and network management. Also contributed to the physical setup of these events, showcasing a well-rounded skill set in both digital and physical aspects of cybersecurity training. Deployed a monitoring stack with Prometheus and Grafana, handling all the configurations and settings, demonstrating comprehensive skills in system monitoring and operational efficiency"
          location="Levallois-Perret - France"
          date="Apr 2017 to Oct 2021"
        />
        <Item
          title="Android dev"
          companyName="Ineis"
          content="Developed an Android application for event management and executed backend deployment using Django, Nginx, Gunicorn, and Ansible. Contributed to enhancing the application's performance and reliability."
          location="Paris - France"
          date="Sep 2016 to Feb 2017"
        />
        <Item
          title="Web dev"
          companyName="Webiaprod"
          content="Engaged in front-end development utilizing CSS and jQuery, along with back-end development in Django. Mainly focused on the development of engaging and functional showcase websites"
          location="Grenoble - France"
          date="Apr 2015 to Aug 2015"
        />
        <Item
          title="Web dev"
          companyName="Gouts de web"
          content="Experienced in developing on a range of content management systems, including WordPress, PrestaShop, and others, showcasing versatility in adapting to different platforms"
          location="Bordeaux - France"
          date="Sep 2014 to Mar 2015"
        />
      </Grid>
    </Wrapper>
  </Container>
)

export default WorkExperience

import React from "react";
import styled from '@emotion/styled'
import tw from "tailwind.macro";
import { Container } from '../style';
import Form from './form';
import Icons from './icons';

const background = require("../../../static/contact_background.jpg");

const Background = styled.div`
  background-color: #2e3141;
  background-image: linear-gradient(0deg,rgba(46,49,65,.8),rgba(46,49,65,.8)),url(${background});
  background-size: auto,cover;
  background-position: 50%,50%;
  padding-top: 3em;
  padding-bottom: 3em;
`

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem;
`


const Title = tw.h2`
  font-bold mx-0 mb-10 text-2xl leading-none tracking-widest uppercase text-white
`;


export default () => (
  <Background id="contact">
    <Container>
      <Title>Get in touch</Title>
      <Grid>
        <Form />
        <Icons />
      </Grid>
    </Container>
  </Background>
);
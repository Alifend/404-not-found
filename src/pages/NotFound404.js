import React from "react";
import styled from "styled-components";
import Scarecrow from "../resources/Scarecrow.png";
const NotFound404 = () => {
  return (
    <Container>
      <Header>404 NOT FOUND</Header>
      <Content>
        <ImageContainer>
          <Image src={Scarecrow} />
        </ImageContainer>
        <TextContainer>
          <Title>I have bad news for you</Title>
          <Subtitle>
            The page you are looking for might be removed or is temporarily
            unavailable
          </Subtitle>
          <Button>BACK TO HOMEPAGE</Button>
        </TextContainer>
      </Content>
      <Footer>created by Alifend - devChanllenges.io</Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 813px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
const Header = styled.header`
  font-family: "Inconsolata", monospace;
  font-size: 24px;
  align-self: flex-start;
  letter-spacing: -0.08em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
  @media (min-width: 813px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const TextContainer = styled.div`
  width: 90%;
  @media (min-width: 813px) {
    width: 50%;
    padding: 10px;
    font-size: 64px;
  }
`;

const ImageContainer = styled.div`
  /* width: 286px;
  height: 238px; */
  width: clamp(340px, 50%, 540px);
  height: clamp(250px, 41%, 447px);
  margin-bottom: 30px;
  @media (min-width: 813px) {
    width: 50%;
    height: 90%;
    width: clamp(400px, 50%, 520px);
    max-width: 540px;
    height: clamp(238px, 70%, 447px);
  }
`;
const Image = styled.img`
  /* min-width: 286px;
  max-width: 540px; */
  width: 100%;
  height: 100%;
  /* min-height: 238px;
  max-height: 447px; */
`;
const Title = styled.p`
  width: 100%;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: 44px;
  letter-spacing: -0.035em;
  color: #333333;
  margin: 0;
  @media (min-width: 813px) {
    font-size: 64px;
  }
`;
const Subtitle = styled.p`
  font-family: "Space Mono", monospace;
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 60px;
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
  color: #bdbdbd;
`;

const Button = styled.button`
  font-family: "Space Mono", monospace;
  font-weight: 700;
  background: #333333;
  color: white;
  padding: 24px;
  font-size: 14px;
  border: 0;
  width: 220px;
  height: 68px;
  align-self: flex-start;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 1;
  :hover {
    opacity: 0.8;
  }
  @media (min-width: 813px) {
    align-self: auto;
  }
`;

export default NotFound404;

import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import CrownSvg from 'assets/crown.svg';
import FacebookSvg from 'assets/facebook.svg';
import LinkedinSvg from 'assets/linkedin.svg';
import { media } from 'global/RWD';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BlueWrapper = styled.div`
  background-color: #85a8fe;
  max-width: 1000px;
  padding: 40px 0;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  margin-top: 0;
  font-size: 100px;
  color: white;
  text-align: center;
  line-height: 0.9;
`;

const StyledH2 = styled.h2`
  font-size: 60px;
  color: white;
  text-align: center;
  margin-bottom: 0.1em;
`;

const StyledH3 = styled.h3`
  margin-top: 40px;
  font-size: 40px;
  color: white;
  text-align: center;
`;

const PersonaWord = styled.span`
  color: #004aad;
`;

const ShareWord = styled.span`
  color: #85a8fe;
`;

const PersonaShareWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  display: inline-block;
  padding: 16px 0;
  height: 100px;

  display: flex;

  ${media.xs`
  flex-direction: column;
    height: 190px;
  `}
  ${media.md`
  flex-direction: row;
  height: 100px;
  `}
`;

const IconWrapper = styled.a`
  background-color: white;
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  height: 144px;
`;

const IconRow = styled.div`
  ${IconWrapper}:first-child {
    margin-right: 24px;
  }
`;

export const Home: FunctionComponent = () => {
  return (
    <HomeWrapper>
      <BlueWrapper>
        <Icon svgLink={CrownSvg} width="128px" height="128px" color="white" />
        <StyledH1>
          <div>KEEP CALM</div>
          <div>AND WAIT FOR</div>
          <PersonaShareWrapper>
            <PersonaWord>PERSONA</PersonaWord>
            <ShareWord>SHARE</ShareWord>
          </PersonaShareWrapper>
        </StyledH1>
        <StyledH2>#CODING ALL DAY - ALL NIGHT</StyledH2>
        <StyledH2>#WE ARE PERSONASHARE FAMILY</StyledH2>
        <StyledH3>FOLLOW US ON FACEBOOK AND LINKEDIN</StyledH3>
        <IconRow>
          <IconWrapper href="https://www.facebook.com/PersonaShare-110785183877737">
            <Icon svgLink={FacebookSvg} color="#3b5998" width="128px" height="128px" />
          </IconWrapper>
          <IconWrapper href="https://www.linkedin.com/groups/8868704/?fbclid=IwAR1ET4HY6Tx14BCHpwz0Con4mopJV5UScAK9Gt26eZ8SKkQu3XSGvDdDh28">
            <Icon svgLink={LinkedinSvg} color="#0077b5" width="128px" height="128px" />
          </IconWrapper>
        </IconRow>
      </BlueWrapper>
    </HomeWrapper>
  );
};

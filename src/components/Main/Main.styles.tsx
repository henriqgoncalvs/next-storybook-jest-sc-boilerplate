import styled from 'styled-components';

export const Wrapper = styled.main`
  background: #fff500;
  color: #000;

  width: 100%;
  height: 100%;
  padding: 3rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Pilat';
  text-transform: uppercase;

  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;

  width: 30rem;
  margin-bottom: 2rem;
`;

export const TechnologiesWrapper = styled.div`
  width: 40rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TechnologyCard = styled.div`
  img {
    width: 100%;
    max-width: 1rem;
  }
`;

export const TechnologyLink = styled.a``;

export const Footer = styled.footer``;

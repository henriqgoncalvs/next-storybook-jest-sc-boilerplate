import styled from 'styled-components';

export const Wrapper = styled.main`
  background: #fff500;
  color: #000;

  width: calc(100% - 6rem);
  height: 100%;
  padding: 0 3rem;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: 'Pilat';
  text-transform: uppercase;

  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;

  width: 40rem;
  margin-bottom: 4rem;
`;

export const TechnologiesWrapper = styled.div`
  width: 50rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TechnologyCard = styled.a`
  flex: 0 0 12.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid #000;
  padding: 1.2rem 2rem;

  min-height: 10rem;

  font-size: 1rem;
  font-weight: bold;

  text-decoration: none;

  img {
    width: 100%;
  }

  p {
    margin-bottom: 0;
  }
`;

export const OthersCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid #000;

  padding: 1.2rem 1.8rem;

  min-height: 10rem;

  margin: 0;

  p:first-child {
    font-size: 1.3rem;
  }

  p {
    margin: 0 0 0.8rem;
  }
`;

export const RepositoryLink = styled.a`
  margin-top: 1.2rem;
  flex: 1;

  color: black;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

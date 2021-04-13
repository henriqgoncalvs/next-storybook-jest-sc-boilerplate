import Link from 'next/link';

import * as S from './Main.styles';
import technologiesMocked, { TechnologyCardProps } from './technologies-mocked';

function Main() {
  return (
    <S.Wrapper>
      <S.Title>Boilerplate</S.Title>
      <S.Description>
        A professional boilerplate with all the best technologies available for
        making robust, escalable and consistent web apps.
      </S.Description>

      <S.TechnologiesWrapper>
        {technologiesMocked.map((technology: TechnologyCardProps) => (
          <Link href={technology.url} passHref key={technology.name}>
            <S.TechnologyCard target="_blank">
              <img
                src={`/img/${technology.logo}`}
                alt={`Imagem da logo de ${technology.name}`}
              />
              <p>{technology.name}</p>
            </S.TechnologyCard>
          </Link>
        ))}
        <S.OthersCard>
          <p>And others:</p>
          <p>PWA</p>
          <p>Eslint</p>
          <p>Prettier</p>
          <p>Husky</p>
        </S.OthersCard>

        <S.RepositoryLink href="https://github.com/henriiqueg/next-storybook-jest-sc-boilerplate">
          Link to repository on github 🔗
        </S.RepositoryLink>
      </S.TechnologiesWrapper>

      <S.Footer>
        <p>Made by Henrique Gonçalves</p>
        <S.FooterLinks>
          <a href="https://github.com/henriiqueg">🐱 Github</a>
          <a href="https://instagram.com/henriiqueg_">📷 Instagram</a>
        </S.FooterLinks>
      </S.Footer>
    </S.Wrapper>
  );
}

export default Main;

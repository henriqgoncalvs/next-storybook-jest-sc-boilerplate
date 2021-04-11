import Link from 'next/link';

import * as S from './Main.styles';
import technologiesMocked, { TechnologyCardProps } from './technologies-mocked';

function Main() {
  return (
    <S.Wrapper>
      <S.Title>Boilerplate</S.Title>
      <S.Description>
        Descrição do boilerplate aqui. Descrição do boilerplate aqui. Descrição
        do boilerplate aqui.
      </S.Description>
      <S.TechnologiesWrapper>
        {technologiesMocked.map((technology: TechnologyCardProps) => (
          <S.TechnologyCard key={technology.name}>
            <img
              src={`/img/${technology.logo}`}
              alt={`Imagem da logo de ${technology.name}`}
            />
            <Link href={technology.url} passHref>
              <S.TechnologyLink>{technology.name}</S.TechnologyLink>
            </Link>
          </S.TechnologyCard>
        ))}
      </S.TechnologiesWrapper>
    </S.Wrapper>
  );
}

export default Main;

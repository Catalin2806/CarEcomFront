
import styled from "styled-components";


const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 40px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Center = styled.div`
max-width: 1000px;
margin: 0 auto;
padding: 0 0px;
`;

const StyledImage = styled.img`
  width: 100%; /* or a specific pixel value */
  height: auto; /* maintain aspect ratio */
  border-radius: 15px; /* adjust this value for desired roundness */
  object-fit: cover; /* this ensures that the image covers the area of the tag, you can adjust or remove as needed */
`;

export default function Featured({product}) {
  
  return (
    <Bg>
    <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Istoricul Complet</Title>
              <Desc>AutoCheckup redefinește modul în care cumpărătorii și vânzătorii de mașini abordează tranzacția auto. Prin simpla introducere a seriei de șasiu, platforma noastră vă oferă acces instantaneu la o bază de date completă cu istoricul vehiculului, detalii tehnice și înregistrările de service. Aflați totul despre mașina dvs. sau despre cea pe care intenționați să o achiziționați, de la istoricul de accidente la reviziile efectuate, într-o manieră transparentă și ușor de navigat. Cu AutoCheckup, aveți încredere și claritate, indiferent că sunteți la volan sau în căutarea cheii perfecte pentru următorul dvs. automobil.</Desc>
            </div>
          </Column>
          <Column>
          <StyledImage src="/Auto.png" alt="Car Header" />
          </Column>
        </ColumnsWrapper>
        </Center>

    </Bg>
  );
}
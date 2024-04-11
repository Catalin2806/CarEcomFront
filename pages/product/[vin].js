import mongoose from 'mongoose';
import styled from 'styled-components';
import Header from "@/components/Header";
import Title from "@/components/Title";
import ProductImages from "@/components/ProductImages";
import { Product } from "@/models/Product"; 
import { useRouter } from 'next/router';


const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;

const Center = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
`;

const WhiteBox = styled.div`
  // ... Definițiile stilurilor tale pentru WhiteBox
`;

const ProductPage = ({ product }) => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Produsul nu a fost găsit!</div>;
  }

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <h2>Serie de șasiu:</h2>
            <Title>{product.VIN}</Title>
            <h2>Proprietăți:</h2>
            {Object.entries(product.properties).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {value.toString()}</p>
            ))}
            <p>{product.description}</p>
            <h2>Preț:</h2>
            <PriceRow><Price>${product.price}</Price></PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const product = await Product.findOne({ VIN: params.vin }).lean();

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
};

export default ProductPage;
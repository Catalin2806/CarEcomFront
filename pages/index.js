import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import HomePageInput from "@/components/HomePageInput"

export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div>
      <Header/>
      <Featured product={featuredProduct}/>
      <HomePageInput/>
    </div>
  )
}


export async function getServerSideProps(){
  const featuredProductId='64897e7ba969498646bfce55';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
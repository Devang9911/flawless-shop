import ProductContainer from "@/components/men/ProductContainer";
import { Suspense } from "react";
import Loading from "../Loading";

function page() {
 
  return (
    <div>
      <h1 className="text-3xl mb-5 font-medium">Mens Collection</h1>
      <Suspense fallback={<Loading />}>
        <ProductContainer />
      </Suspense>
    </div>
  );
}

export default page;

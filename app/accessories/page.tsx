import React, { Suspense } from 'react'
import Loading from '../Loading'
import ProductContainer from '@/components/accessories/ProductContainer'

function page() {
  return (
    <div>
      <h1 className="text-3xl mb-5 font-medium">Jewellery</h1>
      <Suspense fallback={<Loading />}>
        <ProductContainer />
      </Suspense>
    </div>
  )
}

export default page
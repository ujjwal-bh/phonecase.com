"use client"
import React, { Suspense } from 'react'
import ThankYou from './ThankYou'
import { useSearchParams } from 'next/navigation'

const Page = () => {
    const searchParams = useSearchParams()
    const orderId = searchParams.get("orderId") || ""
  return (
    <Suspense>
        <ThankYou orderId={orderId}/>
    </Suspense>
  )
}

export default Page
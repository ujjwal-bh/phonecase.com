import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'
import DesignConfigurator from './DesignConfigurator';

interface IProps{
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
const page = async ({searchParams}: IProps) => {
  const {id }=searchParams;
  if(!id || typeof id != "string"){
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: {id}
  })

  if(!configuration) {
    return notFound();
  }

  const {url, width, height} = configuration
  return (
    <DesignConfigurator configId={configuration.id} imgDimension={{height, width}} imgUrl={url}/>
  )
}

export default page
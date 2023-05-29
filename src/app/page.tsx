import Image from "next/image"
import imageUrlBuilder from '@sanity/image-url'
import BASE_PATH from "@/shared/basePath"
import PortableText from "react-portable-text"
import { createClient } from 'next-sanity'
import { useEffect } from 'react'
import { client } from "../../sanity/lib/client"

async function fetchData() {
  let res = await fetch(`${BASE_PATH}/api/sanity`, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Fialed to fetch")
  }
  return res.json()
}




const Home = async () => {
  let { pets } = await fetchData();
  console.log(pets)

  const builder = imageUrlBuilder(client);

  function urlFor(source: string) {
    return builder.image(source)
  }

  return (
    <div className="flex flex-wrap gap-6">
      {pets.map((item: any, index: number) => (
        <div className="border border-yellow-500 bg-gray-100 rounded-md shadow-lg" key={index}>
          <div className="w-60">
            <Image width={500} height={500} alt="Hi" src={urlFor(item.image[0]).width(500).height(500).url()} />
          </div>
          <h1>
            {item.productName}
          </h1>
          <h2>
            {item.price}
          </h2>
          <h3>
            <PortableText content={item.description} />
          </h3>
        </div>
      ))}
    </div>
  )
}

export default Home
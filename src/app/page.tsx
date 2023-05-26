import imageUrlBuilder from '@sanity/image-url'
import BASE_PATH from "@/shared/basePath"
import PortableText from "react-portable-text"
import { createClient } from 'next-sanity'
import { useEffect } from 'react'

async function fetchData() {
  let res = await fetch(`${BASE_PATH}/api/sanity`)
  if (!res.ok) {
    throw new Error("Fialed to fetch")
  }
  return res.json()
}


const Home = async () => {
  let { pets } = await fetchData();

  let client = createClient({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    apiVersion: "2022-03-25",
    useCdn: false
  });
  const builder = imageUrlBuilder(client);
  
  function urlFor(source: string) {
    return builder.image(source)
  }

    console.log("Image url : " , urlFor(pets[0].image[0]).width(200).url())

  return (
    <div>
      hello
      {
        pets.map((item: any, index: number) => (
          <div key={index}>
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
        ))
      }
    </div>
  )
}

export default Home
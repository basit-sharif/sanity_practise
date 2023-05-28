import Image from "next/image"
import imageUrlBuilder from '@sanity/image-url'
import BASE_PATH from "@/shared/basePath"
import PortableText from "react-portable-text"
import { createClient } from 'next-sanity'
import { useEffect } from 'react'

// async function fetchData() {
//   let res = await fetch(`${BASE_PATH}/api/sanity`)
//   if (!res.ok) {
//     throw new Error("Fialed to fetch")
//   }
//   return res.json()
// }

let client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2022-03-25",
  useCdn: false
});


async function fetchData() {
  const pets = await client.fetch(`*[_type == "pet"]`)
  return pets
}

const Home = async () => {
  let pets = await fetchData();

  let client = createClient({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    apiVersion: "2022-03-25",
    useCdn: true
  });
  const builder = imageUrlBuilder(client);

  function urlFor(source: string) {
    return builder.image(source)
  }

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

            <Image width={500} height={500} alt="Hi" src={urlFor(item.image[0]).width(200).url()} />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))
      }
    </div>
  )
}

export default Home
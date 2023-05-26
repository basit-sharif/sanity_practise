import BASE_PATH from "@/shared/basePath"
import PortableText from "react-portable-text"

async function fetchData() {
  let res = await fetch(`${BASE_PATH}/api/sanity`)
  if (!res.ok) {
    throw new Error("Fialed to fetch")
  }
  return res.json()
}


const Home = async () => {

  let { pets } = await fetchData();

  console.log(pets);

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
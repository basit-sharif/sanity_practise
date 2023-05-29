import Image from "next/image";
import PortableText from "react-portable-text";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "../../../sanity/lib/client";


async function fetchData() {
    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == 'pet']`, {
        cache: "no-store"
    })
    return res.json();
}


const Updated = async () => {
    let data = await fetchData()

    const builder = imageUrlBuilder(client);

    function urlFor(source: string) {
        return builder.image(source)
    }
    return (
        <div className="flex flex-wrap gap-6">
            {data.result.map((item: any, index: number) => (
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

export default Updated
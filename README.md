For sanity installation 

```terminal
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
```


For Images need to install this library
(docs)[https://www.sanity.io/docs/image-url]

```terminal
npm install --save @sanity/image-url
```
Do code:
first import it

```terminal
import imageUrlBuilder from '@sanity/image-url'

//make a client of sanity
let client = createClient({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    apiVersion: "2022-03-25",
    useCdn: false
});

```

```terminal
//pass that client here

  const builder = imageUrlBuilder(client);

// make a function that return url of image:

function urlFor(source: string) {
    return builder.image(source)
  }


extract url like this:
console.log("Image url : " , urlFor(sourceOfOnlyRoot).width(200).url())

```





For Portable text install this library

```terminal
npm i react-portable-text
```

use it something like this
First import it 

```typescript
 import PortableText from "react-portable-text"
```
Then use it :

```typescript
 <PortableText content={youContentRef} />
```
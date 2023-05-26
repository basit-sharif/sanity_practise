// sanity/pet.ts
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'ProductName'
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of:[
                {
                    type:"block"
                }
            ]
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of: [
                {
                    type: 'image',
                    fields:[
                        {
                            name:"alt",
                            type:"text",
                            title:"Alternative text",
                        }
                    ]
                }
            ]
        },
        {
            name: 'productTypes',
            type: 'array',
            title: 'ProductType',
            of: [{ type: 'string' }]
        },
        {
            name: 'listedDate',
            type: 'datetime',
            title: 'ListedDate'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'size',
            type: 'array',
            title: 'Sizes',
            of: [{ type: 'string' }]
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Quantity'
        },
    ]
}
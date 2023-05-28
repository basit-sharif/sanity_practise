import { createClient } from "next-sanity"
import { NextResponse } from "next/server";

let client = createClient({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    apiVersion: "2022-03-25",
    useCdn: true
});


export async function GET() {
    try {
        const pets = await client.fetch(`*[_type == "pet"]`, {
            cache: 'no-store',
        })
        return NextResponse.json({ pets })
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ error })
    }
};
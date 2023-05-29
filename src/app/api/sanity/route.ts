import { createClient } from "next-sanity"
import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";


export async function GET() {
    try {
        const pets = await client.fetch(`*[_type == "pet"]`);
        return NextResponse.json({ pets })
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ error })
    }
};
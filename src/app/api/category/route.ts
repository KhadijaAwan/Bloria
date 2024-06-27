import { NextResponse } from "next/server";
import prisma from './../../../utils/connection';

export async function GET() {
    try {
        const blogCategory = await prisma.category.findMany();
        return NextResponse.json(blogCategory, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: `Failed in Retrieving Categories! ${error}` }, { status: 500 },);
    }
}
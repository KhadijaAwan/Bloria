import { NextResponse } from "next/server";
import prisma from './../../../utils/connection';

export async function GET(request: Request) {
    const blogsOnPage = 4;
    const { searchParams } = new URL(request.url);
    const pageNumber = Number(searchParams.get("pageNumber"));
    const categoryType = searchParams.get("categoryType");

    const requestQuery = {
        take: blogsOnPage,
        skip: blogsOnPage * (pageNumber - 1),
        where: {
            ...(categoryType && { categoryNumber: categoryType })
        },
    };

    try {
        const [blogs, count] = await prisma.$transaction([prisma.blog.findMany(requestQuery), prisma.blog.count({ where: requestQuery.where })]);
        return NextResponse.json({ blogs, count }, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: `Failed in Retrieving Blogs! ${error}` }, { status: 500 },);
    }
}

export async function POST(request: Request) {
    try {
        const blogData = await request.json();
        const newBlog = await prisma.blog.create({
            data: { ...blogData, userEmail: blogData.userEmail }
        });
        return NextResponse.json(newBlog, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: `Failed in Creating Blog! ${error}` }, { status: 500 },);
    }
}
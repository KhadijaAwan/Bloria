import { NextResponse } from "next/server";
import prisma from '../../../utils/connection';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const blogLabel = searchParams.get("blogLabel");
    try {
        const comments = await prisma.comment.findMany({
            where: { ...(blogLabel && { blogLabel }), },
            include: { user: true },
        });
        return NextResponse.json(comments, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: `Failed in Retrieving Blog Comments! ${error}` }, { status: 500 },);
    }
}

export async function POST(request: Request) {
    try {
        const commentData = await request.json();
        const comments = await prisma.comment.create({
            data: { ...commentData, userEmail: commentData.userEmail }
        });
        return NextResponse.json(comments, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: `Failed in Posting a Comment! ${error}` }, { status: 500 },);
    }
}
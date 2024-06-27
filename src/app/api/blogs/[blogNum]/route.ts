import { NextResponse } from "next/server";
import prisma from '../../../../utils/connection';

export async function GET(request: Request, { params }: { params: { blogNum: string } }) {
    const blogNum = params.blogNum;
    try {
        const getblog = await prisma.blog.update({
            where: { blogNum },
            data: { views: { increment: 1 } },
            include: { user: true },
        });
        return NextResponse.json(getblog, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: `Failed in Retrieving Blog! ${error}` }, { status: 500 },);
    }
}
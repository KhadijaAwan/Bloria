"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type PaginationProps = {
    pageNumber: Number;
    previousBlogs: boolean;
    nextBlogs: boolean;
};

export default function Pagination({ pageNumber, previousBlogs, nextBlogs }: PaginationProps) {
    const router = useRouter();

    return (
        <section className="flex justify-between my-6">
            <Button aria-label="previous page button" className="dark:bg-purple-900 bg-purple-700 text-white hover:bg-purple-800 dark:hover:bg-purple-800 w-[90px]" size="sm" onClick={() => router.push(`?pageNumber=${Number(pageNumber) - 1}`)} disabled={!previousBlogs}>Previous</Button>
            <Button aria-label="next page button" className="dark:bg-purple-900 bg-purple-700 text-white hover:bg-purple-800 dark:hover:bg-purple-800 w-[90px]" size="sm" onClick={() => router.push(`?pageNumber=${Number(pageNumber) + 1}`)} disabled={!nextBlogs}>Next</Button>
        </section>
    )
}
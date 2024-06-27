"use client";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Button } from "@/components/ui/button";
import { blogNumModifier } from "@/components/types";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import InputComponents from "./InputComponents";
import FileComponent from "./FileComponent";

export default function ComposeSection() {
    const router = useRouter();
    const { data: session } = useSession();
    const [options, setOptions] = useState(false);
    const [value, setValue] = useState("");
    const [blogLabel, setBlogLabel] = useState("");
    const [blogImage, setBlogImage] = useState("");
    const [blogCategory, setBlogCategory] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const postBlog = async () => {
        if (!session) {
            console.error("User is not authenticated");
        }

        const userEmail = session?.user?.email;

        const response = await fetch(`/api/blogs`, { method: "POST", body: JSON.stringify({ label: blogLabel, description: value, image: blogImage, blogNum: blogNumModifier(blogLabel), categoryNumber: blogCategory, userEmail }), });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            router.push(`/blog/${data.blogNum}`);
        } else {
            console.error("Failed to create Blog!");
        }
    };

    return (
        <section className="my-8 flex flex-col">
            <InputComponents blogLabel={blogLabel} setBlogLabel={setBlogLabel} setBlogCategory={setBlogCategory} />

            <FileComponent options={options} setOptions={setOptions} file={file} setFile={setFile} setBlogImage={setBlogImage} />

            <ReactQuill theme="bubble" value={value} onChange={(inputValue) => setValue(inputValue)} placeholder="Compose Your Blog Here..." />

            <Button className="my-12 py-2 w-[160px] mx-auto lg:mx-0 bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700 dark:text-gray-50 text-sm" disabled={!value} onClick={postBlog}>Publish Blog</Button>
        </section>
    )
}
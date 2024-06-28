import { Session } from "next-auth";
import { DateTime } from "next-auth/providers/kakao";

export type categoryProps = {
    id: string;
    categoryNum: string;
    label: string;
    image: string;
    alt: string;
    background: string;
    link: string;
    Blogs: [];
    color: string;
}

export type displayLinksProps = {
    date: string;
    category: string;
    content: string;
    color: string;
    bg: string;
};

export type UserProps = {
    name: string;
    image: string;
    email: string;
};

export interface SessionProps extends Session {
    status?: string;
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
    expires: any;
}

export type CommentProps = {
    id: string;
    createdAt: string;
    description: string;
    user: UserProps;
};

export type BlogDataProps = {
    id: string;
    createdAt: DateTime;
    blogNum: string;
    label: string;
    description: string;
    image: string;
    views: number;
    categoryNumber: string;
    userEmail: string;
    user: UserProps;
};

export type blogCardsProps = {
    pageNumber: Number;
    categoryType: string;
};

export type DropDownCategoryProps = {
    label: string;
}

export type InputComponentsProps = {
    blogLabel: string;
    setBlogLabel: (data: string) => void;
    setBlogCategory: (value: string) => void;
};

export type FileComponentProps = {
    options: string | boolean;
    setOptions: (value: any) => void;
    file: File | null;
    setFile: (selectedFile: File | null) => void;
    setBlogImage: (downloadURL: string) => void;
};

export const getCategoryStyles = (index: number) => {
    const bgColorClasses = ["bg-gray-100", "bg-yellow-100", "bg-red-100", "bg-blue-100", "bg-pink-100", "bg-green-100"];
    const textColorClasses = ["text-gray-700", "text-yellow-700", "text-red-700", "text-blue-700", "text-pink-700", "text-green-700"];
    return {
        bgColor: bgColorClasses[index] || "",
        textColor: textColorClasses[index] || "",
    };
};

export const blogNumModifier = (word: string) =>
    word
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
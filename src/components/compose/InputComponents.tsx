"use client";
import { DropDownCategoryProps } from "@/components/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { categoriesDropDownLinks } from "@/utils/home";
import { InputComponentsProps } from "../types";

export default function InputComponents({ blogLabel, setBlogLabel, setBlogCategory }: InputComponentsProps) {
    return (
        <>
            <Input placeholder="Enter Blog Title" type="text" className="text-2xl lg:text-3xl mb-8" value={blogLabel} onChange={(e) => setBlogLabel(e.target.value)} />

            <Select onValueChange={(value) => setBlogCategory(value)}>
                <SelectTrigger className="w-[230px]">
                    <SelectValue placeholder="Select Blog Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {categoriesDropDownLinks.map((categoriesLink: DropDownCategoryProps) => (
                            <SelectItem key={categoriesLink.label} value={categoriesLink.label}>{categoriesLink.label}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select >
        </>
    )
}
"use client";
import { useEffect } from "react";
import { Button } from "../ui/button";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { ImageUp, Plus, Upload, Video } from "lucide-react";
import { FileComponentProps } from "../types";

export default function FileComponent({ options, setOptions, file, setFile, setBlogImage }: FileComponentProps) {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    useEffect(() => {
        if (file) {
            const storage = getStorage(app);
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    console.error("Error during upload:", error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log("Url Image: ", downloadURL);
                        setBlogImage(downloadURL);
                    });
                }
            );
        }
    }, [file]);

    return (
        <div className="my-8 flex gap-10">
            <Button className="rounded-full px-2" size="sm" onClick={() => setOptions(!options)}><Plus className="w-[18px]" /></Button>

            {options && <div className="flex gap-3">
                <input
                    type="file"
                    id="image"
                    onChange={handleFileChange}
                    className="hidden"
                />
                <Button className="rounded-full px-2 bg-blue-800 hover:bg-blue-900 text-white" size="sm"><label htmlFor="image"><ImageUp className="w-[18px]" /></label></Button>
                <Button className="rounded-full px-2 bg-orange-600 hover:bg-orange-700 text-white" size="sm"><Upload className="w-[18px]" /></Button>
                <Button className="rounded-full px-2 bg-purple-800 hover:bg-purple-900 text-white" size="sm"><Video className="w-[18px]" /></Button>
            </div>}
        </div>
    )
};
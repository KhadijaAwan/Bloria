import { Poppins } from "next/font/google";

export const fontLight = Poppins({
    subsets: ["latin-ext"],
    weight: "300",
});

export const fontNormal = Poppins({
    subsets: ["latin-ext"],
    weight: "400",
});

export const fontMedium = Poppins({
    subsets: ["latin-ext"],
    weight: "500",
});

export const fontSemibold = Poppins({
    subsets: ["latin"],
    weight: "600",
});

export const fontBold = Poppins({
    subsets: ["latin-ext"],
    weight: "700",
});

export const linkStyle = "no-underline";

export const badgeStyle = "mb-2 text-white text-[11px] tracking-widest py-1";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Haley Mae | Brand Management & Public Presentation", description:"Haley Mae helps leadership teams strengthen brand strategy, digital presentation, executive visibility, and reputation oversight.", openGraph:{title:"Haley Mae | Brand Management",description:"Brand stewardship for organizations that value reputation, clarity, and trust.",type:"website"}, other:{"codex-preview":"development"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

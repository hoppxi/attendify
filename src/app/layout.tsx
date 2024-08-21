"use client"
import { NavDrawerProvider } from "@/context/NavDrawerContext";
import titleMap from "./page-title";
import { usePathname } from "next/navigation";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-symbols-outlined";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	const currentPath = usePathname();
	const pageTitle: string = titleMap[currentPath];
	const description: string = "Attendify is an innovative web app designed for efficient school attendance management. Featuring seamless QR code scanning for quick and accurate check-ins, Attendify provides real-time attendance tracking, automated report generation, and user-friendly dashboards for administrators and teachers. Enhance your school's attendance system with Attendify's robust features and streamlined interface.";
	return (
		<html lang="en">
			<head>
				<title>{pageTitle}</title>
				<meta name="description" content={description} />
			</head>
			<body>
				<NavDrawerProvider>
					{children}
				</NavDrawerProvider>
			</body>
		</html>
	);
}

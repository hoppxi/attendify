
import type { Metadata } from "next";
import { NavDrawerProvider } from "@/context/NavDrawerContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/material-symbols-outlined";
import "./globals.css";

export const metadata: Metadata = {
	title: "Attendify",
	description: "App made for schools for attendanc management.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body>
				<NavDrawerProvider>
					{children}
				</NavDrawerProvider>
			</body>
		</html>
	);
}

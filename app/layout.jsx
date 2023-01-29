import { Inter } from "@next/font/google";
import { classNames } from "@/utils/classNames";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body
				className={classNames(
					inter.className,
					"text-sm text-gray-400 py-2.5"
				)}
			>
				<Header />
				<main className="py-8 min-h-screen">{children}</main>
			</body>
		</html>
	);
}

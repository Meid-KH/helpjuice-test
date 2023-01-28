import { Inter } from "@next/font/google";
import { classNames } from "@/utils/classNames";
import "./globals.css";

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
				className={classNames(inter.className, "text-sm text-gray-400")}
			>
				<div className="py-2.5 min-h-screen">{children}</div>
			</body>
		</html>
	);
}

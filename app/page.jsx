import Link from "next/link";
import { classNames } from "@/utils/classNames";
import Icon from "@/components/Icon";
import Paragraph from "@/components/Paragraph";
import ControlPanel from "./ControlPanel";
import Intro from "./Intro";
import Block from "./Block";

export default function Home() {
	return (
		<>
			<div className="container mx-auto px-6 max-w-3xl">
				<div className="mb-16 space-y-8">
					<ControlPanel />
					<Intro />
				</div>

				{/* Editor area */}
				<Block />
			</div>
		</>
	);
}

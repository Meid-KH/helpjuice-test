import Icon from "@/components/Icon";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

const Header = () => {
	return (
		<header className="h-12 px-6 flex justify-between gap-6">
			<div className="h-full flex items-center gap-2.5">
				<button
					className={classNames(
						"w-8 h-7 rounded",
						"hover:bg-gray-200 focus:ring-2"
					)}
				>
					<Icon name="chevrons-right" className="w-5" />
				</button>
				<div className="flex gap-1.5">
					<Icon name="book-open" className="w-4" />
					<Link
						href=""
						className="underline-offset-2 font-medium underline"
					>
						Main
					</Link>
				</div>
				<span>/</span>
				<Link href="" className="underline-offset-2 hover:underline">
					getting started
				</Link>
				<span>/</span>
				<Link href="" className="underline-offset-2 hover:underline">
					Front-end developer test project
				</Link>
			</div>

			<div className="h-full flex items-center gap-2">
				<button
					className={classNames(
						"flex items-center gap-1.5",
						"px-2.5 py-1 rounded hover:bg-gray-100",
						"focus:ring-2"
					)}
				>
					<Icon name="unlock" className="w-4" />
					Editing
				</button>

				<span className="text-gray-200">|</span>

				<div className="">
					<button
						className={classNames(
							"flex items-center gap-1 text-blue-600 font-semibold",
							"px-2.5 py-1 rounded hover:bg-blue-50",
							"focus:ring-2"
						)}
					>
						Publish Space
						<Icon name="chevron-down" className="w-4 -mr-1" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

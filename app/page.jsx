import Link from "next/link";
import { classNames } from "@/utils/classNames";
import Icon from "@/components/Icon";
import Paragraph from "@/components/Paragraph";

export default function Home() {
	return (
		<>
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
					<Link
						href=""
						className="underline-offset-2 hover:underline"
					>
						getting started
					</Link>
					<span>/</span>
					<Link
						href=""
						className="underline-offset-2 hover:underline"
					>
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
			<main className={classNames("py-8")}>
				<div className="container mx-auto px-6 max-w-3xl">
					<div className="mb-16 space-y-8">
						<div
							className={classNames(
								"h-12 rounded border p-2",
								"border-gray-200 shadow shadow-gray-100",
								"flex justify-between items-center"
							)}
						>
							<div className="h-full flex items-center gap-3">
								<span
									className={classNames(
										"bg-green-200 text-green-800 font-semibold uppercase text-lg",
										"h-full w-8 rounded grid place-items-center"
									)}
								>
									p
								</span>

								<div className="border-l pl-2.5 flex gap-1 items-center">
									<Icon name="clock" className="w-4" />
									0min
								</div>

								<div className="border-l pl-2.5 flex gap-1 items-center">
									<span className="block mx-auto w-6 h-6 rounded-full bg-red-400"></span>
								</div>

								<div className="border-l pl-2.5 flex gap-1 items-center">
									<Icon
										name="arrow-down"
										className="w-4 rotate-45"
									/>
									0
								</div>
							</div>

							<div className="h-full flex gap-0.5">
								<button
									className={classNames(
										"w-7 h-full grid place-items-center rounded",
										"hover:text-gray-800 hover:bg-gray-100 focus:ring-2"
									)}
								>
									<Icon name="check-circle" className="w-5" />
								</button>
								<button
									className={classNames(
										"w-7 h-full grid place-items-center rounded",
										"hover:bg-gray-100 focus:ring-2"
									)}
								>
									<Icon
										name="cloud"
										className="w-5 text-green-600"
									/>
								</button>
								<button
									className={classNames(
										"w-7 h-full grid place-items-center rounded",
										"hover:text-gray-800 hover:bg-gray-100 focus:ring-2"
									)}
								>
									<Icon
										name="more-vertical"
										className="w-5"
									/>
								</button>
							</div>
						</div>

						<div className="space-y-4">
							<div className="text-gray-900 text-4xl font-bold pb-3 border-b border-gray-200">
								Front-end developer test project
							</div>
							<Paragraph>
								The goal is to make a page taht looks exactly
								like this, and has the ability to create H1 text
								simpy by typing / then 1, then typing a text,
								and hitting enter.
							</Paragraph>
						</div>
					</div>

					{/* Editor area */}
					<div className="rounded p-3 text-base -ml-3 relative">
						<div
							contenteditable="true"
							placeholder="Type / or block, @ to link docs or people"
							className={classNames(
								"min-h-[1em} focus:outline-none",
								"relative text-gray-700",
								"after:content-[attr(placeholder)] after:absolute after:left-0 after:text-gray-400"
							)}
						>
							{/* Lorem ipsum */}
						</div>
					</div>
				</div>
			</main>
			<footer></footer>
		</>
	);
}

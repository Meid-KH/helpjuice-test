"use client";
import React from "react";
import Icon from "@/components/Icon";
import { classNames } from "@/utils/classNames";
import Paragraph from "@/components/Paragraph";

const BLOCK_STYLES = {
	H1: "text-3xl font-bold after:font-bold",
};

const Block = () => {
	const [active, setActive] = React.useState(false);
	const [placeholder, setPlaceholder] = React.useState("");
	const [showDropdown, setShowDropdown] = React.useState(false);
	const [blockStyles, setBlockStyles] = React.useState("");
	const inputRef = React.useRef();

	const handleChange = (event) => {
		const { innerHTML: html } = event.target;
		if (html !== "") {
			setActive(true);
		} else {
			setActive(false);
			setBlockStyles("");
		}
		handleInput(event);
		setPlaceholder("");
	};

	const handleInput = (event) => {
		const { innerHTML: shortcut } = event.target;
		if (shortcut === "/1") {
			console.log("now launch the dropdown");
			setShowDropdown(true);
		} else {
			console.log("now hide the dropdown");
			setShowDropdown(false);
		}
	};

	const hnadleBlockChoice = (blockCode) => {
		switch (blockCode) {
			case "H1":
				return setBlockStyles(BLOCK_STYLES.H1);

			case "H1_EXPANDABLE":
				return setBlockStyles(BLOCK_STYLES.H1);

			default:
				break;
		}
	};

	const handleClearInput = () => {
		console.log(inputRef.current.innerHTML);
		inputRef.current.innerHTML = "";
		setActive(false);
		setShowDropdown(false);
		setPlaceholder("Heading 1....");
	};

	return (
		<div className="group rounded p-3 text-base -ml-3 relative">
			{/* Action buttons */}
			<div
				className={classNames(
					"absolute right-full top-1/2 -translate-y-1/2",
					"hidden group-hover:flex"
				)}
			>
				<button
					className={classNames(
						"w-5 h-7 grid place-items-center rounded",
						"hover:bg-gray-100 focus:bg-gray-200"
					)}
				>
					<Icon name="plus" className="w-[18px]" />
				</button>
				<button
					className={classNames(
						"w-5 h-7 grid place-items-center rounded",
						"hover:bg-gray-100 focus:bg-gray-200"
					)}
				>
					<Icon name="more-vertical" className="w-[18px]" />
				</button>
			</div>
			<div
				ref={inputRef}
				className={classNames(
					"h-[1em} focus:outline-none",
					"relative text-gray-700 font-medium",
					"after:content-[attr(placeholder)] after:absolute after:font-normal after:left-0 after:text-gray-400",
					// selected block styles
					blockStyles
				)}
				contentEditable="true"
				placeholder={
					!active && placeholder == ""
						? "Type / or block, @ to link docs or people"
						: placeholder
				}
				onInput={handleChange}
				onKeyUp={handleInput}
			/>

			{/* Blocks dropdown */}
			<div
				className={classNames(
					"absolute top-full p-3 rounded",
					"w-80 h-[27rem] overflow-y-auto",
					"bg-white border border-gray-200 drop-shadow-xl transition-transform origin-top-left",
					showDropdown
						? "opacity-1 z-10 scale-100"
						: "opacity-0 -z-10 scale-90"
				)}
			>
				<span className="text-gray-700 text-base font-bold">
					Add blocks
				</span>
				<Paragraph className="text-sm !text-gray-400/90">
					Keep typing to filter, or escape to exit
				</Paragraph>
				<span className="block mt-4 text-sm text-gray-500">
					Filtering keyword{" "}
					<span className="bg-blue-600 text-white px-1 py-0.5 rounded">
						1
					</span>
				</span>
				{/* block list */}
				<ul className="-mx-3 mt-2.5" onClick={handleClearInput}>
					{/* block item */}
					<BlockItem
						title="Heading 1"
						description="Shortcut: type # + space"
						setStyles={() => hnadleBlockChoice("H1")}
					/>
					<BlockItem
						title="Expandable Heading 1"
						description="Shortcut: type >># + space"
						setStyles={() => hnadleBlockChoice("H1_EXPANDABLE")}
					/>
				</ul>
			</div>
		</div>
	);
};
export default Block;

const BlockItem = ({ icon = "T", title, description, setStyles, ...rest }) => {
	return (
		<li
			onClick={setStyles}
			className={classNames(
				"h-14 p-1.5 select-none",
				"flex gap-2",
				"cursor-pointer hover:bg-gray-100"
			)}
			{...rest}
		>
			{/* block icon */}
			<span className="h-full w-12 grid place-items-center text-3xl font-semibold text-gray-400">
				{icon}
			</span>
			{/* block info */}
			<div className="h-full flex flex-col justify-between">
				<span className="flex-shrink-0 text-base font-semibold text-gray-800">
					{title}
				</span>
				<span className="text-xs">{description}</span>
			</div>
		</li>
	);
};

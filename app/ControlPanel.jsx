import { classNames } from "@/utils/classNames";
import Icon from "@/components/Icon";
import Paragraph from "@/components/Paragraph";

const ControlPanel = () => {
	return (
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

				<div className="border-l pl-2.5 flex gap-1.5 items-center">
					<Icon name="clock" className="w-4" />0 min
				</div>

				<div className="border-l pl-2.5 flex gap-1 items-center">
					<span className="block mx-auto w-6 h-6 rounded-full bg-red-400"></span>
				</div>

				<div className="border-l pl-2.5 flex gap-1 items-center">
					<Icon name="arrow-down" className="w-4 rotate-45" />0
				</div>
			</div>

			<div className="h-full flex gap-1.5">
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
					<Icon name="cloud" className="w-5 text-green-600" />
				</button>
				<button
					className={classNames(
						"w-7 h-full grid place-items-center rounded",
						"hover:text-gray-800 hover:bg-gray-100 focus:ring-2"
					)}
				>
					<Icon name="more-vertical" className="w-5" />
				</button>
			</div>
		</div>
	);
};

export default ControlPanel;

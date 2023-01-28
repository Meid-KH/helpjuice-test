import { classNames } from "@/utils/classNames";

const Paragraph = ({ children, className = "", ...rest }) => {
	return (
		<p
			className={classNames(
				"text-base text-gray-500 leading-relaxed",
				className
			)}
			{...rest}
		>
			{children}
		</p>
	);
};

export default Paragraph;

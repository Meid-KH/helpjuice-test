import Paragraph from "@/components/Paragraph";

const Intro = () => {
	return (
		<div className="space-y-4">
			<div className="text-gray-900 text-4xl font-bold pb-3 border-b border-gray-200">
				Front-end developer test project
			</div>
			<Paragraph>
				The goal is to make a page taht looks exactly like this, and has
				the ability to create H1 text simpy by typing / then 1, then
				typing a text, and hitting enter.
			</Paragraph>
		</div>
	);
};

export default Intro;

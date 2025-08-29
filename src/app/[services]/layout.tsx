import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<section className="mx-auto max-w-7xl px-4 pt-36">
				{children}
			</section>
		</>
	);
};

export default layout;

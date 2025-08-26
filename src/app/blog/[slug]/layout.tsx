import { ReactNode } from "react";

export default function BlogSlugLayout({ children }: { children: ReactNode }) {
	return (
		<section className="mx-auto max-w-7xl px-4 pt-36 pb-14">
			{children}
		</section>
	);
}

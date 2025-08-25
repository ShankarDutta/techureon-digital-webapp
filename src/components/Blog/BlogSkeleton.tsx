import { Card } from "../shadcnui/card";
import { Skeleton } from "../shadcnui/skeleton";

const BlogSkeleton = () => {
	return (
		<section className="mx-auto max-w-4xl">
			<Card className="border-0 px-5 shadow-lg md:px-10">
				<Skeleton className="mb-4 h-12 w-3/4" /> {/* Title */}
				<Skeleton className="mb-6 h-6 w-1/3" /> {/* Subtitle */}
				<Skeleton className="mx-auto mb-8 h-[400px] w-full max-w-4xl rounded-xl" />{" "}
				{/* Image */}
				<Skeleton className="mb-3 h-8 w-2/5" /> {/* Heading 1 */}
				<Skeleton className="mb-3 h-20 w-full" /> {/* Paragraph 1 */}
				<Skeleton className="mb-3 h-20 w-full" /> {/* Paragraph 2 */}
				<Skeleton className="mb-5 h-16 w-3/4" /> {/* Quote */}
				<Skeleton className="mb-3 h-8 w-2/5" /> {/* Heading 2 */}
				<Skeleton className="mb-3 h-20 w-full" /> {/* Paragraph 3 */}
				<Skeleton className="mb-3 h-8 w-2/5" /> {/* Heading 3 */}
				<Skeleton className="mb-3 h-20 w-full" /> {/* Paragraph 4 */}
			</Card>
		</section>
	);
};

export default BlogSkeleton;

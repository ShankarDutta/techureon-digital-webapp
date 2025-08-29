import { Skeleton } from "../shadcnui/skeleton";

const ServiceSkeleton = () => {
	return (
		<>
			<div className="space-y-12">
				{/* Top Section */}
				<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
					<div className="space-y-4">
						<Skeleton className="h-8 w-48" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
						<Skeleton className="h-10 w-40 rounded-lg" />
						{/* Button */}
					</div>
					<Skeleton className="h-64 w-full rounded-2xl" />
					{/* Image */}
				</div>

				{/* Middle Section */}
				<div className="space-y-4 text-center">
					<Skeleton className="mx-auto h-7 w-80" />
					{/* Sub-heading */}
					<Skeleton className="mx-auto h-4 w-5/6" />
					<Skeleton className="mx-auto h-4 w-4/6" />

					<Skeleton className="h-80 w-full rounded-2xl" />
				</div>

				{/* Bottom Section */}
				<div className="space-y-6 py-10">
					<Skeleton className="mx-auto h-7 w-60" />
					{/* Section Heading */}
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="flex flex-col items-center space-y-4 rounded-2xl border p-6">
								<Skeleton className="h-12 w-12 rounded-full" />
								{/* Icon */}
								<Skeleton className="h-5 w-40" />
								<Skeleton className="h-4 w-5/6" />
								<Skeleton className="h-4 w-4/6" />
								{/* Description */}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceSkeleton;

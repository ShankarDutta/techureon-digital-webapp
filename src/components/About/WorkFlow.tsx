import { AboutWorkFlowCardsDatas } from "@/lib/mapdata";
import StepCrads from "./StepCrads";

const WorkFlow = () => {
	return (
		<section className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3 md:gap-6 lg:gap-10">
			{AboutWorkFlowCardsDatas.map((data) => {
				return (
					<StepCrads
						key={data.id}
						info={data}
					/>
				);
			})}
		</section>
	);
};

export default WorkFlow;

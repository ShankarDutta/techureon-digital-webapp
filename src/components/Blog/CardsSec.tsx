import { BlogCardsDatas } from "@/lib/mapdata";
import { BlogCardsDataType } from "@/lib/types";
import Cards from "./Cards";

const CardsSec = () => {
	return (
		<>
			<div className="grid grid-cols-1 gap-8 pt-20 md:grid-cols-2 lg:grid-cols-3">
				{BlogCardsDatas.map((datas: BlogCardsDataType) => {
					return (
						<Cards
							key={datas.id}
							info={datas}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CardsSec;

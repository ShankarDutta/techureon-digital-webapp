import { homeServiceCards } from "@/lib/mapdata";
import ServiceCard from "./ServiceCard";

const ServiceSec = () => {
	return (
		<>
			{homeServiceCards.map((servicecard) => {
				return (
					<ServiceCard
						key={servicecard.id}
						info={servicecard}
					/>
				);
			})}
		</>
	);
};

export default ServiceSec;

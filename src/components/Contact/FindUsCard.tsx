import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa6";
import { Card, CardDescription, CardHeader, CardTitle } from "../shadcnui/card";

const FindUsCard = () => {
	return (
		<>
			<h1 className="text-2xl font-bold capitalize md:text-4xl lg:text-5xl">
				Where to find us
			</h1>
			<section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
				<Card className="border-1 py-10">
					<CardHeader className="flex flex-col items-center justify-center">
						<CardTitle className="text-2xl">Studio HQ</CardTitle>
						<CardDescription className="text-center text-lg">
							123 Design Street, San Francisco (By appointment
							only)
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="border-1 py-10">
					<CardHeader className="flex flex-col items-center justify-center">
						<CardTitle className="text-2xl">Remote Teams</CardTitle>
						<CardDescription className="text-center text-lg">
							We work with clients in 12+ timezones (EST to
							GMT+5:30).
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="border-1 py-10">
					<CardHeader className="flex flex-col items-center justify-center">
						<CardTitle className="text-2xl">Follow us</CardTitle>
						<CardDescription className="mt-4 flex items-center justify-between gap-8 text-2xl">
							<FaFacebook className="ease-in hover:scale-110 hover:text-blue-400" />
							<FaInstagram className="ease-in hover:scale-110 hover:text-blue-400" />
							<FaTwitter className="ease-in hover:scale-110 hover:text-blue-400" />
							<FaWhatsapp className="ease-in hover:scale-110 hover:text-blue-400" />
						</CardDescription>
					</CardHeader>
				</Card>
			</section>
		</>
	);
};

export default FindUsCard;

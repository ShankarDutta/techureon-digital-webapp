"use client";

import { Button } from "@/components/shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shadcnui/form";
import { Input } from "@/components/shadcnui/input";
import { Textarea } from "@/components/shadcnui/textarea";

import { ConatctSchema, ConatctSchemaType } from "@/lib/allschema";
import { useAOS } from "@/lib/useaos";
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { Loader, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
	useAOS(); // add scroll animation

	const rhform = useForm<ConatctSchemaType>({
		resolver: zodResolver(ConatctSchema),
		defaultValues: {
			name: "",
			usermail: "",
			number: "",
			message: "",
		},
		mode: "onSubmit",
	});

	const sentData = async (data: ConatctSchemaType) => {
		try {
			const payload = {
				...data,
				access_key: process.env.NEXT_PUBLIC_WEB3FORM_KEY,
			};

			const res: { success: boolean } = await ky
				.post("https://api.web3forms.com/submit", {
					json: payload,
					headers: {
						Accept: "application/json",
					},
				})
				.json();

			if (res.success) {
				toast.success("Message sent successfully ");
				rhform.reset();
			} else {
				toast.error("Failed to send message.");
			}
		} catch (error) {
			toast.error("⚠️ Something went wrong!");
			console.error("Form submission error:", error);
		}
	};

	return (
		<div
			className="w-full max-w-2xl rounded-2xl border border-purple-500/30 p-8 shadow-2xl backdrop-blur-xl dark:bg-black/60"
			data-aos="fade-up">
			<h2 className="mb-6 text-center text-3xl font-bold">Contact Us</h2>

			<Form {...rhform}>
				<form
					onSubmit={rhform.handleSubmit(sentData)}
					className="grid gap-5">
					{/* Name */}
					<FormField
						control={rhform.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="John Doe"
										autoComplete="off"
										className="border-gray-700 focus:ring-purple-500"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Email */}
					<FormField
						control={rhform.control}
						name="usermail"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="you@example.com"
										autoComplete="off"
										className="border-gray-700 focus:ring-purple-500"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Phone */}
					<FormField
						control={rhform.control}
						name="number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="+91 123-456-7890"
										autoComplete="off"
										className="border-gray-700 focus:ring-purple-500"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Message */}
					<FormField
						control={rhform.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										placeholder="Write your message..."
										className="border-gray-700 focus:ring-purple-500"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Submit */}
					<Button
						className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-500 py-6 text-lg text-white hover:from-purple-700 hover:to-indigo-600"
						disabled={rhform.formState.isSubmitting}>
						{rhform.formState.isSubmitting ? (
							<>
								<Loader className="mr-2 h-5 w-5 animate-spin" />
								Sending...
							</>
						) : (
							<>
								<Send className="mr-2 h-5 w-5" />
								Send Message
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default ContactForm;

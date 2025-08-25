"use client";
import { SubscribeSchema, SubscribeSchemaType } from "@/lib/allschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../shadcnui/form";
import { Input } from "../shadcnui/input";

const SubscribeForm = () => {
	const rhForm = useForm<SubscribeSchemaType>({
		resolver: zodResolver(SubscribeSchema),
		defaultValues: {
			mail: "",
		},
	});

	const handelSubscribe = () => {
		console.log("Succesfully Subscribed");
		rhForm.reset();
	};
	return (
		<>
			<Form {...rhForm}>
				<form onSubmit={rhForm.handleSubmit(handelSubscribe)}>
					<FormField
						control={rhForm.control}
						name="mail"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										className="text-white"
										placeholder="Example@gmail.com"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className="mt-4 w-full"
						disabled={rhForm.formState.isSubmitSuccessful}>
						{rhForm.formState.isSubmitSuccessful ? (
							<>
								<span className="flex items-center">
									<CheckIcon className="mr-2 size-4" />
									Subscribed
								</span>
							</>
						) : (
							<>
								<span className="flex items-center">
									Follow
									<ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
								</span>
							</>
						)}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default SubscribeForm;

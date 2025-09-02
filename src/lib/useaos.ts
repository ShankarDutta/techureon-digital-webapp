"use client";

import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function useAOS(options: AosOptions = { duration: 1000, once: true }) {
	useEffect(() => {
		AOS.init(options);
	}, [options]);
}

"use client";

import { queryClientOptions } from "@/app/utils/constants";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

interface Props {
	children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
	const [queryClient] = useState(() => new QueryClient(queryClientOptions));

	return (
		<QueryClientProvider client={queryClient}>
			{/* @ts-expect-error Server Component */}
			{children}
		</QueryClientProvider>
	);
};

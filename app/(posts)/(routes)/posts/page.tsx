import { Posts } from "@/app/components/client/Posts/Posts.client";
import ReactQueryHydrate from "@/app/components/client/ReactQueryHydrate/ReactQueryHydrate";
import getQueryClient from "@/app/lib/getQueryClient";
import { getPostsQueryFn } from "@/app/queryFns/postQueryFns";

import { dehydrate } from "@tanstack/query-core";

const PostPage = async () => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["posts"], getPostsQueryFn);
	const dehydratedState = dehydrate(queryClient);

	return (
		<ReactQueryHydrate state={dehydratedState}>
			<Posts />
		</ReactQueryHydrate>
	);
};

export default PostPage;

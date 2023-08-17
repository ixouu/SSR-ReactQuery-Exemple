"use client";

import { getPostsQueryFn } from "@/app/queryFns/postQueryFns";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Post as PostType } from "@/app/types";
import { Post } from "./Post.client";

export const Posts = () => {
	const { data, isLoading } = useQuery<PostType[]>({
		queryKey: ["posts"],
		queryFn: getPostsQueryFn,
	});

	if (isLoading) return <div>loading ...</div>;
	if (!data) return <div>Not found</div>;

	return (
		<div className='divide-y'>
			{data.map((post) => (
				<Post
					post={post}
					key={post.id}
				/>
			))}
		</div>
	);
};

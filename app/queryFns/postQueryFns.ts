import { jsonPlaceholderAxios } from "@/app/jsonPlaceHolderAxios";

export const getPostsQueryFn = async () =>
	jsonPlaceholderAxios.get(`/posts`).then((res) => res.data);

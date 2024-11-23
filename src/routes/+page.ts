import type { PageLoad } from './$types';
import type { Post } from '$lib/types'

export const ssr = false;

export const load = (async ({ fetch }) => {
    const response = await fetch('/api/posts?limit=3')
    const posts: Post[] = await response.json()
    return { posts }
}) satisfies PageLoad;
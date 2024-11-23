import type { PageLoad } from './$types';
import type {Repository} from "$lib/types";

export const ssr = false;

export const load = (async ({ fetch }) => {
    const response = await fetch('https://pinned.berrysauce.dev/get/JayXTQ')
    const repos: Repository[] = await response.json()
    return { repos }
}) satisfies PageLoad;
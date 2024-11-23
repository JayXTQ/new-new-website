import type { PageLoad } from './$types';
import { redirect, error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
    try {
        const post = await import(`../../../lib/guides/${params.slug}.md`)

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}) satisfies PageLoad;
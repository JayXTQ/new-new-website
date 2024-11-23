import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts(limit?: number) {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/lib/guides/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post
            post.published && posts.length !== limit && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET(event) {
    let limit = event.url.searchParams.get("limit");
    const posts = await getPosts(limit ? parseInt(limit) : undefined)
    return json(posts)
}
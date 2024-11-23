export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
}

export type Repository = {
    author: string;
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
}
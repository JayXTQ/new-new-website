<script lang="ts">
    import type { PageData } from './$types'
    import HeadingBox from "$lib/components/HeadingBox.svelte";
    import {formatDate} from "$lib/utils.js";
    import SvelteSeo from "svelte-seo";

    let { data }: {
        data: PageData;
    } = $props();
</script>

<SvelteSeo
        title="Jay's guides"
        description="My helpful guides"
        keywords="jay, jxtq, jayxtq, discordlab, friday, enka.discord, enka.cards, developer, website"
        openGraph={{
        title: "Jay's guides",
        description: "My guides on GitHub",
        url: "https://jxtq.moe/guides",
        type: "website",
        site_name: "Jay's Website"
    }}
/>

<HeadingBox title="Guides" class="max-h-[50rem] max-w-[100rem] w-full h-full">
    <div class="overflow-auto max-h-[47rem]">
        <a href="/" class="float-right">Go back</a>
        <div class="mt-10 space-y-4">
            {#each data.posts as post}
                <a href="/guides/{post.slug}" class="block rounded-[13px] p-4 h-auto w-full border-2 border-[#7A7A7A]">
                    <h1 class="font-bold text-xl">{post.title}</h1>
                    <p class="text-gray-300">{formatDate(post.date)}</p>
                    <p>{post.description}</p>
                </a>
            {/each}
        </div>
    </div>
</HeadingBox>
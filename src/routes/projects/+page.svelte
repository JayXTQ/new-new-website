<script lang="ts">
    import type { PageData } from './$types';
    import {formatDate} from "$lib/utils";
    import HeadingBox from "$lib/components/HeadingBox.svelte";
    import SvelteSeo from "svelte-seo";

    let { data }: {
        data: PageData;
    } = $props();
</script>

<SvelteSeo
        title="Jay's Projects"
        description="My projects on GitHub"
        keywords="jay, jxtq, jayxtq, discordlab, friday, enka.discord, enka.cards, developer, website"
        openGraph={{
        title: "Jay's Projects",
        description: "My projects on GitHub",
        url: "https://jxtq.moe/projects",
        type: "website",
        site_name: "Jay's Website"
    }}
/>

<HeadingBox title="Projects" class="max-h-[50rem] max-w-[100rem] w-full h-full">
    <div class="overflow-y-scroll h-full mb-5">
        <a href="/" class="float-right">Go back</a>
        <div class="my-10 space-y-4">
            {#each data.repos as repo}
                <a href="https://github.com/{repo.author}/{repo.name}" class="block rounded-[13px] p-4 h-auto w-full border-2 border-[#7A7A7A]">
                    <h1 class="font-bold text-xl">{repo.name}</h1>
                    <p class="text-gray-300">{repo.language} Project</p>
                    <p>{repo.description}</p>
                </a>
            {/each}
        </div>
    </div>
</HeadingBox>
<script lang="ts">
    import type { PageData } from './$types';
    import {formatDate} from "$lib/utils";
    import HeadingBox from "$lib/components/HeadingBox.svelte";

    let { data }: {
        data: PageData;
    } = $props();
</script>

<div class="bg-black text-white min-h-screen flex items-center justify-center p-5">
    <HeadingBox title="Projects" class="max-h-[50rem] max-w-[100rem] w-full h-full">
        <div class="overflow-scroll h-full">
            <a href="/" class="float-right">Go back</a>
            <div class="mt-10 space-y-4">
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
</div>
<script lang="ts">
    import type { PageData } from './$types'
    import {formatDate} from "$lib/utils";
    import HeadingBox from "$lib/components/HeadingBox.svelte";

    let { data }: {
        data: PageData;
    } = $props();
</script>

<div class="bg-black text-white h-screen flex items-center justify-center p-5">
    <HeadingBox title="Guide" class="max-h-[50rem] max-w-[100rem] w-full h-full">
        {@const Component = data.content}
        <div class="overflow-auto xl:max-h-[47rem] max-h-[40rem]">
            <a href="/guides" class="float-right mr-4">Go back</a>
            <h1 class="text-2xl font-bold">{data.meta.title}</h1>
            <p class="text-gray-300">{formatDate(data.meta.date)}</p>
            <div class="mt-5 prose prose-invert max-w-none p-5">
                <Component />
            </div>
        </div>
    </HeadingBox>
</div>
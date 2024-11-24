<script lang="ts">
    import type {Snippet} from "svelte";

    let { title, size = "text-xl", class: className = "", children }: {
        title: string | Snippet;
        size?: string;
        class?: string;
        children: Snippet;
    } = $props();
</script>

<div class="relative border-2 rounded-[13px] {className} text-white border-[#373737]">
    <div class="absolute top-0 left-0 bg-black px-2 -mt-[19px] ml-[10px] text-[#8D8D8D] {size}">
        {#if typeof title === "string"}
            {title}
        {:else}
            {@render title()}
        {/if}
    </div>
    <div class="p-5 text-white">
        {@render children()}
    </div>
</div>
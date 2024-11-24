<script lang="ts">
    import HeadingBox from "$lib/components/HeadingBox.svelte";

    import { useLanyard } from "svelte-lanyard";
    import Mail from "$lib/components/Mail.svelte";
    import Github from "$lib/components/Github.svelte";
    import Bluesky from "$lib/components/Bluesky.svelte";
    import Kofi from "$lib/components/Kofi.svelte";
    import CSharp from "$lib/components/CSharp.svelte";
    import Typescript from "$lib/components/Typescript.svelte";
    import SvelteSeo from "svelte-seo";
    import type { PageData } from './$types';

    const lanyard = useLanyard("618689346828238848");

    let { data }: {
        data: PageData
    } = $props();

    const projects = [
        {
            name: "DiscordLab",
            icon: CSharp,
            link: 'https://github.com/JayXTQ/DiscordLab'
        },
        {
            name: "Friday",
            icon: Typescript,
            link: 'https://github.com/JayXTQ/Friday'
        },
        {
            name: 'enka.discord',
            icon: Typescript,
            link: 'https://github.com/JayXTQ/enka.discord'
        }
    ]

    const guides = data.posts
</script>

<SvelteSeo
    title="Jay's Website"
    description="My silly website"
    keywords="jay, jxtq, jayxtq, discordlab, friday, enka.discord, enka.cards, developer, website"
    openGraph={{
        title: "Jay's Website",
        description: "My silly website",
        url: "https://jxtq.moe",
        type: "website",
        site_name: "Jay's Website"
    }}
/>

<div class="flex xl:flex-row flex-col-reverse items-center justify-center w-full h-full gap-[29px] p-5">
    <div class="flex flex-col gap-[29px] xl:max-w-[384px] w-full h-auto">
        <HeadingBox title="My Profile" class="w-full h-[452px] flex flex-col items-center">
            {#if $lanyard}
                <img src="https://cdn.discordapp.com/avatars/618689346828238848/{$lanyard.discord_user.avatar}?size=1024&width=640&height=640" alt="Avatar" class="w-[300px] h-[300px] mt-4">
                <div class="flex items-center justify-center mt-[35px] gap-[13px] w-full">
                    <a href="mailto:me@jxtq.moe">
                        <Mail />
                    </a>
                    <a href="https://github.com/JayXTQ">
                        <Github />
                    </a>
                    <a href="https://bsky.app/profile/jxtq.moe">
                        <Bluesky />
                    </a>
                    <a href="https://ko-fi.com/jxtq">
                        <Kofi />
                    </a>
                </div>
            {/if}
        </HeadingBox>
        <HeadingBox class="w-full h-[107px]">
            {#snippet title()}
                <div class="flex">
                    Status
                    {#if $lanyard && $lanyard.discord_status}
                        {@const status = $lanyard.discord_status}
                        <div class="w-3 h-3 rounded-full ml-2 my-auto" class:bg-[#23a55a]={status === "online"} class:bg-[#f0b232]={status === "idle"} class:bg-[#f23f43]={status === "dnd"} class:bg-[#2c2f33]={status === "offline"}></div>
                    {/if}
                </div>
            {/snippet}
            {#if $lanyard}
                {@const activities = $lanyard.activities.filter(act => act.id !== "custom")}
                <div class="flex gap-[18px] h-full items-center">
                    {#if activities[0] && activities[0].assets}
                        <img src="https://media.discordapp.net/external/{(activities[0].assets.small_image || activities[0].assets.large_image).replace('mp:external/', '')}" alt="Activity" class="w-[60px] h-[60px]" />
                        <div>
                            <p>On {activities[0].name}</p>
                            <p>{activities[0].state}</p>
                        </div>
                    {:else}
                        <p>nothing rn</p>
                    {/if}
                </div>
            {/if}
        </HeadingBox>
    </div>
    <HeadingBox title="About me" class="xl:max-w-[750px] w-full h-auto lg:h-[587px]">
        <p class="whitespace-pre-wrap text-[20px] -mt-2">Hi, I’m Jay! Welcome to my website :3

I am a web developer from the UK who works full time as a cyber-security engineer and CTO.

Everything that I make as a personal project I try to open-source with licenses that allow you to use my work with credit, I also want to make certain industries better by thinking of new ideas based on stuff I want but could not find!
        </p>
        <HeadingBox title="Projects" size="text-[16px]" class="h-[106px] w-full mb-[26px] mt-[21px]">
            <div class="flex gap-[7px] -mt-2 -ml-2.5 w-full overflow-x-auto">
                {#each projects as Project, i}
                    <a href={Project.link} class="border-2 rounded-[13px] border-[#8A8A8A] flex items-center w-[179px] h-[76px] p-3 gap-[11px] flex-shrink-0 {i > 0 ? 'hidden sm:flex' : ''} {i > 1 ? 'hidden md:flex' : ''} {i > 1 ? 'hidden lg:flex' : ''} lg:flex">
                        <Project.icon />
                        <p class="whitespace-pre">{Project.name}</p>
                    </a>
                {/each}
                <a href="/projects" class="border-2 border-[#8A8A8A] bg-[#393939] flex items-center justify-center text-center rounded-[13px] w-[102px] h-[76px] flex-shrink-0">
                    View all
                </a>
            </div>
        </HeadingBox>
        <HeadingBox title="Guides" size="text-[16px]" class="h-[106px] w-full">
            <div class="flex gap-[7px] -mt-2 -ml-2.5 w-full overflow-x-auto">
                {#each guides as guide, i}
                    <a href="/guides/{guide.slug}?home=1" class="border-2 rounded-[13px] border-[#8A8A8A] flex items-center w-[179px] h-[76px] p-3 gap-[11px] flex-shrink-0 {i > 0 ? 'hidden sm:flex' : ''} {i > 1 ? 'hidden md:flex' : ''} {i > 1 ? 'hidden lg:flex' : ''} lg:flex">
                        <p>{guide.title}</p>
                    </a>
                {/each}
                <a href="/guides" class="border-2 border-[#8A8A8A] bg-[#393939] flex items-center justify-center text-center rounded-[13px] w-[102px] h-[76px] flex-shrink-0">
                    View all
                </a>
            </div>
        </HeadingBox>
    </HeadingBox>
</div>
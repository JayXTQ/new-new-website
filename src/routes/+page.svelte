<script lang="ts">
    import HeadingBox from "$lib/components/HeadingBox.svelte";

    import { useLanyard } from "svelte-lanyard";
    import Mail from "$lib/components/Mail.svelte";
    import Github from "$lib/components/Github.svelte";
    import Bluesky from "$lib/components/Bluesky.svelte";
    import Kofi from "$lib/components/Kofi.svelte";
    import CSharp from "$lib/components/CSharp.svelte";
    import Typescript from "$lib/components/Typescript.svelte";
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

<div class="bg-black text-white h-screen flex items-center justify-center">
    <div class="flex flex-row items-center justify-center w-full h-full gap-[29px]">
        <div class="flex flex-col gap-[29px] max-w-[384px] w-full h-auto">
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
            <HeadingBox title="Status" class="w-full h-[107px]">
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
                            <p class="text-center">nothing rn</p>
                        {/if}
                    </div>
                {/if}
            </HeadingBox>
        </div>
        <HeadingBox title="About me" class="max-w-[750px] h-[587px] w-full">
            <p class="whitespace-pre-wrap text-[20px] -mt-2">Hi, I’m Jay! Welcome to my website :3

I am a web developer from the UK who works full time as a cyber-security engineer and CTO.

Everything that I make as a personal project I try to open-source with licenses that allow you to use my work with credit, I also want to make certain industries better by thinking of new ideas based on stuff I want but could not find!
            </p>
            <HeadingBox title="Projects" size="text-[16px]" class="h-[106px] w-[685px] mb-[26px] mt-[21px]">
                <div class="flex gap-[7px] -mt-2 -ml-2.5 w-full">
                    {#each projects as Project}
                        <a href={Project.link} class="border-2 rounded-[13px] border-[#8A8A8A] flex items-center w-[179px] h-[76px] p-3 gap-[11px] flex-shrink-0">
                            <Project.icon />
                            <p class="whitespace-pre">{Project.name}</p>
                        </a>
                    {/each}
                    <a href="/projects" class="border-2 border-[#8A8A8A] bg-[#393939] flex items-center justify-center text-center rounded-[13px] w-[102px] h-[76px] flex-shrink-0">
                        View all
                    </a>
                </div>
            </HeadingBox>
            <HeadingBox title="Guides" size="text-[16px]" class="h-[106px] w-[685px]">
                <div class="flex gap-[7px] -mt-2 -ml-2.5 w-full">
                    {#each guides as guide}
                        <a href="/guides/{guide.slug}" class="border-2 rounded-[13px] border-[#8A8A8A] flex items-center w-[179px] h-[76px] p-3 gap-[11px] flex-shrink-0">
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
</div>
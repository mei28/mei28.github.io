<script lang="ts">
  import Icon from "$lib/components/Icon/Icon.svelte";
  import { useTitle } from "$lib/utils/helpers";
  import { getPlatformIcon } from "$lib/utils";
  import MainTitle from "$lib/components/MainTitle/MainTitle.svelte";
  import { isBlank } from "@riadh-adrani/utils";
  import {
    links,
    description,
    lastName,
    name,
    title,
    titleSuffix,
  } from "@data/home";
  const isEmail = (email: string): boolean => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !isBlank(email) && reg.test(email);
  };
</script>

<svelte:head>
  <title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div
  class="col self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
  <div class="md:flex-1 gap-10px">
    <MainTitle classes="md:text-left">{name} {lastName},</MainTitle>
    <p
      class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"
    >
      {description}
    </p>
    <div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
      {#each links as link}
        <a
          class="decoration-none"
          href={`${isEmail(link.link) ? "mailto:" : ""}${link.link}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon={getPlatformIcon(link.platform)}
            color={"var(--accent-text)"}
            size={"20px"}
          />
        </a>
      {/each}
    </div>
  </div>
</div>

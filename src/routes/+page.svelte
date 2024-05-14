<script lang="ts">
  import { useTitle } from "$lib/utils/helpers";
  import MainTitle from "$lib/components/MainTitle/MainTitle.svelte";
</script>

<svelte:head>
  <title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div
  class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
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
            icon={getPlatfromIcon(link.platform)}
            color={"var(--accent-text)"}
            size={"20px"}
          />
        </a>
      {/each}
    </div>
  </div>
  <Carrousel items={skills ?? skillsItems} />
</div>

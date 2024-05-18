<script lang="ts">
  import Step from "./Step.svelte";
  let steps = [
    {
      name: "Smoljames Store",
      icon: "fa-solid fa-cart-shopping",
      description:
        "Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.",
    },
    {
      name: "Utlimate Todos",
      icon: "fa-solid fa-list-check",
      description:
        "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.",
    },
    {
      name: "Pokédex",
      icon: "fa-solid fa-diagram-project",
      description:
        "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-col1 lg:grid-cols-2 gpa-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="bizudp text-violet-400">Mingzhe </span>Yang <br />
        Ph.D Student <span class="bizudp text-violet-400"> Engineer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400"> favorite tech</span> includes Python, Rust
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl bizudp relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
        href="#"
        target="_blank"
      >
        <div
          class="absolute py-10 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="Profile image"
        class="object-fit:cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">Projects</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="bizudp text-violet-400">see</span> my works?
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}></Step>
      <Step step={steps[1]}></Step>
      <Step step={steps[2]}></Step>
    </div>
  </section>
</main>

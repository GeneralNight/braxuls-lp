<script lang="ts" setup>
const showMenu = ref(false);

onMounted(() => {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
      showMenu.value = false;
    }
  });
});
</script>

<template>
  <header
    class="flex justify-between items-center px-4 sm:px-4 md:px-[60px] xl:px-[100px] py-[25px] sm:py-[30px] absolute top-0 left-0 w-full z-10"
  >
    <img
      src="~/assets/imgs/Logo.svg"
      alt=""
      class="h-[30px] lg:h-[50px] object-cover"
    />
    <button class="sm:hidden" @click="showMenu = true">
      <i class="fi fi-ss-menu-burger"></i>
    </button>
    <nav
      class="items-center gap-8 lg:gap-12 sm:flex fixed sm:relative top-0 left-0 h-screen sm:h-auto w-full sm:w-auto"
      :class="{
        hidden: !showMenu,
        'flex flex-col justify-center bg-black-800/10  backdrop-blur-[8px]':
          showMenu,
      }"
    >
      <button
        class="sm:hidden absolute top-6 right-6 text-xl"
        @click="showMenu = false"
      >
        <i class="fi fi-rs-circle-xmark"></i>
      </button>
      <li>
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          A Braxuls
        </a>
      </li>
      <li>
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          Serviços
        </a>
      </li>
      <li>
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          Portfólio
        </a>
      </li>
      <li>
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          Contato
        </a>
      </li>
      <div class="flex sm:hidden items-center gap-12 mt-10">
        <a
          target="_blank"
          href="mailto:comercial@braxuls.com"
          class="flex items-center gap-3 transition-all duration-[.2s] hover:text-primary hover:scale-[103%]"
        >
          <i class="fi fi-sr-envelope text-xl h-6"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/braxuls/"
          target="_blank"
          class="flex items-center gap-3 transition-all duration-[.2s] hover:text-primary hover:scale-[103%]"
        >
          <i class="fi fi-brands-linkedin text-xl h-6"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/braxuls?igsh=MWFhamk5cHZrdjI5eA=="
          class="flex items-center gap-3 transition-all duration-[.2s] hover:text-primary hover:scale-[103%]"
        >
          <i class="fi fi-brands-instagram text-xl h-6"></i>
        </a>
      </div>
    </nav>
  </header>
</template>

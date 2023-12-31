<script lang="ts" setup></script>

<template>
  <footer class="flex flex-col">
    <div class="flex items-center justify-between px-[100px] py-[60px]">
      <img src="~/assets/imgs/Logo.svg" alt="" class="h-[50px] object-cover" />
      <div class="flex flex-col gap-[15px]">
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          A Braxuls
        </a>
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          Nossos Serviços
        </a>
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          Nosso Portfólio
        </a>
        <a
          href=""
          class="font-semibold transition-all duration-[.2s] hover:text-primary"
        >
          Entre em Contato
        </a>
      </div>
      <div class="flex flex-col gap-[15px]">
        <span class="font-light leading-[1.25] -tracking-[.48px]">
          Transforme sua ideia em realidade
        </span>
        <button
          class="flex items-center gap-4 px-8 py-3 bg-primary rounded-[32px] text-black-700 w-fit hover:bg-white duration-[.2s] transition-all hover:scale-[102%]"
        >
          <i class="fi fi-ss-lightbulb-on text-xl h-6"></i>
          <span class="font-bold"> Compartilhar ideia </span>
        </button>
      </div>
      <div class="flex flex-col gap-[15px]">
        <a
          target="_blank"
          href="mailto:comercial@braxuls.com"
          class="flex items-center gap-3 transition-all duration-[.2s] hover:text-primary hover:scale-[103%]"
        >
          <i class="fi fi-sr-envelope text-xl h-6"></i>
          <span class="font-semibold"> comercial@braxuls.com </span>
        </a>
        <a
          href="https://www.linkedin.com/company/braxuls/"
          target="_blank"
          class="flex items-center gap-3 transition-all duration-[.2s] hover:text-primary hover:scale-[103%]"
        >
          <i class="fi fi-brands-linkedin text-xl h-6"></i>
          <span class="font-semibold"> LinkedIn </span>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/braxuls?igsh=MWFhamk5cHZrdjI5eA=="
          class="flex items-center gap-3 transition-all duration-[.2s] hover:text-primary hover:scale-[103%]"
        >
          <i class="fi fi-brands-instagram text-xl h-6"></i>
          <span class="font-semibold"> Instagram </span>
        </a>
      </div>
    </div>
    <div class="flex justify-center items-center py-5">
      <span class="">© Todos os direitos reservados</span>
    </div>
  </footer>
</template>

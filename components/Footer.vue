<script lang="ts" setup></script>

<template>
  <footer class="flex flex-col">
    <div
      class="flex items-center justify-between px-4 sm:px-[60px] md:px-[60px] xl:px-[100px] py-[40px] sm:py-[60px] gap-10 xl:gap-[120px] 2xl:gap-[180px] 3xl:gap-[240px] flex-col xl:flex-row"
    >
      <img
        src="~/assets/imgs/Logo.svg"
        alt=""
        class="h-[30px] md:h-[40px] lg:h-[50px] object-cover"
      />
      <div
        class="flex flex-col md:flex-row justify-center md:justify-between xl:justify-between w-full gap-10 md:gap-0"
      >
        <div class="flex flex-col gap-[15px] items-center md:items-start">
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
        <div class="flex flex-col gap-[15px] items-center md:items-start">
          <span class="font-light leading-[1.25] -tracking-[.48px]">
            Transforme sua ideia em realidade
          </span>
          <button
            class="flex items-center self-center justify-center gap-4 w-full px-4 sm:px-8 py-3 bg-primary rounded-[32px] text-black-700 sm:w-fit hover:bg-white duration-[.2s] transition-all hover:scale-[102%]"
          >
            <i
              class="fi fi-ss-lightbulb-on lg:text-xl xl:text-2xl h-5 lg:h-6 xl:h-7"
            ></i>
            <span class="font-bold text-sm sm:text-base lg:text-lg xl:text-xl">
              Compartilhar ideia
            </span>
          </button>
        </div>
        <div class="flex flex-col gap-[15px] items-center md:items-start">
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
    </div>
    <div class="flex justify-center items-center py-5">
      <span class="">© Todos os direitos reservados</span>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-col px-4 sm:px-4 md:px-[60px] xl:px-[100px] pt-[110px] sm:pt-[150px] md:pt-[170px] xl:pt-[210px] pb-[50px] sm:pb-0 xl:pb-[80px] sm:h-screen xl:min-h-[800px] sm:max-h-[640px] lg:max-h-[768px] xl:max-h-[880px] 2xl:min-h-[990px] max-h-[1080px] block1-gradient overflow-hidden w-full relative"
  >
    <div class="flex flex-col gap-6 sm:gap-10 lg:gap-16">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-[15px]">
          <span
            class="text-primary font-semibold uppercase leading-[1.25] text-xs sm:text-base"
          >
            Desenvolvimento de Software de Ponta a Ponta
          </span>
          <h1
            class="text-2xl sm:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-[1.25] sm:-tracking-[1.92px] font-light"
          >
            Nós criamos, construímos <br class="lg:hidden" />
            e aceleramos <br class="hidden lg:block" />
            <span class="font-bold ml-1 lg:ml-0"> soluções digitais. </span>
          </h1>
        </div>
        <span class="font-light lg:text-xl xl:text-2xl leading-[1.5]">
          Com um compromisso inabalável com a excelência, mergulhamos
          profundamente no <br class="hidden sm:block" />universo de cada
          projeto, entendendo seus objetivos, desafios e aspirações.
        </span>
      </div>
      <button
        class="flex items-center justify-center gap-4 w-full px-4 sm:px-8 py-3 bg-primary rounded-[32px] text-black-700 sm:w-fit hover:bg-white duration-[.2s] transition-all hover:scale-[102%]"
      >
        <i
          class="fi fi-ss-rocket-lunch lg:text-xl xl:text-2xl h-5 lg:h-6 xl:h-7"
        ></i>
        <span class="font-bold text-sm sm:text-base lg:text-lg xl:text-xl">
          Impulsionar meu negócio digital
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.block1-gradient {
  background: url("/assets/imgs/Big-X-Gray.svg"),
    linear-gradient(112deg, #000 0%, #323232 48.37%, #000 84.82%);
  background-repeat: no-repeat;
  background-position: 150% 0px, center;
}
</style>

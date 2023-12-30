<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-col px-[100px] pt-[210px] pb-[80px] h-screen min-h-[990px] block1-gradient overflow-hidden w-full relative"
  >
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-[15px]">
          <span class="text-primary font-semibold uppercase leading-[1.25]">
            Desenvolvimento de Software de Ponta a Ponta
          </span>
          <h1 class="text-[64px] leading-[1.25] -tracking-[1.92px] font-light">
            Nós criamos, construímos e aceleramos <br />
            <span class="font-bold"> soluções digitais. </span>
          </h1>
        </div>
        <span class="font-light text-2xl leading-[1.5]">
          Com um compromisso inabalável com a excelência, mergulhamos
          profundamente no <br />universo de cada projeto, entendendo seus
          objetivos, desafios e aspirações.
        </span>
      </div>
      <button
        class="flex items-center gap-4 px-8 py-3 bg-primary rounded-[32px] text-black-700 w-fit hover:bg-white duration-[.2s] transition-all hover:scale-[102%]"
      >
        <i class="fi fi-ss-rocket-lunch text-2xl h-7"></i>
        <span class="font-bold text-xl"> Impulsionar meu negócio digital </span>
      </button>
    </div>
  </div>
</template>

<style>
.block1-gradient {
  background: url("/assets/imgs/Big-X-Gray.svg"),
    linear-gradient(112deg, #000 0%, #323232 48.37%, #000 84.82%);
  background-repeat: no-repeat;
  background-position: 150% 0px, center;
}
</style>

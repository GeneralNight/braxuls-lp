<script lang="ts" setup>
const items = ref([
  {
    title: "Compromisso com a Excelência",
    description:
      "Estamos constantemente explorando novas tecnologias e tendências para garantir que nossos clientes estejam à frente no cenário digital em constante evolução.",
  },
  {
    title: "Parceria Colaborativa",
    description:
      "Valorizamos a parceria e a comunicação aberta. Juntos, colaboramos para alcançar os objetivos específicos do seu negócio.",
  },
  {
    title: "Resultados Mensuráveis",
    description:
      "Acreditamos em resultados tangíveis. Medimos o sucesso não apenas pelo que criamos, mas pelos impactos positivos que geramos para os nossos clientes.",
  },
  {
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Oferecemos atendimento personalizado, entendendo profundamente suas necessidades para fornecer soluções sob medida.",
  },
  {
    title: "Transparência Total",
    description:
      "Mantemos uma abordagem transparente em todos os aspectos do nosso trabalho, desde o orçamento até os prazos de entrega. Sem surpresas desagradáveis.",
  },
]);
</script>

<template>
  <div
    class="flex xl:pt-[50px] bgBlock3 gap-[30px] 2xl:gap-[100px] lg:pr-[60px] xl:pr-[80px] 2xl:pr-[100px] text-black-700 w-full items-start flex-col-reverse lg:flex-row"
  >
    <div
      class="w-full sm:w-[60%] md:w-[75%] lg:w-[40%] xl:w-[48%] 2xl:w-full xl:self-end"
    >
      <img src="assets/imgs/Focus.svg" alt="" class="w-full hidden xl:block" />
      <img
        src="assets/imgs/Focus-vflip.svg"
        alt=""
        class="w-full hidden lg:block xl:hidden"
      />
      <img src="assets/imgs/Focus-hor.svg" alt="" class="w-full lg:hidden" />
    </div>
    <div
      class="flex flex-col px-4 sm:px-[60px] lg:px-0 pb-0 lg:pb-[60px] py-[40px] sm:py-[60px] xl:pt-[0px] 2xl:py-[50px] gap-8 xl:gap-16 w-full items-center lg:items-start"
    >
      <h1
        class="font-semibold text-2xl sm:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-[1.25] sm:-tracking-[1.92px] 2xl:whitespace-nowrap"
      >
        Porque escolher a Braxuls
      </h1>
      <div
        class="flex items-center gap-5 xl:gap-8"
        v-for="(item, index) in items"
        :class="{
          'lg:pl-[50px]': index === 1 || index === 3,
          'lg:pl-[100px]': index === 2,
        }"
      >
        <span
          class="font-extrabold leading-[1.25] text-2xl sm:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] -tracking-[1.92px] hidden lg:block"
        >
          {{ `0${index + 1}.` }}
        </span>
        <div
          class="flex flex-col gap-2 xl:gap-[15px] max-w-[500px] lg:max-w-max"
        >
          <span
            class="text-[24px] xl:text-[32px] -tracking-[.96px] leading-[1.25] font-semibold hidden lg:block"
          >
            {{ item.title }}
          </span>
          <div
            class="flex lg:hidden items-center gap-4 sm:gap-6 justify-center sm:justify-start"
          >
            <span
              class="font-extrabold leading-[1.25] text-2xl sm:text-[36px] sm:-tracking-[1.92px]"
            >
              {{ `0${index + 1}.` }}
            </span>
            <span
              class="text-lg sm:text-[24px] sm:-tracking-[.96px] leading-[1.25] font-semibold"
            >
              {{ item.title }}
            </span>
          </div>
          <span
            class="-tracking-[.48px] leading-[1.5] font-light text-center sm:text-start"
          >
            {{ item.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bgBlock3 {
  background: linear-gradient(180deg, #f0f0f0 0%, #f1f1f1 49.48%, #fff 100%);
}
</style>

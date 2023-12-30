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
    class="flex pt-[50px] bgBlock3 gap-[100px] pr-[100px] text-black-700 w-full"
  >
    <div class="w-full">
      <img src="assets/imgs/Focus.svg" alt="" class="w-full" />
    </div>
    <div class="flex flex-col py-[100px] gap-16 w-full">
      <h1
        class="font-semibold text-[64px] leading-[1.25] -tracking-[1.92px] whitespace-nowrap"
      >
        Porque escolher a Braxuls
      </h1>
      <div
        class="flex items-center gap-8"
        v-for="(item, index) in items"
        :class="{
          'pl-[50px]': index === 1 || index === 3,
          'pl-[100px]': index === 2,
        }"
      >
        <span
          class="font-extrabold leading-[1.25] text-[64px] -tracking-[1.92px]"
        >
          {{ `0${index + 1}.` }}
        </span>
        <div class="flex flex-col gap-[15px]">
          <span
            class="text-[32px] -tracking-[.96px] leading-[1.25] font-semibold"
          >
            {{ item.title }}
          </span>
          <span class="-tracking-[.48px] leading-[1.5] font-light">
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

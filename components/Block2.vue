<script lang="ts" setup>
const services = ref([
  {
    title: "Dashboards Gerenciais",
    description:
      "Otimize suas decisões com Dashboards Gerenciais feitos sob medida. Transformamos dados complexos em insights visuais claros, proporcionando uma visão holística e intuitiva do desempenho do seu negócio.",
    icon: "fi fi-rs-chart-pie-alt",
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Leve sua presença para além do desktop com Aplicativos Mobile personalizados. Desenvolvemos soluções ágeis e intuitivas que colocam sua marca diretamente nas mãos dos usuários, proporcionando experiências inesquecíveis.",
    icon: "fi fi-rr-mobile-button",
  },
  {
    title: "E-commerce",
    description:
      "Crie uma experiência de compra online excepcional com nosso serviço de E-commerce. Desde a concepção até a implementação, desenvolvemos plataformas seguras e atraentes que impulsionam as vendas e fidelizam os clientes.",
    icon: "fi fi-rs-shopping-cart",
  },
  {
    title: "Websites Personalizados",
    description:
      "Destaque-se online com Websites Personalizados que refletem a singularidade da sua marca. Nossa equipe de design e desenvolvimento cria plataformas envolventes, funcionais e visualmente impactantes.",
    icon: "fi fi-rr-apps-add",
  },
  {
    title: "Landing Pages",
    description:
      "Conquiste a atenção do seu público-alvo com Landing Pages de alto impacto. Projetamos páginas de destino que não só capturam a essência da sua mensagem, mas também convertem visitantes em potenciais clientes.",
    icon: "fi fi-rs-site-alt",
  },
  {
    title: "UI & UX Design",
    description:
      "Aprimore a experiência do usuário e fortaleça a identidade visual da sua marca com nosso serviço de UI & UX Design. Desde a criação de interfaces intuitivas até o design estético, garantimos que cada interação seja memorável e eficaz.",
    icon: "fi fi-rr-palette",
  },
]);
</script>

<template>
  <div class="flex flex-col p-[100px] gap-[120px] bgBlock2">
    <div class="flex flex-col items-center gap-5">
      <h1 class="font-semibold text-[64px] leading-[1.25] -tracking-[1.92px]">
        Seu próximo projeto começa aqui
      </h1>
      <span class="uppercase -tracking-[.48px]"> Conheça nossos serviços </span>
    </div>
    <div class="flex flex-wrap w-full justify-center gap-[120px]">
      <ServiceItem
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        v-for="item of services"
      />
    </div>
    <button
      class="flex items-center gap-4 self-center px-8 py-3 bg-primary rounded-[32px] text-black-700 w-fit hover:bg-white duration-[.2s] transition-all hover:scale-[102%]"
    >
      <i class="fi fi-ss-lightbulb-on text-2xl h-7"></i>
      <span class="font-bold text-xl">
        Transformar minhas ideias em negócios
      </span>
    </button>
  </div>
</template>

<style>
.bgBlock2 {
  background: url("/assets/imgs/Big-X-Green.svg");
  background-repeat: no-repeat;
  background-position: 150% -150px;
}
</style>

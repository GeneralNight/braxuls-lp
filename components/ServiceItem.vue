<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div
    class="flex gap-4 sm:gap-6 md:gap-8 w-full md:w-[calc(50%-30px)] lg:max-w-[400px] flex-col sm:flex-row md:flex-col lg:flex-row items-center sm:items-start md:items-center lg:items-start"
  >
    <div
      class="w-[50px] h-[50px] min-w-[50px] md:w-[70px] md:h-[70px] md:min-w-[70px] rounded-full border border-white/15 flex items-center justify-center service-gradient"
    >
      <i
        :class="props.icon"
        class="sm:text-xl md:text-[32px] h-4 sm:h-5 md:h-8"
      ></i>
    </div>
    <div
      class="flex flex-col gap-[15px] items-center sm:items-start md:items-center lg:items-start"
    >
      <span
        class="-tracking-[.72px] text-xl md:text-2xl leading-[1.25] font-medium"
      >
        {{ props.title }}
      </span>
      <span
        class="font-light leading-[1.5] text-sm md:text-base text-center sm:text-start md:text-center lg:text-start"
      >
        {{ props.description }}
      </span>
    </div>
  </div>
</template>

<style>
.service-gradient {
  background-image: linear-gradient(
    112deg,
    #000 0%,
    #323232 48.37%,
    #000 84.82%
  );
}
</style>

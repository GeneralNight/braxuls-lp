<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>

<template>
  <div class="flex gap-8 max-w-[400px]">
    <div
      class="w-[70px] h-[70px] min-w-[70px] rounded-full border border-white/15 flex items-center justify-center service-gradient"
    >
      <i :class="props.icon" class="text-[32px] h-10"></i>
    </div>
    <div class="flex flex-col gap-[15px]">
      <span class="-tracking-[.72px] text-2xl leading-[1.25] font-medium">
        {{ props.title }}
      </span>
      <span class="font-light leading-[1.5]">
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

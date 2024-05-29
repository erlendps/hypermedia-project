<script setup lang="ts">
import { AtSymbolIcon, PhoneIcon, HomeIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="flex md:flex-row gap-2 flex-col justify-between items-center text-white p-4 md:space-x-10 space-y-2 md:space-y-0"
  >
    <div class="flex md:w-1/3 gap-2 items-center justify-center max-w-xs">
      <AtSymbolIcon class="color-white h-8 w-8" />
      <a href="mailto:help@fortiesmulier.org" target="_blank"
        >help@fortiesmulier.org</a
      >
    </div>
    <div class="flex md:w-1/3 gap-2 items-center max-w-xs justify-center">
      <PhoneIcon class="color-white h-8 w-8" />
      <a href="tel:+39000000">+39 000 000</a>
    </div>
    <div class="flex md:w-1/3 gap-2 items-center max-w-xs">
      <HomeIcon class="color-white h-8 w-8" />
      <p>P.za Leonardo da Vinci 32 20133 Milano MI</p>
    </div>
  </div>
</template>

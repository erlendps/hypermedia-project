<template>
  <div
    class="flex md:flex-row flex-col justify-between items-center text-white p-4 md:space-x-10 space-y-2 md:space-y-0"
  >
    <div class="inline-flex space-x-3 items-center max-w-xs">
      <AtSymbolIcon class="color-white h-8 w-8" />
      <div>help@fortiesmulier.org</div>
    </div>

    <div class="inline-flex space-x-3 items-center max-w-xs">
      <PhoneIcon class="color-white h-8 w-8" />
      <div>+39 000 000</div>
    </div>
    <div class="inline-flex space-x-3 items-center max-w-xs">
      <HomeIcon class="color-white h-8 w-8" />
      <div>P.za Leonardo da Vinci 32 20133 Milano MI</div>
    </div>
  </div>
</template>

<script setup>
import { AtSymbolIcon, PhoneIcon, HomeIcon } from '@heroicons/vue/24/outline';
</script>

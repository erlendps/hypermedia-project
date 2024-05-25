<script setup lang="ts">
import { ChatBubbleLeftRightIcon, MapIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="flex flex-col items-center text-center w-full">
    <div class="flex flex-row items-center text-center justify-center">
      <ChatBubbleLeftRightIcon class="h-16 w-16 text-purple" />
      <div>
        <h1 class="text-4xl sm:text-5xl text-purple mb-4">Call us now</h1>
        <h1 class="font-bold text-4xl sm:text-5xl text-purple mb-4">
          +39 000 000
        </h1>
      </div>
    </div>
    <Divider />
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <p class="w-full sm:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pollicetur
        certe. Hic nihil fuit, quod quaereremus. Bork Eodem modo is enim tibi
        nemo dabit, quod, expetendum sit, id esse laudabile. Paupertas si malum
        est, mendicus beatus esse nemo potest, quamvis sit sapiens. Duo Reges:
        constructio interrete. Hoc est non modo cor non habere, sed ne palatum
        quidem. Vitiosum est enim in dividendo partem in genere numerare.
      </p>
      <img
        src="/assets/images/service2.jpg"
        alt="A black and white photo of the center from the 1940s"
        class="h-64"
      />
    </div>
    <Divider />
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div class="flex flex-col text-left">
        <h2 class="font-bold text-xl sm:text-2xl text-purple mb-4">
          Where to find us
        </h2>
        <p class="w-72 mb-12">Piazza Leonardo da Vinci 32, 20133, Milano MI</p>
        <p class="w-72">Opening Hours:</p>
        <p class="w-72">Mon-Fri 9:00 - 18:00</p>
        <p class="w-72">Sat-Sun 11:00 - 18:00</p>
      </div>
      <MapIcon class="w-64" />
    </div>
    <Divider />
    <h2 class="font-bold text-md sm:text-xl text-purple mb-4">
      Want to write to us?
    </h2>
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div>
        <h2 class="font-bold text-xl sm:text-lg text-purple mb-4">
          General inquires
        </h2>
        <p class="w-72 text-lg">help@fortiesmulier.org</p>
      </div>
      <div>
        <h2 class="font-bold text-md sm:text-lg text-purple mb-4">
          Press contact
        </h2>
        <p class="w-72 text-lg">press@fortiesmulier.org</p>
      </div>
    </div>
  </div>
</template>

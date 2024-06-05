<script setup lang="ts">
import { ChatBubbleLeftRightIcon, MapIcon } from '@heroicons/vue/24/outline';
import serviceImage from '~/assets/images/service2.jpg';

const baseUrl = useRuntimeConfig().public.baseUrl;

// SEO meta tags for the contact page
useSeoMeta({
  title: 'Contact us - Forties Mulier',
  ogTitle: 'Contact us - Forties Mulier',
  description: `
    This is the contact page for Forties Mulier. The page contains information on
    how to contact Forties Mulier by phone, email or visiting our facilities.
    `,
  ogDescription: `
    This is the contact page for Forties Mulier. The page contains information on
    how to contact Forties Mulier by phone, email or visiting our facilities.
    `,
  ogImage: baseUrl + serviceImage,
});
</script>

<template>
  <div class="flex flex-col items-center text-center w-full">
    <div class="flex flex-row items-center text-center justify-center">
      <ChatBubbleLeftRightIcon class="h-16 w-16 text-purple" />
      <div>
        <h1 class="text-4xl sm:text-5xl text-purple mb-4">Call us now</h1>
        <h1 class="font-bold text-4xl sm:text-5xl text-purple mb-4">
          <a href="tel:+39000000">+39 000 000</a>
        </h1>
      </div>
    </div>
    <Divider />
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <p class="w-full sm:w-1/2 text-left">
        Our dedicated team is here to provide immediate support and assistance
        to women in crisis. Whether you need legal advice, emotional support, or
        help navigating resources, we are just a phone call away. Our hotline
        operates around the clock, ensuring that you have access to the help you
        need, whenever you need it. Don't hesitate to reach out; your safety and
        well-being are our top priorities.
      </p>
      <img
        src="/assets/images/phone.webp"
        alt="A woman talking in the phone"
        class="h-64 border-2 border-purple rounded-lg"
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
      <img
        src="~/assets/images/map.png"
        alt="A map showing the location of the center"
        class="h-64 border-2 border-purple rounded-lg"
      />
    </div>
    <Divider />
    <h2 class="font-bold text-md sm:text-xl text-purple mb-4">
      Want to write to us?
    </h2>
    <div class="flex flex-col lg:flex-row gap-8 items-center">
      <div>
        <h2 class="font-bold text-md sm:text-lg text-purple">
          General inquires
        </h2>
        <a
          class="w-72 text-lg"
          href="mailto:help@fortiesmulier.org"
          target="_blank"
          >help@fortiesmulier.org</a
        >
      </div>
      <div>
        <h2 class="font-bold text-md sm:text-lg text-purple">Press contact</h2>
        <a
          class="w-72 text-lg"
          href="mailto:press@fortiesmulier.org"
          target="_blank"
          >press@fortiesmulier.org</a
        >
      </div>
    </div>
  </div>
</template>

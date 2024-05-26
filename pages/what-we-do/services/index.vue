<script setup lang="ts">
import type { ShortService } from '~/types/types';
import service1 from '~/assets/images/service1.jpg';
import service2 from '~/assets/images/service2.jpg';
import service3 from '~/assets/images/service3.jpg';

useSeoMeta({
  title: 'Our services',
  ogTitle: 'Our Services',
  description: 'The services Forties Mulier offer to women in need.',
  ogDescription: 'The services Forties Mulier offer to women in need.',
});

// create an array of objects for the "welcome" images that should be displayed
// after the heading.
const welcomeImages = [
  { src: service1, alt: 'An attorney giving legal advice to a woman.' },
  { src: service2, alt: 'A woman smiling while talking with a headset.' },
  { src: service3, alt: 'A woman giving a speech in front of a small crowd.' },
];

// get the services from the api
const services = await $fetch<ShortService[]>('/api/services');
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      How can we help you?
    </h1>
    <ul class="flex flex-wrap gap-4 justify-around w-full mb-4">
      <li v-for="image in welcomeImages">
        <SquareWithImage :src="image.src" :alt="image.alt" />
      </li>
    </ul>
    <p>
      The center is a beacon of hope and support for women facing difficulties
      and experiencing situations of violence and family maltreatment. With a
      compassionate and dedicated team, it offers a comprehensive range of
      services tailored to meet the unique needs of each woman who seeks
      assistance. From providing emergency shelter to offering counseling and
      therapy sessions, legal assistance, support groups, educational programs,
      and a 24/7 crisis hotline, the center creates a nurturing environment
      where women can heal, rebuild their lives, and reclaim their independence.
    </p>
    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">What we offer</h2>
    <ul class="flex gap-4 flex-wrap justify-around w-full">
      <li v-for="service in services">
        <PreviewContainer
          :key="service.name"
          :to="'/what-we-do/services/' + service.slug"
          :src="service.picture"
          :alt="'Image for ' + service.name"
          :name="service.name"
          width="w-[250px]"
        />
      </li>
    </ul>
  </div>
</template>

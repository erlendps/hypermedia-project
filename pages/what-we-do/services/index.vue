<script setup lang="ts">
import type { ShortService } from '~/types/types';

useSeoMeta({
  title: 'Our services - Forties Mulier',
  ogTitle: 'Our Services - Forties Mulier',
  description: 'The services Forties Mulier offer to women in need.',
  ogDescription: 'The services Forties Mulier offer to women in need.',
});

// get the services from the api
const { data: services } = await useFetch('/api/services');
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      How can we help you?
    </h1>
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

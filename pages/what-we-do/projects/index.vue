<script setup lang="ts">
import type { ShortProject, ShortService } from '~/types/types';
import service1 from '~/assets/images/service1.jpg';
import service2 from '~/assets/images/service2.jpg';
import service3 from '~/assets/images/service3.jpg';

useSeoMeta({
  title: 'Our projects',
  ogTitle: 'Our projects',
  description: 'The projects Forties Mulier are currently working on.',
  ogDescription: 'The projects Forties Mulier are currently working on.',
});

// get the services from the api
const projects = await $fetch<ShortProject[]>('/api/projects');
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      Our projects
    </h1>
    <p>
      At Forties Mulier, we are passionately committed to empowering women and
      fostering positive change through a range of impactful projects. Our
      initiatives are designed to provide essential support, resources, and
      opportunities that enable women to reach their full potential. Whether
      it's offering legal advice, career counseling, or community engagement
      programs, each project is a step towards building a more inclusive and
      supportive environment for women. We invite you to explore our ongoing and
      completed projects below and see how we are making a difference in the
      lives of many women.
    </p>

    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">
      Ongoing and completed projects
    </h2>
    <ul class="flex gap-4 flex-wrap justify-around w-full">
      <li v-for="project in projects">
        <PreviewContainer
          :key="project.name"
          :to="'/what-we-do/projects/' + project.slug"
          :src="project.picture"
          :alt="'Image for ' + project.name"
          :name="project.name"
          width="w-[250px]"
        />
      </li>
    </ul>
  </div>
</template>

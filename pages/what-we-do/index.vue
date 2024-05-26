<script setup lang="ts">
import type { ShortProject, ShortService } from "~/types/types";

useSeoMeta({
  title: "Our efforts - Forties Mulier",
  ogTitle: "Our efforts - Forties Mulier",
  description:
    "This page contains the projects and services of Forties Mulier.",
  ogDescription:
    "This page contains the projects and services of Forties Mulier.",
});

// get the services from the api
const projects = await $fetch<ShortProject[]>("/api/projects").then(
  (projects) => projects.slice(0, 3)
);
const services = await $fetch<ShortService[]>("/api/services").then(
  (services) => services.slice(0, 3)
);
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      Our efforts to women in need
    </h1>
    <p>
      At Forties Mulier, we are dedicated to making a meaningful impact in the
      lives of women in need. Our efforts encompass a wide range of services and
      projects aimed at providing support, resources, and opportunities for
      personal and professional growth. From legal assistance and career
      counseling to community-building initiatives, our services are designed to
      address the diverse needs of women in our community. Explore our top
      services and projects below to see how we are fostering empowerment and
      creating positive change.
    </p>

    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">Our top services</h2>
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
    <ButtonLink to="/what-we-do/services" class="mt-4">
      View all services
    </ButtonLink>
    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">Our top projects</h2>
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
    <ButtonLink to="/what-we-do/projects" class="mt-4">
      View all projects
    </ButtonLink>
  </div>
</template>

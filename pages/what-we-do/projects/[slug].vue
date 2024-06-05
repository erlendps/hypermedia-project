<script setup lang="ts">
import { ClockIcon } from '@heroicons/vue/24/outline'; // Import ClockIcon component

// Get current route information
const route = useRoute();
// Fetch project data from the server based on the route slug
const { data: dbResult } = await useFetch(`/api/projects/${route.params.slug}`);

// If no data is returned, throw a 404 error
if (!dbResult.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}

// Construct a project object with data from the database
const project = {
  name: dbResult.value!.name,
  slug: dbResult.value!.slug,
  picture: dbResult.value!.picture,
  description: dbResult.value!.description,
  timeline: dbResult.value!.timeline,
  responsible: {
    // Responsible person's details
    name:
      dbResult.value!.Person!.firstName +
      ' ' +
      dbResult.value!.Person!.lastName,
    slug: dbResult.value!.Person!.slug,
    picture: dbResult.value!.Person!.picture,
  },
  // Timeline events
  timelineEvents: dbResult.value!.TimelineEvent.map((event, i) => {
    return { ...event, key: i };
  }),
};

// Set SEO meta tags for the project page
useSeoMeta({
  title: `${project.name} - Forties Mulier`,
  ogTitle: `${project.name} - Forties Mulier`,
  description: `
  This is the page for Forties Mulier's project ${project.name}. It contains general information
  of the project, along with a timeline of events related to the project.
  `,
  ogDescription: `
  This is the page for Forties Mulier's project ${project.name}. It contains general information
  of the project, along with a timeline of events related to the project.
  `,
  ogImage: project.picture,
});
</script>

<template>
  <!-- Main container with vertical layout and centered content -->
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      {{ project.name }}
    </h1>
    <!-- Container for project image and responsible person details -->
    <div class="w-full mb-6">
      <LoadingImage
        :src="project.picture"
        :alt="`Image for ${project.name}`"
        common-class="w-full h-[275px] border-2 border-purple rounded-t-lg rounded-b-3xl"
        class-img="object-cover"
      />
      <div
        class="w-full border-t-2 border-x-2 border-purple rounded-t-3xl flex flex-col sm:flex-row sm:justify-between gap-2 items-center pt-3 px-2 mt-[-2px]"
      >
        <!-- Responsible person section -->
        <div class="inline-flex items-center gap-2">
          Responsible:
          <PersonPreview
            :to="`/staff/${project.responsible.slug}`"
            :src="project.responsible.picture"
            alt=""
            :name="project.responsible.name"
            class="md:left-8"
          />
        </div>
        <!-- Project timeline section -->
        <span class="inline-flex items-center gap-1">
          <ClockIcon class="h-10 w-10 text-purple stroke-1" />
          {{ project.timeline }}
        </span>
      </div>
    </div>
    <!-- Project description -->
    <p>{{ project.description }}</p>
    <Divider />
    <!-- Timeline header -->
    <h2 class="font-bold text-2xl sm:text-3xl text-purple mb-4">Timeline</h2>
    <!-- Timeline component to display timeline events -->
    <Timeline :events="project.timelineEvents" />
  </div>
</template>

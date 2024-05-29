<script setup lang="ts">
import { ClockIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const { data: dbResult } = await useFetch(`/api/projects/${route.params.slug}`);
if (!dbResult.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

const project = {
  name: dbResult.value!.name,
  slug: dbResult.value!.slug,
  picture: dbResult.value!.picture,
  description: dbResult.value!.description,
  timeline: dbResult.value!.timeline,
  responsible: {
    name:
      dbResult.value!.Person!.firstName +
      " " +
      dbResult.value!.Person!.lastName,
    slug: dbResult.value!.Person!.slug,
    picture: dbResult.value!.Person!.picture,
  },
  timelineEvents: dbResult.value!.TimelineEvent.map((event, i) => {
    return { ...event, key: i };
  }),
};

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
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      {{ project.name }}
    </h1>
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
        <span class="inline-flex items-center gap-1"
          ><ClockIcon class="h-10 w-10 text-purple stroke-1" />
          {{ project.timeline }}</span
        >
      </div>
    </div>
    <p>{{ project.description }}</p>
    <Divider />
    <h2 class="font-bold text-2xl sm:text-3xl text-purple mb-4">Timeline</h2>
    <Timeline :events="project.timelineEvents" />
  </div>
</template>

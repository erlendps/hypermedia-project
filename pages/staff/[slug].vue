<script setup lang="ts">
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const { data: dbResult } = await useFetch(`/api/staff/${route.params.slug}`);
if (!dbResult.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

const person = {
  name: `${dbResult.value!.firstName} ${dbResult.value!.lastName}`,
  email: dbResult.value!.email,
  picture: dbResult.value!.picture,
  mainRole: dbResult.value!.mainRole,
  education: dbResult.value!.education,
  pastExperience: dbResult.value!.pastExperience,
  expertise: dbResult.value!.expertise,
  services: dbResult.value!.Service,
  projects: dbResult.value!.Project,
};

useSeoMeta({
  title: `${person.name} - Forties Mulier`,
  ogTitle: `${person.name} - Forties Mulier`,
  description: `
  This is the page for Forties Mulier staff member ${person.name}. It contains information about
  ${person.name} such as their main role in Forties Mulier, past experience, expertise and projects
  and services they are responsible for.
  `,
  ogDescription: `
  This is the page for Forties Mulier staff member ${person.name}. It contains information about
  ${person.name} such as their main role in Forties Mulier, past experience, expertise and projects
  and services they are responsible for.
  `,
  ogImage: person.picture,
});
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <h1
      id="person-name"
      class="font-bold mb-6 text-3xl sm:text-4xl text-purple"
    >
      {{ person.name }}
    </h1>
    <div class="flex flex-col md:flex-row gap-8 w-full items-center">
      <SquareWithImage
        :src="person.picture"
        alt=""
        class="rounded-full md:self-start"
        described-by="person-name"
        width="max-w-[350px] md:min-w-[350px]"
        height="max-h-[350px]"
      />
      <div class="flex flex-col gap-4 text-left md:ml-12">
        <p>
          <span class="font-bold text-purple">Email: </span>
          <a :href="`mailto:${person.email}`" target="_blank">
            {{ person.email }}
          </a>
        </p>
        <p>
          <span class="font-bold text-purple">Expertise: </span
          >{{ person.expertise }}
        </p>
        <p>
          <span class="font-bold text-purple">Position: </span
          >{{ person.mainRole }}
        </p>
        <p>
          <span class="font-bold text-purple">Education: </span
          >{{ person.education }}
        </p>
        <p>
          <span class="font-bold text-purple">Past Experience: </span
          >{{ person.pastExperience }}
        </p>
      </div>
    </div>

    <div v-if="person.projects.length">
      <Divider class="mx-auto" />
      <h1 class="font-bold text-xl sm:text-2xl text-purple mb-4">
        Projects I lead
      </h1>
      <div class="flex gap-4">
        <PreviewContainer
          v-for="project in person.projects"
          :key="project.name"
          :to="'/what-we-do/projects/' + project.slug"
          :src="project.picture"
          :alt="'Image for ' + project.name"
          :name="project.name"
          width="w-[250px]"
        />
      </div>
    </div>

    <div v-if="person.services.length">
      <Divider class="mx-auto" />
      <h1 class="font-bold text-xl sm:text-2xl text-purple mb-4">
        Services I lead
      </h1>
      <div class="flex gap-4">
        <PreviewContainer
          v-for="service in person.services"
          :key="service.name"
          :to="'/what-we-do/services/' + service.slug"
          :src="service.picture"
          :alt="'Image for ' + service.name"
          :name="service.name"
          width="w-[250px]"
        />
      </div>
    </div>
  </div>
</template>

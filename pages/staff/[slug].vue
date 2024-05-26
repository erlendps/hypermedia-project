<script setup lang="ts">
import { ChevronLeftIcon, LightBulbIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const { data: dbResult } = await useFetch(`/api/staff/${route.params.slug}`);
if (!dbResult.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}

const person = computed(() => {
  /**firstName,lastName,mainRole,education,pastExperience,expertise,slug,picture*/
  return {
    name: `${dbResult.value!.firstName} ${dbResult.value!.lastName}`,
    picture: dbResult.value!.picture,
    mainRole: dbResult.value!.mainRole,
    education: dbResult.value!.education,
    pastExperience: dbResult.value!.pastExperience,
    expertise: dbResult.value!.expertise,
    services: dbResult.value!.Service,
    projects: dbResult.value!.Project,
  };
});
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <div class="flex items-center justify-center w-full gap-4 relative">
      <NuxtLink to="/staff" class="absolute left-0 text-purple inline-flex">
        <ChevronLeftIcon class="w-6 h-6" />

        Our staff
      </NuxtLink>
      <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
        {{ person.name }}
      </h1>
    </div>
    <div class="flex flex-col md:flex-row gap-8 w-full items-center">
      <SquareWithImage
        :src="person.picture"
        :alt="`Image of ${person.name}`"
        class="min-w-[350px] h-[350px] rounded-full"
      />
      <div class="flex flex-col gap-4 text-left ml-12 pt-2">
        <div>
          <span class="font-bold text-purple">Expertise: </span
          ><span> {{ person.expertise }}</span>
        </div>
        <div>
          <span class="font-bold text-purple">Position: </span
          ><span> {{ person.mainRole }}</span>
        </div>
        <div>
          <span class="font-bold text-purple">Education: </span
          ><span> {{ person.education }}</span>
        </div>
        <div>
          <span class="font-bold text-purple">Past Experience: </span
          ><span> {{ person.pastExperience }}</span>
        </div>
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
          :to="'/what-we-do/projects/' + service.slug"
          :src="service.picture"
          :alt="'Image for ' + service.name"
          :name="service.name"
          width="w-[250px]"
        />
      </div>
    </div>
  </div>
</template>

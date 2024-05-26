<template>
  <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4 text-center">
    Our staff is here to help you
  </h1>
  <img
    src="assets/images/not_found.svg"
    alt="Image of our staff"
    class="w-full h-[250px] object-cover rounded-lg mb-4"
  />
  <p class="text-center">
    Our dedicated team of professionals is committed to supporting you through
    difficult times. With expertise in various fields, including counseling,
    advocacy, legal assistance, and educational programming, we provide
    comprehensive services tailored to your needs. Whether you're seeking
    guidance on navigating the legal system, finding emotional support through
    counseling, or empowering yourself through educational workshops, our staff
    is here for you every step of the way. You are not alone – reach out to us
    today and let us help you take the first step towards a brighter future."
  </p>
  <Divider class="mx-auto" />
  <h2 class="font-bold text-xl sm:text-2xl text-purple mb-4 text-center">
    Gallery
  </h2>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div v-for="person in staff" class="flex flex-col">
      <PreviewContainer
        :key="person.slug"
        :src="person.picture"
        :to="'/staff/' + person.slug"
        :alt="`Image of ${person.firstName + ' ' + person.lastName}`"
        :name="person.firstName + ' ' + person.lastName"
        class="min-w-[215px] h-[215px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ShortPerson } from '~/types/types';

const staff = await $fetch<ShortPerson[]>('/api/staff');
</script>

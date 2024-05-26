<script setup lang="ts">
import groupImage from "~/assets/images/group.webp";

const { data: staff } = await useFetch("/api/staff");

const baseUrl = useRuntimeConfig().public.baseUrl;
useSeoMeta({
  title: "Our staff - Forties Mulier",
  ogTitle: "Our staff - Forties Mulier",
  description:
    "The page contains an overview of the staff that works at Forties Mulier.",
  ogDescription:
    "The page contains an overview of the staff that works at Forties Mulier.",
  ogImage: `${baseUrl}${groupImage}`,
});
</script>

<template>
  <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4 text-center">
    Our staff is here to help you
  </h1>
  <img
    :src="groupImage"
    class="w-full object-cover rounded-lg mb-4 border-2 border-purple"
    alt="Overview of all our current staff members."
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
  <div class="flex flex-wrap gap-x-4 gap-y-6 justify-around">
    <div v-for="person in staff" class="flex flex-col">
      <PreviewContainer
        :key="person.slug"
        :src="person.picture"
        :to="'/staff/' + person.slug"
        alt=""
        :name="person.firstName + ' ' + person.lastName"
        :extra-text="person.mainRole"
        width="w-[200px]"
      />
    </div>
  </div>
</template>

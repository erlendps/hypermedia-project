<script setup lang="ts">
import { FireIcon, HeartIcon, MusicalNoteIcon } from "@heroicons/vue/24/solid";
import shuffle from "@stdlib/random-shuffle";
const route = useRoute();
const { data: dbResult } = await useFetch(`/api/services/${route.params.slug}`);
if (!dbResult.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

const indexes = shuffle([0, 1, 2]);

const service = computed(() => {
  return {
    name: dbResult.value!.name,
    slug: dbResult.value!.slug,
    picture: dbResult.value!.picture,
    description: dbResult.value!.description,
    availability: dbResult.value!.availability,
    duration: dbResult.value!.availability,
    otherInformation: dbResult.value?.otherInformation,
    responsible: {
      name:
        dbResult.value!.Person!.firstName +
        " " +
        dbResult.value!.Person!.lastName,
      slug: dbResult.value!.Person!.slug,
      picture: dbResult.value!.Person!.picture,
    },
    testimonials: dbResult.value!.Testimonial.map((testimonial, i) => {
      return { ...testimonial, icon: indexes[i % 3], key: i };
    }),
  };
});
</script>
<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      {{ service.name }}
    </h1>
    <div class="w-full mb-6">
      <LoadingImage
        :src="service.picture"
        :alt="`Image for ${service.name}`"
        common-class="w-full h-[275px] border-2 border-purple rounded-t-lg rounded-b-3xl"
        class-img="object-cover"
      />
      <div
        class="w-full border-t-2 border-x-2 border-purple rounded-t-3xl flex justify-center gap-2 items-center mt-[-2px] pt-3"
      >
        <span>Responsible:</span>
        <PersonPreview
          :to="`/staff/${service.responsible.slug}`"
          :src="service.responsible.picture"
          :alt="`Image of ${service.responsible.name}`"
          :name="service.responsible.name"
        />
      </div>
    </div>
    <p>{{ service.description }}</p>
    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">Practical Information</h2>
    <p>
      The center offers a wide array of services designed to support women in
      need, each with specific availability, duration, and additional practical
      information.
    </p>
    <div
      class="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:justify-around sm:items-center w-full mt-4"
    >
      <div class="w-full sm:w-[45%]">
        <h3 class="font-bold text-lg text-purple mb-2">Availability</h3>
        <p>{{ service.availability }}</p>
      </div>
      <div
        role="separator"
        aria-orientation="vertical"
        class="rounded-lg w-[4px] h-[100px] bg-pink hidden sm:block"
      ></div>
      <div class="w-full sm:w-[45%]">
        <h3 class="font-bold text-lg text-purple mb-2">Duration</h3>
        <p>{{ service.duration }}</p>
      </div>
    </div>
    <div v-if="service.otherInformation" class="mt-4">
      <h3 class="font-bold text-lg text-purple mb-2">Good to know</h3>
      <p>{{ service.otherInformation }}</p>
    </div>
    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">
      Read how the service has benefitted others
    </h2>
    <ul class="flex flex-col w-full gap-6">
      <li
        v-for="testimonial in service.testimonials"
        :key="testimonial.key"
        class="w-full even:text-right odd:text-left text-lg group"
      >
        <div class="flex w-full flex-col">
          <div
            class="w-full flex flex-row group-even:flex-row-reverse group-even:self-end group-odd:self-start"
          >
            <blockquote
              class="before:content-[open-quote] after:content-[close-quote] italic w-11/12 sm:w-1/2"
            >
              {{ testimonial.testimonialText }}
            </blockquote>
            <div class="hidden sm:flex justify-center items-center sm:w-1/2">
              <FireIcon
                v-if="testimonial.icon === 0"
                class="w-24 h-24 text-purple rotate-12"
              />
              <HeartIcon
                v-else-if="testimonial.icon === 1"
                class="w-24 h-24 text-purple"
              />
              <MusicalNoteIcon v-else class="w-24 h-24 text-purple" />
            </div>
          </div>
          <span class="font-bold">{{ testimonial.endorser }}</span>
        </div>
        <hr class="border rounded-lg border-purple w-2/6 mx-auto" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {
  FireIcon,
  HeartIcon,
  MusicalNoteIcon,
} from '@heroicons/vue/24/outline';

// fetch data from server
const route = useRoute();
const { data: dbResult } = await useFetch(`/api/services/${route.params.slug}`);

if (!dbResult.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}

// FireIcon is index 0
// HeartIcon is index 1
// MusicalNoteIcon is index 2
const icons = [FireIcon, HeartIcon, MusicalNoteIcon];

// a sort of hack to "assert" that the values you get from db is
// not null (we know this since we required it in db).
const service = {
  name: dbResult.value!.name, // service name
  slug: dbResult.value!.slug, // service slug
  picture: dbResult.value!.picture, // service picture
  description: dbResult.value!.description, // service description
  availability: dbResult.value!.availability, // service availability
  duration: dbResult.value!.duration, // service duration
  otherInformation: dbResult.value?.otherInformation, // other practical information
  // responsible person, we only need data to create the preview component
  responsible: {
    name:
      dbResult.value!.Person!.firstName +
      ' ' +
      dbResult.value!.Person!.lastName,
    slug: dbResult.value!.Person!.slug,
    picture: dbResult.value!.Person!.picture,
  },
  // testimonials. Along with the values, add a key and also the icon it should be rendered with
  testimonials: dbResult.value!.Testimonial.map((testimonial, i) => {
    return { ...testimonial, icon: icons[i % 3], key: i };
  }),
};
</script>
<template>
  <!-- the main container places all direct children vertically (flex-col), and centers them vertically -->
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      {{ service.name }}
    </h1>
    <!-- Container for the service image and the responsible person. The entire container for
    the responsible person is centered. -->
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
      information. Here is some practical information regarding this service.
    </p>
    <!--
      The practical information (availability, duration and other information) consist of 2 containers
      Availability and duration is grouped together so that we can place them horizontally. When the
      screen is small enough, it switches to placing all text underneath each other.
    -->
    <div
      class="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:justify-around sm:items-center w-full mt-4"
    >
      <div class="w-full sm:w-[45%]">
        <h3 class="font-bold text-lg text-purple mb-2">Availability</h3>
        <p>{{ service.availability }}</p>
      </div>
      <!-- we want a vertical separator, so we create one using a div and specify the role and orientation -->
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
    <!-- Only render if the service has other practical information (it can be null) -->
    <div v-if="service.otherInformation" class="mt-4">
      <h3 class="font-bold text-lg text-purple mb-2">Good to know</h3>
      <p>{{ service.otherInformation }}</p>
    </div>
    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">
      Read how the service has benefitted others
    </h2>
    <!--
      Testimonials are wrapped in a list for semantic reasons.
    -->
    <ul class="flex flex-col w-full gap-8">
      <li
        v-for="testimonial in service.testimonials"
        :key="testimonial.key"
        class="w-full text-lg group"
      >
        <!--
          Depending on whether the list element is an odd or even child, we align the text
          either left (odd) or right (even).
         -->
        <div class="flex flex-col group-even:text-right group-odd:text-left">
          <!--
            We group the quote and icon together, so that we can center the icon vertically,
            in relation to the height of the quote. When the list element is even, we have to
            switch the order of the quote and icon.
            
            When the icon is to be rendered (screens wider than 640px), the quote and container
            for the icon each take 50% of the full width, this is mostly done so that we can
            center the icon horizontally more easily.
          -->
          <div
            class="w-full flex flex-row group-even:flex-row-reverse group-even:self-end group-odd:self-start"
          >
            <blockquote
              class="before:content-[open-quote] after:content-[close-quote] italic w-full sm:w-1/2"
            >
              {{ testimonial.testimonialText }}
            </blockquote>
            <div
              class="hidden text-pink sm:flex justify-center items-center sm:w-1/2"
            >
              <component
                :is="testimonial.icon"
                class="w-24 h-24 group-odd:rotate-12 group-even:-rotate-12"
              />
            </div>
          </div>
          <span class="font-bold">{{ testimonial.endorser }}</span>
        </div>
        <!--
          To get the horizontal line to be centered under the actual quote, we can
          wrap it in a container with the same width as the blockquote, and then
          center the hr element and set a width.
          We also have to position it absolutely so that we can "push" the container
          either left or right depending on the parity of the list element.
        -->
        <div
          class="w-full sm:w-1/2 absolute group-even:right-0 group-odd:left-0"
        >
          <hr class="border rounded-lg border-purple w-2/6 mx-auto" />
        </div>
      </li>
    </ul>
  </div>
</template>

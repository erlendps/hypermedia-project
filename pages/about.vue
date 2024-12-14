<script setup lang="ts">
import oldCenter from '~/assets/images/old.webp';

const baseUrl = useRuntimeConfig().public.baseUrl;

// SEO meta tags for the about page
useSeoMeta({
  title: 'About us - Forties Mulier',
  ogTitle: 'About us - Forties Mulier',
  description: `
    This is the about page of Forties Mulier. The page contains
    information on our mission, the center in general and our history.
    `,
  ogDescription: `
    This is the about page of Forties Mulier. The page contains
    information on our mission, the center in general and our history.
    `,
  ogImage: baseUrl + oldCenter,
});
</script>

<template>
  <div class="flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">Our mission</h1>
    <p class="max-w-xl mx-auto">
      Our mission is to provide comprehensive support to women experiencing
      difficult and violent situations. We strive to empower them with
      resources, guidance, and a safe space where they can rebuild their lives.
      Our dedicated team works tirelessly to promote awareness, offer legal and
      emotional support, and ensure that every woman has the opportunity to
      thrive and live free from fear and abuse.
    </p>
    <Divider class="mx-auto" />
    <h2 class="font-bold text-xl sm:text-2xl text-purple mb-4">The center</h2>
    <p class="max-w-xl mx-auto mb-4">
      The center is a haven for women who need assistance and support. We offer
      a range of services including counseling, legal aid, educational programs,
      and emergency shelter. Our holistic approach ensures that each woman
      receives the care and attention she needs to overcome her challenges and
      build a brighter future. We believe in the strength and resilience of
      every woman who walks through our doors.
    </p>

    <div class="flex justify-center items-center gap-4">
      <HeartWithPeopleIcon class="text-purple h-14 w-14" />
      <ButtonLink to="/staff">Meet our fantastic people!</ButtonLink>
    </div>
    <Divider class="mx-auto" />
    <h2 class="font-bold text-xl sm:text-2xl text-purple mb-4">Our history</h2>
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <p class="w-full sm:w-1/2">
        Since our establishment in the 1940s, the center has been a pillar of
        hope and support in the community. Our history is rich with stories of
        courage and transformation. From humble beginnings, we have grown into a
        robust organization, continuously adapting to meet the evolving needs of
        women in crisis. Our legacy is one of compassion, advocacy, and
        unwavering commitment to making a difference.
      </p>
      <img
        :src="oldCenter"
        alt="A black and white photo of the center from the 1940s"
        class="h-64 border-2 border-purple rounded-xl"
      />
    </div>
  </div>
</template>

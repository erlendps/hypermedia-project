<script setup lang="ts">
useSeoMeta({
  title: "Home - Forties Mulier",
  ogTitle: "Home - Forties Mulier",
  description:
    "This is the homepage of Forties Mulier, a non-profit organization helping women that have experience domestic violence or mistreatment.",
  ogDescription:
    "This is the homepage of Forties Mulier, a non-profit organization helping women that have experience domestic violence or mistreatment.",
});
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-3xl sm:text-4xl text-purple mb-4">
      Welcome to Forties Mulier
    </h1>
    <p>
      Forties Mulier is a non-profit organization dedicated to supporting women
      in need. Our mission is to provide comprehensive resources, guidance, and
      a safe space.
    </p>
    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">Services</h2>
    <p>
      We offer a range of services including counseling, legal aid, educational
      programs, and emergency shelter. Our holistic approach ensures that each
      woman receives the care and attention she needs to overcome her challenges
      and build a brighter future. We believe in the strength and resilience of
      every woman who walks through our doors.
    </p>
    <ButtonLink to="/what-we-do/services" class="mt-4">
      View all services
    </ButtonLink>
    <Divider />
    <h2 class="font-bold text-2xl text-purple mb-4">Projects</h2>
    <p>
      Our projects focus on empowering women through education, training, and
      community-building initiatives. From job readiness programs to leadership
      development workshops, we are committed to helping.
    </p>
    <ButtonLink to="/what-we-do/projects" class="mt-4">
      View all projects
    </ButtonLink>
  </div>
</template>

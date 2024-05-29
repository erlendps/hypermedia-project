<script setup lang="ts">
const links = ref([
  {
    path: "/what-we-do",
    name: "What we do",
    menuName: "Activities",
    submenu: [
      { path: "/what-we-do/services", name: "Services" },
      { path: "/what-we-do/projects", name: "Projects" },
    ],
    showSubmenu: false,
  },
  { path: "/contact", name: "Contact us" },
  { path: "/about", name: "About us" },
  { path: "/staff", name: "Our staff" },
]);

const checkClick = (event: Event) => {
  if (!links.value[0].showSubmenu) return;

  const target = event.target as HTMLElement;
  if (target.classList.contains("submenu")) return;
  let parent = target.parentElement;
  let containsClass = false;
  while (parent !== null) {
    if (parent.classList.contains("submenu")) {
      containsClass = true;
      break;
    }
    parent = parent.parentElement;
  }
  if (!containsClass) {
    links.value[0].showSubmenu = false;
  }
};
// add event listener on window for mousedown events to close submenu if the click is outside
onBeforeMount(() => {
  document.addEventListener("mousedown", checkClick);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", checkClick);
});
</script>

<template>
  <nav class="bg-purple text-white w-full h-12">
    <PcMenu :links="links" class="hidden md:flex" />
    <MobileMenu :links="links" class="md:hidden" />
  </nav>
</template>

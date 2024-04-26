<template>
  <h1
    class="font-bold stretch:text-center"
    :class="[
      name.length >= 10
        ? 'text-7xl stretch:text-5xl compact:text-4xl'
        : 'text-8xl stretch:text-6xl compact:text-5xl',
    ]"
  >
    {{ name }}
  </h1>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    name: "John Doe",
  }),
};
</script>

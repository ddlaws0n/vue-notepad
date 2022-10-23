<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <main id="content" class="shrink-0" role="main">
      <Alert v-if="alerts.showAlert" />
      <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
import Alert from "@/components/alerts/Alert.vue";
import { reactive } from "vue";

const alerts = reactive({
  showAlert: true,
});
</script>

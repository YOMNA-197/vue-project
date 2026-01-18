<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">

    <!-- Navbar -->
    <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 class="text-2xl font-bold">BatuBlog</h1>

      <!-- Bonus: Logout -->
      <button
        @click="logout"
        class="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>

    <!-- Content -->
    <div class="max-w-3xl mx-auto p-6">

      <!-- Bonus: Display user email -->
      <p class="text-center text-gray-600 mb-4">
        Logged in as:
        <span class="font-semibold text-blue-600">{{ userEmail }}</span>
      </p>

      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
        Latest Blog Posts
      </h2>

      <!-- Blog List -->
      <div class="space-y-6">

        <div class="bg-white border-l-4 border-blue-500 rounded shadow p-5">
          <h3 class="text-2xl font-semibold text-blue-600 mb-2">
            Welcome to BatuBlog
          </h3>
          <p class="text-gray-700 mb-4">
            This blog page is visible only for authenticated users.
          </p>
          <button class="text-blue-500 font-medium hover:underline">
            Read More
          </button>
        </div>

        <div class="bg-white border-l-4 border-green-500 rounded shadow p-5">
          <h3 class="text-2xl font-semibold text-green-600 mb-2">
            Vue 3 & Tailwind CSS
          </h3>
          <p class="text-gray-700 mb-4">
            Learn how to build modern UI using Vue and Tailwind.
          </p>
          <button class="text-green-500 font-medium hover:underline">
            Read More
          </button>
        </div>

        <div class="bg-white border-l-4 border-purple-500 rounded shadow p-5">
          <h3 class="text-2xl font-semibold text-purple-600 mb-2">
            Secure Authentication
          </h3>
          <p class="text-gray-700 mb-4">
            Authentication helps protect your blog content.
          </p>
          <button class="text-purple-500 font-medium hover:underline">
            Read More
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

// Bonus: user email
const userEmail = ref(auth.currentUser?.email || "");

// router
const router = useRouter();

// Bonus: logout
const logout = async () => {
  await signOut(auth);
  router.push("/login");
};
</script>

<style scoped>
</style>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

const router = useRouter();
const email = ref("");
const password = ref("");
const errMessage = ref("");

const login = async () => {

if (email.value == null) {
errMessage.value = "please enter valid Email"
return;
}

if (password.value == null) {
errMessage.value = "please enter valid Password"
return;
}

if (password.value.length <= 6) {
errMessage.value = " Password should be at least 6 characters"
return;
}

await signInWithEmailAndPassword(auth,email.value,password.value);
router.push('/home')

}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

      <h2 class="text-3xl font-bold mb-6 text-center text-blue-600">
        Login
      </h2>

      <form @submit.prevent="login" class="space-y-4">

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            v-model="email"
            placeholder="you@example.com"
            class="mt-1 block w-full px-4 py-2 border rounded-md
                   focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            v-model="password"
            placeholder="••••••••"
            class="mt-1 block w-full px-4 py-2 border rounded-md
                   focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <!-- Error -->
        <p v-if="errMessage" class="text-red-500 text-sm text-center">
          {{ errMessage }}
        </p>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded
                 hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?
        <router-link to="/register" class="text-blue-500 hover:underline">
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script setup>
  import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '@/firebase/config'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref(null);
const password = ref(null);
const confirm_Password = ref(null);
const errMessage =ref("")
const register = async () => {

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

if (password.value !== confirm_Password.value) {
    errMessage.value = "confirm_Passwords do not match";
    return;
  }
await createUserWithEmailAndPassword(auth,email.value, password.value);

router.push('/home');
}
</script>

<template>
 <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-3xl font-bold mb-6 text-center">Register</h2>

      <!-- Registration Form -->
      <form @submit.prevent="register" class="space-y-4">

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" v-model="email" placeholder="you@example.com" class="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"/>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" v-model="password" placeholder="••••••••" class="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"/>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" v-model="confirm_Password" placeholder="••••••••" class="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"/>
        </div>
        <div class="text-red-500">{{ errMessage }}</div>

        <button type="submit" class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
          Register
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-600">
        Already have an account? <router-link to="/login" class="text-blue-500 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>



<style scoped>

</style>

<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ChatWindow from "../components/ChatWindow.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    return {};
  },
};
</script>

<style>
</style>
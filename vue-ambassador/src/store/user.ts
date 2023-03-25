import { User } from "@/model/User";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore('user', () => {
  const user = ref<User | null>(null)
  function setUser(inputUser: User) {
    user.value = inputUser
  }

  return { user, setUser }
})

import { defineStore } from 'pinia';
import { type User } from '@/types/user';
import userProfileService from '@/services/user/userProfile';
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as User | null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchUsers() {
      this.isLoading = true;
      this.error = undefined;
      try {
        const data = await userProfileService.getUserProfile();
        this.userInfo = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

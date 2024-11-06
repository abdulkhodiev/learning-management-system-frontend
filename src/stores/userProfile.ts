import { defineStore } from 'pinia';
import { type User, type UserRequestData } from '@/types/user';
import userProfileService from '@/services/user/userProfile';
import { Users as UserInfo } from '@/data';
export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User,
    isLoading: false,
    error: null as Error | null,
  }),

  actions: {
    async getUserProfile() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await userProfileService.getUserProfile();
        this.user = UserInfo[0];
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },

    async updateUserProfile(data: UserRequestData) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await userProfileService.updateUserProfile(data);
        this.user = response;
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

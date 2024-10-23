import { defineStore } from 'pinia';
import authService from '@/services/auth';
import { getItem, setItem, removeItem } from '@/helpers/localStorage';
import type { LoginRequest, RegisterRequest } from '@/types/auth';
import type { User } from '@/types/user';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!getItem('accessToken'),
    currentUser: null as User | null,
    isLoading: false,
    role: 'public',
  }),

  getters: {
    isAuthenticated: state => state.isAuthenticated,
    role: state => (state.currentUser ? state.currentUser.role : 'public'),
  },

  actions: {
    async login(credentials: LoginRequest) {
      this.isLoading = true;
      try {
        const response = await authService.login(credentials);
        const { accessToken, user } = response;

        setItem('accessToken', accessToken);

        this.currentUser = user;
        this.isAuthenticated = true;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async register(data: RegisterRequest) {
      this.isLoading = true;
      try {
        const response = await authService.register(data);
        const { accessToken, user } = response;

        setItem('accessToken', accessToken);

        this.currentUser = user;
        this.isAuthenticated = true;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async getCurrentUser() {
      this.isLoading = true;
      this.currentUser = null;
      try {
        const response = await authService.getCurrentUser();
        this.currentUser = response.user;
        this.isAuthenticated = true;
      } catch (error) {
        console.error('Get current user failed:', error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      removeItem('accessToken');
      this.currentUser = null;
      this.isAuthenticated = false;
    },

    restoreAuthState() {
      const token = getItem('accessToken');
      this.isAuthenticated = !!token;

      if (this.isAuthenticated) {
        this.getCurrentUser();
      }
    },
  },
});

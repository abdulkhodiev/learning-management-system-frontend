<script setup lang="ts">
import { useForm } from 'vee-validate';
import { z } from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import Input from '@/components/ui/input/Input.vue';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';
import { toTypedSchema } from '@vee-validate/zod';
import AuthCards from '@/components/PublicCards/AuthCards.vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

const registersSchema = toTypedSchema(
  z
    .object({
      firstName: z
        .string({ required_error: 'First Name is required' })
        .min(1, { message: 'First Name is required' }),
      lastName: z
        .string({ required_error: 'Last Name is required' })
        .min(1, { message: 'Last Name is required' }),
      username: z
        .string({ required_error: 'Username is required' })
        .min(1, { message: 'Username is required' }),
      email: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' }),
      password: z
        .string({ required_error: 'Password is required' })
        .min(4, { message: 'Password is required' }),
      confirmPassword: z
        .string({ required_error: 'Confirm Password is required' })
        .min(4, { message: 'Confirm Password is required' }),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    })
);

const { handleSubmit } = useForm({
  validationSchema: registersSchema,
});

const onSubmit = handleSubmit(values => {
  auth.register(values);
});
</script>

<template>
  <section
    class="-mb-[60px] flex h-[calc(100vh-66px)] items-center justify-between"
    id="signup"
  >
    <div class="container flex h-full w-full items-center justify-center">
      <div
        class="w-[60%]"
        id="sideDiv"
      ></div>
      <div class="flex w-full justify-center lg:justify-between">
        <div class="w-full space-y-6">
          <h2 class="text-center text-[32px] font-semibold">
            Create Your Account
          </h2>
          <form
            class="w-full space-y-[22px]"
            @submit.prevent="onSubmit"
          >
            <div class="flex w-full items-end gap-[30px]">
              <FormField
                v-slot="{ componentField, errorMessage }"
                name="firstName"
              >
                <FormItem class="w-full">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      class="h-16 w-full p-4"
                      :placeholder="errorMessage || 'First Name'"
                      v-bind="componentField"
                    />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField
                v-slot="{ componentField, errorMessage }"
                name="lastName"
              >
                <FormItem class="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      class="h-16 w-full p-4"
                      :placeholder="errorMessage || 'Last Name'"
                      v-bind="componentField"
                    />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>

            <FormField
              v-slot="{ componentField, errorMessage }"
              name="username"
            >
              <FormItem class="w-full">
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    class="h-16 w-full p-4"
                    :placeholder="errorMessage || 'Username'"
                    v-bind="componentField"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField
              v-slot="{ componentField, errorMessage }"
              name="email"
            >
              <FormItem class="w-full">
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="email"
                    class="h-16 w-full p-4"
                    :placeholder="errorMessage || 'Email'"
                    v-bind="componentField"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <div class="flex w-full items-end gap-[30px]">
              <FormField
                v-slot="{ componentField, errorMessage }"
                name="password"
              >
                <FormItem class="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      class="h-16 w-full p-4"
                      :placeholder="errorMessage || 'Password'"
                      v-bind="componentField"
                    />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField
                v-slot="{ componentField, errorMessage }"
                name="confirmPassword"
              >
                <FormItem class="w-full">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      class="h-16 w-full p-4"
                      :placeholder="errorMessage || 'Confirm Password'"
                      v-bind="componentField"
                    />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>

            <Button
              class="h-12 bg-thirdary text-white hover:bg-thirdary"
              type="submit"
            >
              Create Account <ArrowRight class="ml-2 size-5" />
            </Button>
          </form>

          <div class="flex items-center justify-between gap-3">
            <div class="h-[2px] w-full bg-muted" />
            <p
              class="w-max text-nowrap text-center text-sm text-muted-foreground"
            >
              Sign up with
            </p>
            <div class="h-[2px] w-full bg-muted" />
          </div>

          <div class="w-full"><AuthCards /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#signup {
  background-image: url('@/assets/auth/signup.png');
  background-repeat: no-repeat;
  background-size: contain;
}

@media (max-width: 1240px) {
  #signup {
    background-image: none;
  }
  #sideDiv {
    display: none;
  }
}
</style>

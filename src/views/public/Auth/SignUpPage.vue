<script setup lang="ts">
import AutoForm from '@/components/ui/auto-form/AutoForm.vue';
import { useForm } from 'vee-validate';
import { z } from 'zod';

const registersSchema = z
  .object({
    firstName: z.string().min(1, { message: 'First Name is required' }),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
    username: z.string().min(1, { message: 'Username is required' }),
    email: z.string().min(1, { message: 'Email is required' }),
    password: z.string().min(4, { message: 'Password is required' }),
    confirmPassword: z
      .string()
      .min(4, { message: 'Confirm Password is required' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const { handleSubmit } = useForm({
  validationSchema: registersSchema,
});
</script>

<template>
  <section class="flex h-[calc(100vh-66px)] items-center justify-between">
    <img
      src="@/assets/auth/signup.png"
      alt="signup"
      class="hidden h-full lg:block"
    />
    <div class="flex w-full justify-center p-8 pr-12 lg:justify-between">
      <div class="hidden lg:block"></div>
      <div class="w-full space-y-6">
        <h2 class="text-center text-[32px] font-semibold">
          Create Your Account
        </h2>
        <AutoForm
          class="grid grid-cols-1 items-end gap-6 md:grid-cols-2"
          :schema="registersSchema"
          :field-config="{
            firstName: {
              label: 'Full Name',

              inputProps: {
                placeholder: 'First Name',
                type: 'text',
                class: 'h-14 p-4 col-span-1 w-full',
              },
            },
            lastName: {
              hideLabel: true,

              inputProps: {
                placeholder: 'Last Name',
                type: 'text',
                class: 'h-14 p-4 col-span-1 w-full',
              },
            },
            username: {
              inputProps: {
                class: 'h-14 p-4 col-span-2 w-full',
                placeholder: 'Username',
                type: 'text',
              },
            },
            email: {
              inputProps: {
                class: 'h-14 p-4 w-full col-span-2',
                placeholder: 'Email',
                type: 'email',
              },
            },
            password: {
              inputProps: {
                placeholder: 'Password',
                type: 'password',
                class: 'h-14 p-4 w-full col-span-1',
              },
            },
            confirmPassword: {
              hideLabel: true,
              inputProps: {
                placeholder: 'Confirm Password',
                type: 'password',
                class: 'h-14 p-4 w-full col-span-1',
              },
            },
          }"
        />
      </div>
    </div>
  </section>
</template>

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
import AuthCards from '@/components/Cards/AuthCards.vue';

const registersSchema = toTypedSchema(
  z.object({
    username: z
      .string({ required_error: 'Username is required' })
      .min(1, { message: 'Username is required' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(4, { message: 'Password is required' }),
  })
);

const { handleSubmit } = useForm({
  validationSchema: registersSchema,
});

const onSubmit = handleSubmit(values => {
  console.log(values);
});
</script>

<template>
  <section class="flex h-[calc(100vh-66px)] items-center justify-between">
    <div class="flex w-full justify-center p-8 pr-12 lg:justify-between">
      <div class="w-full space-y-6">
        <h2 class="text-center text-[32px] font-semibold">
          Sign in to your account
        </h2>
        <form
          class="w-full space-y-[22px]"
          @submit.prevent="onSubmit"
        >
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

          <Button
            class="h-12 bg-thirdary text-white hover:bg-thirdary"
            type="submit"
          >
            Sign In <ArrowRight class="ml-2 size-5" />
          </Button>
        </form>

        <div class="flex items-center justify-between gap-3">
          <div class="h-[2px] w-full bg-muted" />
          <p
            class="w-max text-nowrap text-center text-sm text-muted-foreground"
          >
            Sign in with
          </p>
          <div class="h-[2px] w-full bg-muted" />
        </div>

        <div class="w-full"><AuthCards /></div>
      </div>
    </div>
    <img
      src="@/assets/auth/login.png"
      alt="signup"
      class="hidden h-full lg:block"
    />
  </section>
</template>

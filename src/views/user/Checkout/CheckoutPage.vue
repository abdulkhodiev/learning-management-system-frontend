<script setup lang="ts">
import { Divider } from '@/components/Divider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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

const registersSchema = toTypedSchema(
  z.object({
    country: z
      .string({ required_error: 'Country is required' })
      .min(1, { message: 'Country is required' }),
    state: z
      .string({ required_error: 'State is required' })
      .min(4, { message: 'State is required' }),
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
  <div class="container space-y-8 py-10">
    <div class="gap flex items-baseline gap-9">
      <h2>Checkout</h2>

      <Breadcrumb>
        <BreadcrumbList class="flex items-center gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink href="/"> Home </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart"> Shopping Cart </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Checkout</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <div>
      <div>
        <Card class="rounded-xl p-4">
          <CardContent class="p-0"> </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

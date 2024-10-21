<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import Input from '@/components/ui/input/Input.vue';
import { Button } from '@/components/ui/button';
import { toTypedSchema } from '@vee-validate/zod';
import Label from '@/components/ui/label/Label.vue';

import TotalPriceCard from '@/components/Cards/TotalPriceCard.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const checkoutSchema = toTypedSchema(
  z.object({
    country: z.string().min(1, { message: 'Country is required' }),
    state: z.string().min(4, { message: 'State is required' }),
    cardholder: z.string().min(4, { message: 'Cardholder is required' }),
    cardNumber: z
      .string()
      .min(16, { message: 'Card Number must be 16 digits' }),
    expireDate: z.string().min(4, { message: 'Expiry Date is required' }),
    cvc: z.string().min(3, { message: 'CVC is required' }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema: checkoutSchema,
});

// Explicit typing for cardNumber field
const { value: cardNumber, errorMessage: cardNumberError } =
  useField<string>('cardNumber');
const mask = ref('#### #### #### ####');

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
    <div class="flex gap-10">
      <div class="w-full">
        <Card class="rounded-xl p-4">
          <CardContent class="p-0">
            <form
              class="w-full space-y-[22px]"
              @submit.prevent="onSubmit"
            >
              <div class="flex justify-center gap-4">
                <FormField name="country">
                  <FormItem class="w-full">
                    <FormControl>
                      <FormLabel class="text-lg">Enter Country</FormLabel>
                      <Input
                        type="text"
                        class="h-14 w-full p-4"
                        :placeholder="errors.country || 'Country'"
                      />
                    </FormControl>
                  </FormItem>
                </FormField>

                <FormField name="state">
                  <FormItem class="w-full">
                    <FormLabel class="text-lg">State/Union Territory</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        class="h-14 w-full p-4"
                        :placeholder="errors.state || 'Enter State'"
                      />
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>

              <div class="space-y-2">
                <Label class="text-lg">Payment Method</Label>
                <Card class="rounded-xl border-none bg-thirdary-foreground p-4">
                  <CardContent class="space-y-4 p-0">
                    <FormField name="cardholder">
                      <FormItem class="w-full">
                        <FormControl>
                          <FormLabel class="text-sm font-normal"
                            >Card Holder</FormLabel
                          >
                          <Input
                            type="text"
                            class="h-14 w-full p-4"
                            :placeholder="
                              errors.cardholder || 'Card Holder Name'
                            "
                          />
                        </FormControl>
                      </FormItem>
                    </FormField>

                    <FormField name="cardNumber">
                      <FormItem class="w-full">
                        <FormLabel class="text-sm font-normal"
                          >Card Number</FormLabel
                        >
                        <FormControl>
                          <Input
                            type="text"
                            class="h-14 w-full p-4"
                            :placeholder="cardNumberError || 'Card Number'"
                          />
                        </FormControl>
                      </FormItem>
                    </FormField>

                    <div class="flex w-full gap-4">
                      <FormField name="expireDate">
                        <FormItem class="w-full">
                          <FormLabel class="text-sm font-normal"
                            >Expiry Date</FormLabel
                          >
                          <FormControl>
                            <Input
                              type="text"
                              class="h-14 w-full p-4"
                              :placeholder="errors.expireDate || 'Expire Date'"
                            />
                          </FormControl>
                        </FormItem>
                      </FormField>
                      <FormField name="cvc">
                        <FormItem class="w-full">
                          <FormLabel class="text-sm font-normal">CVC</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              class="h-14 w-full p-4"
                              :placeholder="errors.cvc || 'CVC'"
                            />
                          </FormControl>
                        </FormItem>
                      </FormField>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div class="w-[400px] space-y-4">
        <h5 class="text-lg font-semibold">Order Details</h5>
        <Card class="flex items-center gap-2 bg-thirdary-foreground p-4">
          <CardHeader class="w-max p-0">
            <img
              src="@/assets/courses/image.png"
              alt="img"
              class="min-h-[131px] rounded-md object-cover"
            />
          </CardHeader>
          <CardContent class="flex w-max flex-col justify-between gap-1 p-0">
            <p class="text-sm text-primary">Design</p>
            <h5 class="text-lg font-semibold">
              Introduction to User Experience Designs
            </h5>
            <p class="text-sm text-primary-foreground">
              155 Lectures . 22 Total Hours
            </p>
            <p class="text-lg font-semibold">$45.00</p>
          </CardContent>
        </Card>
        <TotalPriceCard />
        <Button
          @click="router.push('/user/checkout/complete')"
          class="h-12 w-full rounded-lg border-[1px] border-thirdary bg-thirdary text-sm text-white"
          >Proceed to Checkout</Button
        >
      </div>
    </div>
  </div>
</template>

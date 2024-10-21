<script lang="ts" setup>
import CartCard from '@/components/Cards/CartCard.vue';
import { Divider } from '@/components/Divider';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cartCourses } from '@/views/public/Landing/data';
import TotalPriceCard from '@/components/Cards/TotalPriceCard.vue';
import { Button } from '@/components/ui/button';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="container flex justify-between gap-14 py-10">
    <div class="space-y-8">
      <div class="gap flex items-baseline gap-9">
        <h2>Shopping Cart</h2>

        <Breadcrumb>
          <BreadcrumbList class="flex items-center gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink href="/"> Home </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories"> Categories </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Course Name</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div class="space-y-1.5">
        <p class="text-sm text-primary-foreground">1 Course in cart</p>
        <Divider />
      </div>
      <div class="space-y-4">
        <CartCard
          v-for="i in cartCourses"
          :key="i.id"
          :card="i"
        />
      </div>
    </div>
    <div class="space-y-3">
      <h5 class="text-xl font-semibold text-primary-foreground">
        Order Details
      </h5>
      <TotalPriceCard />
      <Button
        @click="router.push('/user/checkout')"
        class="h-12 w-full rounded-lg border-[1px] border-thirdary bg-thirdary text-sm text-white"
        >Proceed Checkout</Button
      >
    </div>
  </div>
</template>

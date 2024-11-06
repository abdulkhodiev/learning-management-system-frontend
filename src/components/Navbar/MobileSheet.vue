<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DoorOpen,
  FilePlus,
  ListIcon,
  Menu,
  TextCursorInputIcon,
  User2,
} from 'lucide-vue-next';
import { Button } from '../ui/button';
import CartIcon from '@/assets/icons/CartIcon.vue';
import HeartIcon from '@/assets/icons/HeartIcon.vue';
import BellIcon from '@/assets/icons/BellIcon.vue';

defineProps({
  role: {
    type: String,
    default: 'public',
  },
});
</script>

<template>
  <nav class="sticky top-0 z-50 border-b-[1px] bg-white">
    <div class="container flex h-[65px] items-center justify-between">
      <Sheet>
        <SheetTrigger
          ><Button variant="outline"><Menu /></Button
        ></SheetTrigger>
        <SheetContent
          side="left"
          class=""
        >
          <SheetHeader>
            <SheetTitle>
              <div
                class="m-0 flex items-center gap-2 p-0 text-primary-foreground"
              >
                <img
                  src="@/assets/logo/logo.png"
                  alt=""
                />
                <RouterLink to="/">Byway</RouterLink>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div class="flex flex-col gap-2 py-5">
            <div class="flex flex-col gap-2">
              <RouterLink
                to="/categories"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
                ><ListIcon /> Categories</RouterLink
              >
              <RouterLink
                to="/teach-on-byway"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
                ><TextCursorInputIcon /> Teach on Byway</RouterLink
              >
            </div>
            <div
              class="flex flex-col gap-2"
              v-if="role === 'user'"
            >
              <RouterLink
                to="/user/wishlist"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <HeartIcon /> Favorites
              </RouterLink>
              <RouterLink
                to="/user/cart"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <CartIcon /> Cart
              </RouterLink>
              <RouterLink
                to="/user/notification"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <BellIcon /> Notifications
              </RouterLink>
              <RouterLink
                to="/user/profile/account"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <User2 /> Profile
              </RouterLink>
            </div>

            <div
              class="flex flex-col gap-2"
              v-if="role === 'public'"
            >
              <RouterLink
                to="/auth/login"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <DoorOpen /> Log In</RouterLink
              >
              <RouterLink
                to="/auth/signup"
                class="flex items-center gap-2 rounded-xl bg-thirdary-foreground p-3 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-white"
                ><FilePlus /> Sign Up</RouterLink
              >
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div class="flex items-center gap-2 text-primary-foreground">
        <img
          src="@/assets/logo/logo.png"
          alt=""
        />
        <RouterLink to="/">Byway</RouterLink>
      </div>
    </div>
  </nav>
</template>

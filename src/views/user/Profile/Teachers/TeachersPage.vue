<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-vue-next';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SearchInput from '@/components/SearchInput.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import MentorCard from '@/components/Cards/UserProfileCards/MentorCard.vue';
import { useUserStore } from '@/stores/userProfile';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import StarsIcon from '@/assets/icons/StarsIcon.vue';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const stars = [5, 4, 3, 2, 1];
const chapters = ['1-10', '10-15', '15-20'];

const price = ref(5000);

const router = useRouter();

const userStore = useUserStore();

onMounted(() => {
  userStore.getUserProfile();
});
</script>

<template>
  <div class="w-full space-y-4">
    <h2>Teachers</h2>
    <div class="flex items-center justify-between">
      <SearchInput class="hidden w-full max-w-[330px] md:block" />
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <p
            class="hidden text-nowrap text-[15px] text-primary-foreground md:block"
          >
            Sort by
          </p>
          <Select class="">
            <SelectTrigger
              class="h-12 border-[1px] border-thirdary px-6 py-2.5"
            >
              <SelectValue
                class="text-normal text-sm text-primary-foreground"
                placeholder="Relevance"
              />
            </SelectTrigger>
            <SelectContent class="">
              <SelectGroup
                class="flex flex-col items-center justify-center text-center"
              >
                <SelectItem
                  value="apple"
                  class="text-normal flex items-center justify-center p-2 text-sm text-primary-foreground"
                >
                  Top Rated
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Dialog>
            <DialogTrigger class="md:hidden">
              <Button
                class="h-12 border-[1px] border-thirdary bg-transparent px-6 py-2.5 hover:bg-transparent"
              >
                <ListFilter class="mr-2" /> Filter
              </Button>
            </DialogTrigger>
            <DialogContent>
              <div
                class="flex min-w-[300px] flex-col items-center justify-center gap-3"
              >
                <p class="text-base">Rating</p>
                <div class="flex flex-col gap-2">
                  <StarsIcon
                    v-for="item in stars"
                    :key="item"
                    :rating="item"
                    class="cursor-pointer rounded-xl transition-all duration-300 hover:border"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <MentorCard
        v-for="mentor in userStore.user.instructors"
        :key="mentor.id"
        :card="mentor"
        lcl
        @click="router.push(`/mentor/${mentor.id}`)"
      />
    </div>
    <div class="flex justify-center">
      <PaginationComponent />
    </div>
  </div>
</template>

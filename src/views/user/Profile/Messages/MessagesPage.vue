<script lang="ts" setup>
import SearchInput from '@/components/SearchInput.vue';
import Button from '@/components/ui/button/Button.vue';
import Select from '@/components/ui/select/Select.vue';
import SelectContent from '@/components/ui/select/SelectContent.vue';
import SelectGroup from '@/components/ui/select/SelectGroup.vue';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue';
import SelectValue from '@/components/ui/select/SelectValue.vue';
import { ListFilter } from 'lucide-vue-next';

import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="w-full space-y-4">
    <h2>Messages</h2>
    <div class="flex items-center justify-between">
      <SearchInput class="w-full max-w-[330px]" />
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <p class="text-nowrap text-[15px] text-primary-foreground">Sort by</p>
          <Select>
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
          <Button
            class="h-12 border-[1px] border-thirdary bg-transparent px-6 py-2.5 hover:bg-transparent"
          >
            <ListFilter class="mr-2" /> Filter
          </Button>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col gap-3">
      <div
        class="w-full cursor-pointer rounded-xl border-[1px] p-4"
        @click="router.push('/user/profile/messages/1')"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              src="@/assets/reviewers/image.png"
              alt=""
            />
            <h3>Ronald Richard</h3>
          </div>
          <p>18 March, 2022</p>
        </div>
        <p class="mt-4 line-clamp-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          perspiciatis doloremque sequi eum, minus aspernatur deserunt culpa
          dignissimos animi qui quae, dolorum explicabo dolor porro. Hic ducimus
          iste amet iusto.
        </p>
      </div>
    </div>
  </div>
</template>

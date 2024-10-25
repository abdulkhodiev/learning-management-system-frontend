<script lang="ts" setup>
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination';
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="2"
    class="shadow-[0_0_8px_0_#3B82F61F]"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex items-center"
    >
      <PaginationPrev class="rounded-e-none" />

      <template v-for="(item, index) in items">
        <PaginationListItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          as-child
        >
          <Button
            class="h-10 w-10 border-[1px] p-0"
            :variant="item.value === page ? 'default' : 'outline'"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          class="h-10 w-10 border-[1px] p-0"
          :key="item.type"
          :index="index"
        />
      </template>

      <PaginationNext class="rounded-s-none" />
    </PaginationList>
  </Pagination>
</template>

<script lang="ts" setup>
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { z } from 'zod';
import Input from '@/components/ui/input/Input.vue';
import { Button } from '@/components/ui/button';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Textarea } from '@/components/ui/textarea';
import Label from '@/components/ui/label/Label.vue';
import noImg from '@/assets/logo/noimage.png';
import { ref } from 'vue';

const profileSchema = toTypedSchema(
  z.object({
    firstName: z.string({ required_error: 'First Name is required' }).min(1, {
      message: 'First Name is required',
    }),
    lastName: z.string({ required_error: 'Last Name is required' }).min(1, {
      message: 'Last Name is required',
    }),
    headline: z.string().min(1, { message: 'Headline is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    // image section
    image: z.string().min(1, { message: 'Image is required' }),
    imageLabel: z.string().min(1, { message: 'Image Label is required' }),
    // socials section
    website: z.string().min(1, { message: 'Website is required' }),
    twitter: z.string().min(1, { message: 'Twitter is required' }),
    linkedin: z.string().min(1, { message: 'LinkedIn is required' }),
    youtube: z.string().min(1, { message: 'YouTube is required' }),
    facebook: z.string().min(1, { message: 'Facebook is required' }),
  })
);

const { handleSubmit } = useForm({
  validationSchema: profileSchema,
});

const onSubmit = handleSubmit(async values => {
  console.log(values);
});

// Reference for the file input
const fileInputRef = ref(null);

const handleFileClick = () => {
  fileInputRef.value?.click();
};
</script>

<template>
  <div class="w-full">
    <form
      class="w-full space-y-6"
      @submit.prevent="onSubmit"
    >
      <!-- First Name and Last Name -->
      <div class="w-full space-y-4 rounded-2xl border-[1px] p-6">
        <div class="flex gap-6">
          <FormField
            v-slot="{ componentField, errorMessage }"
            name="firstName"
          >
            <FormItem class="w-full">
              <FormControl>
                <FormLabel>First Name</FormLabel>
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
              <FormLabel>Last Name</FormLabel>
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
          name="headline"
        >
          <FormItem class="w-full">
            <FormControl>
              <FormLabel>Headline</FormLabel>
              <Input
                type="text"
                class="h-16 w-full p-4"
                :placeholder="errorMessage || 'Headline'"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField, errorMessage }"
          name="description"
        >
          <FormItem class="w-full">
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                type="text"
                class="w-full p-4"
                rows="4"
                :placeholder="errorMessage || 'Description'"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>
      </div>

      <!-- Image section -->
      <div class="w-full space-y-4 rounded-2xl border-2 p-6">
        <div class="space-y-4">
          <Label>Image Preview</Label>
          <img
            :src="noImg"
            alt="no img"
            class="max-w-[450px] rounded-2xl border-[1px] p-3"
          />
        </div>

        <div class="flex items-end justify-center gap-4">
          <FormField
            v-slot="{ componentField, errorMessage }"
            name="imageLabel"
          >
            <FormItem class="w-full">
              <FormControl>
                <FormLabel>Image Label</FormLabel>
                <Input
                  type="text"
                  class="h-16 w-full p-4"
                  :placeholder="errorMessage || 'ImageLabel'"
                  v-bind="componentField"
                />
              </FormControl>
            </FormItem>
          </FormField>

          <input
            type="file"
            ref="fileInputRef"
            class="hidden"
          />
          <Button
            variant="outline"
            class="h-16 border-thirdary text-sm"
            type="button"
            @click="handleFileClick"
          >
            Upload Image
          </Button>
        </div>
      </div>

      <div class="w-full space-y-4 rounded-2xl border-[1px] p-6">
        <h4 class="font-semibold">Links</h4>
        <FormField
          v-slot="{ componentField, errorMessage }"
          name="website"
        >
          <FormItem class="w-full">
            <FormControl>
              <FormLabel>Website</FormLabel>
              <Input
                type="text"
                class="h-16 w-full p-4"
                :placeholder="errorMessage || 'Label'"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField, errorMessage }"
          name="twitter"
        >
          <FormItem class="w-full">
            <FormLabel>Twitter</FormLabel>
            <FormControl>
              <Input
                type="text"
                class="h-16 w-full p-4"
                :placeholder="errorMessage || 'Label'"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField, errorMessage }"
          name="linkedin"
        >
          <FormItem class="w-full">
            <FormControl>
              <FormLabel>LinkedIn</FormLabel>
              <Input
                type="text"
                class="h-16 w-full p-4"
                :placeholder="errorMessage || 'Label'"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField, errorMessage }"
          name="youtube"
        >
          <FormItem class="w-full">
            <FormControl>
              <FormLabel>YouTube</FormLabel>
              <Input
                type="text"
                class="h-16 w-full p-4"
                :placeholder="errorMessage || 'Label'"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField, errorMessage }"
          name="facebook"
        >
          <FormItem class="w-full">
            <FormControl>
              <FormLabel>Facebook</FormLabel>
              <Input
                type="text"
                class="h-16 w-full p-4"
                :placeholder="errorMessage || 'Label'"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>
      </div>
    </form>
  </div>
</template>

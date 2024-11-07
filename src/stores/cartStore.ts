import type { CourseData } from '@/types/course';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { toast } from 'vue-sonner';

export const useCartStore = defineStore('cart', () => {
  const cart = ref(JSON.parse(localStorage.getItem('cart') || '[]'));

  watch(
    cart,
    newCart => {
      if (newCart.length === 0) {
        localStorage.removeItem('cart');
      } else {
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
    },
    { deep: true }
  );

  function addCourse(course: CourseData) {
    cart.value.push(course);
    toast.success('Course added to cart');
  }

  function removeCourse(courseId: string) {
    cart.value = cart.value.filter(
      (course: { id: string }) => course.id !== courseId
    );
    toast.success('Course removed from cart');
  }

  return { cart, addCourse, removeCourse };
});

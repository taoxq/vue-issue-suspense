<template>
  <div class="box-content">
    page1
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const promise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    router.push('/page2');
  }, 1000);
});

await promise();

</script>
<style lang="scss" scoped>
.box-content {
  font-size: 18px;
}
</style>

<template>
  <div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import customFooter from "@/components/sarasfooter.vue";

export default {
  name: "footer",
  components: {
    customFooter
  }
};
</script>

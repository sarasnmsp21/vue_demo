<template>
  <!-- created by ram -->
  <div>
      <b-row>
    <b-col md="4" class="p-0" v-for="spec in specs" v-bind:key="spec.index">
      <div class="text-center">
        <figure class="pt-3">
          <i class="far fa-comment-alt mb-4 free-chat-icon"></i>
        </figure>
        <div>
          <h5 class="font-weight-bold specs-heading">{{spec.heading}}</h5>
        </div>
        <div class="text-muted px-2 detail-description">
          <p>
            {{spec.para}}
          </p>
        </div>
      </div>
    </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "productspecs",
  data(){
    return{
      specs:[
        {
            heading:'Home',
            para: 'Divide details about your product or agency work into parts.Write a few lines about each one. A paragraph describing a feature will be enough.'
        },
        {
            heading:'Verified Users',
            para: 'Divide details about your product or agency work into parts.Write a few lines about each one. A paragraph describing a feature will be enough.'
        },
        {
            heading:'Fingerprint',
            para: 'Divide details about your product or agency work into parts.Write a few lines about each one. A paragraph describing a feature will be enough.'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.detail-description {
    font-size: 13px;
    line-height: 1.9;
}
.specs-heading{
    color: #212519;
}
</style>

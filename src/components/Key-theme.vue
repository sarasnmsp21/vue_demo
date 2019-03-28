<template>
    <div>
      <!-- created by roshan -->
        <div class=" main-theme ">
            <b-row class="justify-content-center mx-auto">
                <b-col md=4 class="text-center" v-for="card in cards" v-bind:key="card.index">
                    <div class="text-warning icon">
                        <font-awesome-icon :icon="['fas','laptop']"
                         slot="aside"
                         blank blank-color="#cba"
                         class="mb-4"
                         alt="placeholder" />
                    </div>
                    <h4 class="mb-3 theme-heading text-white">{{card.heading}}</h4>
                    <p class="text-secondary theme-text">{{card.para}} </p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
       
          heading: "Fully responsive",
          para:
            " Looks great on all major browsers, tablets and mobile devices."
        },
        {
        
          heading: "Built with SASS",
          para: "Easily adjustable with tons of SASS variables included."
        },
        {
       
          heading: "Free support",
          para:
            "Feel free to contact us with any feature requests or bug reports."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.main-theme{
  padding: 40px 0px;
  .icon {
  font-size: 30px;
}
    .theme-heading{
      font-size: 18px;
    }
 
  
}

</style>



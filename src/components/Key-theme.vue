<template>
    <div>
      <!-- created by roshan -->
        <div class=" pt-3 pb-5 ">
            <b-row class="justify-content-center mx-auto">
                <b-col md=3 class="text-center" v-for="card in cards" v-bind:key="card.index">
                    <div class="text-warning icon">
                        <font-awesome-icon :icon="['fas','laptop']"
                         slot="aside"
                         blank blank-color="#cba"
                         alt="placeholder" />
                    </div>
                    <h3 class="py-2 text-white">{{card.heading}}</h3>
                    <p class="text-white">{{card.para}} </p>
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
.icon {
  font-size: 30px;
}
</style>



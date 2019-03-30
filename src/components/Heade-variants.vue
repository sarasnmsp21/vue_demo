


<template>
    <div>
      <!-- created by roshan -->
        
          <div class="variants-main">
            <b-row class="m-auto">
                <b-col md=4 v-for="card in cards" v-bind:key="card.index">
                    <div class="variants-content">
                        <b-card  :img-src="card.cardimg" img-alt="Image" img-top tag="article" class=" card mb-2 border-0 text-left">
                            <div class="variants-heading">{{card.heading}} </div>
                            <b-card-text>
                                <div class="text-secondary">{{card.para}}</div>
                            </b-card-text>
    
                        </b-card>
                    </div>
                </b-col>
            </b-row>
            </div>
       
    
    </div>
</template>

<script>
import images1 from "../assets/web10.png";
import images2 from "../assets/web11.png";
import images3 from "../assets/web12.png";

export default {
  data() {
    return {
      cards: [
        {
          cardimg: images1,
          heading: "Product landing",
          para: "You can use this page to promote your product or a store."
        },
        {
          cardimg: images2,
          heading: "Real estate landin",
          para: "You can use this page to promote your real estate."
        },
        {
          cardimg: images3,
          heading: "Restaurant landing",
          para: "You can use this page to promote your restaurant."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/incline-website/Heade-variants.scss";
</style>

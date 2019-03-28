


<template>
    <div>
      <!-- created by roshan -->
        <b-container>
            <b-row class="m-auto">
                <b-col md=4 v-for="card in cards" v-bind:key="card.index">
                    <div>
                        <b-card  :img-src="card.cardimg" img-alt="Image" img-top tag="article" class=" card mb-2 border-0 text-left">
                            <h4>{{card.heading}} </h4>
                            <b-card-text>
                                <p class="text-secondary">{{card.para}}</p>
                            </b-card-text>
    
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    
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
.card {
  background-color: transparent;
}
</style>

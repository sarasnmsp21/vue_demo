
<template>
    <div>
        <b-container class="mt-5">
        <b-row>
            <b-col md=4 v-for="card in cards" v-bind:key="card.index">
                <div>
                    <b-card title="" :img-src="card.landimg" img-alt="Image" img-top tag="article" class="mb-2 border-0 text-left">
                        <h4>{{card.heading}} </h4>
                        <b-card-text>
                            <p class="text-secondary">{{card.para}}</p>
                        </b-card-text>
                        <a href="#" class="text-left text-muted border-bottom footer-text ">Explore Pages ›</a>
    
                    </b-card>
                    
                </div>
            </b-col>
        </b-row>
        </b-container>
    
    </div>
</template>

<script>
import images1 from "../assets/img13.png";
import images2 from "../assets/web10.png";
import images3 from "../assets/web7.png";
export default {
  data() {
    return {
      cards: [
        {
          landimg: images1,
          heading: "Landing",
          para:
            "Make your app look outstanding between the crowd using our wide variety of page components."
        },
        {
          landimg: images2,
          heading: "Dashboard",
          para:
            "Make your app look outstanding between the crowd using our wide variety of page components."
        },
        {
          landimg: images3,
          heading: "Pages",
          para:
            "Make your app look outstanding between the crowd using our wide variety of page components."
        }
      ]
    };
  }
};
</script>
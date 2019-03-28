
<template>
    <div>
        <b-container class="mt-5">
            <b-row>
                <b-col md="4" v-for="card in cards" v-bind:key="card.index" class="card-index">
                    <div>
                        <b-card :img-src="card.landimg" class="mb-2 border-0 text-left">
                            <h4 class="mb-2">{{card.heading}} </h4>
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
            cards: [{
                    landimg: images1,
                    heading: "Landing",
                    para: "Make your app look outstanding between the crowd using our wide variety of page components."
                },
                {
                    landimg: images2,
                    heading: "Dashboard",
                    para: "Make your app look outstanding between the crowd using our wide variety of page components."
                },
                {
                    landimg: images3,
                    heading: "Pages",
                    para: "Make your app look outstanding between the crowd using our wide variety of page components."
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.shadow-sm {
    border-radius: .35rem;
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0.30rem 0.30rem 0 0 rgba(53, 52, 52, 0.1);
}
.card-index
{
  z-index: -1;
}
</style>

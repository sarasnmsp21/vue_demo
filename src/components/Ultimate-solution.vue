<template>
    <div>
    
    
        <b-row>
            <b-col md=4 class="first-image p-0 m-0" text-cente v-for="card in cards" v-bind:key="card.index">
                <b-card overlay :img-src="img1" img-alt="Card Image" text-variant="white" class="border-0">
                    <b-card-text class="d-flex flex-column justify-content-end">
                        <div class="card-img-overlay  d-flex flex-column justify-content-end">
                            <div class="text-warning icon text-left  pl-2">
                                <font-awesome-icon icon="coffee" alt="placeholder" />
                            </div>
                            <div class="card-title text-left">
                                <h5 class=" ml-2">{{card.heading}}</h5>
                            </div>
                            <div class="card-text">
                                <p class="ml-2 text-left small">
                                    {{card.para}}
                                </p>
                            </div>
                        </div>
                    </b-card-text>
                </b-card>
    
            </b-col>
            </b-row>
    
        
    
    
    
    
    
    </div>
</template>

<script>
    import pictures1 from "../assets/1.jpg";
    export default {
        data() {
            return {
                img1: pictures1,
                cards: [{
                        heading: "Fully responsive",
                        para: " Looks great on all major browsers, tablets and mobile devices."
                    },
    
                   
                ]
            };
        }
    };
</script>

<style lang="scss">
.card-img-top{
  border-radius: 0%;
}
    .first-image {
        padding: 0px !important;
    }
    
    @media only screen and (max-width: 600px) {
        .first-image {
            margin: 20px 0;
        }
    }
</style>


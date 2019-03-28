<!--Created by saraswati-->
<template>
    <div class="align-items-center pb-5 pt-5 ipad-background-color">
        <b-row class="col-md-8 mx-auto ">
            <div class="col-md-2 col-xs-12 my-auto" v-for="product in products" v-bind:key="product.index">
                <b-img :src="product.images" class="img-fluid p-md-2" alt="" width="120" />
            </div>
        </b-row>
    </div>
</template>

<script>
    import images1 from "../assets/sass2.png";
    import images2 from "../assets/boot2.png";
    import images3 from "../assets/img8.png";
    import images4 from "../assets/web2.png";
    import images5 from "../assets/babel2.png";
    import images6 from "../assets/npm.png";
    export default {
        data() {
            return {
                products: [{
                        images: images1
                    },
                    {
                        images: images2
                    },
                    {
                        images: images3
                    },
                    {
                        images: images4
                    },
                    {
                        images: images5
                    },
                    {
                        images: images6
                    },
                ]
            }
        }
    };
</script>
    
<style lang="scss">
.ipad-background-color {
    background-color: #eff1f3;
  }
</style>





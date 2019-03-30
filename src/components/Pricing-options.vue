
<template>
    <div>
        <!-- created by roshan -->
    
        <b-row class="justify-content-center m-auto">
            <b-col md="4" v-for="card in cards" v-bind:key="card.index">
                <div>
                    <b-card img-alt="Image" img-top tag="article" class="card mb-2 py-3" :class="card.borderclass">
                        <b-card-text>
    
                            <div class=" text-center pricing-title p-3">Standard license</div>
                            <div class="text-center price py-2 text-warning ">{{card.price}}</div>
    
    
                            <div class="d-flex flex-row ">
                                <div class="p-2">
                                    <span class="pr-2 text-warning">
                               <font-awesome-icon class="text-left"
                                                     :icon="['fas','chevron-right']" 
                                                     alt="placeholder" />
                              </span>
                                </div>
                                <div class="p-2">
                                    <div class="mb-0"> {{card.para1}}</div>
                                </div>
                            </div>
                            <div class="d-flex flex-row ">
                                <div class="p-2 ">
    
                                    <span class="pr-2 text-warning">
                               <font-awesome-icon class="text-left"
                                                     :icon="['fas','chevron-right']" 
                                                     alt="placeholder" />
                                    </span>
                                </div>
                                <div class="p-2">
                                    <div class="mb-0"> {{card.para2}}</div>
                                </div>
                            </div>
                            <div class="d-flex flex-row ">
                                <div class="p-2 ">
                                    <span class="pr-2 text-warning">
                               <font-awesome-icon class="text-left"
                                                     :icon="['fas','chevron-right']" 
                                                     alt="placeholder" />
                              </span>
                                </div>
                                <div class="p-2">
                                    <div> {{card.para3}} <a href="#"> <span class="text-warning link">{{card.para4}}</span></a></div>
                                </div>
                            </div>
    
                            <div class="pt-3">
                                <b-button class="text-dark pricing-btn" variant="outline-warning">purchase now</b-button>
                            </div>
                        </b-card-text>
                    </b-card>
                </div>
            </b-col>
        </b-row>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cards: [{
                        price: "$49.00",
                        para1: "Use for a single product",
                        para2: "Non-paying users only",
                        para3: "Read",
                        para4: "full description",
                        borderclass: "addborder"
                    },
                    {
                        price: "$490.00",
                        para1: "Use for a single product",
                        para2: "Paying users allowed",
                        para3: "Read",
                        para4: "full description"
                    }
                ]
            };
        }
    };
</script>

<style lang="scss">
    .pricing-title {
        font-size: 18px;
        color: black;
    }
    
    .pricing-btn {
        font-size: 11px;
        line-height: 1.64063rem;
        text-transform: uppercase;
        padding: 13px 27px;
    }
    
    .price {
        font-size: 25px;
        color: #f5ba4b;
    }
    
    .addborder {
        border-top: 2px solid #f5ba4b;
    }
</style>

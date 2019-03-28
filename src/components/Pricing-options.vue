
<template>
    <div>
        <!-- created by roshan -->
        <b-container>
            <b-row class="justify-content-center m-auto">
                <b-col md="4" v-for="card in cards" v-bind:key="card.index">
                    <div>
                        <b-card 
                         img-alt="Image"
                         img-top tag="article" 
                         class="card mb-2 py-5"
                         :class="card.borderclass"
                         >
                            <b-card-text>
                                <h4 class="pricing-title">Standard license</h4>
                                <p class="text-center price py-2 ">{{card.price}}</p>
                                <p class="text-left pl-4">
                                    <span class="pr-3 text-warning"> 
                                        <font-awesome-icon class="text-left"
                                         :icon="['fas','chevron-right']" 
                                         alt="placeholder" />
                                    </span>{{card.para1}}
                                 </p>
                                <p class="text-left pl-4">
                                    <span class="pr-3 text-warning"> 
                                        <font-awesome-icon class="text-left"
                                             :icon="['fas','chevron-right']"
                                              alt="placeholder" />
                                    </span>{{card.para2}} 
                                </p>
                                <p class="text-left pl-4">
                                    <span class="pr-3 text-warning">
                                        <font-awesome-icon class="text-left"
                                           :icon="['fas','chevron-right']"
                                            alt="placeholder" />
                                    </span>
                                       {{card.para3}}
                                         <span class="text-warning"> 
                                              {{card.para4}}
                                          </span>
                                       </p>
                             
                                <div class="pt-3">
                                    <b-button class="text-dark pricing-btn"
                                     variant="outline-warning">purchase now</b-button>
                                </div>
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          price: "$49.00",
          para1: "Use for a single produc",
          para2: "Non-paying users only",
          para3: "Readsyar",
          para4: "full description",
          borderclass: "addborder"
        },
        {
          price: "$490.00",
          para1: "Use for a single product",
          para2: "Paying users allowed",
          para3: "Reads ",
          para4: "full description"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.pricing-title{
    font-size: 18px;
    color: black;
}
.pricing-btn{
       font-size: 11px;
                line-height: 1.64063rem;
                text-transform: uppercase;
                padding: 13px 27px;
        }

.price {
  font-size: 25px;
  color: #f5ba4b;
}

.addborder{
    border-top:  2px solid #f5ba4b;
}
</style>

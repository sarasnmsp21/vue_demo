
<template>
    <div>
        <!-- created by roshan -->
        <b-container>
            <b-row class="justify-content-center m-auto">
                <b-col md="4" v-for="card in cards" v-bind:key="card.index">
                    <div>
                        <b-card title="Standard license"
                         img-alt="Image" 
                         img-top tag="article" 
                         class="card mb-2 py-5">
                            <b-card-text>
                                <p class="text-center price py-2 text-warning">{{card.price}}</p>
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
                                    <b-button class="text-dark p-3"
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
          para4: "full description"
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
.price {
  font-size: 30px;
}
</style>

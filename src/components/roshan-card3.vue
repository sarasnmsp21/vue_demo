
<template>
    <div>
        <b-container>
            <b-row class="justify-content-center m-auto">
                <b-col md="4" v-for="card in cards" v-bind:key="card.index">
                    <div>
                        <b-card title="Standard license" img-alt="Image" img-top tag="article" class="card mb-2 py-5">
                            <b-card-text>
                                <p class="text-center price py-2 text-warning">{{card.price}}</p>
                                <p class=""><span class="pr-3 text-warning"> <font-awesome-icon class="" icon="coffee" alt="placeholder" /></span>{{card.para1}}</p>
                                <p class=""><span class="pr-3 text-warning"> <font-awesome-icon class="" icon="coffee" alt="placeholder" /></span>{{card.para1}}</p>
                                <p class=""><span class="pr-3 text-warning"> <font-awesome-icon class="" icon="coffee" alt="placeholder" /></span>{{card.para1}}</p>
                                <p class=""><span class="pr-3 text-warning"> <font-awesome-icon class="" icon="coffee" alt="placeholder" /></span>{{card.para1}}</p>
                                <div class="pt-3">
                                    <b-button class="text-dark p-3" variant="outline-warning">purchase now</b-button>
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
          para3: "Reads full description"
        },
        {
          price: "$49.00",
          para1: "Use for a single produc",
          para2: "Non-paying users only",
          para3: "Reads full description"
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

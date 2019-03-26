


<template>
    <div>
        <b-container>
            <b-row class="justify-content-center">
                <b-col md=4 v-for="card in cards" v-bind:key="card.index">
                    <div>
                        <b-card title="Standard license" img-alt="Image" img-top tag="article" class=" card mb-2">
                            
                            <b-card-text>
                                 <p class="text-center">{{card.price}}</p>
                                 <p class="">{{card.para1}}</p>
                                <p class="">{{card.para2}}</p>
                                <p class="">{{card.para3}}</p>
                                
                                <div class="pt-3">
                                    <b-button class="text-white small" variant="outline-warning">purchase now</b-button>
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
.card {
  background-color: transparent;
}
</style>

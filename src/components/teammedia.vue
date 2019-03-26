<template>
  <!-- created by ram -->
  <div>
      <b-row class="mx-auto">
          <b-col md="6" class="text-center">
            <b-media tag="li">
                <b-img slot="aside" :src="team1image" height="160" width="160" class="mr-3 shadow p-3 mb-2 bg-white rounded" alt="placeholder"/>

                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </b-media>
          </b-col>
      </b-row>
    
  </div>
</template>

<script>
import team1 from "../assets/rimages/58.jpg";
import team2 from "../assets/rimages/team1.jpg";
export default {
  name: "teammedia",
  data(){
    return{
      team1image: team1,
      team2image: team2
    }
  } 
};

</script>

<style lang="scss">

</style>




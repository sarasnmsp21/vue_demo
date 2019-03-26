<template>
  <div>
  <b-jumbotron class="p-0 top-jumbotron">
        <!-- Navigation Bar -->
        <Navbarheader msg="Robust">
          <b-nav-item 
          href="#" 
          slot="navlinks" 
          v-for="link in navlinks" 
          v-bind:key="link.index"
          >{{ link.name }}</b-nav-item>
        </Navbarheader>
        <div class="mt-5 pt-5 container">
          <div class="mt-5 pt-5 text-white text-left">
            <h2 class="col-md-4 font-weight-bolder">Your Story Starts With Us.</h2>
            <p class="col-md-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius natus. Eius
              dolores est dolorum fugit. Debitis rerum voluptatum facere ipsam eligendi, natus explicabo,
              similique et earum voluptates amet ad.
            </p>
            <button type="button" class="ml-3 px-4 py-2 btn btn-danger">
              <small>
                <i class="fas fa-caret-right mr-1"></i>
                Watch Video
              </small>
            </button>
          </div>
        </div>
      </b-jumbotron>
    <sectionpart2></sectionpart2>
    <card></card>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbarheader from "@/components/Navbarheader.vue";
import customFooter from "@/components/sarasfooter.vue";
import card from "@/components/mediacards.vue";
import sectionpart2 from "@/components/sectionpart2.vue";


export default {
  name: "slide",
  components: {
    customFooter,
     Navbarheader,
     card,
     sectionpart2
  },
   data(){
    return{
      navlinks:[
        {name:'Home'},
        {name:'About Us'},
        {name:'Services'},
        {name:'Contact Us'},
      ],
  };
}
};
</script>

<style lang="scss" scoped>
.top-jumbotron {
  height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/rimages/headerimage.jpg");
  background-size: cover;
  margin-top: -110px;
}
</style>

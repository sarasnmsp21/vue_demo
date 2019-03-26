<template>
  <div class="fulldiv">
    <div>
      <b-jumbotron class="p-0 top-jumbotron">
        <!-- Navigation Bar -->
        <Navbarheader msg="Material Kit">
          <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index">{{ link }}</b-nav-item>
        </Navbarheader>
        <!-- Navigation Bar End -->
        <div class="container mt-5 pt-5">
          <div class="mt-5 pt-5 text-white text-left">
            <h2 class="col-md-4 font-weight-bolder">Your Story Starts With Us.</h2>
            <p class="col-md-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius natus. Eius dolores est dolorum fugit. Debitis rerum voluptatum facere ipsam eligendi, natus explicabo, similique et earum voluptates amet ad.
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
    </div>
  
    <div class="oversection mx-4 shadow p-3 mb-0 bg-white rounded">
      <b-col md="10" class="mx-auto">
        <divheaders>
          <h3 slot="h3tag">{{productHeader}}</h3>
          <p slot="ptag" class="text-muted">{{productDescription}}</p>
        </divheaders>
  
        <b-row>
          <productspecs></productspecs>
        </b-row>
  
        <divheaders>
          <h3 slot="h3tag">{{teamHeader}}</h3>
        </divheaders>
  
        <teammedia></teammedia>
      </b-col>
    </div>
  </div>
</template>

<script>
import Navbarheader from "@/components/Navbarheader.vue";
import divheaders from "@/components/divheaders.vue";
import productspecs from "@/components/productspecs.vue";
import teammedia from "@/components/teammedia.vue";

export default {
  components: {
    Navbarheader,
    divheaders,
    productspecs,
    teammedia
  },
  data() {
    return {
      navlinks: ["Home", "About Us", "Services", "Contact Us"],

      productHeader: "Let's Talk Product",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,itaque? Dolor asperiores enim ipsa assumenda laudantium. Nihil explicabo at eaque assumenda modidoloresexpedita recusandae repellat mollitia, adipisci iste deserunt?",
      teamHeader: "Here is our team"
    };
  }
};
</script>

<style lang="scss" scoped>
.fulldiv {
  font-family: "Ubuntu", sans-serif;
}

.top-jumbotron {
  height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/rimages/headerimage.jpg");
  background-size: cover;
  margin-top: -110px;
}

.oversection {
  font-family: "Ubuntu", sans-serif;
  position: relative;
  top: -180px;
  margin: 0 20px;
}
</style>

<template>
  <div class="fulldiv">
    <div>
      <b-jumbotron class="p-0 top-jumbotron">
        <!-- Navigation Bar -->
        <Navbarheader msg="Material Kit Pro">
          <b-nav-item
            href="#"
            slot="navlinks"
            v-for="link in navlinks"
            v-bind:key="link.index"
          ><small>{{ link.name }}</small></b-nav-item>
        </Navbarheader>

        <div class="banner-content">
          <div class="container mt-5 pt-5">
            <div class="mt-5 pt-5 text-white text-left">
              <h2 class="col-md-4 font-weight-bolder">Your Story Starts With Us.</h2>
              <p class="col-md-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius natus. Eius dolores est dolorum fugit. Debitis rerum voluptatum facere ipsam eligendi, natus explicabo, similique et earum voluptates amet ad.
              </p>
              <button type="button" class="ml-3 px-4 py-2 btn btn-danger">
                <small>
                  <font-awesome-icon :icon="['fas','caret-right']" class="mr-2"/>Watch Video
                </small>
              </button>
            </div>
          </div>
        </div>
      </b-jumbotron>
    </div>

    <div class="oversection mx-4 shadow p-3 mb-0 bg-white rounded">
      <b-col md="10" class="mx-auto">
        <b-col md="6" class="mx-auto">
          <!-- section header -->
          <divheaders>
            <h3 slot="h3tag">{{productHeader}}</h3>
            <p slot="ptag" class="text-muted">{{productDescription}}</p>
          </divheaders>
        </b-col>
          <!-- component used -->
          <productspecs></productspecs>
        <b-col md="10" class="mx-auto">
          <!-- section header -->
          <divheaders>
            <h3 slot="h3tag">{{teamHeader}}</h3>
          </divheaders>
        </b-col>

        <!-- team members display -->
        <teammedia></teammedia>
        <div class="pt-2">
          <b-col md="8" class="mx-auto">
            <!-- section header -->
            <divheaders>
              <h3 slot="h3tag">{{workHeader}}</h3>
              <p slot="ptag" class="text-muted pt-4 workdesc">{{workDescription}}</p>
            </divheaders>

            <b-row class=" mb-3">
              <b-col md="6">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="w-100 small border-top-0 border-right-0 border-left-0 border workcolor"
                >
              </b-col>
              <b-col md="6">
                <input
                  type="text"
                  placeholder="Your Email"
                  class="w-100 small border-top-0 border-right-0 border-left-0 border workcolor"
                >
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  class="w-100 small border-top-0 border-right-0 border-left-0 border workcolor your-msg-txtarea"
                ></textarea>
              </b-col>
            </b-row>
            <div class="mt-3 mb-5 text-center">
              <button type="button" class="btn p-2 px-3 sndbtn">Send Message</button>
            </div>
          </b-col>
        </div>
      </b-col>
    </div>
    <!-- <customfooter></customfooter> -->
    <div class="mt-5">
      <sfooter brandnm="MaterialKit"></sfooter>
    </div>
  </div>
</template>

<script>
import Navbarheader from "@/components/Navbarheader.vue";
import divheaders from "@/components/divheaders.vue";
import productspecs from "@/components/productspecs.vue";
import teammedia from "@/components/teammedia.vue";
import sfooter from "@/components/sarasfooter.vue";

export default {
  components: {
    Navbarheader,
    divheaders,
    productspecs,
    teammedia,
    sfooter
  },
  data() {
    return {
      navlinks: [
        { name: "Components" },
        { name: "Sections" },
        { name: "Examples" }
      ],
      productHeader: "Let's Talk Product",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,itaque? Dolor asperiores enim ipsa assumenda laudantium. Nihil explicabo at eaque assumenda modidoloresexpedita recusandae repellat mollitia, adipisci iste deserunt?",
      teamHeader: "Here is our team",
      workHeader: "Work with us",
      workDescription:
        "Divide details about your product or agency work into parts. Write a fewlines about each one bout each one and contact us about any further collaboration. We will respond getback to you in a couple of hours."
    };
  }
};
</script>

<style lang="scss">
.fulldiv {
  font-family: "Ubuntu", sans-serif;
  background-color: #e1e1e1;
}

.navbar-brand {
    font-size: 1rem;
}

.banner-content {
  margin-top: 110px;
}

.top-jumbotron {
  height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/rimages/headerimage.jpg");
  background-size: cover;
  margin-top: -110px;
}

.oversection {
  font-family: "Ubuntu", sans-serif;
  // position: relative;
  // top: -180px;
  // margin: 0 20px;
  margin-top: -150px;
}

.workdesc {
  font-size: 80%;
  font-weight: 400;
}

.sndbtn {
  background-color: #9c2ab0;
  border-color: #9c2ab0;
  font-size: 12px;
  outline: none;
  color: white;
  border-radius: 4px;
}

.sndbtn:hover {
  background-color: #9c2ab0;
  border-color: #9c2ab0;
  color: #ffffff;
  outline: none;
  border-radius: 4px;
}

.sndbtn:focus {
  background-color: #9c2ab0;
  border-color: #9c2ab0;
  outline: none;
  border-radius: 4px;
}
</style>

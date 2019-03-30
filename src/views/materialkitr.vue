<template>
  <div class="fulldiv">
    <div>
      <b-jumbotron class="p-0 top-jumbotron">
        <!-- Navigation Bar -->
        <Navbarheader msg="Material Kit Pro">
          <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index" v-scroll-to="link.divid">
            <span style="color:#fff" v-if="link.icon1">
              <font-awesome-icon :icon="['fas', 'th']" class="mr-1 small"/>
            </span>
            <span style="color:#fff" v-if="link.icon2">
              <font-awesome-icon :icon="['fas', 'dumbbell']" class="mr-1 small"/>
            </span>
            <span style="color:#fff" v-if="link.icon3">
              <font-awesome-icon :icon="['fas', 'envelope-open-text']" class="mr-1 small"/>
            </span>
            <small v-html="link.name"></small>
            <span style="color:#fff">
              <font-awesome-icon :icon="['fas', 'caret-down']" class="ml-1 small"/>
            </span>
          </b-nav-item>
        </Navbarheader>

        <div class="banner-content">
          <div class="container p-0">
            <div class="addpadding mt-5 pt-5">
              <b-col md="6" sm="9" cols="12" class="p-0">
                <div class="main-banner-content text-white text-left">
                  <div class="mb-3">
                    <h2 class="font-weight-bolder banner-header">Your Story Starts With Us</h2>
                  </div>
                  <div>
                    <p class="banner-text">
                      Every landing page needs a small description after the big bold title,
                      that's why we added this text here. Add here all the information that can
                      make you or your product create the first impression.
                    </p>
                  </div>
                  <button type="button" class="px-4 py-2 btn btn-danger">
                    <small>
                      <font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2"/>Watch Video
                    </small>
                  </button>
                </div>
              </b-col>
            </div>
          </div>
        </div>
      </b-jumbotron>
    </div>

    <div class="oversection mx-4 px-2 shadow p-3 mb-0 bg-white rounded">
      <b-col md="10" class="mx-auto">
        <div class="mt-4" id="components">
          <b-row>
            <b-col md="8" class="mx-auto">
              <!-- section header -->
              <divheaders>
                <h3 slot="h3tag">{{ productHeader }}</h3>
                <p slot="ptag" class="header-text">{{ productDescription }}</p>
              </divheaders>
            </b-col>
          </b-row>
        </div>
        <!-- component used -->
        <div class="my-4 pt-3">
          <productspecs></productspecs>
        </div>
        <div id="section" class="mt-5 pt-5">
          <b-row>
            <b-col md="10" class="mx-auto">
              <!-- section header -->
              <divheaders>
                <h3 slot="h3tag">{{ teamHeader }}</h3>
              </divheaders>
            </b-col>
          </b-row>
          <div class="mt-2">
            <!-- team members display -->
            <teammedia></teammedia>
          </div>
        </div>

        <div id="example" class="pt-5">
          <b-row>
            <b-col md="8" class="mx-auto">
              <!-- section header -->
              <divheaders>
                <h3 slot="h3tag">{{ workHeader }}</h3>
                <p slot="ptag" class="pt-4 workdesc">{{ workDescription }}</p>
              </divheaders>

              <b-row class="mb-3">
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
          </b-row>
        </div>
      </b-col>
    </div>
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
        {
          name: "Components",
          divid: "#components",
          icon1: true,
          icon2: false,
          icon3: false
        },
        {
          name: "Sections",
          divid: "#section",
          icon1: false,
          icon2: true,
          icon3: false
        },
        {
          name: "Examples",
          divid: "#example",
          icon1: false,
          icon2: false,
          icon3: true
        }
      ],
      productHeader: "Let's talk product",
      productDescription:
        "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.",
      teamHeader: "Here is our team",
      workHeader: "Work with us",
      workDescription:
        "Divide details about your product or agency work into parts. Write a fewlines about each one bout each one and contact us about any further collaboration. We will respond getback to you in a couple of hours."
    };
  }
};
</script>

<style lang="scss">
body {
  // font-family: Roboto,Helvetica,Arial,sans-serif;
  background-color: #e1e1e1;
}

.navbar-brand {
  font-size: 1rem;
}

.navbar-brand:hover {
  color: white !important;
}

.addpadding {
  padding: 0 100px !important;
}

@media only screen and (max-width: 600px) {
  .addpadding {
    padding: 0 50px !important;
  }
}

.btn-danger {
  background-color: #dc3545 !important;
}

.banner-content {
  margin-top: 110px;
  .main-banner-content {
    padding-top: 11rem;
  }

  .banner-header {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 46px;
    line-height: 50px;
  }
}

.top-jumbotron {
  height: 700px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/rimages/headerimage.jpg");
  background-size: cover;
  margin-top: -110px;
}

.oversection {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin-top: -180px;

  .header-text {
    color: #999;
    font-size: 15px;
  }

  .workdesc {
    color: #999;
    font-size: 15px;
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

  .workcolor:focus {
    outline: none;
  }
}
</style>

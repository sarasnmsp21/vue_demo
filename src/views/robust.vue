<!--Created by saraswati-->

<template>
  <div>
    <div id="topid" class="background py-5" fluid-grow alt="Fluid-grow image">
      <!-- navbar compoment use -->
      <Navbarheader msg="Robust." class="navbar-bg text-white font-weight-bold">
        <b-nav-item
          href="#"
          slot="navlinks"
          v-for="link in navlinks"
          v-bind:key="link.index"
          v-scroll-to="link.scrollspy"
        >
          <span class="ahover">
            <span v-html="link.name"></span>
            <span v-if="link.button">
              <button
                class="btn purchase-now-button border-white component-btn-color text-white"
                type="button"
              >
                <b>Purchase Now</b>
              </button>
            </span>
            <span v-if="link.iconif">
              <font-awesome-icon :icon="['fas', 'caret-down']" class="ml-1 small"/>
            </span>
          </span>
        </b-nav-item>
      </Navbarheader>
      <!-- banner -->
      <div id="home" class="pt-5">
        <b-container>
          <b-row>
            <div class="justify-content-center mx-auto">
              <b-col cols="12">
                <div class="text-center text-white">
                  <div class="pt-5">
                    <div class="text-white font-weight-bold banner-heading-font">Robust UI Kit</div>
                  </div>
                  <div class="section2-para2-font">
                    <div>
                      Robust is premium theme build with bootstrap. The theme
                      <br>is fully custmizable & can be used in any
                      <br>application
                    </div>
                  </div>
                  <div class="pt-4">
                    <button class="btn btn-green mr-2 res-button-margin btn:hover" type="button ">
                      <b>Get started</b>
                    </button>
                    <button class="btn border-white component-btn-color text-white" type="button">
                      <b>Components</b>
                    </button>
                  </div>
                </div>
              </b-col>
            </div>
          </b-row>
        </b-container>
      </div>
    </div>
    <!--Main section-->
    <div id="bottomsection">
      <div id="discover">
        <Discoverpara>
          <div slot="h2text" class="section2-para1-font discover-margin">
            Discover our
            <br>landing, app & blog
            <br>pages
          </div>
          <div slot="paratext" class="section2-para2-font">
            Robust includes various demo pages for building
            <br>your custom app, blog or landing page. All code is
            <br>handwritten, all our components are optimized for
            <br>desktop, tablet and mobile.
          </div>
        </Discoverpara>
      </div>
      <div id="explorepage">
        <Explorepage></Explorepage>
      </div>
      <div id="mobilesecion">
        <ipadsection></ipadsection>
      </div>
      <div id="enormou">
        <Discoverpara>
          <div slot="h2text" class="section2-para1-font discover-margin enoroumd-margin-ipad">
            Enormous
            <br>collection of
            <br>elements
          </div>
          <div slot="paratext" class="section2-para2-font enoroums-margin">
            Robust is a premium theme built with Bootstrap 4,
            <br>the most popular UI framework. The theme is fully
            <br>responsive and customizable and can be used for
            <br>any type of web application.
          </div>
        </Discoverpara>
      </div>
      <div id="features">
        <clean></clean>
      </div>
      <div id="testimonial">
        <testimonial></testimonial>
      </div>
      <div id="intergrates">
        <Discoverpara class="ipad-background-color integrate-para-padding">
          <div
            slot="h2text"
            class="section2-para1-font discover-margin"
          >Integrates with all your favorite tools</div>
          <div
            slot="paratext"
            class="section2-para2-font"
          >Robust uses industry standard build tools and plugins such as Sass, jQuery, Webpack, Babel and npm. All source files and compiled files are included inside the package.</div>
        </Discoverpara>
      </div>
      <div id="logos">
        <brandlogo></brandlogo>
      </div>
      <div id="#footer">
        <custom-footer brandnm="Robust." class="pt-5"></custom-footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbarheader from "@/components/Navbarheader.vue";
import customFooter from "@/components/sarasfooter.vue";
import Explorepage from "@/components/Explorepage.vue";
import Discoverpara from "@/components/Discoverpara.vue";
import ipadsection from "@/components/ipadsection.vue";
import clean from "@/components/cleancode.vue";
import testimonial from "@/components/testimonial.vue";
import brandlogo from "@/components/logosection.vue";
export default {
  components: {
    customFooter,
    Navbarheader,
    Explorepage,
    Discoverpara,
    ipadsection,
    clean,
    testimonial,
    brandlogo
  },
  data() {
    return {
      navlinks: [
        {
          scrollspy: "#home",
          name: "Overview",
          iconif: true
        },
        {
          scrollspy: "#discover",
          name: "Pages",
          iconif: true
        },
        {
          scrollspy: "#mobilesecion",
          name: "Components",
          iconif: true
        },
        {
          scrollspy: "#enormou",
          name: "Docs",
          iconif: true
        },
        {
          scrollspy: "#intergrates",
          button: true,
          iconif: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/robust/import.scss";
</style>

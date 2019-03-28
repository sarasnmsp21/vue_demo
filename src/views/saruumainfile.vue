<template>
    <div>
           <div class="background  py-5" fluid-grow alt="Fluid-grow image">
            <!-- navbar compomemt use -->
            <Navbarheader msg="Incline">
                <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index">{{link.name}}</b-nav-item>
            </Navbarheader>
            <!--  -->
            <b-container>
                <b-row class="justify-content-center mx-auto">
                    <b-col cols=8>
                        <div class="text-center text-white">
                            <div class="pt-3">
                                <p class="pt-5">BY SIMPLEQADE</p>
                            </div>
                            <div class="pt-3">
                                <p class="display-4  text-waight-bold">
                                    Landing pages occasion
                                </p>
                            </div>
                            <p class="pt-3">Incline is set of landing and support pages aimed at helping 
                                companies promote new products and business launches.</p>
                            <div class="pt-3">
                                <b-button class="text-white small" size=lg variant="outline-warning">purchase now</b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div id="bottomsection">
            <sectionpart2>
                <h2 slot="h2text">Discover our landing, app & blog pages</h2>
                <p slot="paratext">
                    Robust includes various demo pages for building your custom app, blog or landing page. All code is handwritten, all our components are optimized for desktop, tablet and mobile.
                </p>
            </sectionpart2>
            <card></card>
            <ipad></ipad>
            <sectionpart2>
                <h2 slot="h2text">Enormous collection of elements</h2>
                <p slot="paratext">
                    Robust is a premium theme built with Bootstrap 4, the most popular UI framework. The theme is fully responsive and customizable and can be used for any type of web application.
                </p>
            </sectionpart2>
            <clean></clean>
            <testimonial></testimonial>
            <sectionpart2 class="bg-light">
                <h2 slot="h2text">Integrates with all your favorite tools</h2>
                <p slot="paratext">
                    Robust uses industry standard build tools and plugins such as Sass, jQuery, Webpack, Babel and npm. All source files and compiled files are included inside the package.
                </p>
            </sectionpart2>
            <intergrate>
            </intergrate>
            <custom-footer brandnm="Robust" class="pt-5"></custom-footer>
            <caurosel></caurosel>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbarheader from "@/components/Navbarheader.vue";
import customFooter from "@/components/sarasfooter.vue";
import card from "@/components/mediacards.vue";
import sectionpart2 from "@/components/sectionpart2.vue";
import ipad from "@/components/mobile.vue";
import clean from "@/components/cleancode.vue";
import testimonial from "@/components/testimonial.vue";
import intergrate from "@/components/belowintegrate.vue";
import caurosel from "@/components/caurosel.vue";
export default {
    components: {
        customFooter,
        Navbarheader,
        card,
        sectionpart2,
        ipad,
        clean,
        testimonial,
        intergrate,
        caurosel
    },
    data() {
        return {
            navlinks: [{
                    name: 'Home'
                },
                {
                    name: 'About Us'
                },
                {
                    name: 'Services'
                },
                {
                    name: 'Contact Us'
                },
            ],
        };
    }
};
</script>

<style lang="scss">
.nav1 {
    z-index: 10 !important;
}

.top-jumbotron {
    height: 600px;
    background: linear-gradient(rgba(5, 137, 245, 0.973), rgba(7, 134, 238, 0.856)), url("../assets/rimages/headerimage.jpg");
    background-size: cover;
    margin-top: -110px;
    opacity: 0.8;
}

.feature-icon-size {
    font-size: 25px;
}

.carousel-indicators {
    li {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50% !important;
    }
}
.background {
 background: linear-gradient(rgba(5, 137, 245, 0.973), rgba(7, 134, 238, 0.856)), url("../assets/rimages/headerimage.jpg");
  background-size: cover;
  width: 100%;
  height: 600px;
}
</style>

<!--Created by saraswati-->

<template>
    <div>
        <div class="background py-5" fluid-grow alt="Fluid-grow image">
            <!-- navbar compomemt use -->
            <Navbarheader msg="Robust." class="navbar-bg text-white font-weight-bold">
               
                <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index"><span class="ahover">{{link.name}}</span></b-nav-item>
           
            </Navbarheader>
            <!--  -->
            <div class="pt-5">
                <b-container class="pt-5">
                    <b-row class="justify-content-center mx-auto">
                        <b-col cols=8>
                            <div class="text-center text-white">
                                <div class="pt-2">
                                    <p class=" text-white font-weight-bold banner-heading-font">Robust UI Kit</p>
                                </div>
                                <div class="section2-para2-font">
                                    <p>Robust is premium theme build with bootstrap. The theme<br> is fully custmizable & can be used in any<br> application
                                    </p>
                                </div>
                                <div>
                                    <button class="btn btn-green mr-2 btn:hover" type="button "><b>Get Started</b></button>
                                    <button class="btn purchase-btn border-white component-btn-color text-white" type="button"><b>components</b></button>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
        <div id="bottomsection">
            <Discoverpara>
                <div slot="h2text" class="section2-para1-font">Discover our <br>landing, app & blog <br> pages</div>
                <p slot="paratext" class="section2-para2-font">
                    Robust includes various demo pages for building <br>your custom app, blog or landing page. All code is <br> handwritten, all our components are optimized for <br> desktop, tablet and mobile.
                </p>
            </Discoverpara>
            <div>
            <Explorepage></Explorepage>
            </div>
            <ipadsection></ipadsection>
            <Discoverpara>
                <div slot="h2text" class="section2-para1-font">Enormous <br>collection of <br>elements</div>
                <p slot="paratext" class="section2-para2-font enoroums-margin">
                    Robust is a premium theme built with Bootstrap 4,<br> the most popular UI framework. The theme is fully <br> responsive and customizable and can be used for<br> any type of web application.
                </p>
            </Discoverpara>
            <clean></clean>
            <testimonial></testimonial>
            <Discoverpara class="ipad-background-color integrate-para-padding ">
                <div slot="h2text" class="section2-para1-font ">Integrates with all your favorite tools</div>
                <p slot="paratext" class="section2-para2-font ">
                    Robust uses industry standard build tools and plugins such as Sass, jQuery, Webpack, Babel and npm. All source files and compiled files are included inside the package.
                </p>
            </Discoverpara>
            <brandlogo>
            </brandlogo>
            <custom-footer brandnm="Robust." class="pt-5"></custom-footer>
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
                navlinks: [{
                        name: 'Overview'
                    },
                    {
                        name: 'Pages'
                    },
                    {
                        name: 'Components'
                    },
                    {
                        name: 'Docs'
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
        height: 500px;
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
    #mainnav {
        background-color: #2370b6 !important;
    }
    .btn-green {
        background-color: rgb(80, 204, 80) !important;
        color: white;
    }
    .component-btn-color {
        background-color: transparent !important;
    }
    .btn:hover {
        color: white;
    }
    .banner-heading-font {
        font-size: 50px;
    }
    .section2-para1-font {
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1.2;
    }
    .section2-para2-font {
        line-height: 1.7;
    }
    .enoroums-margin {
        margin-left: -50px;
    }
    .ipad-background-color {
        background-color: #eff1f3;
    }
    .integrate-para-padding
    {
            padding-top: 3rem !important;
    }
    .addpadding
    {
     padding: 0 100px;
    }
    .ahover:hover{
        color:white;
    }

</style>

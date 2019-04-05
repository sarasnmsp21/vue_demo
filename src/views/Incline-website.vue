<template>
    <div>
        <!-- created by roshan -->
        <div id="topid">
            <div class="background  py-5 mb-5" fluid-grow alt="Fluid-grow image">
                <!-- navbar compomemt use -->
                <Navbarheader msg="Incline">
                    <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index" v-scroll-to="link.divid">
                        <span class="small"> {{link.name}}</span>
                        <span style="color:#fff" v-if="link.icon">
                                                        <font-awesome-icon :icon="['fas', 'caret-down']" class="ml-1 small"/>
                                                    </span>
                    </b-nav-item>
                </Navbarheader>
                <!--banner  -->
                <b-container>
                    <div class="main-content">
                        <b-row class="justify-content-center m-auto">
                            <b-col md=8>
                                <div class="text-center text-white ">
                                    <div class="text-1">BY SIMPLEQADE</div>
                                    <div class=" mb-4 main-title text-waight-bold">
                                        Landing pages for any occasion
                                    </div>
                                    <div class="text-2 px-5 pb-4">Incline is set of landing and support pages aimed at helping companies promote new products and business launches.</div>
                                    <div class="pt-3">
                                        <b-button class="text-white main-btn" variant="outline-warning">purchase now</b-button>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-container>
            </div>
        </div>
        <!--------------------Landing page variants section start ---------------------- -->
        <div id="welcome">
            <b-container>
                <b-row class="justify-content-center mx-auto">
                    <b-col md=6>
                        <div class=" landing-maintitle text-center">
                            <div class="pt-5 mb-4 landing-title ">Landing page variants</div>
                            <div class=" mb-5 text-secondary landing-text">
                                Incline comes with several professionally designed landing pages that can be easily adapted for any project.
                            </div>
                        </div>
    
                    </b-col>
                </b-row>
    
                <!-- using component for card -->
                <landing-pages class="mt-2">
                </landing-pages>
            </b-container>
        </div>
        <!-- -----------Header variants start-------- -->
        <div id="landing">
            <div class="background-2  pb-3" fluid-grow alt="Fluid-grow image">
                <div class="line"></div>
                <b-container>
                    <b-row class="justify-content-center mx-auto">
                        <b-col md=6>
                            <div class="text-center ">
                                <div class="title">
                                    <div class="pt-5 mb-4 landing-title">Header variants</div>
                                </div>
                                <div class="content ">
                                    <div class=" text-secondary landing-text mb-5">
                                        Polish your landing page with one of the header options below to impress your visitors at first glance.
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
    
                    <!-- using component -->
                    <Heade-variants class="py-2">
                    </Heade-variants>
                </b-container>
            </div>
        </div>
        <!-- -------media object use------- -->
        <div id="pages">
            <b-container>
                <div class="quote">
                    <b-row class=" justify-content-center mx-auto">
                        <b-col md=9>
                            <div class="mt-5">
                                <b-media tag="li" class="my-4">
                                    <font-awesome-icon :icon="['fas','quote-left']" slot="aside" alt="placeholder" class="icon1" />
                                    <div class="mb-0 text-left quote-text1">
                                        This theme is a Swiss Army knife of Bootstrap themes. Built with components in mind, it can be easily adjusted to create layouts of any complexity within a few minutes.
                                    </div>
                                    <div class="text-left py-3 quote-text2">Yuri Gamin, Moscow</div>
                                </b-media>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>
    
        <!-- ------Key theme features------- -->
        <div id="component">
    
            <div class="mt-5 bg-dark Key-theme ">
                <b-container>
    
                    <b-row class="justify-content-center m-auto">
                        <b-col md=6>
                            <div class="">
                                <div class="title">
                                    <div class=" text-white pt-5 Key-theme-title text-center">Key theme features</div>
                                </div>
                                <div class="content">
                                    <div class=" text-white text-center Key-theme-text mt-3">
                                        Incline can be used to create anything from a small marketing page to a sophisticated website.
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <!-- use component  -->
                    <KeyTheme>
                    </KeyTheme>
                </b-container>
            </div>
    
        </div>
        <!-------------Intuitive workflow start -----------  -->
        <div id="documentation">
            <b-container>
                <div class="Intuitive ">
                    <b-row class="justify-content-center m-auto">
                        <b-col md=4>
                            <div class="workflow-main">
                                <div class="title">
                                    <div class=" mb-4 workflow-title text-left pb-3 ">Intuitive workflow</div>
                                </div>
                                <div class="content ">
                                    <div class="d-flex flex-row ">
                                        <span class=" text-warning">
                                                          <font-awesome-icon class="text-warning" :icon="['fas','chevron-right']" />
                                                      </span>
                                        <div class="text-secondary text-left ">
                                            <div class="pl-2 mb-2">Speed up your development process with Gulp and BrowserSync live browser reload</div>
                                        </div>
                                    </div>
    
                                    <div class="d-flex flex-row">
                                        <span class=" text-warning">
                                                          <font-awesome-icon class="text-warning" :icon="['fas','chevron-right']" />
                                                      </span>
    
                                        <div class="text-secondary text-left ">
                                            <div class="pl-2 mb-2"> Easily adjust the look of any component with tons of additional SASS variables included</div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <span class=" text-warning">
                                                          <font-awesome-icon class=" text-warning" :icon="['fas','chevron-right']" />
                                                      </span>
                                        <div class="text-secondary text-left">
                                            <div class="pl-2"> Easily make global changes with HTML file @@includes</div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="pt-3 text-left">
                                    <b-button class=" work-btn" variant="outline-warning">DOCUMENTATION</b-button>
                                </div>
                            </div>
                        </b-col>
                        <b-col md=5>
                            <div class="workflow-image">
                                <div class="d-flex justify-content-center align-items-center flexdiv">
                                    <div class="backgdiv bg-warning">
                                        <figure>
                                            <img src="../assets/vertical.jpg" class="imageover" alt="">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>
        <!-- ---------- Ultimate solution start------------- -->
    
        <div class="background-2 " fluid-grow alt="Fluid-grow image">
            <b-container>
                <div class="">
                    <b-row class="justify-content-center m-auto">
                        <b-col md=6>
                            <div class="text-center ">
                                <div class="title">
                                    <div class="pt-5 mb-4 landing-title">Ultimate solution</div>
                                </div>
                                <div class="content">
                                    <div class=" text-dark mb-5 landing-text">
                                        Easily create a website of any complexity with dozens of pages and independent components for any purpose.
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
    
                    <!--  -->
                    <b-row class=" m-auto pb-5">
                        <b-col md=10 class=" mx-auto ">
                            <div class=" ">
                                <b-row class="m-auto">
                                    <b-col md=4 class="first-image p-0 m-0">
    
                                        <b-card overlay :img-src="img1" img-alt="Card Image" text-variant="white" class="border-0 rounded-0">
                                            <b-card-text class="d-flex flex-column justify-content-end">
                                                <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                    <div class="text-warning icon text-left  pl-2">
                                                        <font-awesome-icon icon="coffee" alt="placeholder" class="iconh" />
                                                    </div>
                                                    <div class="card-title text-left">
                                                        <div class="Ultimate-title ">Support pages</div>
                                                    </div>
                                                    <div class="card-text text-left">
                                                        <div class="mb-5  Ultimate-text">
                                                            Finish off your website with multiple support pages included into the package.
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card-text>
                                        </b-card>
    
                                    </b-col>
                                    <!--  -->
                                    <b-col md=4 class="middle-image m-auto  ">
    
                                        <b-card overlay :img-src="img2" img-alt="Card Image" text-variant="white" class="border-0 rounded-0">
                                            <b-card-text>
                                                <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                    <div class="text-warning icon text-left  pl-2">
                                                        <font-awesome-icon icon="coffee" class="iconh" alt="placeholder" />
                                                    </div>
                                                    <div class="card-title text-left ">
                                                        <div class=" Ultimate-title">Landing pages</div>
                                                    </div>
                                                    <div class="card-text text-left">
                                                        <div class="mb-5  Ultimate-text">
                                                            Beautiful marketing pages to help you promote your product or a service.
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card-text>
                                        </b-card>
    
                                    </b-col>
                                    <!--  -->
    
                                    <b-col md=4 class="third-image p-0 m-0">
                                        <b-card overlay :img-src="img3" img-alt="Card Image" text-variant="white" class="border-0 rounded-0">
                                            <b-card-text>
                                                <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                    <div class="text-warning icon text-left pl-2">
                                                        <font-awesome-icon icon="coffee" class="iconh" alt="placeholder" />
                                                    </div>
                                                    <div class="card-title text-left ">
                                                        <div class=" Ultimate-title ">Custom components</div>
                                                    </div>
                                                    <div class="card-text text-left">
                                                        <div class="mb-5  Ultimate-text">
                                                            Combine dozens of components to create unique layouts.
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card-text>
                                        </b-card>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
    
                </div>
            </b-container>
        </div>
        <!-- ------Pricing options start---- -->
        <div id="purchase">
            <b-container>
                <div class="Pricing">
                    <b-row class="m-auto justify-content-center">
                        <b-col md=10>
                            <div class="title">
                                <div class="text-center Pricing-title my-4">Pricing options</div>
                            </div>
                            <div class="content">
                                <div class="Pricing-text mb-5 text-center">Secure payment via Stripe or Paypal. 100% money back guarantee.</div>
                            </div>
                        </b-col>
                    </b-row>
                    <!-- using component -->
                    <PricingOptions>
                    </PricingOptions>
                </div>
            </b-container>
        </div>
        <!-- -----------Download it from the Bootstrap marketplace start--------- -->
        <div class="bg-light my-5 py-5">
            <b-container>
                <b-row class="justify-content-center mx-auto">
                    <b-col md=7>
                        <div class="text-left Download-title mb-4">Download it from the Bootstrap marketplace</div>
                        <div class="text-left Download-text text-secondary ">Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's creators. Six month technical support by the theme author is provided.</div>
                    </b-col>
                    <b-col md=2>
                        <div>
                            <b-button class="mt-4 Download-btn" variant="outline-warning">PURCHASE NOW</b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <!--  footer using component-->
        <Footerweb brandnm="Icline" class="bg-dark text-white p-5">
        </Footerweb>
    
    </div>
</template>


<script>
    import Navbarheader from "@/components/Navbarheader.vue";
    import landingPages from "@/components/landing-pages.vue";
    import HeadeVariants from "@/components/Heade-variants.vue";
    import PricingOptions from "@/components/Pricing-options.vue";
    import KeyTheme from "@/components/Key-theme.vue";
    import UltimateSolution from "@/components/Ultimate-solution.vue";
    import Footerweb from "@/components/sarasfooter.vue";
    import pictures1 from "../assets/1.jpg";
    import pictures2 from "../assets/2.jpg";
    import pictures3 from "../assets/3.jpg";
    
    export default {
        data() {
            return {
                navlinks: [{
                        name: " WELCOME ",
                        icon: true,
                        divid: "#welcome"
                    },
                    {
                        name: " LANDINGS ",
                        icon: true,
                        divid: "#landing"
                    },
                    {
                        name: " PAGES ",
                        icon: true,
                        divid: "#pages"
                    },
                    {
                        name: " COMPONENTS",
                        icon: true,
                        divid: "#component"
                    },
                    {
                        name: " DOCUMENTATION",
                        icon: false,
                        divid: "#documentation"
                    },
                    {
                        name: " PURCHASE NOW",
                        icon: false,
                        divid: "#purchase"
                    }
                ],
                img1: pictures1,
                img2: pictures2,
                img3: pictures3
            };
        },
    
        components: {
            Navbarheader,
            landingPages,
            HeadeVariants,
            PricingOptions,
            KeyTheme,
            UltimateSolution,
            Footerweb
        }
    };
</script>

<style lang="scss">
  @import "../assets/scss/incline-website/incline.scss";
</style>
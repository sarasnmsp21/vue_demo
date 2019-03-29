<template>
    <div>
        <!-- created by roshan -->
        <div class="background  py-5 mb-5" fluid-grow alt="Fluid-grow image">
            <!-- navbar compomemt use -->
            <Navbarheader msg="Incline">
                <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index">
                    <span class="small"> {{link.name}}</span>
                    <span style="color:#fff" v-if="link.icon">
                                    <font-awesome-icon :icon="['fas', 'caret-down']" class="ml-1 small"/>
                                </span>
                </b-nav-item>
            </Navbarheader>
            <!--  -->
            <b-container>
                <div class="main-content">
                    <b-row class="justify-content-center m-auto">
                        <b-col md=8>
                            <div class="text-center text-white pt-3">
    
                                <p class="text-1">BY SIMPLEQADE</p>
    
                                <div class="pb-3">
                                    <h1 class=" mb-4 main-title text-waight-bold">
                                        Landing pages for any occasion
                                    </h1>
                                </div>
                                <p class="text-2 px-5">Incline is set of landing and support pages aimed at helping companies promote new products and business launches.</p>
                                <div class="pt-3">
                                    <b-button class="text-white main-btn" variant="outline-warning">purchase now</b-button>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>
        <!--------------------Landing page variants section start ---------------------- -->
        <b-container fluid class="px-5">
            <b-row class="justify-content-center mx-auto">
                <b-col md=6>
                    <div class=" landing-maintitle text-center">
                        <h2 class="pt-5 mb-4 landing-title ">Landing page variants</h2>
                        <p class=" mb-5 text-secondary landing-text">
                            Incline comes with several professionally designed landing pages that can be easily adapted for any project.
                        </p>
                    </div>
    
                </b-col>
            </b-row>
    
            <!-- using component for card -->
            <landing-pages class="mt-2">
            </landing-pages>
        </b-container>
    
        <!-- -----------Header variants start-------- -->
        <div class="background-2 mt-5 pb-3" fluid-grow alt="Fluid-grow image">
            <div class="line"></div>
            <b-container fluid class="px-5 mt-5">
                <b-row class="justify-content-center mx-auto">
                    <b-col md=6>
                        <div class="text-center mt-5">
                            <div class="title">
                                <h2 class="pt-5 mb-4 landing-title">Header variants</h2>
                            </div>
                            <div class="content ">
                                <p class=" text-secondary landing-text mb-5">
                                    Polish your landing page with one of the header options below to impress your visitors at first glance.
                                </p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
    
                <!-- using component -->
                <Heade-variants class="py-2">
                </Heade-variants>
            </b-container>
        </div>
        <!-- -------media object use------- -->
        <div class="quote">
            <b-row class="justify-content-center mx-auto">
                <b-col md=8>
                    <div class="mt-5">
                        <b-media tag="li" class="my-4">
                            <font-awesome-icon :icon="['fas','quote-left']" slot="aside" alt="placeholder" class="icon1" /> </font-awesome-icon>
                            <p class="mb-0 text-left quote-text1">
                                This theme is a Swiss Army knife of Bootstrap themes. Built with components in mind, it can be easily adjusted to create layouts of any complexity within a few minutes.
                            </p>
                            <p class="text-left py-3 quote-text2">Yuri Gamin, Moscow</p>
                        </b-media>
                    </div>
                </b-col>
            </b-row>
        </div>
    
        <!-- ------Key theme features------- -->
    
        <div class="mt-5 bg-dark Key-theme ">
            <b-row class="justify-content-center m-auto">
                <b-col md=6>
                    <div class="">
                        <div class="title">
                            <h2 class=" text-white pt-5 Key-theme-title text-center">Key theme features</h2>
                        </div>
                        <div class="content">
                            <p class=" text-white text-center Key-theme-text mt-3">
                                Incline can be used to create anything from a small marketing page to a sophisticated website.
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <!-- use component  -->
            <KeyTheme>
            </KeyTheme>
    
        </div>
        <!-------------Intuitive workflow start -----------  -->
        <b-container fluid class=" my-5 pt-5 ">
            <b-row class="justify-content-center m-auto">
                <b-col md=4>
                    <div class="workflow-main">
                        <div class="title">
                            <h2 class=" mb-4 workflow-title text-left pb-3 ">Intuitive workflow</h2>
                        </div>
                        <div class="content ">
                            <div class="d-flex flex-row ">
                                <span class=" text-warning">
                                      <font-awesome-icon class="text-warning" :icon="['fas','chevron-right']" />
                                  </span>
                                <div class="text-secondary text-left ">
                                    <p class="pl-2">Speed up your development process with Gulp and BrowserSync live browser reload</p>
                                </div>
                            </div>
    
                            <div class="d-flex flex-row">
                                <span class=" text-warning">
                                      <font-awesome-icon class="text-warning" :icon="['fas','chevron-right']" />
                                  </span>
    
                                <div class="text-secondary text-left ">
                                    <p class="pl-2"> Easily adjust the look of any component with tons of additional SASS variables included</p>
                                </div>
                            </div>
                            <div class="d-flex flex-row">
                                <span class=" text-warning">
                                      <font-awesome-icon class=" text-warning" :icon="['fas','chevron-right']" />
                                  </span>
                                <div class="text-secondary text-left">
                                    <p class="pl-2"> Easily make global changes with HTML file @@includes</p>
                                </div>
                            </div>
                        </div>
    
                        <div class="pt-3 text-left">
                            <b-button class=" work-btn" variant="outline-warning">DOCUMENTATION</b-button>
                        </div>
                    </div>
                </b-col>
                <b-col md=6>
                    <div class="d-flex justify-content-center align-items-center flexdiv">
                        <div class="backgdiv bg-warning">
                            <figure>
                                <img src="../assets/vertical.jpg" class="imageover" alt="">
                            </figure>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <!-- ---------- Ultimate solution start------------- -->
        <div class="background-2 mt-5 pb-3" fluid-grow alt="Fluid-grow image">
    
            <div class="mt-5">
                <b-row class="justify-content-center m-auto">
                    <b-col md=6>
                        <div class="text-center mt-5">
                            <div class="title">
                                <h2 class="pt-5 mb-4 landing-title">Ultimate solution</h2>
                            </div>
                            <div class="content">
                                <p class=" text-dark mb-5 landing-text">
                                    Easily create a website of any complexity with dozens of pages and independent components for any purpose.
                                </p>
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
    
                                    <b-card overlay :img-src="img1" img-alt="Card Image" text-variant="white" class="border-0">
                                        <b-card-text class="d-flex flex-column justify-content-end">
                                            <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                <div class="text-warning icon text-left  pl-2">
                                                    <font-awesome-icon icon="coffee" alt="placeholder" class="iconh" />
                                                </div>
                                                <div class="card-title text-left">
                                                    <h4 class="Ultimate-title my-3 ">Support pages</h4>
                                                </div>
                                                <div class="card-text text-left">
                                                    <p class="mb-5  Ultimate-text">
                                                        Finish off your website with multiple support pages included into the package.
                                                    </p>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-card>
    
                                </b-col>
                                <!-- <UltimateSolution>
                                                                                                          </UltimateSolution> -->
                                <!--  -->
                                <b-col md=4 class="middle-image m-auto  ">
    
                                    <b-card overlay :img-src="img2" img-alt="Card Image" text-variant="white" class="border-0">
                                        <b-card-text>
                                            <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                <div class="text-warning icon text-left  pl-2">
                                                    <font-awesome-icon icon="coffee" class="iconh" alt="placeholder" />
                                                </div>
                                                <div class="card-title text-left ">
                                                    <h4 class=" Ultimate-title my-3">Landing pages</h4>
                                                </div>
                                                <div class="card-text text-left">
                                                    <p class="mb-5  Ultimate-text">
                                                        Beautiful marketing pages to help you promote your product or a service.
                                                    </p>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-card>
    
                                </b-col>
                                <!--  -->
                                <!-- <UltimateSolution>
                                                                                                    </UltimateSolution> -->
                                <b-col md=4 class="third-image p-0 m-0">
                                    <b-card overlay :img-src="img3" img-alt="Card Image" text-variant="white" class="border-0">
                                        <b-card-text>
                                            <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                <div class="text-warning icon text-left pl-2">
                                                    <font-awesome-icon icon="coffee" class="iconh" alt="placeholder" />
                                                </div>
                                                <div class="card-title text-left ">
                                                    <h4 class=" Ultimate-title my-3">Custom components</h4>
                                                </div>
                                                <div class="card-text text-left">
                                                    <p class="mb-5  Ultimate-text">
                                                        Combine dozens of components to create unique layouts.
                                                    </p>
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
        </div>
        <!-- ------Pricing options start---- -->
        <b-container class="my-5">
            <b-row class="m-auto justify-content-center">
                <div class="col-md-6">
                    <div class="title">
                        <h2 class="text-center Pricing-title my-4">Pricing options</h2>
                    </div>
                    <div class="content">
                        <p class="Pricing-text mb-5 text-center">Secure payment via Stripe or Paypal. 100% money back guarantee.</p>
                    </div>
                </div>
            </b-row>
            <!-- using component -->
            <PricingOptions>
            </PricingOptions>
        </b-container>
        <!-- -----------Download it from the Bootstrap marketplace start--------- -->
        <div class="bg-light my-5 py-5">
            <b-row class="justify-content-center mx-auto">
                <b-col md=7>
                    <h3 class="text-left Download-title mb-4">Download it from the Bootstrap marketplace</h3>
                    <p class="text-left Download-text text-secondary ">Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's creators. Six month technical support by the theme author is provided.</p>
                </b-col>
                <b-col md=2>
                    <div>
                        <b-button class="mt-4 Download-btn" variant="outline-warning">PURCHASE NOW</b-button>
                    </div>
                </b-col>
            </b-row>
    
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
                        icon: true
                    },
                    {
                        name: " LANDINGS ",
                        icon: true
                    },
                    {
                        name: " PAGES ",
                        icon: true
                    },
                    {
                        name: " COMPONENTS",
                        icon: true
                    },
                    {
                        name: " DOCUMENTATION",
                        icon: false
                    },
                    {
                        name: " PURCHASE NOW",
                        icon: false
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
    // banner background image...
    .background {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/background-img.jpg");
        background-size: cover;
        width: 100%;
        height: 650px;
    }
    @media (min-width: 481px) and (max-width: 767px) {
  
  .background{
      height: 800px;
  }
  
}
    
    // banner
    .main-content {
        margin-top: 150px;
        .text-1 {
            font-size: 13px;
            color: hsla(0, 0%, 100%, 0.65) !important;
            margin-bottom: 34px;
        }
        .main-title {
            font-size: 34px;
        }
        .text-2 {
            font-size: 16px;
            color: hsla(0, 0%, 100%, 0.65) !important;
        }
        .main-btn {
            font-size: 11px;
            text-transform: uppercase;
            padding: 19px 27px;
        }
    }

 @media (min-width: 320px) and (max-width: 480px){
        .main-content {
        margin-top: 50px;
    
        // .text-1 {
        //     font-size: 13px;
        //     color: hsla(0, 0%, 100%, 0.65) !important;
        //     margin-bottom: 34px;
        // }
        // .main-title {
        //     font-size: 34px;
        // }
        // .text-2 {
        //     font-size: 16px;
        //     color: hsla(0, 0%, 100%, 0.65) !important;
        // }
        // .main-btn {
        //     font-size: 11px;
        //     text-transform: uppercase;
        //     padding: 19px 27px;
        // }
    }
     }




    // landing page
    .landing-title {
        font-size: 24px;
        color: black;
    }
    
    .landing-text {
        color: #6c757d !important;
        letter-spacing: 0.5px;
    }
    
    // second background image..
    .background-2 {
        background-image: url("../assets/back2.jpg");
        background-size: cover;
        width: 100%;
        height: auto;
        z-index: 10;
        position: relative;
    }
    
    // line on background image
    .line {
        width: 0px;
        height: 115px;
        border-left: 2px solid #f5ba4b;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    // card animation
    .card {
        background-color: transparent !important;
        img {
            transition: 0.5s;
        }
        &:hover {
            img {
                box-shadow: 2px 5px 4px 5px #888888;
                transform: translateY(-10px);
            }
        }
    }
    
    // quote text
    .quote {
        margin: 75px 75px;
        .quote-text1 {
            font-size: 17px;
            color: black;
            letter-spacing: 0.7px;
        }
        .icon1 {
            color: black;
            font-size: 28px;
            font-weight: 900;
            line-height: 1.5;
            min-width: 2.5em;
        }
        .quote-text2 {
            color: black;
            text-decoration: underline;
            text-decoration-style: wavy;
            text-decoration-color: #f5ba4b;
        }
    }
    
    // Key theme features
    .Key-theme {
        padding: 50px;
        .Key-theme-title {
            font-size: 24px;
            color: black;
        }
        .Key-theme-text {
            color: #9da5ac !important;
        }
    }
    
    // work flow image
  
        .workflow-main {
          
            .workflow-title {
                font-size: 26px;
                color: black;
            }
            .work-btn {
                font-size: 12px;
                text-transform: uppercase;
                padding: 13px 27px;
                color: black !important;
            }
        }
        .flexdiv {
            height: 400px;
           
        }
        .backgdiv {
            height: 200px;
            width: 400px;
            top: 20px;
            position: relative;
        }
        .imageover {
            height: 400px;
            width: 250px;
            position: absolute;
            top: -150px;
            left: 50%;
            transform: translateX(-40%);
        }
    
    
    @media only screen and (max-width: 600px) {
        .flexdiv {
            height: 300px;
            margin-top: 90px;
        }
        .backgdiv {
            height: 150px;
            width: 255px;
            position: relative;
            bottom: 10px;
        }
        .imageover {
            height: 300px;
            width: 150px;
            
            top: -100px;
            
        }
    }
    
    // ---------card images for Ultimate solution----------------------
    .iconh {
        font-size: 30px;
    }
    
    .Ultimate-title {
        font-size: 18px;
        font-weight: bold;
    }
    
    .Ultimate-text {
        color: #6c757d !important;
    }
    
    .first-image {
        padding: 0px !important;
    }
    
    .middle-image {
        transform: scale(1.1, 1.2);
        z-index: 10 !important;
        padding: 0px !important;
    }
    
    .third-image {
        padding: 0px !important;
    }
    
    @media only screen and (max-width: 600px) {
        .first-image {
            margin: 20px 0;
        }
    }
    
    @media only screen and (max-width: 600px) {
        .middle-image {
            z-index: 10 !important;
            transform: scale(1, 1);
            margin: 30px 0;
        }
    }
    
    @media only screen and (max-width: 600px) {
        .third-image {
            margin: 20px 0;
        }
    }
    
    //Pricing options
    .Pricing-title {
        font-size: 24px;
        color: black;
    }
    
    .Pricing-text {
        color: #6c757d !important;
    }
    
    // Download it from the Bootstrap marketplace
    .Download-title {
        font-size: 22px;
        color: black;
    }
    
    .Download-text {
        color: #6c757d !important;
    }
    
    .Download-btn {
        font-size: 12px;
        position: relative;
        text-transform: uppercase;
        padding: 18px 25px;
        color: black;
    }
    
    // button focus none
    .btn-outline-warning {
        &:focus {
            box-shadow: none !important;
        }
    }
    
    .btn {
        border-radius: 0%;
        background-color: transparent !important;
    }
    
    .btn:hover {
        background-color: #f5ba4b !important;
    }
</style>
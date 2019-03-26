<template>
    <div>
    
    
        <div class="background  img-fluid py-5">
            <Navbarheader msg="Material Kit">
                <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index">{{ link }}</b-nav-item>
            </Navbarheader>
            <b-container>
                <b-row class="justify-content-center">
                    <b-col cols=8>
                        <div class="text-center text-white">
                            <div class="pt-3">
                                <p class="pt-5">BY SIMPLEQADE</p>
                            </div>
                            <div class="pt-3">
                                <p class="display-4 d-block text-waight-bold">
                                    Landing pages occasion
                                </p>
                            </div>
                            <p class="pt-3">Incline is set of landing and support pages aimed at helping companies promote new products and business launches.</p>
                            <div class="pt-3">
                                <b-button class="text-white small" variant="outline-warning">purchase now</b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <!-------------------- ---------------------- -->
        <b-container>
            <b-row class="justify-content-center">
                <b-col cols=6>
                    <div class="text-center mt-5">
                        <h1 class="pt-5">Landing page variants</h1>
                        <p class="pt-3 text-secondary">
                            Incline comes with several professionally designed landing pages that can be easily adapted for any project.
                        </p>
                    </div>
    
                </b-col>
            </b-row>
            <!-- using component for card -->
            <roshan-cards class="mt-5">
            </roshan-cards>
        </b-container>
    
        <!-- ------------------- -->
        <div class="background-2 mt-5 pb-3" fluid-grow alt="Fluid-grow image">
            <div class="line"></div>
            <b-container class="mt-5">
                <b-row class="justify-content-center">
                    <b-col md=6>
                        <div class="text-center mt-5">
                            <div class="title">
                                <h2 class="pt-5">Header variants</h2>
                            </div>
                            <div class="content pt-3">
                                <p class=" text-secondary">
                                    Polish your landing page with one of the header options below to impress your visitors at first glance.
                                </p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <roshanCard2>
                </roshanCard2>
            </b-container>
        </div>
        <!-- -------------- -->
        <b-row class="justify-content-center m-auto">
            <b-col md=8>
                <div class="mt-5">
                    <b-media tag="li" class="my-4">
    
                        <font-awesome-icon icon="coffee" slot="aside" blank blank-color="#cba" alt="placeholder" />
    
                        <div class="text-waight-bold icon1">
    
    
                        </div>
    
                        <p class="mb-0 text-left">
                            This theme is a Swiss Army knife of Bootstrap themes. Built with components in mind, it can be easily adjusted to create layouts of any complexity within a few minutes.
                        </p>
                        <p class="small text-left py-3">Yuri Gamin, Moscow</p>
                    </b-media>
                </div>
            </b-col>
        </b-row>
    
        <!-- ------------- -->
    
        <div class="mt-5 bg-secondary">
            <b-row class="justify-content-center m-auto">
                <b-col md=6>
                    <div class="mb-5">
                        <div class="title ">
                            <h2 class=" text-white pt-5 text-center">Key theme features</h2>
                        </div>
                        <div class="content">
                            <p class=" text-white text-center mt-3">
                                Incline can be used to create anything from a small marketing page to a sophisticated website.
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row class="justify-content-center m-auto">
                <b-col md=3>
                    <div class="pb-5">
                        <div class="text-white text-center">
                            <div class="py-2 icon1">
    
                            </div>
                            <h3 class="py-2">Fully responsive</h3>
                            <p>
                                Looks great on all major browsers, tablets and mobile devices.
                            </p>
                        </div>
                    </div>
                </b-col>
    
                <b-col md=3>
                    <div class="pb-5">
                        <div class="text-white text-center">
                            <div class="py-2 icon1">
                                <i class="fas fa-lock text-warning"></i>
                            </div>
                            <h3 class="py-2">Built with SASS</h3>
                            <p>Easily adjustable with tons of SASS variables included.</p>
                        </div>
                    </div>
                </b-col>
    
                <b-col md=3>
                    <div class="pb-5">
                        <div class="text-white text-center">
                            <div class="py-2 icon1">
                                <i class="fas fa-headset text-warning"></i>
                            </div>
                            <h3 class="py-2">Free support</h3>
                            <p>
                                Feel free to contact us with any feature requests or bug reports.
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <!------------------------  -->
        <div class="mt-5">
            <b-row class="justify-content-center m-auto">
                <b-col md=4 class="mb-5">
                    <div class="mb-5">
                        <h3 class=" pt-5 text-left ">Intuitive workflow</h3>
    
    
                        <b-media tag="li" class="my-4">
    
                            <font-awesome-icon class="mt-2" icon="coffee" slot="aside" blank blank-color="#cba" alt="placeholder" />
    
                            <p class="mb-0 text-left">
                                Speed up your development process with Gulp and BrowserSync live browser reload </p>
    
                        </b-media>
    
                        <b-media tag="li" class="my-4">
    
                            <font-awesome-icon class="mt-2" icon="coffee" slot="aside" blank blank-color="#cba" alt="placeholder" />
    
                            <p class="mb-0 text-left">
                                Speed up your development process with Gulp and BrowserSync live browser reload </p>
    
                        </b-media>
    
                        <b-media tag="li" class="my-4">
    
                            <font-awesome-icon class="mt-2" icon="coffee" slot="aside" blank blank-color="#cba" alt="placeholder" />
    
                            <p class="mb-0 text-left">
                                Speed up your development process with Gulp and BrowserSync live browser reload </p>
    
                        </b-media>
    
                        <div class="d-flex flex-row py-2 ">
                            <div class="pt-3">
                                <b-button class="text-dark" variant="outline-warning">DOCUMENTATION</b-button>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col md=5>
                    <div class="down-image">
                        <figure class="mb-0 picture">
                            <img src="../assets/yellow.jpeg" class="pt-5 w-75 h-50   one" />
                            <img src="../assets/vertical1.jpg" class="pt-5  w-50 h-50  two" />
                        </figure>
                    </div>
                </b-col>
            </b-row>
        </div>
        <!-- ----------------------- -->
        <div class="background-2 mt-5 pb-3" fluid-grow alt="Fluid-grow image">
            <div class="line"></div>
            <b-container class="mt-5">
                <b-row class="justify-content-center">
                    <b-col md=6>
                        <div class="text-center mt-5">
                            <div class="title">
                                <h1 class="pt-5">Ultimate solution</h1>
                            </div>
                            <div class="content pt-3">
                                <p class=" text-dark">
                                    Easily create a website of any complexity with dozens of pages and independent components for any purpose.
                                </p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
    
    
                <b-row class=" m-auto">
                    <b-col md=10 class=" mx-auto ">
                        <div class=" my-5">
                            <b-row class="m-auto">
                                <b-col md=4 class="first-image p-0 m-0">
    
                                    <b-card overlay :img-src="img1" img-alt="Card Image" text-variant="white" class="border-0" title="Image Overlay" sub-title="Subtitle">
                                        <b-card-text class="d-flex flex-column justify-content-end">
                                            Some quick example text to build on the card and make up the bulk of the card's content.
                                        </b-card-text>
                                    </b-card>
    
                                </b-col>
                                <!--  -->
                                <b-col md=4 class="middle-image m-auto  ">
    
                                    <b-card overlay :img-src="img2" img-alt="Card Image" text-variant="white" class="border-0" title="Image Overlay" sub-title="Subtitle">
                                        <b-card-text>
                                            Some quick example text to build on the card and make up the bulk of the card's content.
                                        </b-card-text>
                                    </b-card>
    
                                </b-col>
                                <!--  -->
                                <b-col md=4 class="third-image p-0 m-0">
                                    <b-card overlay :img-src="img3" img-alt="Card Image" text-variant="white" class="border-0" title="Image Overlay" sub-title="Subtitle">
                                        <b-card-text>
                                            Some quick example text to build on the card and make up the bulk of the card's content.
                                        </b-card-text>
                                    </b-card>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <!-- ---------- -->
        <b-container class="my-5">
            <b-row class="m-auto justify-content-center">
                <div class="col-md-6">
                    <div class="title">
                        <h2 class="text-center mt-5 p-2">Pricing options</h2>
                    </div>
                    <div class="content">
                        <p class="text-secondary p-2 text-center">Secure payment via Stripe or Paypal. 100% money back guarantee.</p>
                    </div>
                </div>
            </b-row>
            <roshan-card3>
            </roshan-card3>
        </b-container>
    </div>
</template>


<script>
    import Navbarheader from "@/components/Navbarheader.vue";
    import roshanCards from "@/components/roshan-cards.vue";
    import roshanCard2 from "@/components/roshan-card2.vue";
    import roshanCard3 from "@/components/roshan-card3.vue";
    import pictures1 from "../assets/1.jpg";
    import pictures2 from "../assets/2.jpg";
    import pictures3 from "../assets/3.jpg";
    
    export default {
        data() {
            return {
                navlinks: ["Home", "Services", "About-us", "Contact Us"],
                img1: pictures1,
                img2: pictures2,
                img3: pictures3
            };
        },
    
        components: {
            Navbarheader,
            roshanCards,
            roshanCard2,
            roshanCard3
        }
    };
</script>

<style lang="scss">
    .background {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/background-img.jpg");
        background-size: cover;
        width: 100%;
        height: 600px;
        border-radius: 0px !important;
    }
    
    .background-2 {
        background-image: url("../assets/back2.jpg");
        background-size: cover;
        width: 100%;
        height: auto;
        z-index: 10;
        position: relative;
    }
    
    .line {
        width: 0px;
        height: 100px;
        border-left: 5px solid rgb(249, 224, 2);
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .down-image {
        .picture {
            .one {
                z-index: -1;
                top: 75px;
                position: relative;
            }
        }
    }
    
    .down-image {
        .picture {
            .two {
                z-index: -1;
                top: -20px;
                height: 700px;
                position: absolute;
                left: 150px;
            }
        }
    }
    
    @media only screen and (min-width: 768px) {
        .down-image {
            .two {
                position: relative;
                bottom: 50px;
                left: 60px;
                height: 435px !important;
            }
        }
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
</style>
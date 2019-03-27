<template>
    <div>
        <div class="background  py-5" fluid-grow alt="Fluid-grow image">
            <!-- navbar compomemt use -->
            <Navbarheader msg="Incline">
                <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index">{{link}}</b-nav-item>
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
        <!--------------------Landing page variants section start ---------------------- -->
        <b-container>
            <b-row class="justify-content-center mx-auto">
                <b-col cols=6>
                    <div class=" title text-center mt-5">
                        <h1 class="pt-5">Landing page variants</h1>
                        <p class="pt-3 text-secondary">
                            Incline comes with several professionally designed landing pages that can be easily adapted 
                            for any project.
                        </p>
                    </div>
    
                </b-col>
            </b-row>
         <!-- using component for card -->
            <roshan-cards class="mt-5">
            </roshan-cards>
        </b-container>
    
        <!-- -----------Header variants start-------- -->
        <div class="background-2 mt-5 pb-3" fluid-grow alt="Fluid-grow image">
            <div class="line"></div>
            <b-container class="mt-5">
                <b-row class="justify-content-center mx-auto">
                    <b-col md=6>
                        <div class="text-center mt-5">
                            <div class="title">
                                <h2 class="pt-5">Header variants</h2>
                            </div>
                            <div class="content pt-3">
                                <p class=" text-secondary">
                                    Polish your landing page with one of the header options below to impress your
                                     visitors at first glance.
                                </p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
         <!-- using component -->
                <roshanCard2 class="py-2">
                </roshanCard2>
            </b-container>
        </div>
        <!-- -------media object use------- -->
        <b-row class="justify-content-center mx-auto">
            <b-col md=8>
                <div class="mt-5">
                    <b-media tag="li" class="my-4">
                        <font-awesome-icon :icon="['fas','quote-left']" slot="aside" blank blank-color="#cba" 
                        alt="placeholder" class="icon1" />
                        <p class="mb-0 text-left">
                            This theme is a Swiss Army knife of Bootstrap themes. Built with components in mind
                            , it can be easily adjusted to create layouts of any complexity within a few minutes.
                        </p>
                        <p class="small text-left py-3 zigzag-text">Yuri Gamin, Moscow</p>
                    </b-media>
                </div>
            </b-col>
        </b-row>
    
        <!-- ------Key theme features------- -->
    
        <div class="mt-5 bg-secondary">
            <b-row class="justify-content-center m-auto">
                <b-col md=6>
                    <div class="mb-3">
                        <div class="title ">
                            <h2 class=" text-white pt-5 text-center">Key theme features</h2>
                        </div>
                        <div class="content">
                            <p class=" text-white text-center mt-3">
                                Incline can be used to create anything from a small marketing page
                                 to a sophisticated website.
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        <!-- use component  -->
            <roshan-card4>
            </roshan-card4>
    
        </div>
        <!-------------Intuitive workflow start -----------  -->
        <div class="mt-5">
            <b-row class="justify-content-center m-auto">
                <b-col md=4 class="mb-5">
                    <div class="mb-5">
                        <div class="title">
                            <h3 class=" pt-5 text-left pb-3 ">Intuitive workflow</h3>
                        </div>
                        <div class="content ">
                            <p class="text-center">
                                <span class="pr-3"> 
                                    <font-awesome-icon class="mt-2 text-warning" :icon="['fas','chevron-right']" 
                                    alt="placeholder" />
                                </span> 
                                    Speed up your development process with Gulp and BrowserSync live browser reload 
                            </p>
                            <p class="text-center">
                                <span class="pr-3"> 
                                    <font-awesome-icon class="mt-2 text-warning" :icon="['fas','chevron-right']" />
                                </span> 
                                    Speed up your development process with Gulp and BrowserSync live browser reload 
                            </p>
                            <p class="text-center">
                                <span class="pr-3">
                                     <font-awesome-icon class="mt-2 text-warning" :icon="['fas','chevron-right']" />
                                </span> Speed up your development process with Gulp and BrowserSync live browser 
                                reload 
                            </p>
                        </div>
                        <div class="pt-3 text-left">
                            <b-button class="text-dark" variant="outline-warning">DOCUMENTATION</b-button>
                        </div>
                    </div>
                </b-col>
                <b-col md=5>
                    <div class="d-flex justify-content-center align-items-center flexdiv">
                        <div class="backgdiv bg-warning">
                            <figure>
                                <img src="../assets/vertical.jpg" class="imageover" alt="">
                            </figure>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <!-- ---------- Ultimate solution start------------- -->
        <div class="background-2 mt-5 pb-3" fluid-grow alt="Fluid-grow image">
            <div class="line"></div>
            <b-container class="mt-5">
                <b-row class="justify-content-center m-auto">
                    <b-col md=6>
                        <div class="text-center mt-5">
                            <div class="title">
                                <h1 class="pt-5">Ultimate solution</h1>
                            </div>
                            <div class="content pt-3">
                                <p class=" text-dark">
                                    Easily create a website of any complexity with dozens of pages 
                                    and independent components for any purpose.
                                </p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
    
                <!--  -->
                <b-row class=" m-auto">
                    <b-col md=10 class=" mx-auto ">
                        <div class=" my-5">
                            <b-row class="m-auto">
                                <b-col md=4 class="first-image p-0 m-0">
    
                                    <b-card overlay :img-src="img1" img-alt="Card Image" text-variant="white"
                                     class="border-0">
                                        <b-card-text class="d-flex flex-column justify-content-end">
                                            <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                <div class="text-warning icon text-left  pl-2">
                                                    <font-awesome-icon icon="coffee" alt="placeholder" />
                                                </div>
                                                <div class="card-title text-left">
                                                    <h5 class=" ml-2">Custom components</h5>
                                                </div>
                                                <div class="card-text">
                                                    <p class="ml-2 text-left small">
                                                        Combine dozens of components to create unique layouts.
                                                    </p>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-card>
    
                                </b-col>
                                <!--  -->
                                <b-col md=4 class="middle-image m-auto  ">
    
                                    <b-card overlay :img-src="img2" img-alt="Card Image" text-variant="white"
                                     class="border-0">
                                        <b-card-text>
                                            <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                <div class="text-warning icon text-left  pl-2">
                                                    <font-awesome-icon icon="coffee" alt="placeholder" />
                                                </div>
                                                <div class="card-title text-left">
                                                    <h5 class=" ml-2">Custom components</h5>
                                                </div>
                                                <div class="card-text">
                                                    <p class="ml-2 text-left small">
                                                        Combine dozens of components to create unique layouts.
                                                    </p>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-card>
    
                                </b-col>
                                <!--  -->
                                <b-col md=4 class="third-image p-0 m-0">
                                    <b-card overlay :img-src="img3" img-alt="Card Image" text-variant="white"
                                     class="border-0">
                                        <b-card-text>
                                            <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                <div class="text-warning icon text-left pl-2">
                                                    <font-awesome-icon icon="coffee" alt="placeholder" />
                                                </div>
                                                <div class="card-title text-left">
                                                    <h5 class=" ml-2">Custom components</h5>
                                                </div>
                                                <div class="card-text">
                                                    <p class="ml-2 text-left small">
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
            </b-container>
        </div>
        <!-- ------Pricing options start---- -->
        <b-container class="my-5">
            <b-row class="m-auto justify-content-center">
                <div class="col-md-6">
                    <div class="title">
                        <h2 class="text-center mt-5 p-2">Pricing options</h2>
                    </div>
                    <div class="content">
                        <p class="text-secondary p-2 text-center">Secure payment via Stripe or Paypal.
                             100% money back guarantee.</p>
                    </div>
                </div>
            </b-row>
            <!-- using component -->
            <roshan-card3>
            </roshan-card3>
        </b-container>
        <!-- -----------Download it from the Bootstrap marketplace start--------- -->
        <div class="bg-light my-5 py-5">
            <b-row class="justify-content-center mx-auto">
                <b-col md=6>
                    <h4 class="text-left">Download it from the Bootstrap marketplace</h4>
                    <p class="py-2 text-left text-secondary">Each theme featured at the Bootstrap
                         marketplace has been reviewed by Bootstrap's creators. Six month technical 
                         support by the theme author is provided.</p>
                </b-col>
                <b-col md=2>
                    <div>
                        <b-button class="text-dark p-3" variant="outline-warning">PURCHASE NOW</b-button>
                    </div>
                </b-col>
            </b-row>
    
        </div>
        <!--  footer using component-->
        <roshanFooter brandnm="Icline" class="bg-dark text-white p-5">
        </roshanFooter>
    
    </div>
</template>


<script>
import Navbarheader from "@/components/Navbarheader.vue";
import roshanCards from "@/components/roshan-cards.vue";
import roshanCard2 from "@/components/roshan-card2.vue";
import roshanCard3 from "@/components/roshan-card3.vue";
import roshanCard4 from "@/components/roshan-card4.vue";
import roshanFooter from "@/components/sarasfooter.vue";
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
    roshanCard3,
    roshanCard4,
    roshanFooter
  }
};
</script>

<style lang="scss">
// banner background image...
.background {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/background-img.jpg");
  background-size: cover;
  width: 100%;
  height: 600px;

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
  height: 100px;
  border-left: 5px solid rgb(249, 224, 2);
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon1 {
  font-size: 27px;
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

.zigzag-text{
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: #f5ba4b;
      }
// work flow image
.flexdiv {
  height: 400px;
}

.backgdiv {
  height: 200px;
  width: 400px;
  position: relative;
}

.imageover {
  height: 400px;
  width: 250px;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
}

@media only screen and (max-width: 600px) {
  .flexdiv {
    height: 300px;
    margin-bottom: 70px;
  }
  .backgdiv {
    height: 150px;
    width: 255px;
    position: relative;
  }
  .imageover {
    height: 300px;
    width: 150px;
  }
}

// ---------card images for Ultimate solution----------------------
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
//
// button focus none

.btn-outline-warning {
	&:focus {
		box-shadow: none !important;
	}
}
.btn {
	border-radius: 0%;
}


</style>
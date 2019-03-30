<template>
  <!--home -->
  <div class="home">
   
   <div id="head">
    <!--header-->
   <appheader msg="Material Kit"></appheader>
    <!--header-->
   </div>

    <!--card content-->
   <div class="oversectiion ml-4  mr-4 ml-4 shadow p-3  bg-white rounded">
  <div id="components">
      <!--contentparagraph-->
    <contentparagraph></contentparagraph>
     <!--contentparagraph-->

      <!--product-info-->
    <product>
      <div  slot="heading" class="h3 text-center pt-5 pb-3"><b>We are nerd Rockstars </b></div>
      <div  slot="paragraph" class="text-center pt-0 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard  
                              
                                
         </div>
    </product>
    <!--product-info-->

     <!--cardcontent-->
    <cardcontent></cardcontent>
      <!--cardcontent-->
  </div>

     <div id="section">
    <!--product-info-->
     <product>
      <div slot="heading" class="h3 text-center pt-5 pb-3"><b>We build awesome products</b></div>
      <div slot="paragraph" class="text-center pt-0 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, 
                            
         </div>
    </product>
    <!--product-info-->

      <!--mediacontent-->
    <mediacontent></mediacontent>
        <!--mediacontent-->

    <!--product-info-->
   <product>
      <div slot="heading" class="h3 text-center pt-5 pb-3"><b>Our office is our second home </b></div>
      <div slot="paragraph" class="text-center pt-0 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, 
                               
         </div>
    </product>
    <!--product-info-->
    
     <!--productimg-->
    <productimg> </productimg>
    <productimgsec></productimgsec>
      <!--productimg-->
     </div>

     <div id="example">
    <!--product-info-->
  
     <product >
      <div slot="heading" class="h3 text-center pt-5 pb-3"><b>Want to work with us?</b></div>
      <div slot="paragraph" class="text-center pt-4 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, 
                                
         </div>
    </product>
   
    <!--product-info-->

    <!--form-->
     <appform></appform>
      <!--form-->
     </div>
   </div>
   <!--card content-->

   <!--footer-->
    <customfooter brandnm="Material Kit"></customfooter>
     <!--footer-->

  </div>
   <!--home closing-->
</template>

<script>
// @ is an alias to /src

import appheader from "@/components/header.vue";
import contentparagraph from "@/components/contentparagraph.vue";
import product from "@/components/contentdescription.vue";
import cardcontent from "@/components/cardcontent.vue";

import mediacontent from "@/components/mediacontent.vue";

import productimg from "@/components/productmages.vue";
import productimgsec from "@/components/imgsect.vue";

import appform from "@/components/form.vue";
import customfooter from "@/components/sarasfooter.vue";



export default {
  name: "home",
  components: {
      appheader,
      contentparagraph,
       product,
       cardcontent,
    mediacontent,
     productimg,
      productimgsec, 
        appform,
   customfooter
    },
     
 }
  
</script>

<style lang="scss">
 @import "../assets/scss/Material-Kit/material.scss";
</style>

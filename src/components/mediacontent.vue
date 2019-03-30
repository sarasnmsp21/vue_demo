  
 
<template>
  <b-container>
    <b-row class="mx-5 card-style pb-5">
      <b-col md="4" sm="12" class="px-3" v-for="media in medias" v-bind:key="media.index">
        <!-- <div class="col-md-4 p-0" v-for="media in medias" v-bind:key="media.index"> -->
        <b-media class="text-justify">
          <!-- <b-img  blank blank-color="#abc" width="64" alt="placeholder" /> -->
         
          <font-awesome-icon slot="aside" class="awesome"  size="lg" :icon="['fas','square']">{{media.icon}}</font-awesome-icon>
          <div class="h6 mt-0 mb-1 font-weight-bolder">{{media.heading}}</div>
          <div class="media-line mb-0 text-wrap text-justify">{{media.para}}</div>
          <a href="#" class="media-link link">{{media.link}}</a>
        </b-media>
      </b-col>
      <!-- </div> -->
    </b-row>
  </b-container>
</template>
   
 <script>
export default {
  data() {
    return {
      medias: [
        {
          icon: "user-secret",
          heading: "1. Design",
         para:
          "An organization or organisation is an entity comprising multiple people, such as an institution or an association",
          link: "Find more.."
        },
        {
          icon: "user-secret",
          heading: "2. Develop",
          para:
            "An organization or organisation is an entity comprising multiple people, such as an institution or an association,.",
          link: "Find more.."
        },
        {
          icon: "user-secret",
          heading: "3. Make Edits",
          para:
            "An organization or organisation is an entity comprising multiple people, such as an institution or an association.",
          link: "Find more.."
        }
      ]
    };
  }
};
</script> 
  <style lang="scss">
   @import "../assets/scss/Material-Kit/material.scss";

 </style>



  
       
  
                          
                          

   
 
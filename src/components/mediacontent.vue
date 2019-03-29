  
 
<template>
  <b-container>
    <b-row class="mx-3 px-5 pb-5">
      <b-col md="4" sm="12" class="px-3" v-for="media in medias" v-bind:key="media.index">
        <!-- <div class="col-md-4 p-0" v-for="media in medias" v-bind:key="media.index"> -->
        <b-media class="text-justify">
          <!-- <b-img  blank blank-color="#abc" width="64" alt="placeholder" /> -->
         
          <font-awesome-icon slot="aside" class="awesome"  size="lg" :icon="['fas','square']">{{media.icon}}</font-awesome-icon>
          <h6 class="mt-0 mb-1 font-weight-bolder">{{media.heading}}</h6>
          <p class="mb-0 text-wrap text-justify">{{media.para}}</p>
          <a href="#" class="link">{{media.link}}</a>
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
.link {
  color: #615a5a;
}
a:hover {
  color: #615a5a !important;
}
.awesome
{
  color:#ea4563;
}
.text-wrap
{
  word-wrap: normal;
}
</style>
  
       
  
                          
                          

   
 
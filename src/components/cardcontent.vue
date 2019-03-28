  <template>


       <div class="p-4">
                  <div class="mx-5">
                  <b-container>   
                 <b-row>  
                    
                <b-col md="3" sm="12" v-for="card in cards" v-bind:key="card.index">
                
                     
                 <div class="card border-0" >
                      
                    <b-img :src="card.img" class="card-img-top  w-50 h-30  mx-auto rounded-circle  shadow  bg-white rounded"  alt="Card image cap"/>
                     <div class="card-body text-center">
                       <h5 class="card-title ">{{card.title}}</h5>
                       <h6 class="card-subtitle mb-2 text-muted ">{{card.subtitle}}</h6>
                      <p class="card-text  ">{{card.para}}</p>
                      <!-- <a href="#" class="card-link">{{card.link}}</a>
                      <a href="#" class="card-link"> {{card.link}}</a> -->
                        
                <p>
                  <a href="#">
                    <span style="color:#0975B4" v-if="card.showlinkedin">
                      <font-awesome-icon :icon="['fab', 'linkedin-in']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#E52D27" v-if="card.showyoutube">
                      <font-awesome-icon :icon="['fab', 'youtube']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#55ACEE" v-if="card.showtwitter">
                      <font-awesome-icon :icon="['fab', 'twitter']" class="mr-4"/>
                    </span>
                  </a>
                   <a href="#">
                    <span style="color:#EB5791" v-if="card.showdribbble">
                      <font-awesome-icon :icon="['fab', 'dribbble']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#3B5898" v-if="card.showfacebook">
                      <font-awesome-icon :icon="['fab', 'facebook-square']" class="mr-4"/>
                    </span>
                  </a>
                 
                  <a href="#">
                    <span style="color:#205F8E" v-if="card.showinstagram">
                      <font-awesome-icon :icon="['fab', 'instagram']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#DD4B3A" v-if="card.showgoogle">
                      <font-awesome-icon :icon="['fab', 'google']" class="mr-4"/>
                    </span>
                  </a>
                </p>
             
                    </div>    
                    
                </div>
                </b-col>
               
               </b-row>
                  </b-container>
                   
                    </div>
                </div> 
                 
              
  </template>
                       

  <script>

  import img1 from "../assets/img4.jpeg";
   import img2 from "../assets/img12.jpeg";
    import img3 from "../assets/img150.jpg";
    import img4 from "../assets/img152.jpeg";
  
export default {
    data() {
    return {
      cards: [
        {
          img:img1,
          title: "Card title",
          subtitle:"Card subtitle",
          para:
            "Some quick example text to build on the card title and make up the bulk  ",
          showlinkedin: false,
          showdribbble: false,
          showtwitter: true,
          showfacebook: true,
          showgoogle: true,
          showyoutube: false,
          showinstagram: false
        },
       {
         img:img2,
          title: "Card title",
          subtitle:"Card subtitle",
          para:
            "Some quick example text to build on the card title and make up the bulk  ",
           showlinkedin: true,
          showdribbble: true,
          showtwitter: true,
          showfacebook:false,
          showgoogle: false,
          showyoutube: false,
          showinstagram: false
        },
        {
         img:img3,
          title: "Card title",
          subtitle:"Card subtitle",
          para:
            "Some quick example text to build on the card title and make up the bulk . ",
           showlinkedin: false,
          showdribbble: true,
          showtwitter: false,
          showfacebook:true,
          showgoogle: false,
          showyoutube: false,
          showinstagram: false
        },
        {
         img:img4,
          title: "Card title",
          subtitle:"Card subtitle",
          para:
            "Some quick example text to build on the card title . ",
         showlinkedin: false,
          showdribbble: true,
          showtwitter: true,
          showfacebook: false,
          showgoogle: true,
          showyoutube: false,
          showinstagram: false
        }
      ],
      }
   }
}
</script> 
             
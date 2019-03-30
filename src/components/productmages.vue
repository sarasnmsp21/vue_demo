
     <template>
           <!--image area-->
           <b-container>
                          <div class="card-style mx-5 pt-2 "  >
                          <b-row>
                        
                           <b-col md="4" sm="12" v-for="image in images" v-bind:key="image.index">
                                <div class="img-display">
                                  <figure>
                                  <b-img :src="image.imgsection" class="pt-0 img-fluid img-pb shadow  bg-danger rounded"  alt="img1"/>
                                  </figure>
                                  </div>
                           </b-col>
                         
                            
                          </b-row>
                             
                          </div>
                     
           </b-container>
                          <!--image area-->
   </template>
                        
<script>
  import img1 from "../assets/travel01b.jpg";
  // import img2 from "../assets/images.jpeg";
export default {
    data() {
    return {
      images: [
        {
          imgsection:img1,
        
         
        },
        {
           imgsection:img1,
         
        },
        {
          imgsection:img1,
        }
       
      ],
      }
   }
}
</script>                        
<style lang="scss">
.img-pb
{
 border-radius: 0.4rem;
}
 .card-style
  {
    padding: 0 5rem;
  }
  
   </style>

<style>
 @media only screen and (min-width: 375px) and (max-width: 667px){
   .card-style{
   padding:0 0 !important;
    } 
  }
</style>



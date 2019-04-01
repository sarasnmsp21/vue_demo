    <template>
           <!--image area-->
           <b-container>
                          <div class=" pb-4 card-style mx-5 pad-top"  >
                         
                                <b-row> 
                                     <div class="col-md-6" v-for="image in images" v-bind:key="image.index">
                                        
                                   <figure>
                                    <b-img :src="image.imgsection1" class="mt-5 w-100 pad-top shadow  bg-white  rounded img-fluid t"  alt=""/>
                                      </figure>
                                      
                                 </div>
                                
                                </b-row> 
                          </div>
                     
           </b-container>
                          <!--image area-->
   </template>
  
                   
<script>
 
  import img2 from "../assets/images.jpeg";
export default {
    data() {
    return {
      images: [
       
        {
          imgsection1:img2,
        },
        {
          imgsection1:img2,
        }
      ],
      }
   }
}
</script>   

<style lang="scss">

  
    @import "../assets/scss/Material-Kit/material.scss";
   </style>

<style>
 @media only screen and (min-width: 375px) and (max-width: 667px){
   .card-style{
   padding:0 0 !important;
    } 
  }
</style>

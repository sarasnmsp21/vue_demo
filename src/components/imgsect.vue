    <template>
           <!--image area-->
           <b-container>
                          <div class="pl-5 pb-4 mr-5 ml-5 pad-top"  >
                         
                                <b-row> 
                                     <div class="col-md-6" v-for="image in images" v-bind:key="image.index">
                                        
                                   <figure>
                                    <b-img :src="image.imgsection1" class="pt-5 w-100  img-pb1 img-fluid t"  alt=""/>
                                      </figure>
                                      
                                 </div>
                                
                                </b-row> 
                          </div>
                     
           </b-container>
                          <!--image area-->
   </template>
   <style lang="scss">
   .pad-top 
      {
       margin-top: -31px;
      }
      .img-pb1
       {
        border-radius: 0.4rem;
        }
   </style>
   
                   
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



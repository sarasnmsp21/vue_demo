  
 
<template>
 <b-row class="mt-5 pb-5 col-lg-12"> 
   
         <b-col md="4" sm="12" class="p-0"  v-for="media in medias" v-bind:key="media.index">  
        <!-- <div class="col-md-4 p-0" v-for="media in medias" v-bind:key="media.index"> -->
       <b-media class="text-justify">
        <!-- <b-img  blank blank-color="#abc" width="64" alt="placeholder" /> -->
        <font-awesome-icon slot="aside" icon="user-secret">{{media.icon}}<font-awesome-icon>
       <h5 class="mt-0 mb-1">{{media.heading}}</h5>
        <p class="mb-0 text-justify">
      {{media.para}}
        </p>
       </b-media>
         </b-col>
      <!-- </div> -->
 </b-row>
 </template>
   
 

<script>
export default {
    data() {
    return {
      medias: [
        {
          icon:"user-secret",
          heading: "List-based media object",
          para:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
            icon:"user-secret",
          heading: "List-based media object",
           para:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        },
        {
            icon:"user-secret",
          heading: "List-based media object",
          para:
            "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        }
       
      ],
      }
   }
}
</script> 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <template>

      <!---media obj-->
 
      <b-row class="ml-5 mr-5 pl-5 pr-5 pt-4 pb-4"> 
   

        <div class="col-md-4 col-sm-12">
       <b-media class="text-justify">
        <!-- <b-img  blank blank-color="#abc" width="64" alt="placeholder" /> -->
        <font-awesome-icon slot="aside" icon="user-secret"></font-awesome-icon>
       <h5 class="mt-0 mb-1">List-based media object</h5>
        <p class="mb-0 ">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
       </b-media>
      </div>


    <div class="col-md-4 col-sm-12">
    <b-media class="text-justify">
      <!-- <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder" /> -->
     <font-awesome-icon slot="aside" icon="user-secret"></font-awesome-icon>
      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>
     </div>

     <div class="col-md-4 col-sm-12">
    <b-media class="text-justify">
      <!-- <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder" /> -->
       <font-awesome-icon slot="aside" icon="user-secret"></font-awesome-icon>
      <h5 class="mt-0 mb-1">List-based media object</h5>
      <p class="mb-0">
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </b-media>
     </div>

  
      </b-row>
    

    <!---media obj-->
                         
   </template>
       
  
                          
                          

   
 
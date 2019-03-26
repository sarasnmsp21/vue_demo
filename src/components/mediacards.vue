<template>
    <div >
        <b-col lg="12">
        <div class="row mx-auto">
            
            <b-col md="4" v-for="card in cards" v-bind:key="card.index">
         
            <div>
              <figure>
                <img :img-src="card.landimg" class="img-fluid shadow-sm" alt="Landing" />
              </figure>
              <h5>{{card.heading}}</h5>
              <p>{{card.para}}</p>
              <p>
                <a href="#" class="text-muted border-bottom footer-text">Explore Pages ›</a>
              </p>
            </div>
          </b-col>

           
          
    </div>
    </b-col>

    
    </div>
</template>
<script>

import images1 from "../assets/img13.png";
export default {
  data(){
    return{
       
      cards:[
        {
            landimg: images1,
            heading:'Landing',
            para:'Make your app look outstanding between the crowd using our wide variety of page components.'
        },
         {
            imgsrc: images1,
            heading:'Landing',
            para:'Make your app look outstanding between the crowd using our wide variety of page components.'
        },
         {
            imgsrc: images1,
            heading:'Landing',
            para:'Make your app look outstanding between the crowd using our wide variety of page components.'
        }
      ],
    }
}
}
</script>


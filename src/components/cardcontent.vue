  <template>


       <div class="p-4">
                  <div class="mx-5">
                  <b-container>   
                 <b-row>  
                    
                <b-col md="3" sm="12" v-for="card in cards" v-bind:key="card.index">
                
                     
                 <div class="card border-0" >
                      
                    <b-img :src="card.img" class="card-img-top  w-50 h-30  mx-auto rounded-circle"  alt="Card image cap"/>
                     <div class="card-body text-center">
                       <h5 class="card-title ">{{card.title}}</h5>
                       <h6 class="card-subtitle mb-2 text-muted ">{{card.subtitle}}</h6>
                      <p class="card-text  ">{{card.para}}</p>
                      <a href="#" class="card-link">{{card.link}}</a>
                      <a href="#" class="card-link"> {{card.link}}</a>
                      
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
            "Some quick example text to build on the card title and make up the bulk of the card's content. ",
          link:"Card link"
        },
       {
         img:img2,
          title: "Card title",
          subtitle:"Card subtitle",
          para:
            "Some quick example text to build on the card title and make up the bulk of the card's content. ",
          link:"Card link"
        },
        {
         img:img3,
          title: "Card title",
          subtitle:"Card subtitle",
          para:
            "Some quick example text to build on the card title and make up the bulk of the card's content. ",
          link:"Card link"
        },
        {
         img:img4,
          title: "Card title",
          subtitle:"Card subtitle",
          para:
            "Some quick example text to build on the card title and make up the bulk of the card's content. ",
          link:"Card link"
        }
      ],
      }
   }
}
</script> 
             
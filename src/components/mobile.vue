
</<template>
    <div class="bg-light pt-5">
     <b-container>
          <b-row class="text-left" >
              <b-col md="5">
            <b-row v-for="card in cards" v-bind:key="card.index">
            <div>
              <h3><b>{{card.heading}}</b></h3>
              <div class="text-dark ipad-text-font">
                <p>{{card.para}}</p>
              </div>
            </div> 
         
          </b-row>
          </b-col>
          <div class="col-md-5 ml-auto">
            <figure class="mb-0">
              <b-img :src="ipad" img-alt="Image" height="315"/>
            </figure>
          </div>

        </b-row>
      </b-container>
    </div>
    
</template>
<script>
import images1 from "../assets/img12.png";
export default {
    data() {
    return {
      cards: [
        {
          heading: "Multi-device support",
          para:
            " All pages inside Robust are optimized for mobile, tablet and desktop. It doesn't matter what device using."
        },
        {
          heading: "Well-documented",
          para:
            "All Robust's components are well-documented and a Quick Start document is included to speed things your sid."
        },
        {
          heading: "3rd party plugin",
          para:
            "Robust comes with multiple 3rd party plugins that are easy to use and and combine well with other."
        }
      ],
      ipad:images1

}
}
};
</script>


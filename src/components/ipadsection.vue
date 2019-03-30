
</<template>
  <div class="ipad-background-color container-top-margin">
    <b-container>
      <div class="text-left row-height">
      <b-row >
       
        <b-col md="5" class="mx-auto my-auto pt-5 spacing-ipad-para">
          <div>
          <b-row v-for="card in cards" v-bind:key="card.index" class="ml-5 ">
            <div class="ipad-heading-font">{{card.heading}}</div>
            <div class="text-dark ipad-para-font pb-3">{{card.para}}</div>
          </b-row>
          </div>
        </b-col>
       
        <div class="col-md-6 ml-auto ipad-img-height mobile-display">
          <b-img :src="ipad" img-alt="Image" height="380" class="image-fluid ml-5" />
        </div>
      </b-row>
      </div>
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
      ipad: images1
    };
  }
};
</script>



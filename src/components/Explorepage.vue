
<template>
  <div class="col-md-10 mx-auto">
    <b-container class="mt-5">
      <b-row>
          <b-col md="4" v-for="card in cards" v-bind:key="card.index" class="card-index p-0 m-0">
            <div>
              <b-card class="mb-2 border-0 text-left">
                <b-card :img-src="card.landimg" class="shadow-sm border-0 mb-3"/>
                <div class="font-weight-bold">{{card.heading}}</div>
                <b-card-text class="dash-para-font">
                  <p class="text-secondary">{{card.para}}</p>
                </b-card-text>
                <a href="#" class="text-left bottom-border link-font footer-text">Explore Pages ›</a>
              </b-card>
            </div>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import images1 from "../assets/img13.png";
import images2 from "../assets/web10.png";
import images3 from "../assets/web7.png";
export default {
  data() {
    return {
      cards: [
        {
          landimg: images1,
          heading: "Landing",
          para:
            "Make your app look outstanding between the crowd using our wide variety of page components."
        },
        {
          landimg: images1,
          heading: "Dashboard",
          para:
            "Make your app look outstanding between the crowd using our wide variety of page components."
        },
        {
          landimg: images1,
          heading: "Pages",
          para:
            "Make your app look outstanding between the crowd using our wide variety of page components."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.shadow-sm {
  border-radius: 0.35rem !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0.3rem 0.3rem 0 0 rgba(53, 52, 52, 0.1) !important;
}
.card-index {
  z-index: link-font;
}
.card-bodylink-font {
  padding-right: 5px !important;
  flex: 0 !important;
}
.dash-para-font {
  font-size: 15px;
}
.link-font {
  font-size: 14px;
  color: #42464a;
}
.bottom-border {
  border-bottom: 2px solid #80808040;
}
</style>

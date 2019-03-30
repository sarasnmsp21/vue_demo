
<template>
  <div class="col-md-10 mx-auto mr-2">
    <b-container class="mt-5">
      <b-row>
        <b-col
          md="4"
          v-for="card in cards"
          v-bind:key="card.index"
          class="card-index card-margin p-0 m-0"
        >
          <div>
            <b-card class="mb-2 border-0 text-left">
              <b-card :img-src="card.landimg" class="shadow-sm border-0 mb-3"/>
              <div class="font-weight-bold">{{card.heading}}</div>
              <b-card-text class="dash-para-font">
                <div class="text-secondary">{{card.para}}</div>
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


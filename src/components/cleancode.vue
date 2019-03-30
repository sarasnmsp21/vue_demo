<!--Created by saraswati-->
<template>
  <b-col lg="9" class="mx-auto pt-5 card-index">
    <b-row>
      <div class="col-md-4 p-0" v-for="card in cards" v-bind:key="card.index">
        <div class="media mr-3 mb-5">
          <div class="icon mr-3 ml-3 rounded p-3 text-white" :style="card.iconbg">
            <font-awesome-icon icon="coffee" />
          </div>
          <div class="media-body text-left">
            <div class="font-weight-bold icon-heading-font mb-1" >{{card.heading}}</div>
            <div class="text-dark text-left ipad-text-font">
              <p>{{card.para}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </b-row>
  </b-col>
</template>

<script>
  export default {
    data() {
      return {
        cards: [{
            iconbg: "background:blue;",
            icon: "far fa-id-badge",
            heading: "Responsive",
            para: " With mobile, tablet & desktop support it doesn't matter what device you're using. "
          },
          {
            iconbg: "background:orange;",
            icon: "far fa-id-badge",
            heading: "Customizable",
            para: "You don't need to be an expert to customize Robust. Our code is very readable and well documented."
          },
          {
            iconbg: "background:red;",
            icon: "far fa-id-badge",
            heading: "Quick support",
            para: " Robust is supported by specialists who provide quick and effective support. Usually an email reply takes 24h."
          },
          {
            iconbg: "background:green;",
            icon: "far fa-id-badge",
            heading: "Cross browser",
            para: " Robust works perfectly with: Chrome, Firefox, Safari, Opera and IE 10+. We're working hard to support them."
          },
          {
            iconbg: "background:purple;",
            icon: "far fa-id-badge",
            heading: "Clean code",
            para: " We strictly followed Bootstrap's guidelines to make your integration as easy as possible. All code is handwritten.."
          },
          {
            iconbg: "background:blue;",
            icon: "far fa-id-badge",
            heading: "Free updates",
            para: "  From time to time you'll receive an update containing new components, improvements and bugfixes."
          }
        ],
      }
    }
  }
</script>




<template>
     <div class="mt-5 pt-5 col-lg-12">
          <div class="row" >
            <div class="col-md-4 p-0" v-for="card in cards" v-bind:key="card.index" >
              <div class="media ">
                <div class="icon mr-3 bg-primary rounded p-3 text-white">
                  <i class="feature-icon-size">{{card.icon}}</i>
                </div>
                <div class="media-body">
                  <h3>{{card.heading}}</h3>
                  <div class="text-dark text-left ipad-text-font">
                    <p>{{card.para}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
    data() {
    return {
      cards: [
        {
          icon:"far fa-id-badge",
          heading: "Responsive",
          para:
            " With mobile, tablet & desktop support it doesn't matter what device you're using. "
        },
        {
            icon:"far fa-id-badge",
          heading: "Customizable",
          para:
            "You don't need to be an expert to customize Robust. Our code is very readable and well documented."
        },
        {
            icon:"far fa-id-badge",
          heading: "Quick support",
          para:
            " Robust is supported by specialists who provide quick and effective support. Usually an email reply takes 24h."
        },
        {
            icon:"far fa-id-badge",
          heading: "Quick support",
          para:
            " Robust is supported by specialists who provide quick and effective support. Usually an email reply takes 24h."
        },
        {
            icon:"far fa-id-badge",
          heading: "Quick support",
          para:
            " Robust is supported by specialists who provide quick and effective support. Usually an email reply takes 24h."
        },
        {
            icon:"far fa-id-badge",
          heading: "Quick support",
          para:
            " Robust is supported by specialists who provide quick and effective support. Usually an email reply takes 24h."
        }

      ],

}
}
}
</script>


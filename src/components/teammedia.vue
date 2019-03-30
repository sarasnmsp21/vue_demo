<template>
  <!-- created by ram -->
  <div>
    <b-row class="mx-auto team-members">
      <b-col
        md="6"
        sm="12"
        class="text-center mb-4"
        v-for="member in members"
        v-bind:key="member.index"
      >
        <b-media>
          <b-row>
            <b-col md="4" class="text-center">
              <b-img
                slot="aside"
                :src="member.teamimage"
                height="150"
                width="150"
                class="mr-3 shadow p-3 mb-2 bg-white rounded"
                alt="placeholder"
              />
            </b-col>
            <b-col md="8" class="text-center px-3 py-2">
              <div class="team-member-name mt-0">
                <h6 class="font-weight-bolder">{{member.membername}}</h6>
              </div>
              <div class="member-designation mt-0">
                <p class="text-muted font-weight-bold">{{member.position}}</p>
              </div>
              <div class="member-description">
                <p class="small text-muted">{{member.memberdesc}}</p>
              </div>
              <div class="member-socialmedia">
                <p>
                  <a href="#">
                    <span style="color:#0975B4" v-if="member.showlinkedin">
                      <font-awesome-icon :icon="['fab', 'linkedin-in']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#E52D27" v-if="member.showyoutube">
                      <font-awesome-icon :icon="['fab', 'youtube']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#55ACEE" v-if="member.showtwitter">
                      <font-awesome-icon :icon="['fab', 'twitter']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#3B5898" v-if="member.showfacebook">
                      <font-awesome-icon :icon="['fab', 'facebook-square']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#EB5791" v-if="member.showdribbble">
                      <font-awesome-icon :icon="['fab', 'dribbble']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#205F8E" v-if="member.showinstagram">
                      <font-awesome-icon :icon="['fab', 'instagram']" class="mr-4"/>
                    </span>
                  </a>
                  <a href="#">
                    <span style="color:#DD4B3A" v-if="member.showgoogle">
                      <font-awesome-icon :icon="['fab', 'google']" class="mr-4"/>
                    </span>
                  </a>
                </p>
              </div>
            </b-col>
          </b-row>
        </b-media>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import team1 from "../assets/rimages/58.jpg";
import team2 from "../assets/rimages/team1.jpg";
export default {
  name: "teammedia",
  data() {
    return {
      members: [
        {
          teamimage: team1,
          showlinkedin: false,
          showdribbble: false,
          showtwitter: true,
          showfacebook: true,
          showgoogle: true,
          showyoutube: false,
          showinstagram: false,
          membername: "Alex Thompson",
          position: "FOUNDER",
          memberdesc:
            "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team2,
          showlinkedin: true,
          showdribbble: true,
          showtwitter: false,
          showfacebook: true,
          showgoogle: true,
          showyoutube: false,
          showinstagram: false,
          membername: "Kendall Andrew",
          position: "GRAPHIC DESIGNER",
          memberdesc:
            "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team2,
          showlinkedin: false,
          showdribbble: false,
          showtwitter: true,
          showfacebook: false,
          showgoogle: false,
          showyoutube: true,
          showinstagram: true,
          membername: "Gina Andrew",
          position: "WEB DESIGNER",
          memberdesc:
            "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team1,
          showlinkedin: true,
          showdribbble: false,
          showtwitter: false,
          showfacebook: true,
          showgoogle: true,
          showyoutube: false,
          showinstagram: false,
          membername: "George West",
          position: "BACKEND HACKER",
          memberdesc:
            "Dont be scared of truth because we need torestart the human foundation..."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/materialkitr/teammedia.scss";
</style>




<template>
  <!-- created by ram -->
  <div>
    <b-row class="mx-auto team-members" >
      <b-col md="6" class="text-center mb-4" v-for="member in members" v-bind:key="member.index">
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
            <b-col md="8" class="text-center pl-2">
              <div class="team-member-name mt-0">
                <h6 class="font-weight-bolder">{{member.membername}}</h6>
              </div>
              <div class="member-designation mt-0">
                <p class="small text-muted">{{member.position}}</p>
              </div>
              <div class="member-description">
                <p class="small text-muted">
                  {{member.memberdesc}}
                </p>
              </div>
              <div class="member-socialmedia">
                <p>
                  <span style="color:#55ACEE"><font-awesome-icon :icon="['fab', 'twitter']" class="mr-4"/></span>
                  <span style="color:#3B5898"><font-awesome-icon :icon="['fab', 'facebook-square']" class="mr-4"/></span>
                  <span style="color:#DD4B3A"><font-awesome-icon :icon="['fab', 'google']" class="mr-4"/></span>
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
      members:[
        {
          teamimage: team1,
          color1:'color:green',
          color2:'color:blue',
          color3:'color:red',
          iconclass: "'fab'",
          iconname:"'linkedin-in'",
          icon1: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon2: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon3: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          membername: "Alex Thompson",
          position: "FOUNDER",
          memberdesc: "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team2,
          icon1: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon2: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon3: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          membername: "Kendall Andrew",
          position: "GRAPHIC DESIGNER",
          memberdesc: "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team2,
          icon1: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon2: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon3: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          membername: "Gina Andrew",
          position: "WEB DESIGNER",
          memberdesc: "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team1,
          icon1: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon2: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          icon3: "<font-awesome-icon :icon='['fab', 'linkedin-in']' />",
          membername: "George West",
          position: "BACKEND HACKER",
          memberdesc: "Dont be scared of truth because we need torestart the human foundation..."
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.team-members {
    color: #3C4857;
}
</style>




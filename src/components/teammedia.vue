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
                  <!-- <i class="fab fa-twitter ml-3"></i>
                  <i class="fab fa-facebook-square ml-3"></i>
                  <i class="fab fa-google ml-3"></i> -->
                  <!-- <font-awesome-icon icon="linkedin-in" class="mr-4 small" style="color:tomato;"/> -->

                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                  
                  <font-awesome-icon icon="coffee" class="mr-4 small" style="color:tomato;"/>
                  <font-awesome-icon icon="coffee" class="mr-4 small" style="color:green;"/>
                  <font-awesome-icon icon="coffee" class="mr-4 small" style="color:blue;"/>
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
      // team1image: team1,
      // team2image: team2,
      members:[
        {
          teamimage: team1,
          membername: "Alex Thompson",
          position: "FOUNDER",
          memberdesc: "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team2,
          membername: "Kendall Andrew",
          position: "GRAPHIC DESIGNER",
          memberdesc: "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team2,
          membername: "Gina Andrew",
          position: "WEB DESIGNER",
          memberdesc: "Dont be scared of truth because we need torestart the human foundation..."
        },
        {
          teamimage: team1,
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




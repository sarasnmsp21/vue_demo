<template>
  <div>
    <div>
      <b-jumbotron class="p-0 top-jumbotron">
        <!-- Navigation Bar -->
       <div>
          <b-navbar fixed="top" toggleable="lg" type="" variant="">
           <b-container class="mx-5 px-5">
           <b-navbar-brand class="text-white" href="#">{{msg}}</b-navbar-brand>
           <b-navbar-toggle target="nav_collapse"/>
           <b-collapse is-nav id="nav_collapse">
             <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <small>
              <font-awesome-icon :icon="['fas','calendar']" size="lg" /> Components0
              </small>
                </b-nav-item>
            <b-nav-item href="#">
                  <small>
              <font-awesome-icon :icon="['fas','circle']" size="lg" /> Section
                  </small>
                </b-nav-item>
            <b-nav-item href="#">
               <small>
              <font-awesome-icon :icon="['fas','square']" size="lg" /> Example 
               </small>
              </b-nav-item>
         
            </b-navbar-nav>
          </b-collapse>
         </b-container>
       </b-navbar>
     </div>
       <!-- Navigation Bar -->
       <div class="mt-5 pt-5">
        <b-container>
           <div class="mt-3 my-5">
          <b-row>
          <div class=" mt-5 pt-5 ml-5 mr_5 text-white text-center">
            <h2 class="font-weight-bolder">About Us.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius natus. Eius
               Eligendi, eius natus. Eius orem Ipsum is simply dummy text of the printing 
                            
            </p>
          
          </div>
          </b-row>
            </div>
        </b-container>
       </div>
      </b-jumbotron>
    </div>
  </div>
</template>	

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
.navbar-nav {
 .nav-link {
      color: white;
  }
}
.top-jumbotron {
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/back.jpg");
  background-size: cover;
  margin-top: -110px;
}
.navbar{
background-color: #04172745;
}
</style>

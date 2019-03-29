<template>
  <div>
    <div>
      <b-jumbotron class="p-0 top-jumbotron">
        <!-- Navigation Bar -->
       <div>
          <b-navbar fixed="top" toggleable="lg" type="dark" variant="">
           <b-container class="mx-5 px-5">
           <b-navbar-brand class="text-white" href="#">{{msg}}</b-navbar-brand>
           <b-navbar-toggle target="nav_collapse"/>
           <b-collapse is-nav id="nav_collapse">
             <b-navbar-nav class="ml-auto ">
   
            <b-nav-item href="#">
              <small>
              <font-awesome-icon :icon="['fas','calendar']" size="lg" /> Components &#9660; &nbsp;
              </small>
                </b-nav-item>
           
            <b-nav-item href="#">
                  <small>
              <font-awesome-icon :icon="['fas','circle']" size="lg" /> Section &#9660; &nbsp;
                  </small>
                </b-nav-item>
       
            <b-nav-item href="#">
               <small>
              <font-awesome-icon :icon="['fas','square']" size="lg" /> Example &#9660;
               </small>
              </b-nav-item>
         
            </b-navbar-nav>
          </b-collapse>
         </b-container>
       </b-navbar>
     </div>
       <!-- Navigation Bar -->
       <div class="mt-5 pt-4">
        <b-container>
           <div class="mt-3 my-5">
          <b-row>
          <div class=" mt-5 pt-5 ml-5 mr_5 text-white text-center">
            <span class="about-style font-weight-bolder">About Us.</span>
             <div class="mx-5 px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius natus. Eius
               Eligendi, eius natus. Eius orem
                         
            </p>
          </div>   
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
 .nav-dark {
   .navbar-nav {
.nav-item{
      color:#fff !important;
    }
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
.about-style
{
  font-size: 2.4rem;
}
.nav-dark{
  .nav-link{
.nav-item:hover
{
  color:#fff !important;
}
}
}
</style>

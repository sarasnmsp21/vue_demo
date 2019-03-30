<template>
  <div>
    <div>
      <b-jumbotron class="p-0 top-jumbotron">
        <!-- Navigation Bar -->
       <div>
          <b-navbar fixed="top" toggleable="lg" type="dark" variant="">
           <b-container class="mx-5 px-5">
           <b-navbar-brand class="text-white logo" href="#"  v-scroll-to="'#head'">{{msg}}</b-navbar-brand>
           <b-navbar-toggle target="nav_collapse"/>
           <b-collapse is-nav id="nav_collapse">
             <b-navbar-nav class="ml-auto " >
   
            <b-nav-item href="#"  v-scroll-to="'#components'">
              <small>
              <font-awesome-icon :icon="['fas','th']" size="lg" /> Components &#9660; &nbsp;
              </small>
            </b-nav-item>
           
            <b-nav-item href="#" v-scroll-to="'#section'">
                  <small>
              <font-awesome-icon :icon="['fas','dumbbell']" size="lg" /> Section &#9660; &nbsp;
                  </small>
                </b-nav-item>
      
            <b-nav-item href="#" v-scroll-to="'#example'">
               <small>
              <font-awesome-icon :icon="['fas','envelope-open-text']" size="lg" /> Example &#9660;
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
          <div class=" mt-5 pt-5 mx-5 px-5 text-white text-center">
            <span class="about-style font-weight-bolder">About Us</span>
             <div class="mx-5 ">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius natus. Eius
               Eligendi eius natus eius natus. 
                         
            </div>
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

<style lang="scss">
 @import "../assets/scss/Material-Kit/material.scss";
</style>

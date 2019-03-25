<template>
<!-- created by ram -->
  <div>
    <b-navbar fixed="top" toggleable="lg" type="" variant="">
      <b-container class="mx-5 px-5">
        <b-navbar-brand class="text-white" href="#">{{ msg }}</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.navbar-nav {
  background-color: rgba(0, 0, 0, 0.075) !important;

  .nav-link {
      color: white;
  }
}

</style>

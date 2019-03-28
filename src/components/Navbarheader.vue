<template>
  <!-- created by ram -->
  <div>
    <b-navbar id="mainnav" fixed="top" toggleable="lg" type variant>
      <b-container class="addpadding">
        <b-navbar-brand class="text-white" href="#">{{ msg }}</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <slot name="navlinks"></slot>
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
    msg: String,
    newclass: String
  }
};
</script>

<style lang="scss">
.navbar-nav {
  .nav-link {
    color: white;
  }
}

#mainnav {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

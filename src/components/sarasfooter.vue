<template>
  <div>
    <footer show variant="light py-5">
      <b-container>
        <b-row>
          <b-col md="2">
            <h3>{{brandnm}}.</h3>
          </b-col>
          <b-col md="10">
            <b-row>
              <b-col md="3" sm="6" cols="6">
                <h4 class="h6 text-left">
                  <b>Address</b>
                </h4>
                <address>
                  <ul class="text-secondary text-left">
                    <li>
                      City Hall
                      <br>212 Street
                      <br>Lawoma
                      <br>735
                      <br>
                    </li>
                  </ul>
                </address>
              </b-col>
              <b-col md="3" sm="6" cols="6">
                <h4 class="h6">
                  <b>Popular Services</b>
                </h4>
                <ul class="text-left">
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Payment Center</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Contact Directory</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Forms</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">News and Updates</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">FAQs</a>
                  </li>
                </ul>
              </b-col>
              <b-col md="3" sm="6" cols="6">
                <h4 class="h6">
                  <b>Website Information</b>
                </h4>
                <ul class="text-left">
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Website Tutorial</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Accessibility</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">FAQs</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Webmaster</a>
                  </li>
                </ul>
              </b-col>
              <b-col md="3" sm="6" cols="6">
                <h4 class="h6">
                  <b>Company</b>
                </h4>
                <ul class="text-left">
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Our team</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">About</a>
                  </li>
                  <li>
                    <a class="text-secondary border-bottom footer-text" href="#">Contact</a>
                  </li>
                  <li>
                    <a
                      class="text-secondary border-bottom footer-text"
                      href="#"
                      target="_blank"
                    >Purchase</a>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="text-center text-sm">
              <p class="mb-1 pb-2">
                &copy; 2018
                <a class="text-secondary border-bottom footer-text" href="#">
                  Robust UI
                  Kit
                </a>.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footers",
  props: {
    brandnm: String
  }
};
</script>

<style lang="scss">
.footer-text {
  text-decoration: none !important;
}
ul {
  list-style: none;
}
</style>

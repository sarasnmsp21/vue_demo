<!--Created by saraswati-->
<template>
  <div>
    <footer show variant="light py-5">
      <b-container>
        <b-row>
          <b-col md="2" sm="12" class="mx-auto mb-3">
            <div class="font-weight-bold footer-heading">{{brandnm}}</div>
          </b-col>
          <b-col md="10">
            <b-row>
              <b-col md="2" sm="6" cols="6">
                <address class="pl-5">
                  <div class="text-left">
                    <div class="font-weight-bold">Address</div>
                    <p class="text-secondary">
                      City Hall
                      <br>212 Street
                      <br>Lawoma
                      <br>735
                    </p>
                  </div>
                </address>
              </b-col>
              <b-col md="3" sm="6" cols="6">
                <div class="text-left pl-5">
                  <div class="font-weight-bold footer-column-title">Popular Services</div>
                  <ul class="text-left p-0">
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Payment Center</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Contact Directory</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Forms</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">News and Updates</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col md="3" sm="6" cols="6">
                <div class="text-left pl-5">
                  <div class="font-weight-bold footer-column-title">Website Information</div>
                  <ul class="text-left p-0">
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Website Tutorial</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Accessibility</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Disclaimer</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">FAQs</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Webmaster</a>
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col md="3" sm="6" cols="6">
                <div class="text-left pl-5">
                  <div class="font-weight-bold footer-column-title">Company</div>
                  <ul class="text-left p-0">
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Our team</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">About</a>
                    </li>
                    <li>
                      <a class="text-secondary bottom-border footer-text" href="#">Contact</a>
                    </li>
                    <li>
                      <a
                        class="text-secondary bottom-border footer-text"
                        href="#"
                        target="_blank"
                      >Purchase</a>
                    </li>
                  </ul>
                </div>
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
                &copy; 2019
                <a class="text-secondary border-bottom footer-text" href="#">
                  Material
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
.bottom-border {
  border-bottom: 2px solid #80808040;
}
.footer-heading {
  font-size: 22px;
}
</style>

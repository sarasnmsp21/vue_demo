<!--Created by saraswati-->
<template>
  <div class="container-fluid">
    <div class="row">
      <div id="myCarousel" class="carousel slide mt-5 pt-3" data-ride="carousel">
        <ol class="carousel-indicators ">
          <li data-target="#myCarousel" data-slide-to="0" class="active pointer-caurosel"></li>
          <li data-target="#myCarousel" data-slide-to="1" class="pointer-caurosel"></li>
          <li data-target="#myCarousel" data-slide-to="2" class="pointer-caurosel"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="block-color text-white">
              <div class="col-md-8 mx-auto py-5">
                <div class="media">
                  <figure>
                    <b-img
                      :src="test"
                      alt="testimonial"
                      class="img-fluid rounded-circle mr-4"
                      style="max-width:110px;"
                    />
                  </figure>
                  <div class="media-body">
                    <blockquote
                      class="h3 mt-3 para-text-size font-weight-normal text-left"
                    >“I can only recommend both this theme and the competent developer behind it to other people. Quick & helpful support! ”</blockquote>
                    <div class="text-left">
                      <span>Jane Roe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-primary text-white">
              <div class="col-md-10 mx-auto py-5">
                <div class="media">
                  <figure>
                    <img
                      src="images/img14.JPG"
                      alt="testimonial"
                      class="img-fluid rounded-circle mr-4"
                      style="max-width:120px;"
                    >
                  </figure>
                  <div class="media-body">
                    <blockquote
                      class="h3 para-text-size mt-3 font-weight-normal"
                    >“I can only recommend both this theme and the competent developer behind it to other people. Quick & helpful support! ”</blockquote>
                    <span>Jane Roe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row bg-primary text-white">
              <div class="col-md-10 mx-auto py-5">
                <div class="media">
                  <figure>
                    <img
                      src="images/img14.JPG"
                      alt="testimonial"
                      class="img-fluid rounded-circle mr-4"
                      style="max-width:120px;"
                    >
                  </figure>
                  <div class="media-body">
                    <blockquote
                      class="h3 mt-3 font-weight-normal para-text-size"
                    >“I can only recommend both this theme and the competent developer behind it to other people. Quick & helpful support! ”</blockquote>
                    <span>Jane Roe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/img15.png";
export default {
  data() {
    return {
      test: image
    };
  }
};
</script>

<style lang="scss">
.para-text-size {
  font-size: 22px;
}
.block-color {
  background-color: #2680d4;
}
.pointer-caurosel
{
      margin-right: 10px !important;
    margin-top: -51px;
}
</style>



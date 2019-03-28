<!--Created by saraswati-->
<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div id="myCarousel" class="carousel slide mt-5 pt-3  " data-ride="carousel">
        <ol class="carousel-indicators ">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="bg-primary text-white">
              <div class="col-md-9 mx-auto py-5">
                <div class="media">
                  <figure>
                    <img src="assets/img14.JPG" alt="testimonial" class="img-fluid rounded-circle mr-4" style="max-width:128px;" />
                  </figure>
                  <div class="media-body text-left">
                    <blockquote class="h3 mt-3  font-weight-normal">
                      “I can only recommend both this theme and the competent developer behind it to other people. Quick & helpful support! ”
                    </blockquote>
                    <span >Jane Roe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-primary text-white">
              <div class="col-md-10 mx-auto py-5 ">
                <div class="media">
                  <figure>
                    <img src="images/img14.JPG" alt="testimonial" class="img-fluid rounded-circle mr-4" style="max-width:128px;" />
                  </figure>
                  <div class="media-body">
                    <blockquote class="h3 mt-3 font-weight-normal">
                      “I can only recommend both this theme and the competent developer behind it to other people. Quick & helpful support! ”
                    </blockquote>
                    <span>Jane Roe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row bg-primary text-white">
              <div class="col-md-10 mx-auto py-5 ">
                <div class="media">
                  <figure>
                    <img src="../assets/img14.png" alt="testimonial" class="img-fluid rounded-circle mr-4" style="max-width:128px;" />
                  </figure>
                  <div class="media-body">
                    <blockquote class="h3 mt-3 font-weight-normal">
                      “I can only recommend both this theme and the competent developer behind it to other people. Quick & helpful support! ”
                    </blockquote>
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
import image from "../assets/img14.png"
export default {
        data() {
            return {
                test: [{
                        testimonial: images1
                    },
                    {
                        testimonial: images2
                    }
                ]
            }
        },
};
</script>


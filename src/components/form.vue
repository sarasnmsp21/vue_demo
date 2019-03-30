<template>
      <!--form-->
                             <div class=" mb-5">
                              <form class="text-center pb-5">
                               <b-row>
                                  <b-col md="2"></b-col>
                                  <b-col md="8">
                                  <div class="form-row ">
                                    <b-col md="4">
                                      <input type="text" class="form-control" placeholder="Name">
                                    </b-col>
                                    <b-col md="4">
                                      <input type="text" class="form-control" placeholder="Email">
                                    </b-col>
                                    <b-col md="4">
                                        <select class="custom-select " id="inlineFormCustomSelect">
                                            <option selected="">I am a designer</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                         
                                    </b-col>
                         
                                  </div>
                                  </b-col>
                                  <b-col md="2"></b-col>

                              </b-row>
                                  <div class="but-style pt-4">
                                  <button type="submit" class="rounded-pill btn px-4 py-2 text-white text-center"><small>LETS TALK</small></button>
                                
                                </div></form>
                             </div>
                               <!--form-->
</template>

<style lang="scss">
.form-control
{
  border-left-style: none !important;
  border-right-style: none !important;
  border-top-style: none !important;
  border-bottom-style: 1px solid #000 !important;
}
.custom-select
{
  border-left-style: none !important;
  border-right-style: none !important;
  border-top-style: none !important;
  border-bottom-style: 1px solid #000 !important;
  
}
.btn
{
 background-color:  #9c27b0 !important;
}
</style>

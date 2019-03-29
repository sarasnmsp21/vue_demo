<template>
      <!--prod-para-->
      <b-container>
                         <b-row>
                              <b-col md="2" sm="12"></b-col>
                      
                            
                           <b-col md="8" sm="12">
                         <div class="prod-para my-5">
                            
                            <slot name="heading"></slot>
                            <slot name="paragraph"></slot>
                          </div>
                           </b-col>

                          <b-col md="2" sm="12"></b-col>
                         </b-row>
      </b-container>
                        <!--prod-para-->
</template>

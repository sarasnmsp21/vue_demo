<!--Created by saraswati-->
<template>
  <div class="section2-top-padding">
    <b-col lg="12">
      <b-row>
        <b-col md="8" class="mx-auto">
          <b-row>
            <b-col md="4" class="ml-auto text-left p-0">
              <slot name="h2text"></slot>
            </b-col>
            <b-col md="6" class="text-left">
              <div class="text-dark">
                <slot name="paratext"></slot>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<style lang="scss" scoped>
.section2-top-padding {
  padding-top: 5rem;
}
</style>



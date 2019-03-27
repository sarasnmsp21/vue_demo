<template>
    <div class="slides">
        <div v-bind:style="{width :innerwidth +'px'}" class="slides-inner">
            <style v-for="slide in slides" v-bind:style="{width :singlwwidth +'px'}" v-bind:key="slide.index"></style>
        </div>
    </div>
</template>
<script>
import slide from './slides';

export default {
    data(){
        return{
            slides:[
                {src:'../assests/img20.JPG"'},
                {src:'../assests/img20.JPG"'},
                {src:'../assests/img20.JPG"'}
            ],
            innerwidth:0,
            slidewidth:0
        }
    },
    props:{
        itemsPerSlide:{
            type:null,
            default:1
        }
    },
   
    attached(){
        let singlWidth=this.$el.clientWidth/this.itemsPerSlide
        this.$set('singleWidth', singleWidth)
        this.$set('innerWidth', singleWidth * this.slides.length)

    }
};
</script>


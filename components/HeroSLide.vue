<template>
    <b-carousel-slide>
        <b-container>
            <b-row class="justify-content-around flex-md-row flex-column-reverse">
                <b-col md="12 text-center">
                    <a href=""><img class="img" :src="imgUrl" alt="carousel content"></a>
                </b-col>
            </b-row>
        </b-container>
    </b-carousel-slide>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    props: ['slide'],
    computed:{
        ...mapGetters({
            width: 'getWindowWidth',
        }),
        imgUrl() {
            return (this.width && this.width < 767) ? this.slide.mobile_image.url : this.slide.image.url;
        },
    },
}
</script>
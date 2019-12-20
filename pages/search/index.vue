<template>
    <div>
        <div class="top-space">

        </div>
        <b-container>
            <div class="article-content bg-white">
                <b-row>
                    <b-col lg="7" xl="8" class="blog-box article-content-wrapper">
                        <div class="article-title">
                            <h2 class="inner-main-title title-color">Search Results for: {{searchFor}}</h2>
                            <div class="divide"></div>
                        </div>

                        <article class="blog-post"
                            v-for="(item,index) in searchList"
                            :key="index">
                            <h2 class="blog-post__title" v-html="item.title" />
                            <div class="blog-post__date">
                                <i class="icon-fa text-success text-sm"><fa :icon="fas.faCalendarAlt" /></i>
                                <span class="main-blog-post-date">{{item.date}}</span>
                            </div>
                            <img class="img img-fluid mb-5" 
                                v-if="item.embedded['wp:featuredmedia']"
                                :src="item.embedded['wp:featuredmedia']['0'].source_url" alt="blog post image">
                            <img v-else class="img img-fluid mb-5" src="~/assets/img/adult-cutting-daylight-facial-expression.jpg" alt="blog post image">
                            <p class="main-blog-excerpt mb-4" v-html="item.excerpt" />
                            <div class="text-right">
                                <a :href="item.link" class="btn btn-default btn-lg btn-r btn-success btn-w-shadow text-capitalize">Read More <fa :icon="fas.faArrowRight"/></a>
                            </div>
                        </article>

                        <div class="overflow-auto">
                            <pagination
                                v-if="searchList"
                                @changePage="changePage"
                                :currentPage="currentPage"
                                :totalPages="totalPages"/>
                        </div>
                    </b-col>

                    <search :zipcodeList="zipcodeList" @onSearch="onSearch"/>

                </b-row>
            </div>
        </b-container>
    </div>

</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import Search from '~/components/Search'
import Pagination from '~/components/Pagination'

export default {
    async asyncData ({ params }) {
        try {
            let { data: zipcodeList } = await axios.get(`https://cdn.alternativemedia.com.au/geodata.json`);

            zipcodeList = zipcodeList.map(item => {
            return item.join(' ');
        });

        return { zipcodeList}
        } catch (e) {
        return { sections: [], zipcodeList: [] }
        }
    },
    components: {
        Search,
        Pagination,
    },
    data() {
        return {
            searchFor: '',
            categorySelect: 'default',
            text: '',
            perPage: 3,
            currentPage: 1,
            perPage: 2,
        }
    },
    watch: {
        async $route(r) {
            this.searchFor = r.query.s || '';
            await this.veiwSearchList({ search: this.searchFor, page:  this.currentPage});
        }
    },
    computed: {
        ...mapGetters({
            searchList: 'getSearchList',
            totalPages: 'totalPages',
        }),
        fas () {
            return fas
        },
        fab () {
            return fab
        },
        // hasThumbnail: function(post) {
        //     if (post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes){
        //     return  post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail;}
        // },
    },
    async created(){
        this.searchFor = this.$route.query.s || '';
        await this.veiwSearchList({ search: this.searchFor, page:  this.currentPage});
    },
    methods: {
        ...mapActions({
            veiwSearchList: 'getSearchList',
            getNumPosts: 'getNumPosts',
        }),
        toSearch() {
            this.searchFor = this.text;
            this.$router.push({name: 'search', query: {s: this.text}})
        },
        onSearch(v) {
            this.searchFor = v;
        },
        changePage(v) {
            this.currentPage = v;
            this.veiwSearchList({ search: this.searchFor, page:  this.currentPage});
        }
    }
}
</script>

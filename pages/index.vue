<template>
  <div class="homepage">
    <header class="header">
        <b-container class="text-center">
          <h1 class="header__title">{{getSectionTitle(0)}}</h1>
          <b-row>
            <b-col md="12">
              <b-form class="row header__form">
                <b-col md="4" class="p-0">
                  <i class="fa-icon">
                    <fa :icon="fas.faChevronDown"/>
                  </i>
                  <b-form-select v-model="compareSelect" class="form-control">
                    <option value="a">Enter your Life Stage</option>
                    <option value="b">Single</option>
                    <option value="c">Couple</option>
                    <option value="d">Family</option>
                    <option value="e">Single Parent Family</option>
                  </b-form-select>
                </b-col>
                <b-col md="4" class="p-0">
                  <span class="tooltip-help" id="tooltip-help">
                    <fa :icon="fas.faQuestionCircle"/>
                  </span>                      
                  <b-tooltip target="tooltip-help" triggers="hover">
                    enter address in this format (e.g: Campbell, ACT, 2612)
                  </b-tooltip>
                  <vue-bootstrap-typeahead
                    v-model="query"
                    :data="zipcodeList"
                    placeholder="Enter Suburb or Postcode"
                    class="typeahead"/>
                </b-col>
                <b-col md="4" class="p-0">
                  <b-button type="submit" variant="success">Compare Quotes <fa :icon="fas.faLongArrowAltRight"/></b-button>
                </b-col>
              </b-form>
            </b-col>
          </b-row>
        </b-container>
    </header>

    <section class="home-carousel-wrap bg-light">
      <b-container fluid>
        <b-row>
          <b-col md="12" class="p-0">
            <b-carousel
              id="home-carousel"
              class="home-carousel"
              v-model="slide"
              :interval="5000"
              indicators
              fade
            >
              <hero-slide v-for="(slide, index) in this.sections[0].hero_slides" 
                        :key="index + 's_1'" 
                        :slide="slide"
                        :index="index"/>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-white">
      <b-container>
        <div class="section-header text-center">
          <h2 class="title-color">{{getSectionTitle(1)}}</h2>
        </div>
        <b-row>
          <service v-for="(service, index) in services" 
                  v-bind:key="index"
                  :img="service.icon.url || null"
                  :title="service.title"
                  :content="service.content"/>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-light">
      <b-container>
        <b-row>
          <b-col md="4" lg="3">
            <div class="rating-card h-100 d-flex flex-column justify-content-between">
              <h3 class="text-white m-0">OUR RATING</h3>
              <h2 class="text-white m-0">4.6 <small>/5</small></h2>
              <ul class="list-unstyled m-0 rating-stars">
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
                <li>
                  <i class="fa-icon">
                    <fa :icon="fas.faStar"/>
                  </i>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col md="8" lg="9">
            <b-carousel
              id="h-testimonial"
              class="h-testimonial"
              v-model="slide"
              :interval="3000"
              indicators
            >
              <i class="fa-icon d-block mb-3 text-white">
                <fa :icon="fas.faQuoteLeft"/>
              </i>
              <review v-for="(slide, index) in sections[1].reviews" 
                    :key="index + 's_2'"
                    :content="slide.content"
                    :author="slide.author"/>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-white">
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="desc-card d-flex flex-column h-100 bg-white text-center">
              <h2 class="title-color m-0">{{getSectionTitle(2)}}</h2>
              <p class="text-muted mt-4 mb-3">{{getContent(2)}}</p>
              <a href="" class="btn btn-default btn-lg btn-success mt-auto">Compare Quotes <fa :icon="fas.faLongArrowAltRight"/></a>
            </div>
          </b-col>
          <b-col md="6">
            <div class="desc-card d-flex flex-column h-100 bg-white text-center border-0">
              <h2 class="title-color m-0">{{getSectionTitle(3)}}</h2>
              <p class="text-muted mt-4 mb-3">{{getContent(3)}}</p>
              <a href="" class="btn btn-default btn-lg btn-success mt-auto">Compare Quotes <fa :icon="fas.faLongArrowAltRight"/></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-light">
      <b-container>
        <b-row>
          <b-col sm="12" md="12" lg="6" class="mb-lg-0 mb-4">
            <div class="youtube-video">
              <iframe width="100%" height="270" :src="sections[4].video_embed_url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </b-col>
          <b-col sm="12" md="6" lg="3" class="mb-md-0 mb-4">
            <a href="#" class="post-card d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/iphone-technology.jpg')` }" ></div>              
              <div class="post-card__cover"></div>
              <div class="post-card__content">
                <span>Guide</span>
                <p class="text-white m-0">Is Medicare Enough? Public vs. Private Health Care: Know Which is Right for You</p>
              </div>
            </a>
          </b-col>
          <b-col sm="12" md="6" lg="3">
            <a href="#" class="post-card d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/accurate-alarm.jpg')` }" ></div>              
              <div class="post-card__cover"></div>
              <div class="post-card__content">
                <span>Guide</span>
                <p class="text-white m-0">Private Health Insurance: Can You Avoid the Waiting Period?</p>
              </div>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section bg-white">
      <b-container>
        <div class="section-header text-center">
          <h2 class="title-color">{{getSectionTitle(5)}}</h2>
          <p class="text-muted">{{getSubheading(5)}}</p>
        </div>
        <b-row>
          <b-col md="4">
            <a href="" class="post-card post-card-lg d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/photo-of-woman-wearing-round.jpg')` }" ></div>
              <div class="post-card__content">
                <h5 class="text-white text-sm">June 2019</h5>
                <div class="title-box">
                  <small class="font-weight-bold text-muted">Article</small>
                  <p class="text-muted text-sm mt-3">Need prescription glasses? The right health cover can help you save big on optical</p>
                </div>
              </div>
            </a>
          </b-col>
          <b-col md="4" class="d-md-block d-none">
            <a href="" class="post-card post-card-lg d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/man-looking-at-postcards.jpg')` }" ></div>
              <div class="post-card__content">
                <h5 class="text-white text-sm">June 2019</h5>
                <div class="title-box">
                  <small class="font-weight-bold text-muted">Article</small>
                  <p class="text-muted text-sm mt-3">The Medicare Rebate Freeze: How To Avoid Increasing Out-Of-Pocket Fees</p>
                </div>
              </div>
            </a>
          </b-col>
          <b-col md="4" class="d-md-block d-none">
            <a href="" class="post-card post-card-lg d-block">
              <div class="post-card__img" :style="{ backgroundImage: `url('/adult-cutting-daylight-facial-expression.jpg')` }" ></div>
              <div class="post-card__content">
                <h5 class="text-white text-sm">June 2019</h5>
                <div class="title-box">
                  <small class="font-weight-bold text-muted">Health & Lifestyle</small>
                  <p class="text-muted text-sm mt-3">10 Signs something is wrong with your thyroid</p>
                </div>
              </div>
            </a>
          </b-col>
          <b-col md="12" class="text-center mt-5">
            <a href="#" class="btn btn-default btn-success btn-lg">View all <fa :icon="fas.faLongArrowAltRight"/></a>
          </b-col>  
        </b-row>
      </b-container>
    </section>
    <section class="section bg-light">
      <b-container>
        <div class="section-header text-center">
          <h2 class="title-color">{{getSectionTitle(6)}}</h2>
          <p class="text-muted">{{getSubheading(6)}}</p>
        </div>
        <b-row>
          <b-col md="4" class="mb-4" v-for="(benefit, index) in sections[7].benefit_tags"
                :key="index + 'b'">
            <div class="benefits-tag text-center h-100">
              <img src="../assets/img/icon-check.png" alt="benefits icon" width="38" height="38"/>
              <h4 class="title-color">{{benefit.title}}</h4>
              <p class="text-muted m-0">{{benefitContent(benefit.content)}}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

import Service from '~/components/Service';
import Review from '~/components/Review';
import HeroSlide from '~/components/HeroSlide';

export default {
  async asyncData ({ params }) {
    try {
      let { data } = await axios.get(`https://healthinsurancecomparison.com.au/wp-json/wp/v2/pages/?slug=home-old&_embed`);
      
      data = data[0].acf.homepage_sections;

      return { sections: data }
    } catch (e) {
      return { sections: []}
    }
  },
  components: {
    Service,
    Review,
    HeroSlide,
  },
  data: () => {
    return {
      compareSelect: 'a',
      text: '',
      slide: 1,
      query: null,
    }
  },
  computed: {
    ...mapGetters({
      zipcodeList: 'getZipcodeList'
    }),
    fas () {
        return fas
    },
    fab () {
        return fab
    },
    headerTitle() {
      return this.removeTags(this.sections[0].title);
    },
    services() {
      return this.sections[1].services;
    },
  },
  async created() {
    await this.viewZipcodeList();
  },
  methods: {
    ...mapActions({
      viewZipcodeList: 'getZipcodeList',
    }),
   carouselImg(slide) {
     return slide.image.url;
   },
   getSectionTitle(index) {
     let title = this.sections[index].section_title || this.sections[index].title;
     return this.$removeHtmltags(title);
   },
   getContent(index) {
     return this.$getInnerHtml(this.sections[index].content)
   },
   getSubheading(index) {
     return this.sections[index].subheading;
   },
   benefitContent(content) {
     return this.$removeHtmltags(content);
   }
  }
}
</script>

<style lang="scss">
  
</style>

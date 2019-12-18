<template>
    <b-col lg="5" xl="4" class="category-wrapper">
        <b-form class="search-box">
            <h4 class="text-white text-uppercase mt-0">Search</h4>
            <b-input-group>
                <b-form-input 
                    v-model="text"
                    placeholder="Enter keyword..."></b-form-input>
                <b-input-group-append>
                    <b-button variant="success" class="text-sm" @click="() => toSearch()">
                        <fa :icon="fas.faSearch"/>
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form>

        <b-form class="compare-s-box">
            <h4 class="text-white mt-0">Compare health insurance quotes.</h4>
            <b-input-group :class="{'hasError' : isCategoryRequred}">
                <i class="fa-icon text-sm">
                    <fa :icon="fas.faUser"/>
                </i>
                <b-form-select v-model="categorySelect">
                    <option value="default">Life Stage...</option>
                    <option value="a">Single</option>
                    <option value="b">Couple</option>
                    <option value="c">Family</option>
                    <option value="d">Single Parent Family</option>
                    <option value="e">Family + Young Aduls</option>
                </b-form-select>
                <i class="fa-icon text-sm">
                    <fa :icon="fas.faChevronDown"/>
                </i>
            </b-input-group>
            
                <vue-bootstrap-typeahead
                    v-model="query"
                    :data="zipcodeList"
                    placeholder="Enter Suburb or Postcode"
                    :class="{'hasError' : isSearchRequred}"
                    class="typeahead">
                
                    <template v-slot:prepend>
                        <b-input-group-text><fa :icon="fas.faMapMarker"/></b-input-group-text>
                    </template>
                    
                </vue-bootstrap-typeahead>     
            <b-input-group>
                <b-button 
                    variant="success" 
                    class="btn-default btn-block btn-r text-capitalize"
                    @click="startSearch">Start Search</b-button>
            </b-input-group>
            <div class="compare-phone text-center">
                <span class="d-block text-sm text-white">Prefer to talk? Call us at:</span>
                <a class="text-white d-block" href="tel:1300 163 402"><i class="icon-fa d-inline-block bg-white"><fa :icon="fas.faPhoneAlt"/></i>1300 163 402</a>
            </div>
        </b-form>

        <h3 class="blog-category-heading text-uppercase title-color">Popular posts</h3>
        <hr>
        <div class="popular-post">
            <div class="media d-flex align-items-center">
                <div class="media__image">
                    <img src="~/assets/img/user.png" alt="media image" width="50" height="50">
                </div>
                <div class="media__content">
                    <small class="text-success">Tuesday, December 3, 2019</small>
                    <h5 class="text-sm m-0">What to buy a health nut for Christmas in 2019</h5>
                </div>
            </div>
            <div class="media d-flex align-items-center">
                <div class="media__image">
                    <img src="~/assets/img/user.png" alt="media image" width="50" height="50">
                </div>
                <div class="media__content">
                    <small class="text-success">Tuesday, December 3, 2019</small>
                    <h5 class="text-sm m-0">What to buy a health nut for Christmas in 2019</h5>
                </div>
            </div>
            <div class="media d-flex align-items-center">
                <div class="media__image">
                    <img src="~/assets/img/user.png" alt="media image" width="50" height="50">
                </div>
                <div class="media__content">
                    <small class="text-success">Tuesday, December 3, 2019</small>
                    <h5 class="text-sm m-0">What to buy a health nut for Christmas in 2019</h5>
                </div>
            </div>
        </div>

    </b-col>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

export default {
    props: ['zipcodeList'],
    data() {
        return {
            categorySelect: 'default',
            text: '',
            zipcode: null,
            query: '',
            placeholder: 'Enter Suburb or Postcode',
            isSearchRequred: false,
            isCategoryRequred: false,
        }
    },
    computed: {
        fas () {
            return fas
        },
        fab () {
            return fab
        },
        rows() {
            return this.items.length
        }
    },
    methods: {
        toSearch() {
            this.$emit("onSearch", this.text);
            this.$router.push({name: 'search', query: {s: this.text}})
        },
        startSearch() {            
            if(!this.query || !this.categorySelect) { 
                this.isSearchRequred = true;
                this.isCategoryRequred = true;
                return
            }
            this.isSearchRequred = false;
            this.isCategoryRequred = false;
        }
    }
}
</script>
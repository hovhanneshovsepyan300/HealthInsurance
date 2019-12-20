<template>
    <div class="about-us">
        <div class="top-space">

        </div>
        <b-container>
            <div class="article-content bg-white">
                <b-row>
                    <b-col lg="7" xl="8" class="blog-box">
                        <div class="article-title">
                            <h2 class="inner-main-title title-color">About</h2>
                            <div class="divide"></div>
                        </div>
                        <div  v-html="content">

                        </div>
                        <!-- <div class="mb-5">
                            <div class="article-title">
                                <h2 class="title-color">About</h2>
                                <div class="divide"></div>
                            </div>
                            <p>Health Insurance Comparison gives you the low down on all things relevant to Australian Health Insurance. Whether you’re just trying to get an idea of the market in general or you have a specific policy in mind, we’ll help you find what you’re looking for from our panel of Australian funds. Our goal is to provide you with the tools and knowledge you’ll need to thoroughly and decisively compare health insurance policies, whilst also giving you a rundown of other important stuff like medicare, premiums, hospital and extra cover, and much more!</p>
                            <p>Have a good look around our site and check out what’s on offer – your wallet will thank you!</p>
                        </div>
                        <div class="mb-5">
                            <div class="article-title">
                                <h2 class="title-color">Contact</h2>
                                <p>t’s our pleasure to hear your feedback to constantly improve our service.</p>
                            </div>
                            <h4 class="mt-0">General Queries and Feedback</h4>
                            <p>For anything related to general feedback regarding our service or other feedback you may wish to send to us, please email us at: <a href="mailto:info@healthinsurancecomparison.com.au">info@healthinsurancecomparison.com.au</a> and we will endeavour to respond to you as soon as possible.</p>
                            <h4>PR/Marketing Enquiries</h4>
                            <p>If you are interested in contacting us regarding any PR related matters, written articles or other marketing initiatives. Please contact us at: <a href="mailto:info@healthinsurancecomparison.com.au">info@healthinsurancecomparison.com.au</a> or give us a ring on (02) 9291 9700 – Mon-Fri 8am to 8pm AEST.</p>
                            <h4>Write to us</h4>
                            <p>If you would prefer to send a written letter to us encompassing your enquiry and/or feedback please send your letter to the address below and we will do our best to respond to you as soon as we receive it.</p>
                            <p>
                                HealthInsuranceComparison.com.au
                                <br>
                                724-728 George St
                                <br>
                                Haymarket
                                <br>
                                NSW 2000 Australia
                            </p>
                            <h4>PHIIA compliant</h4>
                            <p>We are proudly a signatory to the <a href="http://phiia.com.au/" target="_blank">Private Health Insurance Intermediaries Association (PHIIA)</a> Code of Conduct 2015. This means that we have recently had our processes and procedures reviewed and are fully compliant with the code.</p>
                            <p>This certification confirms our commitment to quality and transparency for our customers, staff and industry.</p>
                        </div> -->
                    </b-col>
                    
                    <search :zipcodeList="zipcodeList"/>

                </b-row>
            </div>
        </b-container>
    </div>

</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from '~/plugins/axios';
import { mapGetters } from 'vuex'
import Search from '~/components/Search'

export default {
    async asyncData ({ params }) {
        try {
            let { data: zipcodeList } = await axios.get(`https://cdn.alternativemedia.com.au/geodata.json`);

            zipcodeList = zipcodeList.map(item => {
                return item.join(' ');
            })

            let { data: content } = await axios.get(`pages/?slug=about-us&_embed`);

            return { content: content[0].content.rendered , zipcodeList}
        } catch (e) {
            return { content: [], zipcodeList: [] }
        }
    },
    components: {
        Search,
    },
    data:() => {
        return {
            categorySelect: 'default',
            text: '',
        }
  },
    computed: {
        fas () {
            return fas
        },
        fab () {
            return fab
        },
    },
}
</script>

<style lang="scss">

</style>

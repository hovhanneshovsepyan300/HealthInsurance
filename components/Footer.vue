<template>
    <div>
        <footer class="footer">
            <section class="compare-banner">
                <b-container>
                <b-row class="row">
                    <b-col md="12" class="d-flex flex-md-row flex-column justify-content-center align-items-center">
                    <h5 class="text-white text-md-right text-center mt-0 mb-2 mr-3">Compare health insurance policies & save</h5>
                    <a href="" class="btn btn-default btn-success">Compare now <fa :icon="fas.faArrowRight"/></a>
                    </b-col>
                </b-row>
                </b-container>
            </section>
            <section class="section-sm bg-white">
                <b-container>
                <b-row>
                    <b-col md="6" lg="3" class="footer__logo">
                    <a href="">
                        <img src="~/assets/img/logo.svg"  width="180" height="41" class="d-inline-block align-top" alt="Logo">
                    </a>
                    <p class="text-sm mt-4">724-728 George St, Sydney <br> New South Wales 2000</p>
                    </b-col>
                    <b-col md="3" lg="2" class="col-6">
                    <ul class="list-unstyled footer__list">
                        <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                        <li><a href="#">Health Funds</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Tools & Calculators</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul> 
                    </b-col>
                    <b-col md="3" lg="2" class="col-6">
                    <ul class="list-unstyled footer__list">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Complaints</a></li>
                    </ul> 
                    </b-col>
                    <b-col md="6" lg="2">
                    <a href="">
                        <img class="d-block mb-md-0 mb-2" src="~/assets/img/6b29f88.jpg"  width="135" alt="about banner">
                    </a>
                    </b-col>
                    <b-col md="6" lg="3">
                    <div class="footer__social d-flex">
                        <a href="https://www.facebook.com/HealthInsuranceComparison"><fa :icon="fab.faFacebookF"/></a>
                        <a href="https://www.instagram.com/healthinsurancecomparison/"><fa :icon="fab.faInstagram"/></a>
                        <a href="https://twitter.com/HIC_AU"><fa :icon="fab.faTwitter"/></a>
                        <a href="https://www.youtube.com/channel/UCyDFGpwMd-9gBlWjzuSJu5w"><fa :icon="fab.faYoutube"/></a>
                    </div>
                    <p class="footer__copyright">© Copyright Health Insurance Comparison 2019. <br> All right reserved.</p>
                    </b-col>
                </b-row>
                </b-container>
            </section>
        </footer>
    </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    fas () {
        return fas
    },
    fab () {
        return fab
    }
  },
}
</script>

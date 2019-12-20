import axios from 'axios';
const dateFormat = require('dateformat');

export const state = () => ({
    windowWidth: 0,
    zipcodeList: [],
    searchList: [],
    baseUrl: 'https://healthinsurancecomparison.com.au/wp-json/wp/v2/posts?_embed',
    perPage: 3,
    totalPages: 1,
    wpFetchHeaders: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': 'x-wp-total'
        }
    }
})

export const getters = {
    getWindowWidth: state => state.windowWidth,
    getZipcodeList: state => state.zipcodeList,
    getSearchList: state => state.searchList,
    totalPages: state => state.totalPages,
}
  
export const mutations = {
    SET_WINDOW_SIZE_CHANGED (state, width) {
        state.windowWidth = width;
    },

    SET_ZIPCODE_LIST(state, data) {
        state.zipcodeList = data;
    },

    SET_SEARCH_LIST(state, data) {
        state.searchList = data;
    },

    SET_TOTAL_PAGES(state, data) {
        state.totalPages = data;
    }
}

export const actions = {
    WINDOW_SIZE_CHANGED({commit}, width) {
        commit('SET_WINDOW_SIZE_CHANGED',width);
    },

    async getZipcodeList({commit}) {
        try {
            let { data } = await axios.get(`http://cdn.alternativemedia.com.au/geodata.json`);

            data = data.map(item => {
                return item.join(' ');
            })

            commit('SET_ZIPCODE_LIST', data)
        } catch (e) {
            return { zipcodeList: [] }
        }
    },

    async getNumPosts({commit}, search) {
        const { data } = await axios.get(`${state.baseUrl}?s=${search}&_embed`)
        console.log('data.lenght', data)
        return data.lenght;
    },

    async getSearchList({commit, state}, { search, page}) {
        try {
            const params = {
                search: search,
                per_page: state.perPage,
                page,
            };

            let { data, headers } = await axios.get(`${state.baseUrl}`, { params } , state.wpFetchHeaders);
            const totalPages = headers['x-wp-totalpages'];

            commit('SET_TOTAL_PAGES', totalPages);
            
            data = data.map(item => {
                return ({
                    title: item.title.rendered,
                    date: dateFormat(item.data, "dddd, mmmm d, yyyy"),
                    excerpt: item.excerpt.rendered,
                    content: item.content.rendered,
                    embedded: item._embedded,
                    link: item.link,
                })
            })

            commit('SET_SEARCH_LIST', data);
        } catch (e) {

        }
    }
}
  
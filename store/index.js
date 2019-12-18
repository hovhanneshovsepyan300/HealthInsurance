import axios from 'axios'

export const state = () => ({
    windowWidth: 0,
    zipcodeList: [],
    searchList: [],
})

export const getters = {
    getWindowWidth: state => state.windowWidth,
    getZipcodeList: state => state.zipcodeList,
    getSearchList: state => state.searchList,
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

    async getSearchList({commit}, search) {
        try {
            let { data } = await axios.get(`https://healthinsurancecomparison.com.au/wp-json/wp/v2/posts?search=${search}`);

            data = data.map(item => {
                return ({
                    title: item.title.rendered,
                    content: item.content.rendered,
                })
            })

            commit('SET_SEARCH_LIST', data);
        } catch (e) {

        }
    }
}
  
import axios from 'axios'

export const state = () => ({
    windowWidth: 0,
    zipcodeList: [],
})

export const getters = {
    getWindowWidth(state) {
        return state.windowWidth;
    },

    getZipcodeList(state) {
        return state.zipcodeList;
    }
}
  
export const mutations = {
    SET_WINDOW_SIZE_CHANGED (state, width) {
        state.windowWidth = width;
    },

    SET_ZIPCODE_LIST(state, data) {
        state.zipcodeList = data;
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
    }
}
  
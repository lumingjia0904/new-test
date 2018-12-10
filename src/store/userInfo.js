export const SET_IMG = "SET_IMG";

export default {
    state: {
        img: 'https://cdn4.buysellads.net/uu/1/3386/1525189909-61450.png',
        info: {
            name: 'hugues',
            age: '18'
        }
    },
    mutations: {
        [SET_IMG](state, img) {
            state.img = img;
        }
    },
    actions:{
        [SET_IMG]({commit},img){
            commit(SET_IMG, img)
        }
    }
}
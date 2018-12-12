export const SET_IMG = "SET_IMG";
export const GET_IMG = "GET_IMG";
export const GET_USER_NAME = "GET_USER_NAME";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_AGE = "SET_AGE";
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
        },
        [SET_USER_NAME](state, name) {
            state.info.name = name + '111'
        },
        [SET_AGE](state, age) {
            state.info.age = age;
        },
        // [CHANGE_NAME](state,age){
            
        // }
    },
    actions: {
        [SET_IMG]({
            commit
        }, img) {
            commit(SET_IMG, img);
        }
    },
    getters: {
        [GET_IMG](state) {
            return state.img;
        },
        [GET_USER_NAME](state) {
            return state.info.age > 20 ? '长大啦' : state.info.name;
        },
    }
}
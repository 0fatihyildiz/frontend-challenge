import Vuex from "vuex";
import axios from "axios";
const mainStore = () => {
  return new Vuex.Store({
    state: {
      dialog: false,
      nftData: [],
      snackbar: {
        show: false,
        text: `Error`,
      },
    },
    mutations: {
      setDialog(state, payload) {
        state.dialog = payload;
      },
      setNft(state, payload) {
        state.nftData = payload;
      },
      setSnackbar(state, payload) {
        state.snackbar = payload;
      }
    },
    actions: {
      async getNft({ commit }, payload) {
        await axios
          .get(`http://localhost:3001/nft/`)
          .then((response) => {
            commit("setNft", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    getters: {
      getDialog(state) {
        return state.dialog;
      },
      gettNft(state) {
        return state.nftData;
      },
      getSnackbar(state) {
        return state.snackbar;
      }
    },
  });
};

export default mainStore;

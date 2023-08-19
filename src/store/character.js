import axios from 'axios';

const state = {
  listCharacters: [],
};

const mutations = {
  SET_CHARACTERS(state, characters) {
    state.listCharacters = characters;
  },
};

const actions = {
  async fetchCharacters({ commit }) {
    try {
      const response = await axios.get('https://hp-api.onrender.com/api/characters');
      commit('SET_CHARACTERS', response.data);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};

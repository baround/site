import axios from "axios";
export const state = () => ({
  content: {
    itinerari: [],
    locali: [],
    chisiamo: [],
    contatti: [],
    credits: [],
    privacy: []
  }
}) 

export const getters = {
  getterValue: state => {
      return state.value
  }
}

export const mutations = {
  updatePosts: (state, itinerari) => {
      state.content.itinerari = itinerari
  },
  updateLocali: (state, locali) => {
      state.content.locali = locali
  },
  updateChisiamo: (state, chisiamo) => {
      state.content.chisiamo = chisiamo
  },
  updateContatti: (state, contatti) => {
      state.content.contatti = contatti
  },
  updateCredits: (state, creditsV) => {
      state.content.credits = creditsV
  },
  updatePrivacy: (state, privacyV) => {
      state.content.privacy = privacyV
  },
}

export const actions = {
  
  async itinerari({ state, commit }) {
    if (state.content.itinerari.length) return
    let axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://be.baround.it/index.php/wp-json/wp/v2/itinerari?page=1&per_page=100'
    };
    
    let itinerari = axios(config)
    .then(
      function(response){
        let resultItinerari=[];
        let itinerariData = response.data;
        itinerariData.forEach((req) => {
          resultItinerari.push(req)
        })
        return resultItinerari
      }
    )
    .then(
      function(resultItinerari){
        commit("updatePosts", resultItinerari);
      }
    )
    .catch(function (error) {
      console.log(error);
    })
  },
  async locali({ state, commit }) {
    if (state.content.locali.length) return
    let axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://be.baround.it/index.php/wp-json/wp/v2/locali?page=1&per_page=100'
    };
    
    let locali = axios(config)
    .then(
      function(response){
        let resultLocali=[];
        let localiData = response.data;
        localiData.forEach((req) => {
          resultLocali.push(req)
        })
        return resultLocali
      }
    )
    .then(
      function(resultLocali){
        commit("updateLocali", resultLocali);
      }
    )
    .catch(function (error) {
      console.log(error);
    })
  },
  async chisiamo({ state, commit }) {
    if (state.content.chisiamo.length) return
    let axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://be.baround.it/index.php/wp-json/wp/v2/pages/253'
    };
    
    let chisiamo = axios(config)
    .then(
      function(response){
        let resultChisiamo=[];
        let chisiamoData = response.data;
        resultChisiamo.push(chisiamoData)
        return resultChisiamo
      }
    )
    .then(
      function(resultChisiamo){
        commit("updateChisiamo", resultChisiamo);
      }
    )
    .catch(function (error) {
      console.log(error);
    })
  },
  async contatti({ state, commit }) {
    if (state.content.contatti.length) return
    let axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://be.baround.it/index.php/wp-json/wp/v2/pages/255'
    };
    
    let contatti = axios(config)
    .then(
      function(response){
        let resultContatti=[];
        let contattiData = response.data;
        resultContatti.push(contattiData)
        return resultContatti
      }
    )
    .then(
      function(resultContatti){
        commit("updateContatti", resultContatti);
        
      }
    )
    .catch(function (error) {
      console.log(error);
    })
  },
  async privacy({ state, commit }) {
    if (state.content.privacy.length) return
    let axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://be.baround.it/index.php/wp-json/wp/v2/pages/3'
    };
    
    let privacyV = axios(config)
    .then(
      function(response){
        let resultPrivacy=[];
        let privacyData = response.data;
        resultPrivacy.push(privacyData)
        return resultPrivacy
      }
    )
    .then(
      function(resultPrivacy){
        commit("updatePrivacy", resultPrivacy);
      }
    )
    .catch(function (error) {
      console.log(error);
    })
  },
  async credits({ state, commit }) {
    if (state.content.credits.length) return
    let axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://be.baround.it/index.php/wp-json/wp/v2/pages/3'
    };
    
    let creditsV = axios(config)
    .then(
      function(response){
        let resultCredits=[];
        let creditsData = response.data;
        resultCredits.push(creditsData)
        return resultCredits
      }
    )
    .then(
      function(resultCredits){
        commit("updateCredits", resultCredits);
      }
    )
    .catch(function (error) {
      console.log(error);
    })
  },
}
 
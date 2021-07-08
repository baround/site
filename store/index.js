import axios from "axios";
export const state = () => ({
  content: {
    itinerari: [],
    posts: [],
    locali: [],
    homepage: [],
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
  updatePosts: (state, posts) => {
      state.content.posts = posts
  },
  updateItinerari: (state, itinerari) => {
      state.content.itinerari = itinerari
  },
  updateLocali: (state, locali) => {
      state.content.locali = locali
  },
  updateHomepage: (state, homepage) => {
      state.content.homepage = homepage
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
  
  async posts({ state, commit }) {
    if (state.content.posts.length) return
    try {
      let posts = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/posts?page=1&per_page=100`,
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
          },
        },
      )
      .then(
        function(res){
          return res.json();
        }
      )
      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, acf, yoast_meta }) => ({
          id,
          slug,
          title,
          acf,
          yoast_meta
        })) 
      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  
  async itinerari({ state, commit }) {
    if (state.content.itinerari.length) return
    try {
      let itinerari = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/itinerari?page=1&per_page=100`,
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
          },
        },
      )
      .then(
        function(res){
          return res.json();
        }
      )
      itinerari = itinerari
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, acf, yoast_meta }) => ({
          id,
          slug,
          title,
          acf,
          yoast_meta
        })) 
      commit("updateItinerari", itinerari)
    } catch (err) {
      console.log(err)
    }
  },
  async locali({ state, commit }) {
    if (state.content.locali.length) return
    try {
      let locali = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/locali?page=1&per_page=100`,
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
          },
        },
      )
      .then(
        function(res){
          return res.json();
        }
      )
      // .then(res => res.json())
      locali = locali
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, acf, yoast_meta }) => ({
          id,
          slug,
          title,
          acf,
          yoast_meta
        }))
      commit("updateLocali", locali)
    } catch (err) {
      console.log(err)
    }
  },
 



  async homepage({ state, commit }) {
    if (state.content.chisiamo.length) return
    try {
      let homepage = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/658`).then(res => res.json())
      commit("updateHomepage", homepage)
    } catch (err) {
      console.log(err)
    }
  },


  async chisiamo({ state, commit }) {
    if (state.content.chisiamo.length) return
    try {
      let chisiamo = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/253`).then(res => res.json())
      commit("updateChisiamo", chisiamo)
    } catch (err) {
      console.log(err)
    }
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
    try {
      
      let privacyV = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/3`,
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
          },
        },
      )
      .then(
        function(res){
          return res.json();
        }
      )
      // .then(res => res.json())
      commit("updatePrivacy", privacyV)
    } catch (err) {
      console.log(err)
    }
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
 
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
    try {
      let itinerari = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/itinerari?page=1&per_page=100`,
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
          },
        }
      ).then(res => res.json())
      itinerari = itinerari
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, acf, yoast_meta }) => ({
          id,
          slug,
          title,
          acf,
          yoast_meta
        })) 
      commit("updatePosts", itinerari)
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
          'User-Agent': '*',
        },
      }
      ).then(res => res.json())
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



  async chisiamo({ state, commit }) {
    if (state.content.chisiamo.length) return
    try {
      let chisiamo = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/253`,
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'User-Agent': '*',
        },
      }
      ).then(res => res.json())
      commit("updateChisiamo", chisiamo)
    } catch (err) {
      console.log(err)
    }
  },

  // async contatti({ state, commit }) {
  //   if (state.content.contatti.length) return
  //   try {
  //     let contatti = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/255`,
  //     {
  //       headers: {
  //         Accept: 'application/json, text/plain, */*',
  //         'User-Agent': '*',
  //       },
  //     }
  //     ).then(res => res.json())
  //     commit("updateContatti", contatti)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },

  // async privacy({ state, commit }) {
  //   if (state.content.privacy.length) return
  //   try {
  //     let privacyV = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/3`,
  //     {
  //       headers: {
  //         Accept: 'application/json, text/plain, */*',
  //         'User-Agent': '*',
  //       },
  //     }
  //     ).then(res => res.json())
  //     commit("updatePrivacy", privacyV)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },


  // async credits({ state, commit }) {
  //   if (state.content.credits.length) return
  //   try {
  //     let creditsV = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/3`,
  //     {
  //       headers: {
  //         Accept: 'application/json, text/plain, */*',
  //         'User-Agent': '*',
  //       },
  //     }
  //     ).then(res => res.json())
  //     commit("updatePrivacy", creditsV)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },


}
 
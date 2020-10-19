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
  updateCredits: (state, credits) => {
      state.content.credits = credits
  },
  updatePrivacy: (state, privacy) => {
      state.content.privacy = privacy
  },
}

export const actions = {
  async itinerari({ state, commit }) {
    if (state.content.itinerari.length) return
    const url_itinerari = 'https://be.baround.it/index.php/wp-json/wp/v2/itinerari?page=1&per_page=100';
    const option_itinerari = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent': '*',
      },
    };
    try {
      // let itinerari = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/itinerari?page=1&per_page=100`.then(res => res.json())
      let itinerari = await fetch(url_itinerari, option_itinerari).then(res => res.json())
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
    const url_local = 'https://be.baround.it/index.php/wp-json/wp/v2/locali?page=1&per_page=100';
    const option_local = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent': '*',
      },
    };
    try {
      // let locali = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/locali?page=1&per_page=100`
      let locali = await fetch(url_local, option_local).then(res => res.json())
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
    const url_chisiamo = 'https://be.baround.it/index.php/wp-json/wp/v2/pages/253';
    const option_chisiamo = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent': '*',
      },
    };
    try {
      // let chisiamo = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/253`).then(res => res.json())
      let chisiamo = await fetch(url_chisiamo, option_chisiamo).then(res => res.json())
      commit("updateChisiamo", chisiamo)
    } catch (err) {
      console.log(err)
    }
  },

  async contatti({ state, commit }) {
    if (state.content.contatti.length) return
    const url_contatti = 'https://be.baround.it/index.php/wp-json/wp/v2/pages/255';
    const option_contatti = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent': '*',
      },
    };
    try {
      // let contatti = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/255`).then(res => res.json())

      let contatti = await fetch(url_contatti, option_contatti).then(res => res.json())
      commit("updateContatti", contatti)
    } catch (err) {
      console.log(err)
    }
  },

  async privacy({ state, commit }) {
    if (state.content.privacy.length) return
    const url_privacy = 'https://be.baround.it/index.php/wp-json/wp/v2/pages/3';
    const option_privacy = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent': '*',
      },
    };
    try {
      // let privacy = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/3`).then(res => res.json())
      let privacy = await fetch(url_privacy, option_privacy).then(res => res.json())
      commit("updatePrivacy", privacy)
    } catch (err) {
      console.log(err)
    }
  },

  async credits({ state, commit }) {
    if (state.content.credits.length) return
    const url_credits = 'https://be.baround.it/index.php/wp-json/wp/v2/pages/485';
    const option_credits = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        'User-Agent': '*',
      },
    };
    try {
      // let credits = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/485`).then(res => res.json())
      let credits = await fetch(url_credits, option_credits).then(res => res.json())
      commit("updateCredits", credits)
    } catch (err) {
      console.log(err)
    }
  },

}
 
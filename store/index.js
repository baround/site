export const state = () => ({
    content: {
      itinerari: [],
      locali: [],
      chisiamo: [],
      contatti: []
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
}

export const actions = {
    async itinerari({ state, commit }) {
      if (state.content.itinerari.length) return
      try {
        let itinerari = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/itinerari?page=1&per_page=100`
        ).then(res => res.json())
        itinerari = itinerari
          .filter(el => el.status === "publish")
          .map(({ id, slug, title, acf }) => ({
            id,
            slug,
            title,
            acf
          }))
        commit("updatePosts", itinerari)
      } catch (err) {
        console.log(err)
      }
   },
    async chisiamo({ state, commit }) {
      if (state.content.chisiamo.length) return
      try {
        let chisiamo = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/253`
        ).then(res => res.json())
        commit("updateChisiamo", chisiamo)
      } catch (err) {
        console.log(err)
      }
   },
    async contatti({ state, commit }) {
      if (state.content.contatti.length) return
      try {
        let contatti = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/pages/255`
        ).then(res => res.json())
        commit("updateContatti", contatti)
      } catch (err) {
        console.log(err)
      }
   },
    async locali({ state, commit }) {
      if (state.content.locali.length) return
      try {
        let locali = await fetch( `https://be.baround.it/index.php/wp-json/wp/v2/locali?page=1&per_page=100`
        ).then(res => res.json())
        locali = locali
          .filter(el => el.status === "publish")
          .map(({ id, slug, title, acf }) => ({
            id,
            slug,
            title,
            acf
          }))
        commit("updateLocali", locali)
      } catch (err) {
        console.log(err)
      }
   },
}
 
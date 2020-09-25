export const state = () => ({
    content: {
      itinerari: [],
      locali: [],
      attivita: []
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
    updateAttivita: (state, attivita) => {
        state.content.attivita = attivita
    }
}

export const actions = {
    async itinerari({ state, commit }) {
      if (state.content.itinerari.length) return
      try {
        let itinerari = await fetch( `https://baround.it/be/wp-json/wp/v2/itinerari?page=1&per_page=100`
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
    async locali({ state, commit }) {
      if (state.content.locali.length) return
      try {
        let locali = await fetch( `https://baround.it/be/wp-json/wp/v2/locali?page=1&per_page=100`
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
    async attivita({ state, commit }) {
      if (state.content.attivita.length) return
      try {
        let attivita = await fetch( `https://baround.it/be/wp-json/wp/v2/attivita_culturali?page=1&per_page=100`
        ).then(res => res.json())
        attivita = attivita
          .filter(el => el.status === "publish")
          .map(({ id, slug, title, acf }) => ({
            id,
            slug,
            title,
            acf
          }))
        commit("updateAttivita", attivita)
      } catch (err) {
        console.log(err)
      }
   },
}
 
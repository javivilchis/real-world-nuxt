import EventService from '@/services/EventService.js'
// create an anonymus function
export const state = () => ({
     events: [],
     event: {}
})
// setup the mutations
export const mutations = {
     // set an events mutation
     SET_EVENTS(state, events) {
          state.events = events
     },
     // set an event mutation
     SET_EVENT(state, event) {
          state.event = event
     }
}
// set the actions
export const actions = {
     // set a fetch events action that will return all listed events
     fetchEvents({ commit }) {
          return EventService.getEvents().then(response => {
               commit('SET_EVENTS', response.data)
          })
     },
     // set a fet event action for one event via id param
     fetchEvent({ commit }, id) {
          return EventService.getEvent(id).then(function (response) {
               commit('SET_EVENT', response.data)
          })
     }

}
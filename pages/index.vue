<template>
<div>
  
  <h1>Events</h1>
   <EventCard
          v-for="(event, index) in events"
          :key="index"
          :event="event"
          :data-index="index"
        />
        <Tutorial />
        </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'
import Tutorial from '@/components/Tutorial.vue'
export default {
  components: {
    EventCard,
    Tutorial,
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
  computed: mapState({
    events: (state) => state.events.events,
  }),
}
</script>

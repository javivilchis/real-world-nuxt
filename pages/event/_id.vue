<template>
      <div class="single">
        <div class="event-header">
          <span class="eyebrow">
            @{{ event.time }} on {{ event.date }}
          </span>
          <h1 class="title">
            {{ event.title }}
          </h1>
          <h5>Organized by {{ event.organizer ? event.organizer.name : '' }}</h5>
          <h5>Category: {{ event.category }}</h5>
        </div>

        <div class="details">
          <div class="item1">
            <span name="map">
              <h2>Location</h2>
            </span>
        
            <address>{{ event.location }}</address>
          </div>
          <div class="item2">
            <h2>Event details</h2>
            <p>{{ event.description }}</p>
          </div>
          <div class="item3">
            <h2>
              Attendees
              <span class="badge -fill-gradient">
                {{ event.attendees ? event.attendees.length : 0 }}
              </span>
            </h2>
            <ul class="list-group">
              <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
                <b>{{ attendee.name }}</b>
              </li>
            </ul>
            </div>
          </div>
      </div>
    </template>
    <script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id,
      })
    }
  },
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about ' + this.event.title,
        },
      ],
    }
  },
  computed: mapState({
    event: (state) => state.events.event,
  }),
}
</script>
<style scoped>
.single {
  margin-top: 40px;
}
.details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h2 {
  font-size: 2em;
  color: #464646;
  border-bottom: 1px #333 solid;
}
.item1,
.item1 h2,
.item2,
.item2 h2 {
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-beetween;
  align-items: flex-start;
}
div {
  padding: 5px 2px 2px 3px;
  margin-bottom: 4px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.prompt-box {
  border: 1px #333 solid;
  position: relative;
  overflow: hidden;

  margin-bottom: 24px;
  transform: scaleY(1);
}
.prompt-box > .title {
  margin: 0 0 0.5em;
}
.prompt-box > .title > .meta {
  margin-left: 10px;
}
.prompt-box > .actions {
  display: flex;
  align-items: center;
}
.prompt-box > button {
  margin-right: 0.5em;
}
.prompt-box > button:last-of-type {
  margin-right: 0;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
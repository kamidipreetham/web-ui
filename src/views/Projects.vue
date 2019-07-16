<template>
  <b-container class="projects">
    <b-row ref="pTitle">
      <b-col cols="12" class="projects-title" ref="pT">
        <h2 id="title" class="sticky-top">
          Projects
        </h2>
      </b-col>
    </b-row>
    <b-row ref="pDesc">
      <b-col cols="12" class="projects-description" ref="pT">
        <p>
          Here are the ideas I get from time to time realised into work in progress projects.
        </p>
      </b-col>
    </b-row>
    <b-row id="projects-container" ref="pC">
      <b-col>
        <b-card
          title="Verify Tweet"
          img-src="@/assets/verify-tweet.png"
          img-alt="Verify Tweet"
          img-top
        >
          <b-card-text>
            Verify Tweets of public twitter accounts
            by uploading screenshot of a tweet.
            Make sure if it's a meme or not!
          </b-card-text>
          <router-link :to="{ name: 'verify' }">
            <b-button variant="light">Details</b-button>
          </router-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Memance"
          img-src="@/assets/memance.png"
          img-alt="Memance"
          img-top
        >
          <b-card-text>
            Sync play between two people watching the same video at different physical locations.
          </b-card-text>
          <router-link :to="{ name: 'memance' }">
            <b-button variant="light">Details</b-button>
          </router-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          title="Nwtest"
          img-src="@/assets/nwtest.png"
          img-alt="Nwtest"
          img-top
        >
          <b-card-text>
            A network testing tool written in Go
            to test latency, bandwidth between point A and point B
          </b-card-text>
          <router-link :to="{ name: 'nwtest' }">
            <b-button variant="light">Details</b-button>
          </router-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
#title {
  padding: 2rem;
}
</style>

<script>
import { TimelineLite, Back, Circ } from 'gsap';

export default {
  name: 'projects',
  mounted() {
    const { pC } = this.$refs;
    const { pTitle } = this.$refs;
    const { pDesc } = this.$refs;
    const timeline = new TimelineLite();
    timeline.from(pTitle, 1, {
      y: 100,
      ease: Back.easeInOut,
      autoAlpha: 0,
    }, 'title');
    timeline.from(pDesc, 1, {
      y: 100,
      ease: Back.easeInOut,
      autoAlpha: 0,
    }, 'title');
    timeline.from(pC, 1.5, {
      y: 200,
      ease: Circ.easeInOut,
      autoAlpha: 0,
    });
  },
};
</script>

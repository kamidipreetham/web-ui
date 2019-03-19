<template>
  <b-container class="home">
    <b-row>
      <b-col cols="12" class="icon-container" ref="iC">
        <h1 id="web-title" class="sticky-top">
          Preetham Kamidi
        </h1>
      </b-col>
    </b-row>
    <b-row id="middle-row">
      <b-col col class="mx-auto">
        <b-row>
          <b-col id="border-col" class="icon-container-large">
            <router-link to="projects">
              <font-awesome-icon :icon="['fas', 'terminal']" class="fa-lg" ref="projectsIcon"/>
            </router-link>
          </b-col>
          <div ref="verticalBar" id="vertical-bar"></div>
          <b-col class="icon-container-large">
            <router-link to="photography">
              <font-awesome-icon icon="camera-retro" class="fa-lg" ref="photographyIcon"/>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
      <b-navbar fixed="bottom" class="navbar-expand-lg" ref="footer">
        <b-navbar-nav fill class="mx-auto" tag="span">
          <b-nav-text class="icon-container">
            <font-awesome-icon :icon="['far', 'copyright']" class="fa-lg"/>
            <span id="copyright-title">Preetham</span>
          </b-nav-text>
          <b-nav-item href="https://instagram.com/preethamkamidi" class="icon-container">
            <font-awesome-icon :icon="['fab', 'instagram']" class="fa-lg"/>
          </b-nav-item>
          <b-nav-item href="https://www.linkedin.com/in/pheonix007" class="icon-container">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-lg"/>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
  </b-container>
</template>

<script>
import { TimelineLite, Back } from 'gsap';

export default {
  name: 'home',
  components: {
  },
  mounted() {
    const { iC } = this.$refs;
    const { projectsIcon } = this.$refs;
    const { photographyIcon } = this.$refs;
    const { verticalBar } = this.$refs;
    const { footer } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(iC, 1, {
      y: 100,
      ease: Back.easeInOut,
      autoAlpha: 0,
    });
    timeline.from(projectsIcon, 1, {
      x: -100,
      ease: Back.easeInOut,
      autoAlpha: 0,
    }, 'projects');
    timeline.from(photographyIcon, 1, {
      x: 100,
      ease: Back.easeInOut,
      autoAlpha: 0,
    }, 'projects');
    // timeline.staggerFrom('.fa-lg', 2, {
    //   x: 100,
    //   autoAlpha: 0,
    //   ease: Elastic.easeOut,
    //   force3D: true,
    // });
    timeline.from(verticalBar, 1, {
      ease: Back.easeInOut,
      autoAlpha: 0,
    }, 'projects');
    timeline.from(footer, 1.5, {
      ease: Back.easeInOut,
      autoAlpha: 0,
    });
  },
};
</script>

<style scoped>
a {
  color: currentColor;
}
#web-title {
  background-color: #E4F8FF;
  padding: 2rem;
}

#vertical-bar {
  border-right: black solid;
}

#copyright-title {
  margin-left: 0.5rem;
  font-weight: bold;
}

#middle-row {
  padding-top: 10%;
}

.icon-container {
  font-size: 1vw;
}

.icon-container-large {
  font-size: 5vw;
}

</style>

<template>
  <b-container class="home">
    <b-row>
      <b-col cols="12" class="icon-container">
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
              <font-awesome-icon :icon="['fab', 'dev']" class="fa-lg"/>
            </router-link>
          </b-col>
          <b-col class="icon-container-large">
            <router-link to="photography">
              <font-awesome-icon icon="camera-retro" class="fa-lg"/>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
      <b-navbar fixed="bottom" class="navbar-expand-lg">
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

export default {
  name: 'home',
  components: {
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

#border-col {
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

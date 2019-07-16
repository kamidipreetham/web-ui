<template>
  <b-container class="memance">
  <b-row>
    <b-col cols="12" class="project-title">
      <h2 id="title" class="sticky-top">
        Memance
      </h2>
    </b-col>
  </b-row>
  <b-row>
    <b-col cols="12" class="project-description">
      <b-row>
        <b-col>
          <b-img src="@/assets/Memance-Architecture.svg"
            fluid alt="Memance Architecture"></b-img>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <b-row id="content">
        <b-col>
        <p>
        Memance is a tool to sync video playback between two clients.
        Imagine a situation where two friends are in different physical locations,
        but want to watch a movie together assuming both have the same video file.
        Screen sharing quickly flies out of the
        picture owing to today's internet bandwidth and latency. Memance helps out by
        working with media players such as VLC to establish a connection between the two friends
        and sync the playback between the two friends.
        </p>
        <p>
          Sync is achieved by bootstrapping the connection using a central server
          after which a connection is established using Web Socket. Play, pause as well as
          seek are sycned in real time. Features such as audio calling can be added for futher
          immersive watch experience.
        </p>
        </b-col>
      </b-row>
  </b-container>
</template>

<style scoped>
#title {
  padding: 2rem;
}
#content {
  padding: 2rem;
}
</style>

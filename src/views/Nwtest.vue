<template>
    <b-container class="nwtest">
    <b-row>
    <b-col cols="12" class="project-title">
      <h2 id="title" class="sticky-top">
        Nwtest
      </h2>
    </b-col>
    </b-row>
    <b-row>
    <b-col cols="12" class="project-description">
      <b-row>
        <b-col>
          <b-img src="@/assets/Nwtest.svg"
            fluid alt="Nwtest"></b-img>
        </b-col>
      </b-row>
    </b-col>
    </b-row>
    <b-row id="content">
      <b-col>
        <p>
          Current state of speed testing is limited to speedtest-cli
          which gives the bandwidth of a connection by using speedtest.com's
          servers. What if the situation so arises to test the speed of a network
          in a on-premise network with no internet, what if a need arises to
          test the network connection between a server A and a server B or client A and
          server B.
        </p>
        <p>
          Nwtest tool, written in Go helps out in such situations. A server binary together
          with a client binary give a comprehensive report of
          the state of network (bandwidth, latency etc.)
          between point A and point B using only TCP.
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

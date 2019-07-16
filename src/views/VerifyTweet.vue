<template>
<b-container class="verifytweets">
    <b-row>
        <b-col cols="12" class="project-title">
            <h2 id="verify-tweet-title" class="sticky-top">
                Verify Tweet
            </h2>
        </b-col>
    </b-row>
    <b-row>
        <b-col cols="12" class="project-description">
            <p>
            Fake tweet images can be generated using a
            preset meme template from websites like:
            <span><a href="https://www.tweetgen.com/">TweetGen</a></span>,
            <span><a href="http://www.prankmenot.com/?twitter_tweet">Prank Me Not</a></span> and
            <span><a href="http://simitator.com/generator/twitter/tweet">Simitator</a></span> .
            Verification of such tweets takes a manual work to find the user,
            scroll through their timeline and matching. A viral fake tweet image can prove
            crucial at a time.
            </p>
            <p>
                A fake tweet screenshot looks very convincing,
                misleading the general public. For example:
            </p>
            <b-row>
                <b-col>
                  <b-img src="@/assets/elon.png" fluid thumbnail="" alt="Responsive image"></b-img>
                </b-col>
                <b-col>
                  <b-img src="@/assets/deer.png" fluid thumbnail="" alt="Responsive image"></b-img>
                </b-col>
            </b-row>
            <b-row>
              <b-col>
              <p>
              Verify Tweet attempts to resolve the problem by letting users upload such tweet
              screenshots and verify if the user actually tweeted or not.
              A combination of Image processing, Natural language processing
              as well as Twitter Search API makes this possible.
              </p>
              </b-col>
            </b-row>
        </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-button size="lg" variant="dark" href="https://github.com/kamidipreetham/verifytweet">View on
          <font-awesome-icon :icon="['fab', 'github']" class="fa-lg"/>
        </b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
</b-container>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>

.fa-lg {
  color: white;
}

#verify-tweet-title {
  padding: 2rem;
}

ul {
  list-style: none;
}

.upload {
  margin-top: 2rem;
  text-align: left;
}

#progress {
  margin-right: 0.5rem;
}

#status {
  margin-top: 2rem;
}

.card-header {
  background-color: white;
}

.card-footer {
  background-color: white;
}

#spinner {
  margin-top: 2rem;
  margin-right: 1rem;
}

#username {
  padding-left: 1.5rem;
}

.count {
  padding-right: 1rem;
}

#link {
  float: right;
}

</style>

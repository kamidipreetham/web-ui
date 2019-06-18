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
              Due to Twitter API rate limits, currently only tweets from last 7 days can be verified.
              </p>
              </b-col>
            </b-row>
        </b-col>
    </b-row>
    <b-row class="upload">
      <b-col>
      </b-col>
      <b-col>
        <input type="file" @change="onFileChange">
        <b-img :src="image" id="preview"></b-img>
          <button @click="removeImage">Remove image</button>
        </b-col>
        <b-col>
        </b-col>
    </b-row>
    <b-row>
      <b-col>
      </b-col>
    </b-row>
</b-container>
</template>

<style scoped>
#verify-tweet-title {
  padding: 2rem;
}

ul {
  list-style: none;
}

.upload {
  margin-top: 2rem;
}

#preview{
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>

<script>

export default {
  components: {
  },
  data() {
    return {
      image: '',
    };
  },
  methods: {
    displayStatus(data) {
      if (!data) {
        return 'Something\' not right! Please try again';
      }
      if (data.result !== true) {
        return 'Fake Tweet!';
      }
      return 'Verified Tweet!';
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = '';
    },
  },
};
</script>

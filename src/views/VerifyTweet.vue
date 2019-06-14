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
    <b-row class="upload">
      <b-col>
      <ul>
        <li v-for="file in files" :key="file.id">
          <span>{{file.name}}</span>
          <span>&nbsp;</span>
          <span v-if="file.error">Status:{{file.error}}</span>
          <span v-else-if="file.success">Status:Success</span>
          <span v-else-if="file.active">Status:Active</span>
          <span v-else-if="file.active">Status:Active</span>
          <span v-else></span>
        </li>
      </ul>
      </b-col>
      <b-col>
      <file-upload
          class="btn btn-light"
          post-action="https://preethamkamidi.com/verifytweet/api/v1/verify"
          extensions="jpg,jpeg,png"
          accept="image/png,image/jpeg"
          :data="{social: 'twitter', type: 'image'}"
          :size="1024 * 1024 * 2"
          v-model="files"
          name="data"
          :drop="true"
          ref="upload">
          <i class="fa fa-plus"></i>
          Select file
        </file-upload>
        </b-col>
        <b-col>
        <button type="button" class="btn btn-success"
          v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          Start Upload
        </button>
        <button type="button" class="btn btn-danger"
          v-else @click.prevent="$refs.upload.active = false">
          <i class="fa fa-stop" aria-hidden="true"></i>
          Stop Upload
        </button>
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
</style>

<script>
import FileUpload from 'vue-upload-component';

export default {
  components: {
    FileUpload,
  },

  data() {
    return {
      files: [],
    };
  },
};
</script>

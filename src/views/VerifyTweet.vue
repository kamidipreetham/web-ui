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
              Due to Twitter API rate limits, currently only
              tweets from last 7 days can be verified.
              </p>
              </b-col>
            </b-row>
        </b-col>
    </b-row>
    <b-row class="upload">
      <b-col>
      </b-col>
      <b-col>
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          accept="image/jpeg, image/png"
          placeholder="Choose Image"
        ></b-form-file>
      </b-col>
      <b-col>
        <b-button :disabled="requestInProgress"
          variant="light" @click="uploadFile">Upload</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-spinner label="Processing" v-if="requestInProgress" id="spinner"></b-spinner>
        <span v-if="requestInProgress" id="progress"
          class="font-weight-bold text-center">{{requestStatus}}</span>
        <p v-if="requestCompleted" id="status"
          class="font-weight-bold text-center">{{tweetStatus}}</p>
      </b-col>
    </b-row>
    <b-row v-if="gotResult">
      <b-col cols="2">
      </b-col>
      <b-col cols="8">
        <b-card
          class="text-left"
          :title="tweet"
          :sub-title="datestamp | moment('h:mm A - D MMM YYYY')"
          border-variant="dark"
        >
        <div slot="header">
          <font-awesome-icon :icon="['fab', 'twitter']" class="fa-lg" pull="left"/>
          <h4>{{profileName}}</h4>
          <span id="username">{{'@'+username}}</span>
        </div>
        <b-card-text>
          <span class="font-weight-bold">
            {{retweetCount.toLocaleString('en-US')}}
          </span>
          <span>Retweets</span>
          <span class="font-weight-bold">
            {{likesCount.toLocaleString('en-IN')}}
          </span>
          <span>Likes</span>
        </b-card-text>
        <div slot="footer">
            <font-awesome-icon :icon="['far', 'comment']"/>
            <span class="count">{{formatNumber(commentsCount)}}</span>
            <font-awesome-icon :icon="['fas', 'retweet']"/>
            <span class="count">{{formatNumber(retweetCount)}}</span>
            <font-awesome-icon :icon="['far', 'heart']"/>
            <span class="count">{{formatNumber(likesCount)}}</span>
            <b-link :href="tweetLink" class="card-link"
              id="link" target="_blank">View on Twitter</b-link>
        </div>
        </b-card>
      </b-col>
      <b-col cols="2">
      </b-col>
    </b-row>
</b-container>
</template>

<script>
import axios from 'axios';

export default {
  components: {
  },
  data() {
    return {
      file: null,
      tweetStatus: null,
      requestInProgress: false,
      statusList: ['Extracting text from Image',
        'Processing text', 'Searching for tweet'],
      requestStatus: 'Uploading Image',
      requestCompleted: false,
      gotResult: false,
      currValue: 0,
      profileName: '',
      username: '',
      tweet: '',
      retweetCount: 0,
      likesCount: 0,
      commentsCount: 0,
      datestamp: 0,
      tweetLink: '',
      progressCounter: 0,
      recurringFunc: null,
      ranges: [
        { divider: 1e9, suffix: 'G' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'K' },
      ],
      maxValue: 100,
    };
  },
  methods: {
    uploadFile() {
      const formData = new FormData();
      this.requestInProgress = false;
      this.requestCompleted = false;
      this.gotResult = false;
      if (!this.file) {
        return console.error('Please select a file first');
      }
      formData.append('data', this.file);
      formData.append('type', 'image');
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          this.requestInProgress = true;
          this.currValue = Math.round((loaded * 100) / total);
          this.recurringFunc = setInterval(this.changeText, 3000);
        },
      };
      return axios.post(`${process.env.VUE_APP_VERIFY_TWEET_HOST}/${process.env.VUE_APP_VERIFY_TWEET_APIVER}${process.env.VUE_APP_VERIFY_TWEET_CONTEXT}`, formData, options)
        .then((response) => {
          this.requestInProgress = false;
          this.requestCompleted = true;
          if (response.status !== 200) {
            this.tweetStatus = response.statusText;
            return;
          }
          const responseData = response.data;
          if (!responseData) {
            this.tweetStatus = 'Something\'s not right, Please try again!';
            return;
          }
          const resultStatus = responseData.status;
          const tweetObj = responseData.result;
          switch (resultStatus) {
            case 0:
              this.gotResult = true;
              this.tweetStatus = 'Verified Tweet!';
              this.username = tweetObj.username;
              this.profileName = tweetObj.name;
              this.datestamp = tweetObj.datetime;
              this.tweet = tweetObj.tweet;
              this.retweetCount = parseInt(tweetObj.retweets_count, 10);
              this.likesCount = parseInt(tweetObj.likes_count, 10);
              this.commentsCount = parseInt(tweetObj.replies_count, 10);
              this.tweetLink = tweetObj.link;
              break;
            case 1:
              this.tweetStatus = 'Fake Tweet!';
              break;
            case 2:
              this.tweetStatus = 'Something\'s not right, Please try again!';
              break;
            default:
              this.tweetStatus = 'Something\'s not right, Please try again!';
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    formatNumber(n) {
      for (let i = 0; i < this.ranges.length; i += 1) {
        if (n >= this.ranges[i].divider) {
          return (Math.round((n / this.ranges[i].divider) * 10) / 10).toString()
            + this.ranges[i].suffix;
        }
      }
      return n.toString();
    },
    changeText() {
      this.requestStatus = this.statusList[this.progressCounter];
      this.progressCounter += 1;
      if (this.progressCounter >= this.statusList.length) {
        this.progressCounter = 0;
        clearInterval(this.recurringFunc);
      }
    },
  },
};
</script>

<style scoped>
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

.fa-lg {
  color: #00acee;
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

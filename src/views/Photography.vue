<template>
  <b-container class="photography">
    <b-row>
    <b-col cols="12" class="project-title">
      <h2 id="title" class="sticky-top">
        Photography
      </h2>
    </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" v-for="photoUrl in photos" v-bind:key="photoUrl" class="image-container">
      <b-img-lazy :src="photoUrl" rounded fluid></b-img-lazy>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AWS from 'aws-sdk';

export default {
  name: 'photography',
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    const albumBucketName = 'images-showcase';
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:b7d30d42-4f41-49db-8c54-26a389fb0930',
    });
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: albumBucketName },
    });
    s3.listObjects((err, data) => {
      if (err) {
        console.error(`There was an error viewing photos: ${err.message}`);
        return;
      }
      const href = 'https://s3.amazonaws.com/';
      const bucketUrl = `${href}${albumBucketName}/`;
      this.photos = data.Contents.map((photo) => {
        const photoKey = photo.Key;
        const photoUrl = bucketUrl + encodeURIComponent(photoKey);
        return photoUrl;
      });
    });
  },
};
</script>


<style scoped>
#title {
  padding: 2rem;
}
#content {
  padding: 2rem;
}
.image-container {
  padding: 1rem;
}
</style>

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
      <b-col cols="2" v-for="photoUrl in thumbnails" v-bind:key="photoUrl" class="image-container">
        <div @click="showImageModal(photoUrl)">
        <b-img :src="photoUrl" rounded fluid class="image"></b-img>
        </div>
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
      thumbnails: [],
      s3: null,
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
    this.s3 = s3;
    const thumbnailKey = `${encodeURIComponent('thumbnails')}/`;
    s3.listObjectsV2({ Prefix: thumbnailKey }, (err, data) => {
      if (err) {
        console.error(`There was an error viewing photos: ${err.message}`);
        return;
      }
      const href = 'https://s3.amazonaws.com/';
      const bucketUrl = `${href}${albumBucketName}/`;
      this.thumbnails = data.Contents.map((photo) => {
        const photoKey = photo.Key;
        if (!photoKey.includes('.jpg')) {
          return '';
        }
        const photoUrl = bucketUrl + encodeURIComponent(photoKey);
        return photoUrl;
      }).filter(url => url !== '');
    });
  },
  methods: {
    showImageModal(photoURL) {
      const originalphotoURL = photoURL.replace('thumbnails', 'originals');
      const h = this.$createElement;
      const messageVNode = h('div', { class: ['image-container'] }, [
        h('b-img', {
          props: {
            src: originalphotoURL,
            thumbnail: true,
            center: true,
          },
        }),
      ]);
      this.$bvModal.msgBoxOk([messageVNode], {
        buttonSize: 'sm',
        centered: true,
        size: 'lg',
        okVariant: 'info',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
      });
    },
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
.image {
  cursor: pointer;
}
</style>

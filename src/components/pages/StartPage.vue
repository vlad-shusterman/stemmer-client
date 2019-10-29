<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <input v-model="link"/>
        <button type="button" class="btn btn-primary" @click="search">Get document</button>
      </div >
    </div>
    <div class="row justify-content-center mt-5">
      <button type="button" class="btn btn-primary" @click="downloadFile" v-if="data">Download</button>
    </div>
  </div>
</template>

<script>
  import UserService from '@/services/UserService'

  export default {
    name: 'StartPage',
    data() {
      return {
        link: '',
        data: ''
      }
    },
    methods: {
      async search() {
        UserService.getFile(this.link).then((res) => {
          this.data = res.data;
        })
      },
      downloadFile() {
        if (this.data) {
          this.download('StemmedData', this.data);
        }
      },
      download(filename, text) {
        const element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(text)));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();

        document.body.removeChild(element);
      }
    }
  }
</script>

<style scoped>

</style>

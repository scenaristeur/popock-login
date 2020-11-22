<template>
  <div>
    <button v-if="webId == null" @click="login">login</button>
    <button v-else @click="logout">logout</button>
    <!--  <p>webId: {{webId}}</p> -->
  </div>
</template>
<script>
import store from './store'
import auth from 'solid-auth-client';
const popUri = 'https://solidcommunity.net/common/popup.html'

export default {
  store,
  props:['debug'],
  name: 'Popock-Login',
  data: function () {
    return {
      webId: null
    }
  },
  created(){
    console.log("DEBUG", this.debug)
    this.trackSession()
    console.log('Popock-login created')
    //this.storage = this.$store.state.login.storage
    this.login()
  },
  methods: {
    async trackSession(){
      auth.trackSession(session => {
        if (!session){
          this.webId = null
        }else{
          this.webId = session.webId
        }
        console.log("TRACK SESSION", this.webId)
        this.$store.commit('login/setWebId', this.webId)
      });
    },
    async logout(){
      await auth.logout()
      this.webId
    },
    async login() {
      let session = await auth.currentSession()
      if (!session) {
        session = await auth.popupLogin({ popupUri:popUri })
      }
    }
  }
}
</script>

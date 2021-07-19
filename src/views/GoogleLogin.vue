<template>
  <div>
    <div id="google-signin-btn"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.gapi.signin2.render("google-signin-btn", {onsuccess:this.onSignIn});
  },
  name: "GoogleLogin", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
    };
  },
  methods: { //컴포넌트 내에서 사용할 메소드 정의
    onSignIn (googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log(profile)
      console.log("Full Name : " + profile.getName());
      console.log("ProfileImage : " + profile.getImageUrl());
      console.log("Email : " + profile.getEmail());

      const id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
    }
  },
  signOut() {
    window.gapi.auth2.getAuthInstance().disconnect();
  }
}
</script>

<style scoped>

</style>


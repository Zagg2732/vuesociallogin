<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png" />
    </a>
    <br>
    <button type="button" @click="kakaoLogout" >카카오 로그아웃</button>
  </div>
</template>

<script>
export default {
  name: "KakaoLogin", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
    };
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope : '',
        success : this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success : res => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email
          console.log(res)
          console.log('nickname : ', nickname )
          console.log('email : ', email )

          //로그인 처리 구현
          alert("로그인성공!")
        },
        fail : error => {
          console.log(error);
        }
      })
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        //로그아웃
        console.log(response);
      });
    }
  }
}
</script>

<style scoped>

</style>


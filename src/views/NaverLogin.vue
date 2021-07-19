<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type = "button" @click="logout">로그아웃</button>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config.yml"

export default {
  name: "NaverLogin", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      naverLogin : null,
    };
  },
  mounted() {
    this.naverLogin =  new window.naver.LoginWithNaverId({
      clientId: `${config.naverClientId}`,
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: false,
      loginButton : {
        color: "green", type : 3, height:60
      },
    });

    //설정 정보를 초기화하고 연동을 준비
    this.naverLogin.init();

    this.naverLogin.getLoginStatus((status) => {
      if(status) {
        console.log(status);
        console.log(this.naverLogin.user);

        //필수적으로 받아야 하는 프로필 정보가 있다면 callback 처리 시점에 체크
        var email = this.naverLogin.user.getEmail();
        if(email == undefined || email == null) {
          alert("이메일은 필수 정보입니다. 정보 제공을 동의해주세요.")
          //사용자 정보 재동의를 위하여 다시 네아로 동의 페이지로 이동함
          this.naverLogin.reprompt();
          return;
        }
      } else {
        console.log("callback 처리에 실패하였습니다.")
      }
    });
  },
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url=`/oauth2.0/token?grant_type=delete&client_id=${config.naverClientId}&client_secret=${config.naverClientSecret}&access_token=${accessToken}&service_provider=NAVER`;
      axios.get(url).then((res) => {console.log(res.data);});

    }
  }
}
</script>

<style scoped>

</style>


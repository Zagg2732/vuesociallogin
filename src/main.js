import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "./mixins"
import config from "@/config.yml"

const app = createApp(App)
app.use(router)
app.mixin(mixins);
app.mount('#app')

//kakaoIdKey 는 "@/config.yml" 에 저장된 정보를 가져왔습니다
window.Kakao.init(config.kakaoIdKey); //kakao 발급받은 앱 키
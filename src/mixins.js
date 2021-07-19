// Mock 서버의 API를 호출하는 공통 함수

import axios from "axios";

export default {
    methods : {
        async $api(url, method, data) {
            return (await axios({
                method : method,
                url,
                data
            }).catch(e => {
                console.log(e);
                })
            ).data;
        }
    }
}

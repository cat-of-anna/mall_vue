import http from "../utils/http"
import {reactive, ref} from "vue"

const user = reactive({
  login_type: 0,
  username: "",  // 登录账号/手机号/邮箱
  password: "",  // 登录密码
  remember: false,  // 记住密码
  mobile: "", // 手机号
  code: "", //验证码
  login(data) {  // 用户登录
    return http.post("/users/login/", {
      "username": this.username,
      "password": this.password,
    })
  },

})

export default user


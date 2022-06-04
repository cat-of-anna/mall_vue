import http from "../utils/http"
import {reactive, ref} from "vue"

const user = reactive({
  login_type: 0,
  username: "",  // 登录账号/手机号/邮箱
  password: "",  // 登录密码
  re_password: "",  // 确认密码
  remember: false,  // 记住密码
  mobile: "", // 手机号
  code: "", //验证码
  login(res) {  // 用户登录
    return http.post("/users/login/", {
      "ticket": res.ticket,
      "randstr": res.randstr,
      "username": this.username,
      "password": this.password,
    })
  },
  check_mobile(){
    // 验证手机号
    return http.get(`/users/mobile/${this.mobile}/`)
  }

})

export default user;


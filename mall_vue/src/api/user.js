import http from "../utils/http"
import {h, reactive, ref} from "vue"

const user = reactive({
  login_type: 0,
  username: "",  // 登录账号/手机号/邮箱
  password: "",  // 登录密码
  re_password: "",  // 确认密码
  remember: false,  // 记住密码
  mobile: "", // 手机号
  code: "", // 短信验证码
  is_send: false,  // 是否已经发送短信
  sms_interval: 60, // 短信发送的冷却时间
  interval: null,  // 短信发送的定时器
  sms_btn_text: "点击获取验证码",
  clearMobile(){  // 清空表单信息
    user.mobile = "";
    user.password = "";
    user.code = "";
    user.remember = false;
    user.code = "";
    user.re_password = "";
  },
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
  },
  register(data){
    data.mobile = this.mobile;
    data.password = this.password;
    data.re_password = this.re_password;
    data.sms_code = this.code;

    return http.post("/users/register/", data)
  },
  getSmsCode(){
    return http.get(`/users/sms/${this.mobile}/`)
  },

})

export default user;


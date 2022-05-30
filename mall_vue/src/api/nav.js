import http from "../utils/http"
import {reactive, ref} from "vue"

const nav = reactive({
  header_nav_list: [],
  footer_nav_list: [],
  get_header_url() {
    return http.get("/home/nav/header/")
  },
  get_footer_url() {
    return http.get("/home/nav/footer/")
  },
})

export default nav


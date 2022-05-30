import http from "../utils/http"
import {reactive} from "vue"

const banner = reactive({
  banner_list: [],
  get_banner_url() {
    return http.get("/home/banner/")
  },

})

export default banner


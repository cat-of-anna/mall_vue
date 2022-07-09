import http from "../utils/http";
import {h, reactive} from "vue";


const course = reactive({
  current_direction: 0,  // currently, selected direction
  current_category: 0,  // currently, selected category
  direction_list: [],  // a list of directions
  category_list: [],  // a list of categories
  course_list:[],

  get_course_direction(){
    return http.get("/project/directions/");
  },
  get_course_categories(){
    return http.get(`/project/categories/${this.current_direction}/`);
  },
  get_course_list(){
    return http.get(`/project/${this.current_direction}/${this.current_category}/`);
  }
})

export default course;
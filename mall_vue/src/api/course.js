import http from "../utils/http";
import {h, reactive} from "vue";


const course = reactive({
  current_direction: 0,  // currently, selected direction
  current_category: 0,  // currently, selected category
  direction_list: [],  // a list of directions
  category_list: [],  // a list of categories
  course_list:[],
  ordering: "-id",  // courses default order by id DESC
  page: 1,               // current page，default 1
  size: 5,               // current data volume per page, default 5
  count: 0,         // number of course information List
  has_perv: false,  // is there a previous page
  has_next: false,  // Is there a next page
  timer: null,      // timer about course list data

  get_course_direction(){
    return http.get("/project/directions/");
  },
  get_course_categories(){
    return http.get(`/project/categories/${this.current_direction}/`);
  },
  get_course_list(){
    let params = {
      page: this.page,
      size: this.size,
    };
    if(this.ordering){
      params.ordering = this.ordering;  // if ordering exists, params gets it
    }
    return http.get(`/project/${this.current_direction}/${this.current_category}/`, {params});
  },
  start_timer () {
    // countdown to course-related promotions
    clearInterval(this.timer); // ensure only one timer about promotions
    this.timer = setInterval(() => {
      this.course_list.forEach((course) => {
        if (course.discount.expire && course.discount.expire > 0) {
          course.discount.expire--;  // if expire exists and > 0, expire--
        }
      })
    }, 1000)
  }

})

export default course;
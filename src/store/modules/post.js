
import Cookies from 'js-cookie'
let obj=Cookies.get('post');
const posts = {
  state: {
    post: obj ? JSON.parse(obj):[],
  },
  mutations: {

    SET_POST: (state, post) => {
  
      state.post.push(post);
         Cookies.set('post', JSON.stringify(state.post))
    },
    UPDATE_POST: (state, post) => {

      let temp=state.post;
 
      state.post.forEach((element,index) => {

              if(post.id==element.id){
                state.post[index]=post;
              }
 
      });
 
      Cookies.set('post', JSON.stringify(state.post))
    },
  },
  actions: {
 
  /**
   * chat count
   */
  AddPost({
      commit
    }, data) {
      commit('SET_POST', data);
    },
      /**
   * chat count
   */
  UpdatePost({
      commit
    }, data) {
      commit('UPDATE_POST', data);
    },
 },
}

export default posts

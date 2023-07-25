
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
  },
  actions: {
 
  /**
   * chat count
   */
  AddPost({
      commit
    }, data) {
      commit('SET_POST', data);
      // return new Promise((resolve, reject) => {
      //   addPost(data).then(response => {
          
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },
 },
}

export default posts

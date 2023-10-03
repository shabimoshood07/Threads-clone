import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),
  actions: {
    async getAllPosts() {
      let res = await useFetch("/api/get-all-post");
      // this.posts = res.posts;
      this.posts = res.data._rawValue;

      console.log("posts from store", res.posts);
      console.log("posts from store", res.data._rawValue);
      return res.data;
    },
  },
});

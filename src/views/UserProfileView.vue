<template>
    <ContentBase>
      <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow="follow" @unfollow="unfollow" v-bind:user="user"/>
          <UserProfileWrite @post_a_post="post_a_post" />
        </div>
        <div class="col-9">
          <UserProfilePosts  :posts="posts" />
            

        </div>
      </div> 
    </ContentBase>
  </template>
  
  
  
  <script>
  import ContentBase from '../components/ContentBase';
  import UserProfileInfo from '@/components/UserProfileInfo';
  import UserProfilePosts from '@/components/UserProfilePosts.vue';
  import UserProfileWrite from '@/components/UserProfileWrite.vue';
  import { reactive } from 'vue';
  
  export default {
    name: 'UserProfile',
    components: {
      ContentBase,
      UserProfileInfo,
      UserProfilePosts,
      UserProfileWrite,
    },
    setup() {
      const user = reactive({
        id: 1,
        username: "Li Ming",
        lastName: "Li",
        firstName: "Ming",
        followerCount: 10,
        is_followed: false,
      });

      const posts = reactive({
        count:3,
        posts: [
          {
            id: 1, 
            userId: 1,
            content: "今天上课云计算，真开心",
          },
          {
            id: 2, 
            userId: 1,
            content: "第二条消息",
          },{
            id: 3, 
            userId: 1,
            content: "第三条消息",
          },
        ]
      })

      const follow = () =>{
        if (user.is_followed) return;
        user.is_followed = true;
        user.followerCount ++;
      };

      const unfollow = () =>{
        if (!user.is_followed) return;
        user.is_followed = false;
        user.followerCount --;
      };

      const post_a_post = (content) => {
        posts.count++;
        posts.posts.unshift({
          id: posts.count,
          userId: 1,
          content: content,
        })
      }

      return {
        user,
        follow,
        unfollow,
        posts, 
        post_a_post,
      }
    
    }
  }
  </script>
  
  <style scoped></style>
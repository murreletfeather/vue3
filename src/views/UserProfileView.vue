<template>
    <ContentBase>
      <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow="follow" @unfollow="unfollow" v-bind:user="user"/>
        </div>
        <div class="col-9">
          <UserProfilePosts />
            

        </div>
      </div> 
    </ContentBase>
  </template>
  
  
  
  <script>
  import ContentBase from '../components/ContentBase';
  import UserProfileInfo from '@/components/UserProfileInfo';
  import UserProfilePosts from '@/components/UserProfilePosts.vue';
  import { reactive } from 'vue';
  
  export default {
    name: 'UserProfile',
    components: {
      ContentBase,
      UserProfileInfo,
      UserProfilePosts,
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

      return {
        user,
        follow,
        unfollow,
      }
    
    }
  }
  </script>
  
  <style scoped></style>
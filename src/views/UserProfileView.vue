<template>
    <ContentBase>
      <div class="row">
        <div class="col-3">
          <UserProfileInfo>

          </UserProfileInfo>
        </div>
        <div class="col-9">帖子列表</div>
      </div>
    </ContentBase>
  </template>
  
  
  
  <script>
  import ContentBase from '../components/ContentBase';
  import UserProfileInfo from '@/components/UserProfileInfo';
  
  export default {
    name: 'UserProfile',
    components: {
      ContentBase,
      UserProfileInfo,
    }
  }
  </script>
  
  <style scoped></style>
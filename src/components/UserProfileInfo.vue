<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/290141_lg_c281cd9429.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">TIM HUNTER</div>
                    <div class="fans">粉丝：123</div>
                    <button type="button" class="btn btn-outline-secondary btn-sm">+关注</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default{
    name: "UserProfileInfo",
}
</script>

<style scoped>
img {
    border-radius: 60%;
}
.username {
    font-weight: bold;
}
.fans {
    font-size: 12px;
    color: gray;
}
button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>
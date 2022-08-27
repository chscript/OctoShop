<template>
    <n-card title="就现在，加入我们！">
        <n-image width="80" src="http://localhost:5000/avatar/default.jpeg" />
        <div class="card-button">
            <n-space>
                <n-button strong secondary type="error">
                    新人福利
                </n-button>
                <n-button strong secondary type="info">
                    超级会员
                </n-button>
            </n-space>
        </div>
        <div class="card-icons">
            <ul>
                <li><a href="#">
                        <n-icon size="32" :depth="2">
                            <HeartOutline />
                        </n-icon>
                        <p>收藏商品</p>
                    </a>
                </li>
                <li><a href="#">
                        <n-icon size="32" :depth="2">
                            <StorefrontOutline />
                        </n-icon>
                        <p>收藏店铺</p>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <n-icon size="32" :depth="2">
                            <TimeOutline />
                        </n-icon>
                        <p>我的足迹</p>
                    </a>
                </li>
            </ul>
        </div>
    </n-card>
</template>
<script>
import { HeartOutline, StorefrontOutline, CartOutline, TimeOutline } from '@vicons/ionicons5'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        HeartOutline,
        StorefrontOutline,
        CartOutline,
        TimeOutline
    }
})

</script>
<style>
.n-card {
    max-width: 300px;
    margin: 20px 0;
    /* border-radius: 15px; */
}

.n-image {
    display: flex;
    margin: 20px 0;
    justify-content: center;
}

.card-button {
    display: flex;
    justify-content: center;
    margin: 50px 0;
}

.card-icons ul {
    display: flex;
    justify-content: space-between;
}

.card-icons ul>li .n-icon {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.card-icons ul>li>a {
    font-size: smaller;
    font-weight: 400;
}

</style>
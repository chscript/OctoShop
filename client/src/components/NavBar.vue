<template>

    <div class="nav">
        <div class="nav-title">
            <n-icon size="32" color="#409EFF">
                <LogoOctocat />
            </n-icon>
            <span>
                OctoShop
            </span>
        </div>
        <div class="nav-menu">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">资讯</a></li>
                <li><a href="#">社区</a></li>
                <li><a href="#">关于</a></li>
            </ul>
        </div>
        <div class="nav-form">
            <n-space>
                <n-input v-model:value="value" type="text" autosize style="width: 200px" status="info" round
                    placeholder="请输入商品名称" />
                <n-button type="info" strong secondary round>
                    搜索
                </n-button>
            </n-space>
        </div>
        <n-button type="info" @click="handleLoginOut" strong secondary round>
            退出登录
        </n-button>
    </div>
</template>

<script>
import { LogoOctocat } from '@vicons/ionicons5';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router"
export default defineComponent({
    components: {
        LogoOctocat,
    },
    setup() {
        const router = useRouter();
        const handleLoginOut = (e) => {
            localStorage.removeItem('token');
            router.push({ path: '/login' });
        }
        return {
            handleLoginOut,
        };
    }
})
</script>
<style>
.nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 12px;
    margin: 20px 0 0 0;
}

.nav>.n-button {
    margin: 0 30px 0 0;
}

.nav-title {
    display: flex;
}

.nav-title .n-icon {
    position: relative;
    top: 14px;
    padding: 0 30px;
}

.nav-title>span {
    color: #409EFF;
    line-height: 60px;
    padding: 0 15px;
    font-size: 20px;
}



.nav-menu ul>li {
    padding: 0 20px;
}

.nav-menu ul>li a {
    font-size: 15px;
}

.nav-menu ul>li a:hover {
    color: #0e7a0d;
}
</style>
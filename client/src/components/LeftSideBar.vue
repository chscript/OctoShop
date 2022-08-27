<template>
    <n-card title="分类">
        <div class="leftside">
            <ul>
                <li><a href="#">美妆</a></li>
                <li>/</li>
                <li><a href="#">内衣</a></li>
                <li>/</li>
                <li><a href="#">奢品</a></li>
            </ul>
            <ul>
                <li><a href="#">女鞋</a></li>
                <li>/</li>
                <li><a href="#">男鞋</a></li>
                <li>/</li>
                <li><a href="#">箱包</a></li>
            </ul>
            <ul>
                <li><a href="#">美妆</a></li>
                <li>/</li>
                <li><a href="#">饰品</a></li>
                <li>/</li>
                <li><a href="#">洗护</a></li>
            </ul>
            <ul>
                <li><a href="#">男装</a></li>
                <li>/</li>
                <li><a href="#">运动</a></li>
                <li>/</li>
                <li><a href="#">百货</a></li>
            </ul>
            <ul>
                <li><a href="#">手机</a></li>
                <li>/</li>
                <li><a href="#">数码</a></li>
                <li>/</li>
                <li><a href="#">礼品</a></li>
            </ul>
            <ul>
                <li><a href="#">家具</a></li>
                <li>/</li>
                <li><a href="#">电气</a></li>
                <li>/</li>
                <li><a href="#">车品</a></li>
            </ul>
            <ul>
                <li><a href="#">生鲜</a></li>
                <li>/</li>
                <li><a href="#">食品</a></li>
                <li>/</li>
                <li><a href="#">母婴</a></li>
            </ul>
            <ul>
                <li><a href="#">医药</a></li>
                <li>/</li>
                <li><a href="#">保健</a></li>
                <li>/</li>
                <li><a href="#">进口</a></li>
            </ul>
        </div>
    </n-card>
</template>

<style>
.n-card {
    max-width: 300px;
    border-radius: 12px;
}

.leftside>ul {
    display: flex;
    justify-content: center;
}

.n-card ul>li {
    padding: 8px;
}

.n-card ul>li {
    font-weight: 200;
}

.n-card ul>li a {
    font-size: medium;
}

.n-card ul>li a:hover {
    color: #0e7a0d;
}
</style>
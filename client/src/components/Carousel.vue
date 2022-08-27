<template>
    <div class="carousel">
        <div class="carousel-menu">
            <ul>
                <li><a href="#">天喵速购</a></li>
                <li>|</li>
                <li><a href="#">顺风秒达</a></li>
                <li>|</li>
                <li><a href="#">飞汪旅行</a></li>
                <li>|</li>
                <li><a href="#">时时特卖</a></li>
            </ul>
        </div>
        <div class="carousel-img">
            <n-carousel show-arrow autoplay>
                <img class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
                <img class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
                <img class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
                <img class="carousel-img"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
            </n-carousel>
        </div>
    </div>
</template>

<style>
.carousel {
    border-radius: 12px;
    background-color: #FFFFFF;
    width: 550px;
    padding: 20px;
    margin: 20px 0;
}

.n-carousel {
    border-radius: 12px;
}

.carousel-img {
    height: 315px;
}

.carousel-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #F2F6FC;
    margin: 0 0 20px 0;
}

.carousel-menu ul>li {
    padding: 10px;
}

.carousel-menu ul>li a {
    color: #409EFF;
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
}

.carousel-menu ul>li a:hover {
    color: #0e7a0d;
}

.carousel-img {
    width: 100%;
    object-fit: cover;
}
</style>
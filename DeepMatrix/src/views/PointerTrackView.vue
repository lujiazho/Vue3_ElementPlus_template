<script setup>
    import { onUnmounted, ref, onMounted } from 'vue';

    const vh = ref(window.innerHeight);
    const projects = ref(vh.value / 2);

    const masterpieces = ref([
        { title: '起风了 風立ちぬ (2013)', imageUrl: '/images/1.jpg' },
        { title: '千与千寻 千と千尋の神隠し (2001)', imageUrl: '/images/2.jpg' },
        { title: '哈尔的移动城堡 ハウルの動く城 (2004)', imageUrl: '/images/3.jpg' },
        { title: '魔女宅急便 魔女の宅急便 (1989)', imageUrl: '/images/4.jpg' },
        { title: '龙猫 となりのトトロ (1988)', imageUrl: '/images/5.jpg' },
        { title: '崖上的波妞 崖の上のポニョ (2008)', imageUrl: '/images/6.jpg' },
        { title: '借东西的小人阿莉埃蒂 借りぐらしのアリエッティ (2010)', imageUrl: '/images/7.jpg' },
        { title: '风之谷 風の谷のナウシカ (1984)', imageUrl: '/images/8.jpg' },
        { title: '幽灵公主 もののけ姫 (1997)', imageUrl: '/images/9.jpg' },
        { title: '萤火虫之墓 火垂るの墓 (1988)', imageUrl: '/images/10.jpg' },
        { title: '大鱼海棠 (2016)', imageUrl: '/images/11.jpg' },
        { title: '你的名字。 君の名は。 (2016)', imageUrl: '/images/12.jpg' },
        { title: '言叶之庭 言の葉の庭 (2013)', imageUrl: '/images/13.jpg' },
        { title: '秒速5厘米 秒速5センチメートル (2007)', imageUrl: '/images/14.jpg' },
        { title: '铃芽之旅 すずめの戸締まり (2022)', imageUrl: '/images/15.jpg' },
        { title: '天气之子 天気の子 (2019)', imageUrl: '/images/16.jpg' },
        { title: '飞屋环游记 Up (2009)', imageUrl: '/images/17.jpg' },
        { title: '萤火之森 蛍火の杜へ (2011)', imageUrl: '/images/18.jpg' },
        { title: '侧耳倾听 耳をすませば (1995)', imageUrl: '/images/19.jpg' },
        { title: '穿越时空的少女 時をかける少女 (2006)', imageUrl: '/images/20.jpg' },
        { title: '魔发奇缘 Tangled (2010)', imageUrl: '/images/21.jpg' },
        { title: '鬼妈妈 Coraline (2009)', imageUrl: '/images/22.jpg' },
        { title: '魁拔之十万火急 (2011)', imageUrl: '/images/23.jpg' },
        { title: '哆啦A梦：伴我同行 STAND BY ME ドラえもん (2014)', imageUrl: '/images/24.jpg' },
        { title: '给桃子的信 ももへの手紙 (2011)', imageUrl: '/images/25.jpg' },
        { title: '罗小黑战记 (2019)', imageUrl: '/images/26.jpg' },
        { title: '最终幻想7：圣子降临 ファイナルファンタジーⅦ アドベントチルドレン (2005)', imageUrl: '/images/27.jpg' },
        { title: '藏獒多吉 (2011)', imageUrl: '/images/28.jpg' },
        { title: '意外的幸运签 カラフル (2010)', imageUrl: '/images/29.jpg' },
        { title: '鬼灭之刃 柱众会议・蝶屋敷篇 鬼滅の刃 柱合会議・蝶屋敷編 (2020)', imageUrl: '/images/30.jpg' },
        { title: '十万个冷笑话 (2014)', imageUrl: '/images/31.jpg' },
        { title: '猫和老鼠：魔法戒指 Tom and Jerry: The Magic Ring (2002)', imageUrl: '/images/32.jpg' },
    ]);

    const computed_data_scalar_y = ref((masterpieces.value.length / 8) * 37.5);
    const computed_data_scalar_x = ref(100);

    const makeWinHeight = () => {
        vh.value = window.innerHeight;
        projects.value = vh.value / 2;
    }

    onMounted(() => {
        makeWinHeight();

        // Attach the resize event listener
        window.addEventListener('resize', makeWinHeight);

        const scene = document.getElementById('scene');
        const parallaxInstance = new window.Parallax(scene);
    })

    onUnmounted(() => {
        // Remove the resize event listener when the component is destroyed
        window.removeEventListener('resize', makeWinHeight);
    });
</script>


<template>
    <section id="scene" :data-scalar-y="computed_data_scalar_y" :data-scalar-x="computed_data_scalar_x" :style="{ height: vh + 'px' }">
        <div class="layer main" data-depth="1.0" :style="{ height: vh + 'px' }">
            <div v-for="piece in masterpieces" class="col" :style="{ height: projects + 'px' }">
                <a href="#" :style="{ height: projects + 'px' }">
                <div class="hover">
                    <div class="pad align-bottom">
                        <h2>{{ piece.title }}</h2>
                    </div>
                    </div>
                        <div class="bg-img" :style="{ backgroundImage: 'url(' + piece.imageUrl + ')' }">
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}


#scene {
    background-color: rgb(145, 151, 242);
    position: relative;
    overflow: hidden;
    width: 100%;
}
.dark #scene {
    background-color: rgb(0, 0, 0);
}

.layer {
    pointer-events: none;
}

h2 {
    font-size: 18px;
    width: 90%;
}

.col {
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 12.5%;
    pointer-events: all;
    overflow: initial;
    margin: 0 0 30px;
}

.layer.main {
    width: 150%;
    position: absolute;
    z-index: 1;
    padding: 20px;
}

.col a {
    display: block;
    margin: 15px;
    overflow: hidden;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.37);
}

.col a .hover {
    position: absolute;
    top: 15px;
    right: 15px;
    bottom: -15px;
    left: 15px;
    z-index: 1;
    color: white;
}

.col a .hover:after {
    content: '';
    position: absolut;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    background: rgb(130, 146, 236);
    opacity: 0;
    transition: 0.35s ease;
}

.col a .hover:hover:after {
    opacity: 0.85;
    transition: 0.35s ease;
}

.align-bottom {
    position: absolute;
    width: 100%;
    bottom: 0%;
    z-index: 2;
    padding: 15px 20px;
}

.bg-img {
    padding: 0px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
}

@media only screen and (max-width:1200px) {
    .layer .col {
        width: 16%;
    }
}

@media only screen and (max-width:650px) {
    .layer .col {
        width: 25%;
    }
}
</style>
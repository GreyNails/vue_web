<template>
  <div class="main-canvas">
    <!-- 顶部红色区域 -->
    <div class="sub-canvas canvas-1">
      <img class="logo" src="@/assets/shouye/小logo.png" alt="logo">
      <!-- 第一个画布内容 -->
    </div>
    <!-- 内容区域2 -->
    <div class="sub-canvas canvas-2">
      <img class="image-2" src="@/assets/shouye/大logo.png" alt="image">
      <img class="image-3" src="@/assets/shouye/香港理工大学 无锡科技创新研究院.png" alt="image">
      <img class="image-4" src="@/assets/shouye/PolyU-Wuxi Technology and Innovation Research Institute.png" alt="image">
      <img class="image-5" src="@/assets/shouye/大图.png" alt="image">

      <!-- 第二个画布内容 -->
    </div>
    <!-- 内容区域3 -->
    <div class="sub-canvas canvas-3">
    <img class="image-13" src="@/assets/shouye/标题1.png" alt="image">
    <img class="image-6" src="@/assets/shouye/标题2.png" alt="image">
    <img class="image-7" src="@/assets/shouye/text1.png" alt="image">
    <img class="image-8" src="@/assets/shouye/text2.png" alt="image">
    <img class="image-9" src="@/assets/shouye/text3.png" alt="image">
    <img class="image-10" src="@/assets/shouye/首页图1.png" alt="image">
    <img class="image-11" src="@/assets/shouye/首页图2.png" alt="image">
    <img class="image-12" src="@/assets/shouye/右底纹.png" alt="image">
      <!-- 第三个画布内容 -->
    </div>
    <!-- 内容区域4 -->
    <div class="sub-canvas canvas-4">
    <img class="image-14" src="@/assets/shouye/交互图-13 1(1).png" alt="image" @click="goToPage('jiguang')">
    <img class="image-15" src="@/assets/shouye/交互图-14 1(1).png" alt="image" @click="goToPage('jiqiren')">  
    <img class="image-16" src="@/assets/shouye/交互图-15 1(1).png" alt="image" @click="goToPage('cailiao')"> 
    <img class="image-17" src="@/assets/shouye/交互图-16 1(1).png" alt="image" @click="goToPage('jiaotong')"> 
    <img class="image-18" src="@/assets/shouye/交互图-17 1(1).png" alt="image" @click="goToPage('ai')"> 
    
    
    <img class="image-19" src="@/assets/shouye/新材料.png" alt="image"> 
    <img class="image-20" src="@/assets/shouye/智能交通.png" alt="image"> 
    <img class="image-21" src="@/assets/shouye/智慧感知.png" alt="image"> 
    <img class="image-22" src="@/assets/shouye/激光.png" alt="image">     
    <img class="image-23" src="@/assets/shouye/机器人.png" alt="image">
    <img class="image-24" src="@/assets/shouye/Rectangle 5.png" alt="image">
    <img class="image-25" src="@/assets/shouye/小标题1.png" alt="image">
      <!-- 第四个画布内容 -->
    </div>

    <div class="sub-canvas canvas-8">
    <img class="image-114" src="@/assets/home_new/小标题1.2.png" alt="image">

    </div>


    <div class="sub-canvas canvas-5">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in images" :key="index" @click="goToPage('new')">
            <img :src="image.src" :alt="image.alt" class="swiper-img"/>
          </div>
        </div>
      </div>
    </div>






    <!-- 底部红色区域 -->
    <div class="sub-canvas canvas-6">
        <img class="image-26" src="@/assets/shouye/中央行政办.png" alt="image">
    <img class="image-27" src="@/assets/shouye/智能交通无人系统研究中心.png" alt="image">
    <img class="image-28" src="@/assets/shouye/智能制造与机器人中心.png" alt="image">
    <img class="image-29" src="@/assets/shouye/智慧感知与人工智能应用中心.png" alt="image">
    <img class="image-30" src="@/assets/shouye/新材料研发中心.png" alt="image">
    <img class="image-31" src="@/assets/shouye/前沿激光智造中心.png" alt="image">
    <img class="image-32" src="@/assets/shouye/如欲进一步了解、探讨合作机遇，欢迎与我们团队成员联络.png" alt="image">
      <!-- 第六个画布内容 -->
    </div>

        <!-- 底部红色区域 -->
    <div class="sub-canvas canvas-7">

    </div>

  </div>
</template>


<script>
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import carousel1 from '@/assets/home_new/自动轮播.png';
import carousel2 from '@/assets/home_new/Frame_13.png';

export default {
  name: 'Home',
  data() {
    return {
      swiper: null,
      images: [
        {
          src: carousel1,
          alt: '轮播图1'
        },
        {
          src: carousel2,
          alt: '轮播图2'
        }
      ]
    };
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      direction: 'horizontal',
      speed: 500,
      slidesPerView: 1
    });
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  },
  methods: {
    goToPage(pageName) {
      this.$router.push(`/${pageName}`);
    }
  }
}



</script>


<style scoped>
/* 主画布容器 */
.main-canvas {
  position: relative;          /* 相对定位 */
  width: 100%;                /* 改为百分比宽度 */
max-width: 1920px;          /* 最大宽度限制 */
  height: 5500px;             /* 设计稿高度 */
  background-color: #fff;     /* 白色背景 */
  margin: 0 auto;             /* 居中显示 */
}

/* 小画布公共样式 */
.sub-canvas {
  position: absolute;         /* 绝对定位 */
  width: 1920px;             /* 固定宽度 */
  left: 50%;                 /* 居中定位 */
  transform: translateX(-50%); /* 居中偏移 */
}

/* 顶部红色区域 - 自适应宽度 */
.canvas-1 {
  top: 0;                    /* 顶部对齐 */
  height: 60pt;              /* 高度60pt */
  background-color: #A0303C; /* 红色背景 */
  width: 100vw;              /* 视口宽度 */
  left: 50%;                 /* 居中定位 */
  transform: translateX(-50%); /* 居中偏移 */
  position: fixed;           /* 固定定位 */
  background-color: #A0303C; /* 红色背景 */
  z-index: 4;
}

.canvas-1 .logo {
  position: absolute;
  left: 59.75px;
  top: 20px;
}

/* 内容区域2 */
.canvas-2 {
  top: 60pt;                /* 从第一个画布底部开始 */
  height: 1020px;
}

.canvas-2 .image-2 {
  position: absolute;
  left: 69.71px;
  top: 115px;  /* 175px - 60pt(canvas-2的top值) */
}
.canvas-2 .image-3 {
  position: absolute;
  left: 62px;
  top: 412px;  /* 175px - 60pt(canvas-2的top值) */
}
.canvas-2 .image-4 {
  position: absolute;
  left: 62px;
  top: 630px;  /* 175px - 60pt(canvas-2的top值) */
}
.canvas-2 .image-5 {
  position: absolute;
  left: 2.99px;
  top: 316px;  /* 175px - 60pt(canvas-2的top值) */
}

/* 内容区域3 */
.canvas-3 {
  top: calc(60pt);  /* 位置计算 + 1020px*/
  height: 1800px;
}

.canvas-3 .image-6 {
  position: absolute;
  left: 55px;
  top: 2024px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-3 .image-7 {
  position: absolute;
  left: 1090px;
  top: 1528px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-3 .image-8 {
  position: absolute;
  left: 1090px;
  top: 1777px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-3 .image-9 {
  position: absolute;
  left: 58px;
  top: 2299px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-3 .image-10 {
  position: absolute;
  left: 55px;
  top: 1376px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-3 .image-11 {
  position: absolute;
  left: 821px;
  top: 2019px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-3 .image-12 {
  position: absolute;
  left: 1597px;
  top: 1339px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 1;
}
.canvas-3 .image-13 {
  position: absolute;
  left: 55px;
  top: 1175px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}

/* 内容区域4 */
.canvas-4 {
  top: 60pt ; /* 位置计算+ 1020px + 1800px */
  height: 790px;
}
.canvas-4 .image-14 {
  position: absolute;
  left: 102px;
  top: 3002px;
  z-index: 2;
  cursor: pointer;
}

.canvas-4 .image-15 {
  position: absolute;
  left: 453px;
  top: 3002px;
  z-index: 2;
  cursor: pointer;
}

.canvas-4 .image-16 {
  position: absolute;
  left: 803px;
  top: 3002px;
  z-index: 2;
  cursor: pointer;
}

.canvas-4 .image-17 {
  position: absolute;
  left: 1152px;
  top: 3002px;
  z-index: 2;
  cursor: pointer;
}

.canvas-4 .image-18 {
  position: absolute;
  left: 1500px;
  top: 3002px;
  z-index: 2;
  cursor: pointer;
}

.canvas-4 .image-19 {
  position: absolute;
  left: 817px;
  top: 3354px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-4 .image-20 {
  position: absolute;
  left: 1166px;
  top: 3341px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-4 .image-21 {
  position: absolute;
  left: 1517px;
  top: 3341px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-4 .image-22 {
  position: absolute;
  left: 118px;
  top: 3354px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-4 .image-23 {
  position: absolute;
  left: 467px;
  top: 3354px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-4 .image-24 {
  position: absolute;
  left: 51px;
  top: 2959px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 1;
}
.canvas-4 .image-25 {
  position: absolute;
  left: 59.75px;
  top: 2864px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}

/* 内容区域4 */
.canvas-6 {
  top: 60pt ; /* 位置计算+ 1020px + 1800px */
  height: 790px;
}


.canvas-6 .image-26 {
  position: absolute;
  left: 59px;
  top: 4901px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-6 .image-27 {
  position: absolute;
  left: 1445px;
  top: 4901px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-28 {
  position: absolute;
  left: 59px;
  top: 5153px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-29 {
  position: absolute;
  left: 1445px;
  top: 5153px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-30 {
  position: absolute;
  left: 773px;
  top: 5153px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-31 {
  position: absolute;
  left: 773px;
  top: 4901px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-32 {
  position: absolute;
  left: 59px;
  top: 4766px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}

/* 底部红色区域 - 自适应宽度 */
.canvas-7 {
  top: calc(60pt + 1020px + 1800px + 1790px); /* 位置计算 */
  height: 715pt;             /* 高度715pt */
  background-color: #A0303C; /* 红色背景 */
  width: 100vw;              /* 视口宽度 */
  left: 50%;                 /* 居中定位 */
  transform: translateX(-50%); /* 居中偏移 */
  z-index: -1; 
}

/* 响应式缩放 */
@media screen and (max-width: 1920px) {
  .main-canvas {
    --scale-ratio: calc(100vw / 1920);
    transform: scale(var(--scale-ratio));
    transform-origin: top center;
  }
}

.canvas-5 {
  position: absolute;
  left: 64px;
  top: 3795px;
  width: 1530px;
  height: 680px;
  z-index: 2;
  overflow: hidden;  /* 添加这一行 */
}

.swiper-container {
  width: 1533px;
  height: 680px;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.swiper-img {
  width: 100%;
}


.canvas-8 {
  position: absolute;
  left: 20.75px;
  top: 3651px;
  width: 1920px;
  height: 680px;
  z-index: 2;
  overflow: hidden;  /* 添加这一行 */
}
.canvas-8 .image-114 {
  position: absolute;
  left: 63.75px;
  top: 0px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}

/* 内容区域4 */
.canvas-4 {
  top: 60pt ; /* 位置计算+ 1020px + 1800px */
  height: 790px;
}
.canvas-4 .image-14 {
  position: absolute;
  left: 102px;
  top: 3002px;
  z-index: 2;
  cursor: pointer;
}
</style>
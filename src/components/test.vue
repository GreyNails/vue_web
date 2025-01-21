<template>
  <div class="image-gallery">
    <div class="content-wrapper">
      <div class="layer-1">
        <img 
          v-for="(image, index) in layer1Images" 
          :key="'layer1-' + index"
          :src="image.src"
          :style="{
            position: 'absolute',
            left: image.left + 'px',
            top: image.top + 'px',
            width: image.width + 'px',
            height: image.height + 'px',
            zIndex: image.zIndex
          }"
          :alt="image.alt"
        />
      </div>

      <div class="layer-2">
        <img 
          v-for="(image, index) in layer2Images" 
          :key="'layer2-' + index"
          :src="image.src"
          :style="{
            position: 'absolute',
            left: image.left + 'px',
            top: image.top + 'px',
            width: image.width + 'px',
            height: image.height + 'px',
            zIndex: image.zIndex
          }"
          :alt="image.alt"
        />
      </div>

      <div class="layer-3">
        <img 
          v-for="(image, index) in layer3Images" 
          :key="'layer3-' + index"
          :src="image.src"
          :style="{
            position: 'absolute',
            left: image.left + 'px',
            top: image.top + 'px',
            width: image.width + 'px',
            height: image.height + 'px',
            zIndex: image.zIndex
          }"
          :alt="image.alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import topImage from '@/assets/shouye/顶端.png'
import bigLogo from '@/assets/shouye/大logo.png'
import smallLogo from '@/assets/shouye/小logo.png'
import mainTitle from '@/assets/shouye/香港理工大学 无锡科技创新研究院.png'
// 位置
// 62px
// 412px
// 大小
// 734px
// 187px
// z
// 3

import polyuTitle from '@/assets/shouye/PolyU-Wuxi Technology and Innovation Research Institute.png'
// 位置
// 62px
// 630px
// 大小
// 747px
// 92px
// z
// 3

import bigImage from '@/assets/shouye/大图.png'
// 位置
// 2.99px
// 316px
// 大小
// 1916.73px
// 763px
// z
// 1


export default {
  name: 'ImageGallery',
  data() {
    return {
      layer1Images: [
                {
          src: bigImage,
          left: 2.99,
          top: 316,
          width: 1916.73,
          height: 763,
          zIndex: 1,
          alt: '大图'
        }
       
        // ... 其他图层1的图片
      ],
      layer2Images: [
        {
          src: bigLogo,
          left: 69.71,
          top: 175,
          width: 572.04,
          height: 110.01,
          zIndex: 2,
          alt: '大logo'
        },
        // ... 其他图层2的图片
      ],
      layer3Images: [
        {
          src: mainTitle,
          left: 62,
          top: 412,
          width: 734,
          height: 187,
          zIndex: 3,
          alt: '香港理工大学 无锡科技创新研究院'
        },
        {
          src: polyuTitle,
          left: 62,
          top: 630,
          width: 747,
          height: 92,
          zIndex: 3,
          alt: 'PolyU-Wuxi'
        },
        {
          src: smallLogo,
          left: 59.75,
          top: 9,
          width: 38.92,
          height: 39.08,
          zIndex: 3,
          alt: '小logo'
        }
        // ... 其他图层3的图片
      ]
    }
  }
}
</script>

<style scoped>
/* 主容器：占满视口并居中内容 */
.image-gallery {
  position: relative;          /* 相对定位，作为子元素的定位参考 */
  width: 100vw;               /* 宽度占满视口宽度 */
  height: 100vh;              /* 高度占满视口高度 */
  overflow:visible ;           /* 隐藏溢出内容 */
  background-color: #fff;     /* 白色背景 */
  display: flex;              /* 弹性布局 */
  justify-content: center;    /* 水平居中 */
  align-items: center;        /* 垂直居中 */
}

/* 内容包装器：固定尺寸并支持缩放 */
.content-wrapper {
  position: relative;         /* 相对定位 */
  width: 1920px;             /* 设计稿宽度 */
  height: 1080px;            /* 设计稿高度 */
  transform-origin: center;   /* 从中心点进行变换 */
  display: flex;             /* 弹性布局 */
  justify-content: center;   /* 水平居中 */
  align-items: center;       /* 垂直居中 */
}

/* 顶部横幅：红色背景条 */
.top-banner {
  position: absolute;        /* 绝对定位 */
  top: 0;                   /* 顶部对齐 */
  left: 50%;                /* 水平居中起点 */
  transform: translateX(-50%); /* 水平居中偏移 */
  width: 100%;              /* 宽度占满 */
  height: 60px;             /* 固定高度 */
  background-color: #A0303C; /* 红色背景 */
  z-index: 1;               /* 置于底层 */
}

/* 三个图层的共同样式 */
.layer-1, .layer-2, .layer-3 {
  position: absolute;        /* 绝对定位 */
  width: 1920px;            /* 设计稿宽度 */
  height: 1080px;           /* 设计稿高度 */
  top: 50%;                 /* 垂直居中起点 */
  left: 50%;                /* 水平居中起点 */
  transform: translate(-50%, -50%); /* 居中偏移 */
}

/* 图片基础样式 */
img {
  position: absolute;        /* 绝对定位 */
  display: block;           /* 块级显示 */
}

/* 响应式缩放：适应不同屏幕尺寸 */
@media screen and (max-width: 1920px) {
  .content-wrapper {
    --scale-ratio: min(
      calc(100vw / 1920),    /* 宽度缩放比例 */
      calc(100vh / 1080)     /* 高度缩放比例 */
    );
    transform: scale(var(--scale-ratio)); /* 整体等比缩放 */
  }
}

/* 小屏幕适配 */
@media screen and (max-width: 1024px) {
  .content-wrapper {
    transform-origin: center;  /* 保持从中心缩放 */
  }
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style> 
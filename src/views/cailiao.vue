<template>
  <div class="main-canvas">
    <!-- 顶部红色区域 -->
    <div class="sub-canvas canvas-1">
        <div class="logo_div">
      <!-- 第一个画布内容 -->
       </div>
    </div>
        <div class="cl">

      <img class="logo" src="@/assets/shouye/小logo.png" alt="logo" @click="goToHome">

    </div>
    <!-- 内容区域2 -->
    <div class="sub-canvas canvas-2">
      <img class="image-1" src="@/assets/cailiao/Frame 9.png" alt="jiqiren">
  
    </div>

    <!-- 底部红色区域 -->
    <div class="sub-canvas canvas-6">
        <img class="image-126" src="@/assets/shouye/中央行政办.png" alt="image">
    <img class="image-127" src="@/assets/shouye/智能交通无人系统研究中心.png" alt="image">
    <img class="image-128" src="@/assets/shouye/智能制造与机器人中心.png" alt="image">
    <img class="image-129" src="@/assets/shouye/智慧感知与人工智能应用中心.png" alt="image">
    <img class="image-130" src="@/assets/shouye/新材料研发中心.png" alt="image">
    <img class="image-131" src="@/assets/shouye/前沿激光智造中心.png" alt="image">
    <img class="image-132" src="@/assets/shouye/如欲进一步了解、探讨合作机遇，欢迎与我们团队成员联络.png" alt="image">
      <!-- 第六个画布内容 -->
    </div>

        <!-- 底部红色区域 -->
    <div class="sub-canvas canvas-7">

    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToHome() {
      this.$router.push('/');
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
  width: 500vw;              /* 视口宽度 */
  left: 50%;                 /* 居中定位 */
  transform: translateX(-50%); /* 居中偏移 */
  position: fixed;           /* 固定定位 */
  background-color: #A0303C; /* 红色背景 */
  z-index: 4;
  
  zoom: 125%;  /* 添加这行来抵消 80% 的缩放效果 (1/0.8 = 1.25) */
}
.logo_div{
  top: 0;                    /* 顶部对齐 */
  height: 60pt;              /* 高度60pt */

  width: 100vw;              /* 视口宽度 */
  left: 50%;                 /* 居中定位 */
  transform: translateX(-50%); /* 居中偏移 */
  position: fixed;           /* 固定定位 */
  background-color: #A0303C; /* 红色背景 */
  z-index: 4;

}

 .logo {
  position: absolute;
  left: 60px;
  top: 20px;
  
}


/* 内容区域2 */
.canvas-2 {
  top: 60pt;                /* 从第一个画布底部开始 */
  height: 1020px;
}
.canvas-2 .image-1 {
  position: absolute;
  left: 0px;
  top: 0px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}








/* 内容区域4 */
.canvas-6 {
  top: 60pt ; /* 位置计算+ 1020px + 1800px */
  height: 790px;
    z-index: 3;
}


.canvas-6 .image-126 {
  position: absolute;
  left: 59px;
  top: calc(3901px + 1352px);  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-6 .image-127 {
  position: absolute;
  left: 1445px;
  top: calc(3901px + 1352px);  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-128 {
  position: absolute;
  left: 59px;
  top: calc(4153px + 1352px);  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-129 {
  position: absolute;
  left: 1445px;
  top:  calc(4153px + 1352px);  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-130 {
  position: absolute;
  left: 773px;
  top:  calc(4153px + 1352px);  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-131 {
  position: absolute;
  left: 773px;
  top: calc(3901px + 1352px);  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-6 .image-132 {
  position: absolute;
  left: 59px;
  top: calc(3766px + 1352px);  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}

/* 底部红色区域 - 自适应宽度 */
.canvas-7 {
  top: 5004px; /* 位置计算 */
  height: 715pt;             /* 高度715pt */
  background-color: #A0303C; /* 红色背景 */
  width: 500vw;              /* 视口宽度 */
  left: 50%;                 /* 居中定位 */
  transform: translateX(-50%); /* 居中偏移 */
  z-index: 1; 
}

/* 响应式缩放 */
@media screen and (max-width: 1920px) {
  .main-canvas {
    --scale-ratio: calc(100vw / 1920);
    transform: scale(var(--scale-ratio));
    transform-origin: top center;
  }
}
/* 内容区域2 */
cl {
  position: absolute;
  left: 0; 
  top: 60pt;               /* 从第一个画布底部开始 */
  height: 120px;
  width: 100vw;
  z-index: 8;
}

.cl .logo {
  position: absolute;
  left: -60vw;
  top: 20px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 8;
}
</style>
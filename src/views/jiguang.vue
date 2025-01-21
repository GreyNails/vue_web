<template>
  <div class="main-canvas">
    <!-- 顶部红色区域 -->
    <div class="sub-canvas canvas-1">
      <img class="logo" src="@/assets/shouye/小logo.png" alt="logo" @click="goToHome">
      <!-- 第一个画布内容 -->
    </div>
    <!-- 内容区域2 -->
    <div class="sub-canvas canvas-2">
      <img class="image-1" src="@/assets/jiguang/高功率蓝_绿激光加工装备.png" alt="高功率激光加工装备">
      <img class="image-2" src="@/assets/jiguang/微米医疗激光设备.png" alt="微米医疗激光设备">
      <img class="image-3" src="@/assets/jiguang/超快激光加工.png" alt="超快激光加工">
      <img class="image-4" src="@/assets/jiguang/logo.png" alt="logo">
      <img class="image-5" src="@/assets/jiguang/t1.png" alt="t1">
      <img class="image-6" src="@/assets/jiguang/text2.png" alt="text2">
      <img class="image-7" src="@/assets/jiguang/text3.png" alt="text3">
      <img class="image-8" src="@/assets/jiguang/text4.png" alt="text4">
      <img class="image-9" src="@/assets/jiguang/text5.png" alt="text5">
      <img class="image-10" src="@/assets/jiguang/text6.png" alt="text6">
      <img class="image-11" src="@/assets/jiguang/text7.png" alt="text7">
      <img class="image-12" src="@/assets/jiguang/text8.png" alt="text8">
      <img class="image-13" src="@/assets/jiguang/text9.png" alt="text9">
      <img class="image-14" src="@/assets/jiguang/text10.png" alt="text10">
      <img class="image-15" src="@/assets/jiguang/text11.png" alt="text11">
      <img class="image-16" src="@/assets/jiguang/text12.png" alt="text12">
      <img class="image-17" src="@/assets/jiguang/text13.png" alt="text13">
      <img class="image-18" src="@/assets/jiguang/text14.png" alt="text14">
      <img class="image-19" src="@/assets/jiguang/专家-18_1.png" alt="专家">
      <img class="image-20" src="@/assets/jiguang/专家-19_1.png" alt="专家">
      <img class="image-21" src="@/assets/jiguang/专家-20_1.png" alt="专家">
      <img class="image-22" src="@/assets/jiguang/专家-21_1.png" alt="专家">
      <img class="image-23" src="@/assets/jiguang/专家-22_1.png" alt="专家">
      <img class="image-24" src="@/assets/jiguang/专家-23_1.png" alt="专家">
      <img class="image-25" src="@/assets/jiguang/合作户logo.png" alt="合作户logo">
      <img class="image-26" src="@/assets/jiguang/图组1.png" alt="图组1">
      <img class="image-27" src="@/assets/jiguang/图组3.png" alt="图组3">
      <img class="image-28" src="@/assets/jiguang/图组4.png" alt="图组4">
      <img class="image-29" src="@/assets/jiguang/大标题.png" alt="大标题">
   
      <img class="image-31" src="@/assets/jiguang/小标题1.1.png" alt="小标题">
      <img class="image-32" src="@/assets/jiguang/小标题1.2.png" alt="小标题">
      <img class="image-33" src="@/assets/jiguang/小标题1.3.png" alt="小标题">
      <img class="image-34" src="@/assets/jiguang/小标题1.4.png" alt="小标题">
      <img class="image-36" src="@/assets/jiguang/徐雅璐 女士(行政主任).png" alt="徐雅璐">
      <img class="image-37" src="@/assets/jiguang/文効忠 教授(学术带头人).png" alt="文效忠">
      <img class="image-38" src="@/assets/jiguang/温燮文 教授(中心主任).png" alt="温燮文">
      <img class="image-39" src="@/assets/jiguang/灰底.png" alt="灰底">
      <img class="image-40" src="@/assets/jiguang/王大庆 博士(研究员).png" alt="王大庆">
      <img class="image-41" src="@/assets/jiguang/皇甫紫薇 女士(工程主任).png" alt="皇甫紫薇">
      <img class="image-42" src="@/assets/jiguang/陈逸阳 副教授(客座研究员).png" alt="陈逸阳">
      <img class="image-43" src="@/assets/jiguang/顶图.png" alt="顶图">
      <img class="image-44" src="@/assets/jiguang/顶端.png" alt="顶端">
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
  height: 5800px;             /* 设计稿高度 */
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
.canvas-2 .image-1 {
  position: absolute;
  left: 105px;
  top: 2356px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-2 {
  position: absolute;
  left: 105px;
  top: 3472px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-3 {
  position: absolute;
  left: 105px;
  top: 4181px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-4 {
  position: absolute;
  left: 1543px;
  top: 679px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-5 {
  position: absolute;
  left: 60px;
  top: 719px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}

.canvas-2 .image-6 {
  position: absolute;
  left: 427px;
  top: 1086px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-7 {
  position: absolute;
  left: 1317px;
  top: 1086px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-8 {
  position: absolute;
  left: 427px;
  top: 1505px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-9 {
  position: absolute;
  left: 1317px;
  top: 1505px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-10 {
  position: absolute;
  left: 427px;
  top: 1858px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-11 {
  position: absolute;
  left: 1317px;
  top: 1858px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}


.canvas-2 .image-12 {
  position: absolute;
  left: 115px;
  top: 2555px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-2 .image-13 {
  position: absolute;
  left: 1374px;
  top: 2555px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}

.canvas-2 .image-14 {
  position: absolute;
  left:1374px;
  top: 2815px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}          

.canvas-2 .image-15 {
  position: absolute;
  left: 115px;
  top: 3136px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}

.canvas-2 .image-16 {
  position: absolute;
  left: 104px;
  top: 3861px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-2 .image-17 {
  position: absolute;
  left: 706px;
  top: 3861px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-2 .image-18 {
  position: absolute;
  left: 723px;
  top: 4476px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-2 .image-19 {
  position: absolute;
  left: 116px;
  top: 1020px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 3;
}
.canvas-2 .image-20 {
  position: absolute;
  left: 1002px;
  top: 1020px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}

.canvas-2 .image-21 {
  position: absolute;
  left: 116px;
  top: 1406px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-22 {
  position: absolute;
  left: 1003px;
  top: 1406px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-23 {
  position: absolute;
  left: 116px;
  top: 1782px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-24 {
  position: absolute;
  left: 1003px;
  top: 1782px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-25 {
  position: absolute;
  left: 70px;
  top: 4765px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-26 {
  position: absolute;
  left: 84px;
  top: 2422px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-27 {
  position: absolute;
  left: 75px;
  top: 3532px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-28 {
  position: absolute;
  left: 72px;
  top: 4212px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}               
.canvas-2 .image-29 {
  position: absolute;
  left: 60px;
  top: 166px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}

.canvas-2 .image-31 {
  position: absolute;
  left: 60px;
  top: 605px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-32 {
  position: absolute;
  left: 60px;
  top: 865px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-33 {
  position: absolute;
  left: 60px;
  top: 2257px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-34 {
  position: absolute;
  left: 60px;
  top: 4710px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}

.canvas-2 .image-36 {
  position: absolute;
  left: 423px;
  top: 1440px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-37 {
  position: absolute;
  left: 423px;
  top: 1021px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-38 {
  position: absolute;
  left: 1313px;
  top: 1021px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-39 {
  position: absolute;
  left: 60px;
  top: 932px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 1;
}
.canvas-2 .image-40 {
  position: absolute;
  left: 423px;
  top: 1793px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-41 {
  position: absolute;
  left: 1313px;
  top: 1440px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}
.canvas-2 .image-42 {
  position: absolute;
  left: 1313px;
  top: 1793px;  /* 175px - 60pt(canvas-2的top值) */
  z-index: 2;
}               







/* 内容区域4 */
.canvas-6 {
  top: 60pt ; /* 位置计算+ 1020px + 1800px */
  height: 790px;
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
</style>
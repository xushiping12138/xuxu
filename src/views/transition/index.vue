<template>
  <el-scrollbar style="height:100%;">
    <div class="app-container">
      <div class="flexBox">
        <div class="inlineBox">
          <button class="pan-btn blue-btn" @click="rubberBandClick()">rubberBand</button>
          <transition name="rubberBand">
            <div class="box" v-show="rubberBand">rubberBand</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn light-blue-btn" @click="pulseClick()">pulse</button>
          <transition name="pulse">
            <div class="box" v-show="pulse">pulse</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn red-btn" @click="bounceClick()">bounce</button>
          <transition name="bounce">
            <div class="box" v-show="bounce">bounce</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn pink-btn" @click="bounceLeftClick()">bounce-left</button>
          <transition name="bounce-left">
            <div class="box" v-show="bounceLeft">bounce-left</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn green-btn" @click="bounceUpClick()">bounce-up</button>
          <transition name="bounce-up">
            <div class="box" v-show="bounceUp">bounce-up</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn pink-btn" @click="fadeLeftClick()">fade-left</button>
          <transition name="fade-left">
            <div class="box" v-show="fadeLeft">fade-left</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn green-btn" @click="fadeUpClick()">fade-up</button>
          <transition name="fade-up">
            <div class="box" v-show="fadeUp">fade-up</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn red-btn" @click="flipClick()">flip</button>
          <transition name="flip">
            <div class="box" v-show="flip">flip</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn tiffany-btn" @click="lightSpeedClick()">lightSpeed</button>
          <transition name="lightSpeed">
            <div class="box" v-show="lightSpeed">lightSpeed</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn yellow-btn" @click="rotateClick()">rotate</button>
          <transition name="rotate">
            <div class="box" v-show="rotate">rotate</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn khaki-btn" @click="zoomClick()">zoom</button>
          <transition name="zoom">
            <div class="box" v-show="zoom">zoom</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn purple-btn" @click="zoomDownClick()">zoom-down</button>
          <transition name="zoom-down">
            <div class="box" v-show="zoomDown">zoom-down</div>
          </transition>
        </div>
        <div class="inlineBox">
          <button class="pan-btn light-blue-btn" @click="hingeClick()">hinge</button>
          <transition name="hinge">
            <div class="box" v-show="hinge">hinge</div>
          </transition>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>
<script>
export default {
  data() {
    return {
      rubberBand: false,
      pulse: false,
      bounce: false,
      bounceLeft: false,
      bounceUp: false,
      fadeLeft: false,
      fadeUp: false,
      flip: false,
      lightSpeed: false,
      rotate: false,
      zoom: false,
      zoomDown: false,
      hinge: false
    }
  },
  methods: {
    rubberBandClick() {
      this.rubberBand = !this.rubberBand
    },
    pulseClick() {
      this.pulse = !this.pulse
    },
    bounceClick() {
      this.bounce = !this.bounce
    },
    bounceLeftClick() {
      this.bounceLeft = !this.bounceLeft
    },
    bounceUpClick() {
      this.bounceUp = !this.bounceUp
    },
    fadeLeftClick() {
      this.fadeLeft = !this.fadeLeft
    },
    fadeUpClick() {
      this.fadeUp = !this.fadeUp
    },
    flipClick() {
      this.flip = !this.flip
    },
    lightSpeedClick() {
      this.lightSpeed = !this.lightSpeed
    },
    rotateClick() {
      this.rotate = !this.rotate
    },
    zoomClick() {
      this.zoom = !this.zoom
    },
    zoomDownClick() {
      this.zoomDown = !this.zoomDown
    },
    hingeClick() {
      this.hinge = !this.hinge
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: #30b08f;
  margin: 20px;
}
.inlineBox {
  height: 200px;
}
.flexBox {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>


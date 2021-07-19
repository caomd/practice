<template>
  <div class="home" @click="toAboutPage">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>倒计时：{{ timeDisplay }}</div>
    <div>倒计时：{{ d }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";
import { RouterHelper } from "../lib/routerHelper_1";
// import { Countdown, CountdownEventName, fillZero } from "../lib/countdown_1";
import { CountDown, CountDownEventName, fillZero } from "../lib/countdown";
import { RoutePath } from "../router";
import { measure } from "../decorator";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public timeDisplay: string = "";
  public d: number = 1;

  // @measure
  // public toAboutPage() {
  //     RouterHelper.push(RoutePath.About, {  testName: '1111' });
  // }

  // public created() {
  //     const countdown = new Countdown(Date.now() + 60 * 60 * 1000, 10);
  //     countdown.on(CountdownEventName.RUNNING, (remainTimeData) => {
  //         const { hours, minutes, seconds, count} = remainTimeData;
  //         this.timeDisplay = [hours, minutes, seconds, count].map(fillZero).join(':');
  //     });

  // }
  toAoutPage() {
    RouterHelper.replace(RoutePath.About, { testName: "111" });
    RouterHelper.push(RoutePath.Index, { name: "111" });
  }
  public longTimeFun(timeout: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  }
  // @measure
  // async created() {
  //   await this.longTimeFun(2000);
  // }
  created() {
    const countdown = new CountDown(Date.now() + 60 * 60 * 1000, 10);
    countdown.on(CountDownEventName.RUNNING, (remainTimeData) => {
      const { days, hours, minutes, seconds, count } = remainTimeData;
      this.timeDisplay = [days, hours, minutes, seconds, count]
        .map(fillZero)
        .join(":");
      this.d = 9;
      console.log(this.timeDisplay, this.d);
    });
  }
}
</script>

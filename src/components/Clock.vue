<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data: () => ({
    time: "",
    date: "",
    week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  }),
  created() {
    const timerID = setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  methods: {
    updateTime() {
      console.log("Clock test");
      var cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>

<style scoped>
#clock {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 0%;
  top: 0%;
  transform: translate(-50%, -50%);
  color: #ecfaff;
  /* text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0); */
  text-shadow: 0 0 20px rgba(0, 0, 0, 1), 0 0 20px rgba(0, 0, 0, 0);
}
.time {
  letter-spacing: 0.05em;
  font-size: 40px;
  padding: 5px 0;
}
.date {
  letter-spacing: 0.1em;
  font-size: 18px;
  margin: 0;
}
.text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 16px 0 0;
}
</style>

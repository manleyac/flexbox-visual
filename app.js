const vm = Vue.createApp({
  data() {
    return {
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
    };
  },
  computed: {
    container_styles() {
      return {
        flexDirection: this.flexDirection,
        flexWrap: this.flexWrap,
        justifyContent: this.justifyContent,
      };
    },
  },
}).mount("#app");

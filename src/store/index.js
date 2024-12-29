import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      siteTheme: "light",
      newsArr: [
        {
          label: "微博",
          value: "weibo",
          order: 0,
          show: true,
        },
        {
          label: "腾讯新闻",
          value: "tencent",
          order: 1,
          show: true,
        },
        {
          label: "澎湃新闻",
          value: "thepaper",
          order: 2,
          show: true,
        },
        {
          label: "抖音",
          value: "douyin",
          order: 3,
          show: true,
        },
        {
          label: "B站热搜",
          value: "bilibili",
          order: 4,
          show: true,
        },
        {
          label: "知乎",
          value: "zhihu",
          order: 5,
          show: true,
        },
        {
          label: "百度",
          value: "baidu",
          order: 6,
          show: true,
        },
        {
          label: "AcFun日榜",
          value: "acfun",
          order: 7,
          show: true,
        },
        {
          label: "少数派",
          value: "sspai",
          order: 8,
          show: true,
        },
        {
          label: "IT之家",
          value: "ithome",
          order: 9,
          show: true,
        },
        {
          label: "今日头条",
          value: "toutiao",
          order: 10,
          show: true,
        },
        {
          label: "百度贴吧",
          value: "tieba",
          order: 11,
          show: true,
        },
        {
          label: "稀土掘金",
          value: "juejin",
          order: 12,
          show: true,
        },
        {
          label: "搜狗新闻",
          value: "sougou",
          order: 13,
          show: true,
        },
        {
          label: "历史今日",
          value: "history",
          order: 14,
          show: true,
        },
        {
          label: "哔哩哔哩日榜",
          value: "biliall",
          order: 15,
          show: false,
        },
        {
          label: "掘金前端",
          value: "juejinqian",
          order: 16,
          show: true,
        },
        {
          label: "掘金后端",
          value: "juejinhou",
          order: 17,
          show: true,
        },
        {
          label: "掘金代码人生",
          value: "juejinlife",
          order: 18,
          show: true,
        },
        {
          label: "36氪",
          value: "36kr",
          order: 19,
          show: true,
        },
      ],
      linkOpenType: "open",
      headerFixed: true,
      timeData: null,
    };
  },
  getters: {},
  actions: {
    setSiteTheme(val) {
      $message.info(`已切换至${val === "dark" ? "深色模式" : "浅色模式"}`, {
        showIcon: false,
      });
      this.siteTheme = val;
    },
  },
  persist: [
    {
      storage: localStorage,
      paths: ["siteTheme", "newsArr", "linkOpenType", "headerFixed"],
    },
  ],
});

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    //  用 `vue-jest` 处理 `*.vue` 文件
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
  },
  // 告诉 Jest 处理 `*.vue` 文件
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
};

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    // "@babel/plugin-syntax-top-level-await",
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }], // `style: true` 会加载 less 文件
    [
      "import",
      {
        "libraryName": "ant-design-vue",
        "styleLibraryName": "es",
        "style": true
      },
      "antdv"
    ],
    [
      "import",
      {
        "libraryName": "@formily/antdv-x3",
        "libraryDirectory": "esm",
        "style": true
      },
      "@formily/antdv-x3"
    ]
  ]
}

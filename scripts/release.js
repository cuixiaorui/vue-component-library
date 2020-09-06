// todo
// 1. 自动把要发版的组件添加到 entry.js 文件内
// 2. 编译 css
// 3. 每一个步骤都给出友好的提示信息

// 分割线
// tasking(v1.0)
// 1. 输入要发布的版本号
// 2. 执行 yarn:next
// 3. 执行 npm version 要升级的版本号
// 4. 执行 npm publish
// 5. 执行 git push origin tagName(版本号)

const args = require("minimist")(process.argv.slice(2));
const execa = require("execa");
const chalk = require('chalk');
const { prompt } = require("enquirer");

const step = (msg) => console.log(chalk.cyan(msg));

async function main() {
  const targetVersion = args.v;

  const { yes } = await prompt({
    type: "confirm",
    name: "yes",
    message: `Releasing v${targetVersion}. Confirm?`,
  });

  if (!yes) return;

  // await execa("npm", ["run", "build:next"]);

  await execa("npm", [
    "version",
    targetVersion,
    "--message",
    `build: release v${targetVersion}`,
  ]);

  step("\nPublishing package...");
  await execa("npm", ["publish", "--registry", "https://registry.npmjs.org"]);

  step("\nPushing to GitHub...");
  await execa("git", ["push", "origin", `v${targetVersion}`]);

  console.log(chalk.green(`Successfully published ${targetVersion}`));
}

main().catch((err) => {
  console.error(err);
});

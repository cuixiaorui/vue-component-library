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

const args = require('minimist')(process.argv.slice(2))
const execa = require('execa')
const { prompt } = require('enquirer')

async function main() {
  const targetVersion = args.v

  const { yes } = await prompt({
    type: 'confirm',
    name: 'yes',
    message: `Releasing v${targetVersion}. Confirm?`
  })

  if (!yes) return

  await execa('npm', ['run', 'build:next'])

  await execa('npm', [
    'version',
    targetVersion,
    '--message',
    `build: release v${targetVersion}`
  ])

  //   需要临时修改 npm config registry
  //   todo
  await execa('npm', ['publish'])

  await execa('git', ['push', 'origin', `v${targetVersion}`])
}

main().catch((err) => {
  console.error(err)
})

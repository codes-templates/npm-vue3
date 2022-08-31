# README

##  Features

> It is recommended to use jsx to develop components, If you want to develop with .vue
>
> do change with pacckage.json:

```diff
"scripts": {
-  "prepublishOnly": "npm run build",
+  "prepublishOnly": "npm run build:vite",
},
```

- 💻 Vue suport >=3.2.0
- ✈️ Project init with [vite](https://vitejs.dev/)
- 📦 Support cjs & esm


- 🛎 you can write componet with .vue or .tsx

---

- 🪖 [Github Actions](https://docs.github.com/cn/actions) support (Auto CI on pull_request / Auto Release on push tag / Auto Deploy on push & pull_request)
- 🍕 Build npm package with [tsup](https://tsup.egoist.sh/)
- Build-in vitepress

  > ```npm run docs```

- 🍭 Built-in Vue3 dev environment

  > [playground](./playground/vite.config.ts) folder
  >
  > start --> ```npm run dev```

- 🍔 Use [browserslistrc](./.browserslistrc)
- 🪗 Build styles with sass && [postcss](./postcss.config.js) ([postcss-nested](https://www.npmjs.com/package/postcss-nested)/ [autoprefixer](https://www.npmjs.com/package/autoprefixer) / [cssnano](https://cssnano.co/docs/getting-started/))
- 🌭 [Stylelint](https://stylelint.io/) that helps you avoid errors and enforce conventions in your styles.
- 🍟 [Mono repo with npm](https://dev.to/ynwd/how-to-create-react-monorepo-with-npm-workspace-webpack-and-create-react-app-2dhn)
- 🎉 [TypeScript](https://www.typescriptlang.org/), of course
- 🎄 Unit Testing with [Vitest](https://vitest.dev/)
- 🏑 [Storybook](https://storybook.js.org/) for building UI components and pages
- 🧆 [ESLint](https://eslint.org/) statically analyzes your code to quickly find problems.
- ⚒ [Husky](https://typicode.github.io/husky) & [lint-staged](https://github.com/okonet/lint-staged#readme)
- ☕ [Commitlint](https://commitlint.js.org) that helps your team adhering to a commit convention
- 🛸 Deploy Storybook on [Netlify](https://www.netlify.com/) ---> [config](./.github/workflows/deploy.yaml)
- 🥳 [MIT License](https://mit-license.org/)

## how to use

replace ```my-custom-vue3-package``` with your package name

## Directory structure

```js
Project
├── __tests__           # Unit Testing
├── babel.config.js     # babel config
├── package.json
├── playground          # dev environment folder (can use source code)
│   ├── index.html
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tsconfig.json
│   ├── vite-env.d.ts
│   └── vite.config.ts
├── postcss.config.js  # build styles with postcss
├── global.d.ts # global componet type declaration (TIPS: Manual maintenance is required)
├── src                # Package source code
│   ├── index.ts       # Package source entry
│   ├── stories        # storybook for building UI components and pages
│   ├── styles         # styles for Package
│   └── types.ts       # ts type declaration for Package
├── tsconfig.json      # ts config
└── tsup.config.ts     # build package with tsup
```

## Register Components Globally

```js
// main.ts
import InstallPlugin from 'my-custom-vue3-package';

app.use(InstallPlugin());
```

```js
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "my-custom-vue3-package/global"
    ]
  }
}
```

## How to add GITHUB_TOKEN

- [add GITHUB_TOKEN](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## How to add NPM_TOKEN

1. [create npm auth token](https://docs.npmjs.com/creating-and-viewing-access-tokens)
2. then copy npm token, add to github project settings

     - project -> settings -> secrets -> actions -> create new token with name:NPM_TOKEN

## How to add NETLIFY_TOKEN

1. [create netlify auth token](https://app.netlify.com/user/applications#personal-access-tokens)
2. then copy netlify token, add to github project settings

     - project -> settings -> secrets -> actions -> create new token with name:NETLIFY_TOKEN

3. create a site on netlify

4. copy the site_id from your netlify site settings, add it to github project settings

     - project -> settings -> secrets -> actions -> create new token with name:NETLIFY_SITE_ID

5. Stop Build from Build settings of site

## How to generate VERCEL_ORG_ID / VERCEL_PROJECT_ID

1. run ```npx vercel``` in project root folder
2. open .vercel/project.json
3. copy orgId & projectId, add it to github project settings

     - project -> settings -> secrets -> actions -> create new token with name:VERCEL_ORG_ID & VERCEL_PROJECT_ID

4. [create vercel token](https://vercel.com/account/tokens), add it to github project settings

     - project -> settings -> secrets -> actions -> create new token with name:VERCEL_TOKEN

5. change project build setting

    ![setting](https://ik.imagekit.io/jerrywu001/vercel_deploy_vue3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658727376601)

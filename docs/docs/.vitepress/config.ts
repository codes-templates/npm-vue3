import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { version } from '../../../package.json';
import path from 'path';

export default defineConfig({
  lang: 'en-US',
  title: 'my-custom-vue3-package',
  description: 'my-custom-vue3-package docs',
  lastUpdated: true,

  markdown: {
    config(md) {
      md
        .use(require('markdown-it-directive'))
        .use(
          require('markdown-it-directive-webcomponents'),
          {
            components: [
              {
                present: 'both',
                name: 'playground',
                tag: 'playground',
                parseInner: true,
              },
              {
                present: 'both',
                name: 'sandbox',
                tag: 'sand-box',
                allowedAttrs: ['readonly', 'closabletabs', 'template'],
                parseInner: true,
              },
            ],
          }
      );
    },
  },

  themeConfig: {
    nav: nav(),

    sidebar: sidebarConfig(),

    editLink: {
      pattern: 'https://github.com/codes-templates/npm-vue3/edit/main/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codes-templates/npm-vue3' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present jerrywu001'
    },
  },

  vite: {
    resolve: {
      alias: {
        'my-custom-vue3-package': `${path.resolve(__dirname, '../../../src')}`,
      },
    },
    plugins: [
      vueJsx(),
    ],
  },
})

function nav() {
  return [
    { text: 'Get Started', link: '/get-started/introduction', activeMatch: '/get-started/' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/codes-templates/npm-vue3/releases'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Get Started',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/get-started/introduction' },
      ]
    },
  ];
}

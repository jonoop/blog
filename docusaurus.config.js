const path = require('path')
const beian = ''

//const announcementBarContent = `<a href="https://firework.jonoop.com" target="_blank">2023 新年快乐</a> 🎉`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jon的小站',
  titleDelimiter: '-',
  url: 'http://jonoop.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Jon',
  projectName: 'blog',
  tagline: '记录所学知识，领略编程之美，希望能在有限的时间内，学到无限的可能',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
    metadata: [
      {
        name: 'keywords',
        content:'Jon'
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向，现在主攻ts全栈',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: 'Jon',
      logo: {
        alt: 'Jon',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        {
          label: '学习',
          position: 'right',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '笔记',
              to: 'docs/skill/',
            },
            {
              label: '工具推荐',
              to: 'docs/tools/',
            },
            {
              label: '前端示例',
              to: 'https://example.jonoop.com',
            },
          ],
        },
        {
          label: '工具',
          position: 'right',
          items: [
            {
              label: 'API服务',
              to: 'https://api.jonoop.com',
            },
            {
              label: 'JS代码还原',
              to: 'https://js-de-obfuscator.jonoop.com',
            },
            {
              label: 'CyberChef加密',
              to: 'https://cipher.jonoop.com',
            },
            {
              label: 'Transform',
              to: 'https://transform.jonoop.com',
            },
            {
              label: '网盘',
              to: 'https://pan.jonoop.com',
            },
          ],
        },
        {
          label: '导航',
          position: 'right',
          to: 'website',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
         {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '实战项目',
              to: 'project',
            },
            {
              label: '前端示例',
              to: 'https://example.jonoop.com',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jonoop',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/1209927677250487',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/',
            }
          ],
        },
        {
          title: '更多',
          items: [{
            label: '友链',
            position: 'right',
            to: 'friends',
          }, {
            label: '导航',
            position: 'right',
            to: 'website',
          },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT Jon Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'Jon',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {
      matomoUrl: 'https://matomo.jonoop.com/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'Jon/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      mapping: 'title',
      lang: 'zh-CN',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/jonoop',
      twitter: 'https://twitter.com/jonoop',
      juejin: 'https://juejin.cn/user/1209927677250487',
      csdn: 'https://blog.csdn.net/jonoop',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq',
      zhihu: 'https://www.zhihu.com/people/jonoop',
      cloudmusic: 'https://music.163.com/#/user/home?id=1333',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Jon的个人博客',
      },
    }
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/jonoop/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarCount: 10,
        blogDescription: 'Jon的个人博客',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'Jon',
          copyright: `Copyright © ${new Date().getFullYear()} Jon Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config

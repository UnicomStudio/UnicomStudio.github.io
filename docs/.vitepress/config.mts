import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unicom Studio",
  description: "Studio for Unicom",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>archlinux</title><path d="M29.619 27.697v-0.779h-0.292v-0.105h0.702v0.105h-0.292v0.779h0.414v-0.884h0.177l0.209 0.625 0.042 0.134q0.022-0.072 0.047-0.142l0.212-0.616h0.157v0.884h-0.114v-0.741l-0.257 0.741h-0.105l-0.256-0.752v0.752h-0.114zM15.238 1.76c-1.267 3.108-2.032 5.142-3.443 8.156 1.088 1.18 2.284 2.23 3.582 3.145l0.070 0.047c-1.556-0.601-2.899-1.385-4.093-2.347l0.029 0.023c-1.807 3.769-4.636 9.137-10.38 19.456 3.237-2.106 6.997-3.765 11.016-4.772l0.257-0.054c-0.136-0.561-0.214-1.205-0.214-1.868 0-0.023 0-0.046 0-0.069l-0 0.003 0.004-0.144c0.072-2.893 1.576-5.117 3.358-4.965 1.782 0.15 3.167 2.619 3.097 5.51-0.012 0.557-0.078 1.091-0.193 1.608l0.010-0.054c4.227 1.076 7.939 2.726 11.286 4.893l-0.147-0.089c-0.877-1.616-1.662-3.073-2.411-4.461-1.436-1.262-3.048-2.387-4.777-3.322l-0.138-0.068c1.484 0.355 2.791 0.885 3.991 1.58l-0.071-0.038c-3.56-6.078-7.19-13.365-10.358-20.894l-0.476-1.275z"></path></svg>'
        },
        link: '/Repositories'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img"><path d="M4.209 4.603c-.247 0-.525.02-.84.088-.333.07-1.28.283-2.054 1.027C-.403 7.25.035 9.685.089 10.052c.065.446.263 1.687 1.21 2.768 1.749 2.141 5.513 2.092 5.513 2.092s.462 1.103 1.168 2.119c.955 1.263 1.936 2.248 2.89 2.367 2.406 0 7.212-.004 7.212-.004s.458.004 1.08-.394c.535-.324 1.013-.893 1.013-.893s.492-.527 1.18-1.73c.21-.37.385-.729.538-1.068 0 0 2.107-4.471 2.107-8.823-.042-1.318-.367-1.55-.443-1.627-.156-.156-.366-.153-.366-.153s-4.475.252-6.792.306c-.508.011-1.012.023-1.512.027v4.474l-.634-.301c0-1.39-.004-4.17-.004-4.17-1.107.016-3.405-.084-3.405-.084s-5.399-.27-5.987-.324c-.187-.011-.401-.032-.648-.032zm.354 1.832h.111s.271 2.269.6 3.597C5.549 11.147 6.22 13 6.22 13s-.996-.119-1.641-.348c-.99-.324-1.409-.714-1.409-.714s-.73-.511-1.096-1.52C1.444 8.73 2.021 7.7 2.021 7.7s.32-.859 1.47-1.145c.395-.106.863-.12 1.072-.12zm8.33 2.554c.26.003.509.127.509.127l.868.422-.529 1.075a.686.686 0 0 0-.614.359.685.685 0 0 0 .072.756l-.939 1.924a.69.69 0 0 0-.66.527.687.687 0 0 0 .347.763.686.686 0 0 0 .867-.206.688.688 0 0 0-.069-.882l.916-1.874a.667.667 0 0 0 .237-.02.657.657 0 0 0 .271-.137 8.826 8.826 0 0 1 1.016.512.761.761 0 0 1 .286.282c.073.21-.073.569-.073.569-.087.29-.702 1.55-.702 1.55a.692.692 0 0 0-.676.477.681.681 0 1 0 1.157-.252c.073-.141.141-.282.214-.431.19-.397.515-1.16.515-1.16.035-.066.218-.394.103-.814-.095-.435-.48-.638-.48-.638-.467-.301-1.116-.58-1.116-.58s0-.156-.042-.27a.688.688 0 0 0-.148-.241l.516-1.062 2.89 1.401s.48.218.583.619c.073.282-.019.534-.069.657-.24.587-2.1 4.317-2.1 4.317s-.232.554-.748.588a1.065 1.065 0 0 1-.393-.045l-.202-.08-4.31-2.1s-.417-.218-.49-.596c-.083-.31.104-.691.104-.691l2.073-4.272s.183-.37.466-.497a.855.855 0 0 1 .35-.077z"/></svg>'
        },
        link: 'https://git.unicom.studio'
      },
    ]
  }
})

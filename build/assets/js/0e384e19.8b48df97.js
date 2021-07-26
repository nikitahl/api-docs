(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[671],{426:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var i=o(2122),l=o(9756),n=(o(7294),o(3905)),a={sidebar_position:1,slug:"/"},r="Introduction",s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Visual Composer API allows you to develop your own custom elements for the website builder. With custom elements, you are in charge of your element design and functionality which is crucial for advanced projects and allows perfectly align element choice to your brand.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/api-docs/",editUrl:"https://github.com/VisualComposer/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Element Structure",permalink:"/api-docs/element-structure/element-structure"}},u=[{value:"What is Visual Composer Website Builder Editor?",id:"what-is-visual-composer-website-builder-editor",children:[]},{value:"What is Visual Composer Element?",id:"what-is-visual-composer-element",children:[]},{value:"How to Start Development?",id:"how-to-start-development",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Useful Links",id:"useful-links",children:[]}],m={toc:u};function p(e){var t=e.components,o=(0,l.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Visual Composer API allows you to develop your own custom elements for the website builder. With custom elements, you are in charge of your element design and functionality which is crucial for advanced projects and allows perfectly align element choice to your brand."),(0,n.kt)("p",null,"This section contains all the information you need to develop custom elements, it will guide you on how to get started, provide information about hooks, attributes, and offer examples."),(0,n.kt)("h2",{id:"what-is-visual-composer-website-builder-editor"},"What is Visual Composer Website Builder Editor?"),(0,n.kt)("p",null,"To get started, you need to understand how the Visual Composer Website Builder Editor works. The Editor is WYSIWYG module based editor which has inner and public API to manage elements and components."),(0,n.kt)("p",null,"The editor works with elements as React components. These components must be built with Webpack and enqueued via API hooks (WordPress actions). Every element consists of few parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Thumbnail Image \u2013 a small image (100\xd7100 pixels) that will represent an element in the \u2018Add Element\u2019 window;"),(0,n.kt)("li",{parentName:"ul"},"Preview Image \u2013 a large image (520\xd7240 pixels) visible on Thumbnail hover;"),(0,n.kt)("li",{parentName:"ul"},"Description \u2013 a description that appears on hover together with the Preview image;"),(0,n.kt)("li",{parentName:"ul"},"Category \u2013 element category;"),(0,n.kt)("li",{parentName:"ul"},"React-based component.")),(0,n.kt)("h2",{id:"what-is-visual-composer-element"},"What is Visual Composer Element?"),(0,n.kt)("p",null,"The element is an independent component of the system which represents HTML based block with the ability to output media and dynamic content. Visual Composer offers a wide range of pre-defined content elements which can be downloaded from the ",(0,n.kt)("a",{href:"https://visualcomposer.com/help/visual-composer-hub/",target:"_blank"},"Visual Composer Hub"),". Visual Composer API allows extending the list with your own elements \u2013 these elements will not be available in the Hub but will be instantly displayed in the \u2018Add Element\u2019 window."),(0,n.kt)("h2",{id:"how-to-start-development"},"How to Start Development?"),(0,n.kt)("p",null,"There are 4 steps to start developing elements for the Visual Composer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Follow the requirements (see below);"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://visualcomposer.com/download/",target:"_blank"},"Download")," and ",(0,n.kt)("a",{href:"https://visualcomposer.com/help/installation/",target:"_blank"},"install")," the plugin;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://visualcomposer.com/help/activation/",target:"_blank"},"Activate")," the plugin with Premium/Free license;"),(0,n.kt)("li",{parentName:"ul"},"Use API hooks and element boilerplates to add elements to your plugin or theme.")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"To develop Visual Composer element there are following technical requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PHP >= 5.4"),(0,n.kt)("li",{parentName:"ul"},"WordPress >= 4.6"),(0,n.kt)("li",{parentName:"ul"},"PHP gd2/imagick and php-zip extensions to be loaded"),(0,n.kt)("li",{parentName:"ul"},"Node >=8.0"),(0,n.kt)("li",{parentName:"ul"},"npm >=5.8"),(0,n.kt)("li",{parentName:"ul"},"yarn")),(0,n.kt)("h2",{id:"useful-links"},"Useful Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visual Composer Website Builder repository: ",(0,n.kt)("a",{href:"https://github.com/VisualComposer/builder",target:"_blank"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/builder"},"https://github.com/VisualComposer/builder")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Element boilerplate repository: ",(0,n.kt)("a",{href:"https://github.com/VisualComposer/elementBoilerplate",target:"_blank"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/elementBoilerplate"},"https://github.com/VisualComposer/elementBoilerplate")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"WordPress Demo plugin with elements: ",(0,n.kt)("a",{href:"https://github.com/VisualComposer/vcwb-demo-element-example-plugin",target:"_blank"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/vcwb-demo-element-example-plugin"},"https://github.com/VisualComposer/vcwb-demo-element-example-plugin"))))))}p.isMDXComponent=!0}}]);
export default {
    headerItems: [
        {
            name: "首页",
            to: process.env.PUBLIC_URL,
        },
        {
            name: "典型案例",
            to: null,
            submenu: [
                {
                    name: "多种业务类型支持",
                    to: "/casestudy-multiple-business-support",
                },
                {
                    name: "科学计算",
                    to: "/casestudy-scientific-computing",
                },
                {
                    name: "私有云场景",
                    to: "/casestudy-private-cloud",
                },
            ],
        },
        {
            name: "帮助文档",
            to: "https://tkestack.github.io/docs/",
            isOutSide: true,
            target: "_blank"
        },
        {
            name: "联系我们",
            to: "https://github.com/tkestack/tke",
            isOutSide: true,
            target: "_blank",
            isBigger: true,
        },
    ],
};

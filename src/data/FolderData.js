const explorer = {
    name: 'root',
    isFolder:true,
    items:[
        {
            name:'public',
            isFolder:true,
            items:[
                {
                    name: "index.html",
                    isFolder: false
                },
                {
                    name: "robots.txt",
                    isFolder: false
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            items: [
                {
                    name: "actions",
                    isFolder: true,
                    items: [
                        {
                            name: "authAction.js",
                            isFolder: false
                        },
                        {
                            name: "constants.js",
                            isFolder: false
                        },
                        {
                            name: "index.js",
                            isFolder: false
                        }
                    ]
                },
                {
                    name: "App.css",
                    isFolder: false
                },
                {
                    name: "App.js",
                    isFolder: false
                },
                {
                    name: "index.js",
                    isFolder: false
                }

            ]
        }
    ]
}

export default explorer;
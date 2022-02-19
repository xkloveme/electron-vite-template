import config from '@config/index'


export const mainWindowConfig = {
    height: 800,
    useContentSize: true,
    width: 1000,
    minWidth: 966,
    show: false,
    frame: config.IsUseSysTitle,
    webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webSecurity: false,
        mode:'right',
        // 如果是开发模式可以使用devTools
        devTools: process.env.NODE_ENV === 'development',
        // 在macos中启用橡皮动画
        scrollBounce: process.platform === 'darwin',
    }
};

export const otherWindowConfig = {
    height: 595,
    useContentSize: true,
    width: 940,
    autoHideMenuBar: true,
    minWidth: 842,
    frame: config.IsUseSysTitle,
    show: false,
    webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webSecurity: false,
        mode:'right',
        // 如果是开发模式可以使用devTools
        devTools: process.env.NODE_ENV === 'development',
        // 在macos中启用橡皮动画
        scrollBounce: process.platform === 'darwin',
    }
}

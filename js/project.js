// AnkerPM.copilot - 项目详情页面JavaScript

// 页面切换
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 更新导航状态
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        item.classList.add('active');
        
        // 切换页面
        const pageName = item.getAttribute('data-page');
        switchPage(pageName);
    });
});

// 切换页面函数
function switchPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(nav => {
        if (nav.getAttribute('data-page') === pageName) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}

// 快速操作按钮
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const pageName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        switchPage(pageName);
    });
});

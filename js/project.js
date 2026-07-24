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

// 折叠/展开卡片（信息看板）
function toggleCard(element) {
    const card = element.closest('.analysis-card');
    const content = card.querySelector('.card-content');
    const icon = element.querySelector('.toggle-icon');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '▼';
        card.classList.remove('collapsed');
    } else {
        content.style.display = 'none';
        icon.textContent = '▶';
        card.classList.add('collapsed');
    }
}

// 折叠/展开维度（决策页面）
function toggleDimension(element) {
    const card = element.closest('.dimension-card');
    const content = card.querySelector('.dimension-content');
    const icon = element.querySelector('.toggle-icon');
    
    if (card.classList.contains('collapsed')) {
        card.classList.remove('collapsed');
        content.style.display = 'block';
        icon.textContent = '▼';
    } else {
        card.classList.add('collapsed');
        content.style.display = 'none';
        icon.textContent = '▶';
    }
}

// 权重滑块更新
document.querySelectorAll('.weight-slider input[type="range"]').forEach(slider => {
    slider.addEventListener('input', (e) => {
        const valueDisplay = e.target.nextElementSibling;
        valueDisplay.textContent = e.target.value + '%';
    });
});

// 快速操作按钮点击事件
document.addEventListener('DOMContentLoaded', () => {
    // 为所有快速操作按钮添加事件监听
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // 从onclick属性中提取页面名称
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/switchPage\('([^']+)'\)/);
                if (match) {
                    switchPage(match[1]);
                }
            }
        });
    });
});

// 补充上传文件
function uploadMoreFiles() {
    alert('上传文件功能\n\n在完整版中，你可以：\n\n📎 上传文件（PDF/Word/Excel/PPT）\n🔗 粘贴飞书文档链接\n📊 上传调研数据\n\n这些资料将被 AI 自动分析并融入到深度情报中。');
}

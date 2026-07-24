// AnkerPM.copilot - 工作台JavaScript文件

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
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(`${pageName}-page`).classList.add('active');
    });
});

// 刷新机会
function refreshOpportunities() {
    alert('正在刷新机会列表...\n\n这是一个演示功能，实际应用中会从后端API获取最新数据。');
}

// 显示新建项目模态框
function showNewProjectModal() {
    document.getElementById('new-project-modal').classList.add('active');
}

// 关闭新建项目模态框
function closeNewProjectModal() {
    document.getElementById('new-project-modal').classList.remove('active');
}

// 从机会创建项目
function createProjectFromOpportunity(opportunityName) {
    const confirmed = confirm(`确定要基于"${opportunityName}"创建新项目吗？\n\n这将引导你完成项目创建流程。`);

    if (confirmed) {
        // 跳转到项目详情页
        window.location.href = 'project-detail.html';
    }
}

// 直接创建项目
function createProjectDirectly() {
    const textarea = document.querySelector('.form-textarea');
    const content = textarea.value.trim();

    if (!content) {
        alert('请输入项目描述或上传文档');
        return;
    }

    // 跳转到项目详情页
    window.location.href = 'project-detail.html';
}

// 开始AI引导式创建
function startAIGuidedCreation() {
    const textarea = document.querySelector('.form-textarea');
    const content = textarea.value.trim();

    if (!content) {
        alert('请输入项目描述');
        return;
    }

    // 跳转到项目详情页
    window.location.href = 'project-detail.html';
}

// 打开项目
function openProject(projectId) {
    // 跳转到项目详情页
    window.location.href = 'project-detail.html';
}

// 模态框点击外部关闭
document.getElementById('new-project-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'new-project-modal') {
        closeNewProjectModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNewProjectModal();
    }
});

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
        // 在实际应用中，这里会跳转到新建项目页面并预填充机会信息
        alert(`项目创建成功！\n\n项目名称：${opportunityName}\n\n接下来会进入AI引导式问答流程...`);
        
        // 模拟跳转到项目详情页
        setTimeout(() => {
            alert('这是一个演示版本。\n\n在完整版中，你将进入项目工作流：\n\n1. 📋 项目概览\n2. 🛰️ 信息看板\n3. 📊 深度情报\n4. 🤝 人机共创\n5. 🎯 人机协作量化决策\n6. 📐 方案对比');
        }, 500);
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
    
    alert('项目创建成功！\n\n系统将基于你的描述进行初步分析...');
    closeNewProjectModal();
}

// 开始AI引导式创建
function startAIGuidedCreation() {
    const textarea = document.querySelector('.form-textarea');
    const content = textarea.value.trim();
    
    if (!content) {
        alert('请输入项目描述');
        return;
    }
    
    alert('正在启动AI引导流程...\n\nAI将会问你5个问题来完善项目信息：\n\n1. 目标用户的主要使用场景（必答）\n2. 决策紧急程度（必答）\n3. 预期价格区间（可选）\n4. 竞品参考（可选）\n5. 市场背景（可选）\n\n这是演示版本，完整版将提供完整的对话界面。');
    
    closeNewProjectModal();
}

// 打开项目
function openProject(projectId) {
    alert('正在打开项目...\n\n在完整版中，你将看到：\n\n📋 项目概览 - 查看项目基本信息和进度\n🛰️ 信息看板 - 数据采集和AI分析\n📊 深度情报 - VOC分析和竞品矩阵\n🤝 人机共创 - 需求澄清和用户替身访谈\n🎯 人机协作量化决策 - 五维评分\n📐 方案对比 - 生成和对比多套方案\n\n这是演示版本，完整功能正在开发中。');
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

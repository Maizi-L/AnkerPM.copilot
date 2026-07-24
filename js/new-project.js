// AnkerPM.copilot - 新建项目页面 JavaScript

// 切换到 Step 2
function goToStep2() {
    const productIdea = document.getElementById('product-idea').value.trim();
    
    if (!productIdea) {
        alert('请输入项目描述');
        return;
    }
    
    // 隐藏 Step 1，显示 Step 2
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 返回 Step 1
function backToStep1() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step1').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 跳过直接创建
function skipToOverview() {
    const productIdea = document.getElementById('product-idea').value.trim();
    
    if (!productIdea) {
        alert('请输入项目描述');
        return;
    }
    
    // 跳转到项目详情页
    window.location.href = 'project-detail.html';
}

// 完成并创建项目
function createProject() {
    const answer1 = document.getElementById('answer1').value.trim();
    const urgency = document.querySelector('input[name="urgency"]:checked');
    
    // 检查必答题
    if (!answer1) {
        alert('请回答必答问题：目标用户的主要使用场景');
        return;
    }
    
    if (!urgency) {
        alert('请选择决策紧急程度');
        return;
    }
    
    // 创建项目成功提示
    alert('项目创建成功！\n\nAI 正在基于你的输入进行初步分析...');
    
    // 跳转到项目详情页
    window.location.href = 'project-detail.html';
}

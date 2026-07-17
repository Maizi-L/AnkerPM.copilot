/**
 * AI产品经理工作台 - 交互逻辑
 */

// 当前选中的项目ID
let currentProjectId = 'PRJ001';
let currentPage = 'home';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initGlobalNavigation();
    initHomePage();
    initProjectsPage();
    initProjectSelector();
    initSlider();
    initScenarioButtons();
    initRecalculateButton();
});

/**
 * 初始化全局导航
 */
function initGlobalNavigation() {
    // 使用事件委托处理左边栏导航点击
    document.addEventListener('click', function(e) {
        const navItem = e.target.closest('.sidebar-nav-item');
        if (navItem) {
            const page = navItem.dataset.page;
            switchGlobalPage(page);
        }
    });
}

/**
 * 全局页面切换
 */
function switchGlobalPage(page) {
    // 更新左边栏导航状态
    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });

    // 隐藏所有页面
    document.querySelectorAll('.page-content').forEach(content => {
        content.style.display = 'none';
    });

    // 隐藏项目详情页
    const projectDetailPage = document.getElementById('page-projectdetail');
    if (projectDetailPage) {
        projectDetailPage.style.display = 'none';
    }

    // 显示对应页面
    const pageContent = document.getElementById(`page-${page}`);
    if (pageContent) {
        pageContent.style.display = 'block';
    }

    currentPage = page;

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 初始化首页
 */
function initHomePage() {
    // CTA按钮
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            switchGlobalPage('projects');
        });
    }
}

/**
 * 初始化项目列表页
 */
function initProjectsPage() {
    // 新建项目按钮、查看详情按钮、返回按钮（使用事件委托）
    document.addEventListener('click', function(e) {
        console.log('点击事件:', e.target);

        // 新建项目按钮
        if (e.target.closest('#newProjectBtn')) {
            console.log('点击新建项目');
            switchGlobalPage('newproject');
        }

        // 查看详情按钮
        if (e.target.closest('.project-list-item .btn-view')) {
            console.log('点击查看详情');
            const projectItem = e.target.closest('.project-list-item');
            console.log('项目项:', projectItem);
            const projectIdElement = projectItem.querySelector('.project-list-id');
            console.log('项目ID元素:', projectIdElement);
            if (projectIdElement) {
                const projectId = projectIdElement.textContent;
                console.log('项目ID:', projectId);
                openProjectDetail(projectId);
            } else {
                console.error('找不到项目ID元素');
            }
        }

        // 从新建项目页返回
        if (e.target.closest('#backToProjectsFromNew')) {
            console.log('从新建项目返回');
            switchGlobalPage('projects');
        }

        // 从项目详情页返回
        if (e.target.closest('#backToProjects')) {
            console.log('从项目详情返回');
            switchGlobalPage('projects');
        }
    });
}

/**
 * 打开项目详情
 */
function openProjectDetail(projectId) {
    currentProjectId = projectId;

    // 隐藏所有主页面
    document.querySelectorAll('.page-content').forEach(content => {
        content.style.display = 'none';
    });

    // 显示项目详情页
    const projectDetailPage = document.getElementById('page-projectdetail');
    if (projectDetailPage) {
        projectDetailPage.style.display = 'flex';
    }

    // 加载项目数据
    loadProjectData(projectId);

    // 初始化侧边栏
    initSidebar();

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 初始化侧边栏（项目详情页Tab导航）
 */
function initSidebar() {
    // 使用事件委托处理Tab点击
    document.addEventListener('click', function(e) {
        const tabItem = e.target.closest('.tab-nav-item');
        if (tabItem) {
            const tab = tabItem.dataset.tab;
            switchTab(tab);
        }
    });
}

/**
 * 切换标签页
 */
function switchTab(tab) {
    // 更新Tab导航状态
    document.querySelectorAll('.tab-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tab === tab) {
            item.classList.add('active');
        }
    });

    // 切换标签页内容
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const tabContent = document.getElementById(`tab-${tab}`);
    if (tabContent) {
        tabContent.classList.add('active');
    }
}

/**
 * 初始化开场引导页
 */
function initIntroPage() {
    const startBtn = document.getElementById('startExperienceBtn');

    if (startBtn) {
        startBtn.addEventListener('click', function() {
            switchGlobalPage('projects');
        });
    }
}

/**
 * 初始化项目选择器
 */
function initProjectSelector() {
    const categorySelect = document.getElementById('categorySelect');
    const analyzeButton = document.getElementById('analyzeButton');

    // 点击创建项目按钮
    if (analyzeButton) {
        analyzeButton.addEventListener('click', function() {
            const selectedProjectId = categorySelect.value;
            createProjectAndStart(selectedProjectId);
        });
    }
}

/**
 * 创建项目并开始
 */
function createProjectAndStart(projectId) {
    const button = document.getElementById('analyzeButton');

    // 显示加载状态
    button.classList.add('loading');
    button.querySelector('.button-icon').textContent = '⏳';
    button.querySelector('.button-text').textContent = '创建中...';
    button.disabled = true;

    // 模拟创建过程
    setTimeout(() => {
        currentProjectId = projectId;

        // 跳转到项目详情页
        openProjectDetail(projectId);

        // 恢复按钮状态
        button.classList.remove('loading');
        button.querySelector('.button-icon').textContent = '🚀';
        button.querySelector('.button-text').textContent = '创建项目并开始分析';
        button.disabled = false;
    }, 1000);
}

/**
 * 开始分析
 */
function startAnalysis(projectId) {
    const button = document.getElementById('analyzeButton');

    // 显示加载状态
    button.classList.add('loading');
    button.querySelector('.button-icon').textContent = '⏳';
    button.querySelector('.button-text').textContent = 'AI分析中...';
    button.disabled = true;

    // 模拟分析过程（1.5秒）
    setTimeout(() => {
        currentProjectId = projectId;
        loadProjectData(projectId);

        // 显示顶部导航栏
        const navbar = document.getElementById('topNavbar');
        if (navbar) navbar.style.display = 'flex';

        // 隐藏开场页和项目选择
        const introSection = document.getElementById('introSection');
        const projectSelector = document.getElementById('projectSelector');
        if (introSection) introSection.style.display = 'none';
        if (projectSelector) projectSelector.style.display = 'none';

        // 跳转到信息协同页面
        switchPage('datasync');

        // 平滑滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 恢复按钮状态
        button.classList.remove('loading');
        button.querySelector('.button-icon').textContent = '✓';
        button.querySelector('.button-text').textContent = '分析完成';
        button.disabled = false;
    }, 1500);
}

/**
 * 加载项目数据
 */
function loadProjectData(projectId) {
    const projectData = mockData[projectId];
    if (!projectData) return;

    // 更新侧边栏项目信息
    const projectIconSidebar = document.querySelector('.project-icon-sidebar');
    const projectNameSidebar = document.querySelector('.project-name-sidebar');
    const projectIdSidebar = document.querySelector('.project-id-sidebar');

    if (projectIconSidebar) projectIconSidebar.textContent = projectData.category.charAt(0);
    if (projectNameSidebar) projectNameSidebar.textContent = projectData.projectName;
    if (projectIdSidebar) projectIdSidebar.textContent = projectData.projectId;

    // 更新五维评分
    updateScores(projectData.scores);

    // 更新综合评分
    updateOverallScore(projectData.overallScore, projectData.recommendation);

    // 更新产品方案
    updateSolutions(projectData.solutions);
}

/**
 * 更新五维评分显示
 */
function updateScores(scores) {
    const scoreItems = document.querySelectorAll('.score-item');
    const scoreData = [
        { key: 'market', index: 0 },
        { key: 'demand', index: 1 },
        { key: 'feasibility', index: 2 },
        { key: 'business', index: 3 },
        { key: 'risk', index: 4 }
    ];

    scoreData.forEach(item => {
        const scoreItem = scoreItems[item.index];
        if (scoreItem) {
            const value = scores[item.key];
            const percentage = (value / 5) * 100;

            scoreItem.querySelector('.score-bar').style.width = percentage + '%';
            scoreItem.querySelector('.score-value').textContent = value + ' / 5';
        }
    });
}

/**
 * 更新综合评分
 */
function updateOverallScore(score, recommendation) {
    const scoreElement = document.querySelector('.overall-score-value');
    const badgeElement = document.querySelector('.overall-score-badge');

    if (scoreElement) {
        scoreElement.textContent = score.toFixed(1);
    }

    if (badgeElement) {
        badgeElement.textContent = recommendation;

        // 根据评分调整颜色
        if (score >= 4.0) {
            badgeElement.style.background = 'rgba(46, 204, 113, 0.9)';
        } else if (score >= 3.5) {
            badgeElement.style.background = 'rgba(255, 255, 255, 0.25)';
        } else if (score >= 3.0) {
            badgeElement.style.background = 'rgba(241, 196, 15, 0.9)';
        } else {
            badgeElement.style.background = 'rgba(231, 76, 60, 0.9)';
        }
    }
}

/**
 * 更新产品方案
 */
function updateSolutions(solutions) {
    const solutionCards = document.querySelectorAll('.solution-card');

    solutions.forEach((solution, index) => {
        const card = solutionCards[index];
        if (card) {
            // 更新方案名称
            card.querySelector('.solution-name').textContent = solution.name;
            card.querySelector('.solution-target').textContent = solution.target;

            // 更新价格
            const priceElement = card.querySelector('.solution-price');
            priceElement.innerHTML = solution.price + ' <span class="price-unit">元</span>';

            // 更新成本
            card.querySelector('.solution-cost').textContent = '成本：' + solution.cost + '元';

            // 更新毛利率
            card.querySelector('.margin-value').textContent = solution.margin.toFixed(1) + '%';

            // 更新功能列表
            const featuresList = card.querySelector('.features-list');
            featuresList.innerHTML = '';
            solution.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            // 更新推荐状态
            if (solution.recommended) {
                card.classList.add('recommended');
                if (!card.querySelector('.recommendation-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'recommendation-badge';
                    badge.textContent = '推荐';
                    card.appendChild(badge);
                }
            } else {
                card.classList.remove('recommended');
                const badge = card.querySelector('.recommendation-badge');
                if (badge) badge.remove();
            }
        }
    });

    // 更新推荐文字
    const recommendedSolution = solutions.find(s => s.recommended);
    if (recommendedSolution) {
        const recommendText = document.querySelector('.recommendation-text');
        if (recommendText) {
            recommendText.textContent = `推荐方案：${recommendedSolution.name} - 综合考虑市场、成本和可行性`;
        }
    }
}

/**
 * 显示分析结果
 */
function showAnalysisResults() {
    // 显示所有隐藏的区域
    const sections = [
        'projectInfo',
        'quickNav',
        'workflow',
        'scores',
        'overall',
        'scenarioSection',
        'collaboration',
        'comparisonSection',
        'solutionDescSection',
        'solutions',
        'pageFooter'
    ];

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = '';
        }
    });

    // 平滑滚动到项目信息卡片
    setTimeout(() => {
        document.getElementById('projectInfo').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

/**
 * 初始化权重滑块
 */
function initSlider() {
    const slider = document.getElementById('weightSlider');
    const valueDisplay = document.getElementById('weightValue');

    if (slider && valueDisplay) {
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value + '%';
        });
    }
}

/**
 * 初始化场景选择按钮
 */
function initScenarioButtons() {
    const buttons = document.querySelectorAll('.scenario-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const scenario = this.textContent.trim();
            adjustWeightsByScenario(scenario);
        });
    });
}

/**
 * 根据场景调整权重
 */
function adjustWeightsByScenario(scenario) {
    const slider = document.getElementById('weightSlider');
    const valueDisplay = document.getElementById('weightValue');

    if (!slider || !valueDisplay) return;

    let newWeight = 30;

    switch (scenario) {
        case '保守型':
            newWeight = 20;
            break;
        case '平衡型':
            newWeight = 30;
            break;
        case '激进型':
            newWeight = 40;
            break;
    }

    slider.value = newWeight;
    valueDisplay.textContent = newWeight + '%';
}

/**
 * 初始化重新计算按钮
 */
function initRecalculateButton() {
    const button = document.querySelector('.primary-button');

    if (button) {
        button.addEventListener('click', function() {
            recalculateScore();
        });
    }
}

/**
 * 重新计算综合评分
 */
function recalculateScore() {
    const intuitionScore = parseFloat(document.querySelector('.input-number').value) || 4.2;
    const weight = parseInt(document.getElementById('weightSlider').value) || 30;

    const projectData = mockData[currentProjectId];
    const scores = projectData.scores;

    const weightChange = (weight - 30) / 100;
    const originalScore = projectData.overallScore;
    const newScore = originalScore + (scores.demand * weightChange);

    const finalScore = Math.max(1, Math.min(5, newScore));

    updateScoreDisplay(finalScore, intuitionScore);
    showFeedback();
}

/**
 * 更新评分显示
 */
function updateScoreDisplay(newScore, intuitionScore) {
    const scoreElement = document.querySelector('.overall-score-value');
    const badgeElement = document.querySelector('.overall-score-badge');

    if (scoreElement) {
        scoreElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            scoreElement.textContent = newScore.toFixed(1);
            scoreElement.style.transform = 'scale(1)';
        }, 200);
    }

    if (badgeElement) {
        let recommendation = '';
        if (newScore >= 4.0) {
            recommendation = '推荐 ⬆️';
            badgeElement.style.background = 'rgba(46, 204, 113, 0.9)';
        } else if (newScore >= 3.5) {
            recommendation = '有条件推荐';
            badgeElement.style.background = 'rgba(255, 255, 255, 0.25)';
        } else if (newScore >= 3.0) {
            recommendation = '需要进一步评估';
            badgeElement.style.background = 'rgba(241, 196, 15, 0.9)';
        } else {
            recommendation = '谨慎考虑';
            badgeElement.style.background = 'rgba(231, 76, 60, 0.9)';
        }
        badgeElement.textContent = recommendation;
    }

    console.log('=== 决策对比分析 ===');
    console.log('AI原始评分:', mockData[currentProjectId].overallScore);
    console.log('PM修正后评分:', newScore.toFixed(2));
    console.log('PM直觉评分:', intuitionScore.toFixed(1));
}

/**
 * 显示反馈动画
 */
function showFeedback() {
    const button = document.querySelector('.primary-button');
    if (button) {
        const originalText = button.textContent;
        button.textContent = '✓ 计算完成';
        button.style.background = '#2ecc71';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#FF6B35';
        }, 2000);
    }
}

/**
 * 切换评分详情展开/收起
 */
function toggleScoreDetail(scoreItem) {
    const wrapper = scoreItem.parentElement;
    wrapper.classList.toggle('expanded');
}

/**
 * 切换评分详情展开/收起
 */
function toggleScoreDetail(header) {
    const item = header.closest('.score-detail-item');
    item.classList.toggle('expanded');
}

/**
 * 初始化决策场景按钮
 */
function initScenarioButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.scenario-btn')) {
            const btn = e.target.closest('.scenario-btn');
            const scenario = btn.dataset.scenario;
            
            // 更新按钮状态
            document.querySelectorAll('.scenario-btn').forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            
            console.log('切换决策场景:', scenario);
            // 这里可以添加重新计算评分的逻辑
        }
    });
}

/**
 * 初始化重新计算按钮
 */
function initRecalculateButton() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('#recalculateBtn')) {
            console.log('重新计算评分');
            alert('正在根据您的调整重新计算评分...');
            // 这里可以添加实际的重新计算逻辑
        }
    });
}

/**
 * 初始化直觉评分滑块
 */
function initIntuitionSlider() {
    const slider = document.getElementById('intuitionSlider');
    const valueDisplay = document.getElementById('intuitionValue');

    if (slider && valueDisplay) {
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
            console.log('直觉评分:', this.value);
        });
    }
}

// 在DOMContentLoaded中添加初始化
document.addEventListener('DOMContentLoaded', function() {
    initGlobalNavigation();
    initHomePage();
    initProjectsPage();
    initProjectSelector();
    initSlider();
    initScenarioButtons();
    initRecalculateButton();
    initIntuitionSlider();
    initQuickLinks();
});

/**
 * 初始化快速跳转按钮
 */
function initQuickLinks() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.quick-link-btn')) {
            const btn = e.target.closest('.quick-link-btn');
            const tab = btn.dataset.tab;
            if (tab) {
                switchTab(tab);
            }
        }
    });
}

// 更新DOMContentLoaded

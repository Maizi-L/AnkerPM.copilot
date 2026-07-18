// ===== 环绕滚动交互效果 =====

(function() {
    'use strict';

    // 等待DOM加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOrbitScroll);
    } else {
        initOrbitScroll();
    }

    function initOrbitScroll() {
        const section = document.querySelector('.features-scroll-section');
        const items = document.querySelectorAll('.feature-orbit-item');

        if (!section || items.length === 0) {
            console.log('未找到滚动区域或内容项');
            return;
        }

        console.log(`找到 ${items.length} 个内容项`);

        // 监听滚动
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleOrbitScroll(section, items);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // 初始化
        handleOrbitScroll(section, items);
    }

    function handleOrbitScroll(section, items) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        // 区域是否在视口内
        const sectionInView = rect.top < viewportHeight && rect.bottom > 0;

        if (!sectionInView) {
            // 不在视口内，隐藏所有项
            items.forEach(item => {
                item.style.opacity = '0';
            });
            return;
        }

        // 计算区域内的滚动进度 (0-1)
        const scrollInSection = scrollY - sectionTop;
        const progress = Math.max(0, Math.min(1, scrollInSection / sectionHeight));

        console.log(`滚动进度: ${(progress * 100).toFixed(1)}%`);

        items.forEach((item, index) => {
            const totalItems = items.length;

            // 每个item的显示区间
            const itemStartProgress = index / totalItems;
            const itemEndProgress = (index + 1) / totalItems;

            // 当前item的进度 (0-1)
            const itemProgress = (progress - itemStartProgress) / (itemEndProgress - itemStartProgress);

            let opacity = 0;
            let translateY = 0;
            let scale = 0.9;

            if (itemProgress < 0) {
                // 还没到
                opacity = 0;
            } else if (itemProgress < 0.2) {
                // 淡入 (0-0.2)
                opacity = itemProgress / 0.2;
                translateY = (1 - opacity) * 20;
                scale = 0.9 + opacity * 0.1;
            } else if (itemProgress <= 0.8) {
                // 完全显示 (0.2-0.8)
                opacity = 1;
                translateY = 0;
                scale = 1;
            } else if (itemProgress <= 1) {
                // 淡出 (0.8-1)
                const fadeOut = (itemProgress - 0.8) / 0.2;
                opacity = 1 - fadeOut;
                translateY = -fadeOut * 20;
                scale = 1 - fadeOut * 0.1;
            } else {
                // 已经过了
                opacity = 0;
            }

            // 应用样式
            item.style.opacity = String(opacity);
            item.style.transform = `translateY(${translateY}px) scale(${scale})`;

            if (index === 0 && opacity > 0) {
                console.log(`Item ${index}: progress=${itemProgress.toFixed(2)}, opacity=${opacity.toFixed(2)}`);
            }
        });
    }
})();

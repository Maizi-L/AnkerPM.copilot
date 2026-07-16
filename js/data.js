/**
 * Mock数据 - 三个产品项目
 */

const mockData = {
    // PRJ001: 开放式耳机-运动款
    PRJ001: {
        projectId: 'PRJ001',
        projectName: '开放式耳机-运动款',
        category: '开放式耳机',
        description: '面向运动人群的开放式蓝牙耳机，支持环境音感知，续航8小时',
        scores: {
            market: 3.5,        // 市场吸引力
            demand: 3.75,       // 用户需求强度（注意这里是3.75，页面显示3.8）
            feasibility: 3.55,  // 产品可行性（注意这里是3.55，页面显示3.5）
            business: 4.1,      // 商业价值
            risk: 2.5           // 风险等级
        },
        overallScore: 3.43,
        recommendation: '有条件推荐',
        solutions: [
            {
                id: 'PRJ001-A',
                name: 'Premium 高端款',
                target: '高端运动人群',
                price: 499,
                cost: 124,
                margin: 75.2,
                features: ['主动降噪ANC', '8小时续航', '钛合金框架', 'IP67防水'],
                recommended: false
            },
            {
                id: 'PRJ001-B',
                name: 'Mainstream 大众款',
                target: '日常运动用户',
                price: 299,
                cost: 74,
                margin: 75.3,
                features: ['环境音感知', '8小时续航', '轻量化设计', 'IP54防水'],
                recommended: true
            },
            {
                id: 'PRJ001-C',
                name: 'Value 性价比款',
                target: '入门级用户',
                price: 199,
                cost: 99,
                margin: 50.3,
                features: ['基础蓝牙连接', '6小时续航', '标准材质', 'IPX4防水'],
                recommended: false
            }
        ]
    },

    // PRJ002: 100W快充充电器
    PRJ002: {
        projectId: 'PRJ002',
        projectName: '100W快充充电器',
        category: '快充充电器',
        description: 'GaN氮化镓技术，支持多协议快充，体积小巧便携',
        scores: {
            market: 4.2,
            demand: 4.5,
            feasibility: 4.0,
            business: 4.3,
            risk: 2.0
        },
        overallScore: 4.15,
        recommendation: '推荐',
        solutions: [
            {
                id: 'PRJ002-A',
                name: '旗舰双口版',
                target: '高端用户',
                price: 149,
                cost: 35,
                margin: 76.5,
                features: ['100W双口输出', 'GaN技术', '折叠插头', 'LED功率显示'],
                recommended: false
            },
            {
                id: 'PRJ002-B',
                name: '标准单口版',
                target: '主流用户',
                price: 99,
                cost: 28,
                margin: 71.7,
                features: ['100W单口输出', 'GaN技术', '折叠插头', '多协议兼容'],
                recommended: true
            },
            {
                id: 'PRJ002-C',
                name: '经济实用版',
                target: '价格敏感用户',
                price: 69,
                cost: 25,
                margin: 63.8,
                features: ['65W单口输出', '标准技术', '固定插头', '基础协议'],
                recommended: false
            }
        ]
    },

    // PRJ003: 便携智能音箱
    PRJ003: {
        projectId: 'PRJ003',
        projectName: '便携智能音箱',
        category: '智能音箱',
        description: '户外便携音箱，支持蓝牙5.0，长续航防水设计',
        scores: {
            market: 2.8,
            demand: 3.0,
            feasibility: 3.2,
            business: 2.9,
            risk: 3.5
        },
        overallScore: 2.65,
        recommendation: '谨慎考虑',
        solutions: [
            {
                id: 'PRJ003-A',
                name: '智能AI版',
                target: '智能家居用户',
                price: 399,
                cost: 180,
                margin: 54.9,
                features: ['AI语音助手', '360度环绕音', '智能联动', 'IPX7防水'],
                recommended: false
            },
            {
                id: 'PRJ003-B',
                name: '户外运动版',
                target: '户外音乐爱好者',
                price: 249,
                cost: 120,
                margin: 51.8,
                features: ['蓝牙5.0', '12小时续航', 'IPX7防水', '低音增强'],
                recommended: true
            },
            {
                id: 'PRJ003-C',
                name: '入门便携版',
                target: '学生群体',
                price: 159,
                cost: 85,
                margin: 46.5,
                features: ['基础蓝牙', '8小时续航', 'IPX5防水', '轻便小巧'],
                recommended: false
            }
        ]
    }
};

// 导出数据（如果使用模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockData;
}

// ============================================
// 直播复盘数据配置文件
// ============================================
// 更新说明：每次新增直播场次后，请在 sessions 数组中添加新对象
// 必填字段：month, date, name, duration, views, luckyDraw, sales, conversion, validRate, closeRate
// 可选字段：highlights(亮点), problems(问题), actions(行动项)
// ============================================

const sessions = [
    {
        month: 1,
        date: '2026.1.31',
        name: '春节攻势·启动战（首秀）',
        duration: '2 小时',
        views: 72,
        luckyDraw: 38,
        sales: 6,
        conversion: 8.33,
        validRate: 52.7,
        closeRate: 15.8,
        highlights: ['首创"学科规划 + 福利对赌"逻辑', '实物价值锚定：香蕉笔袋 + 纸质讲义', '15 分钟高频循环节奏'],
        problems: ['宣发启动过晚，仅提前 24 小时', '主播专业度待磨合'],
        actions: ['SOP 极简优化', 'CC 提前介入核销']
    },
    {
        month: 2,
        date: '2026.2.5',
        name: '口碑发酵·升温战',
        duration: '1.5 小时',
        views: 47,
        luckyDraw: 33,
        sales: 10,
        conversion: 21.27,
        validRate: 70.21,
        closeRate: 30.3,
        highlights: ['"CC 唱戏"模式跑通', '实物堆砌感增强信任', '71.7% 看客转化为线索'],
        problems: ['流量天花板明显，仅 47 人', '23 位高意向用户未成交'],
        actions: ['全力搞流量，扩容私域池']
    },
    {
        month: 2,
        date: '2026.2.8',
        name: '节前冲刺战',
        duration: '2 小时',
        views: 35,
        luckyDraw: 27,
        sales: 8,
        conversion: 22.85,
        validRate: 77.14,
        closeRate: 29.62,
        highlights: ['转化率提升至 22.85%'],
        problems: ['流量获取遭遇瓶颈', '单纯靠时长无法触达新流量'],
        actions: ['启动饱和式宣发']
    },
    {
        month: 2,
        date: '2026.2.12',
        name: '年前收官战（终局）',
        duration: '3.5 小时',
        views: 68,
        luckyDraw: 57,
        sales: 20,
        conversion: 29.41,
        validRate: 83.8,
        closeRate: 35.08,
        highlights: ['饱和式攻击：15 张倒计时海报', '流量破局成功，转化率 35%', '长直播模型验证成功'],
        problems: [],
        actions: ['继续深化倒计时截杀策略']
    },
    {
        month: 2,
        date: '2026.2.25',
        name: '开工返场·补录战',
        duration: '1.3 小时',
        views: 12,
        luckyDraw: 11,
        sales: 7,
        conversion: 58.33,
        validRate: 91.66,
        closeRate: 63.63,
        highlights: ['"试听 + 直播"闭环打通', '"补录"心智成功', '转化率高达 58.33%'],
        problems: ['流量池太浅，仅 12 人'],
        actions: ['全员动员搞流量', '强制导流试听用户进直播间']
    },
    {
        month: 2,
        date: '2026.2.28',
        name: '合肥达标之战',
        duration: '3.3 小时',
        views: 49,
        luckyDraw: 38,
        sales: 11,
        conversion: 22.44,
        validRate: 77.55,
        closeRate: 28.94,
        highlights: ['3D C4D 视觉降维打击', '水军答疑互动成胜负手', '直播间变咨询室'],
        problems: [],
        actions: ['继续深化互动答疑模式']
    },
    {
        month: 3,
        date: '2026.3.2',
        name: '闹元宵 抢头彩',
        duration: '2 小时',
        views: 29,
        luckyDraw: 25,
        sales: 10,
        conversion: 34.48,
        validRate: 86.2,
        closeRate: 40,
        highlights: ['开学季 + 元宵节双重加持', '缩短时长、打爆前半场策略正确'],
        problems: [],
        actions: ['继续借势节日营销']
    },
    {
        month: 3,
        date: '2026.3.5',
        name: '女神节专场①',
        duration: '2 小时',
        views: 48,
        luckyDraw: 40,
        sales: 11,
        conversion: 22.91,
        validRate: 83.3,
        closeRate: 27.5,
        highlights: ['开学季到来，紧迫感提升'],
        problems: ['需促进快速成交'],
        actions: ['引导抢福袋用户联系顾问']
    },
    {
        month: 3,
        date: '2026.3.7',
        name: '女神节专场②',
        duration: '2 小时',
        views: 53,
        luckyDraw: 46,
        sales: 13,
        conversion: 24.52,
        validRate: 86.79,
        closeRate: 28.26,
        highlights: ['人数集中在前 30 分钟', '蓄能充分'],
        problems: [],
        actions: ['继续保持截杀点直播']
    },
    {
        month: 3,
        date: '2026.3.8',
        name: '女神节专场③',
        duration: '2 小时',
        views: 44,
        luckyDraw: 40,
        sales: 12,
        conversion: 27.27,
        validRate: 90.9,
        closeRate: 30,
        highlights: ['有效用户占比 90.9% 创新高'],
        problems: [],
        actions: ['持续关注福袋用户跟进']
    }
    // ============================================
    // 新增场次请复制以下模板，在此处添加：
    // ============================================
    // {
    //     month: 3,                    // 月份（数字）
    //     date: '2026.3.10',          // 日期（格式：YYYY.M.D）
    //     name: '场次名称',            // 场次名称
    //     duration: '2 小时',          // 直播时长
    //     views: 0,                    // 场观人数
    //     luckyDraw: 0,                // 抢福袋人数
    //     sales: 0,                    // 成交单数
    //     conversion: 0,               // 转化率（%）
    //     validRate: 0,                // 有效用户占比（%）
    //     closeRate: 0,                // 有效用户关单率（%）
    //     highlights: ['亮点 1', '亮点 2'],
    //     problems: ['问题 1', '问题 2'],
    //     actions: ['行动项 1', '行动项 2']
    // },
    // ============================================
];

// 数据版本标识（用于缓存控制）
const DATA_VERSION = '20240308';

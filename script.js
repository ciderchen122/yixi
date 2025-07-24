// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
});

// 语言切换功能
let currentLanguage = 'zh';

const translations = {
    zh: {
        // 导航
        home: '首页',
        about: '公司介绍',
        services: '服务项目',
        cases: '案例展示',
        partners: '合作伙伴',
        process: '合作流程',
        contact: '联系我们',
        
        // 首页
        heroTitle: '杭州易希信息技术有限责任公司',
        heroSubtitle: '专业视频制作 | 创意无限可能',
        heroDescription: '为软件推广和跨境电商提供专业的视频拍摄、剪辑及素材服务',
        consultNow: '立即咨询',
        viewCases: '查看案例',
        
        // 关于我们
        aboutTitle: '关于我们',
        aboutCompany: '杭州易希信息技术有限责任公司',
        aboutText1: '位于杭州萧山区保亿中心B座3204B，我们是一家专注于视频制作服务的创新型公司。',
        aboutText2: '公司专业提供素材制作和视频剪辑服务，主要服务于软件推广宣传以及跨境电商短视频制作领域。我们致力于通过高质量的视频内容，帮助客户在数字化营销中脱颖而出。',
        address: '公司地址：',
        serviceField: '服务领域：',
        addressText: '杭州萧山区保亿中心B座3204B',
        serviceFieldText: '视频剪辑、素材制作、软件推广、跨境电商视频',
        
        // 服务项目
        servicesTitle: '服务项目',
        videoEditing: '视频剪辑',
        videoEditingDesc: '专业的视频后期制作，包括剪辑、调色、特效添加等全方位服务',
        shortVideo: '短视频制作',
        shortVideoDesc: '为跨境电商卖家提供产品展示短视频的拍摄和制作服务',
        softwarePromo: '软件推广视频',
        softwarePromoDesc: '制作软件产品的宣传推广视频，提升品牌影响力',
        materialProvision: '素材提供',
        materialProvisionDesc: '提供高质量的视频素材，满足各种创作需求',
        
        // 案例展示
        casesTitle: '案例展示',
        case1Title: '软件推广短视频',
        case1Desc: '为知名软件公司制作的竖屏推广视频',
        case2Title: '跨境电商产品视频',
        case2Desc: '模特实拍产品展示竖屏短视频',
        case3Title: '数字人AI混剪',
        case3Desc: 'AI数字人技术结合剪辑的创新案例',
        
        // 拍摄环境
        studioTitle: '拍摄环境',
        studioSubtitle: '专业的拍摄场地，为您提供高质量的视频制作环境',
        
        // 合作伙伴
        partnersTitle: '合作伙伴',
        partnersSubtitle: '感谢以下品牌对我们的信任与支持',
        
        // 合作流程
        processTitle: '合作流程',
        step1: '需求沟通',
        step1Desc: '详细了解您的项目需求和期望效果',
        step2: '方案制定',
        step2Desc: '根据需求制定详细的制作方案和报价',
        step3: '合同签订',
        step3Desc: '确认方案后签订正式合作协议',
        step4: '制作执行',
        step4Desc: '专业团队进行视频拍摄和后期制作',
        step5: '交付验收',
        step5Desc: '按时交付成品，确保客户满意',
        
        // 联系我们
        contactTitle: '联系我们',
        onlineConsult: '在线咨询',
        namePlaceholder: '您的姓名',
        emailPlaceholder: '邮箱地址',
        phonePlaceholder: '联系电话',
        messagePlaceholder: '项目需求描述',
        submitConsult: '提交咨询',
        
        // 页脚
        copyright: '© 2024 杭州易希信息技术有限责任公司 版权所有'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About',
        services: 'Services',
        cases: 'Cases',
        studio: 'Studio',
        partners: 'Partners',
        process: 'Process',
        contact: 'Contact',
        
        // Hero
        heroTitle: 'Hangzhou Yixi Information Technology Co., Ltd.',
        heroSubtitle: 'Professional Video Production | Unlimited Creativity',
        heroDescription: 'Providing professional video shooting, editing and material services for software promotion and cross-border e-commerce',
        consultNow: 'Consult Now',
        viewCases: 'View Cases',
        
        // About
        aboutTitle: 'About Us',
        aboutCompany: 'Hangzhou Yixi Information Technology Co., Ltd.',
        aboutText1: 'Located at Floor 3, Room 301, Qiantang Bay Art Museum, Binjiang District, Hangzhou, we are an innovative company focusing on video production services.',
        aboutText2: 'The company specializes in providing material production and video editing services, mainly serving software promotion and cross-border e-commerce short video production. We are committed to helping clients stand out in digital marketing through high-quality video content.',
        address: 'Address: ',
        serviceField: 'Service Areas: ',
        addressText: 'Floor 3, Room 301, Qiantang Bay Art Museum, Binjiang District, Hangzhou',
        serviceFieldText: 'Video Editing, Material Production, Software Promotion, Cross-border E-commerce Videos',
        
        // Services
        servicesTitle: 'Our Services',
        videoEditing: 'Video Editing',
        videoEditingDesc: 'Professional video post-production including editing, color grading, and special effects',
        shortVideo: 'Short Video Production',
        shortVideoDesc: 'Providing product showcase short video shooting and production services for cross-border e-commerce sellers',
        softwarePromo: 'Software Promotion Videos',
        softwarePromoDesc: 'Creating promotional videos for software products to enhance brand influence',
        materialProvision: 'Material Supply',
        materialProvisionDesc: 'Providing high-quality video materials to meet various creative needs',
        
        // Cases
        casesTitle: 'Case Studies',
        case1Title: 'Software Promotion Short Video',
        case1Desc: 'Vertical promotional video created for well-known software companies',
        case2Title: 'Cross-border E-commerce Product Video',
        case2Desc: 'Model-shot product showcase vertical short videos',
        case3Title: 'AI Digital Human Mixed Editing',
        case3Desc: 'Innovative cases combining AI digital human technology with editing',
        
        // Studio
        studioTitle: 'Shooting Studio',
        studioSubtitle: 'Professional shooting venue providing high-quality video production environment',
        
        // Partners
        partnersTitle: 'Our Partners',
        partnersSubtitle: 'Thank you to the following brands for their trust and support',
        
        // Process
        processTitle: 'Cooperation Process',
        step1: 'Requirement Communication',
        step1Desc: 'Detailed understanding of your project requirements and expected results',
        step2: 'Solution Development',
        step2Desc: 'Develop detailed production plans and quotations based on requirements',
        step3: 'Contract Signing',
        step3Desc: 'Sign formal cooperation agreement after confirming the plan',
        step4: 'Production Execution',
        step4Desc: 'Professional team conducts video shooting and post-production',
        step5: 'Delivery & Acceptance',
        step5Desc: 'Deliver finished products on time, ensuring customer satisfaction',
        
        // Contact
        contactTitle: 'Contact Us',
        onlineConsult: 'Online Consultation',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Email Address',
        phonePlaceholder: 'Phone Number',
        messagePlaceholder: 'Project Requirements Description',
        submitConsult: 'Submit Inquiry',
        
        // Footer
        copyright: '© 2024 Hangzhou Yixi Information Technology Co., Ltd. All Rights Reserved'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateLanguage();
    
    // 更新按钮文字
    const langToggle = document.querySelector('.lang-toggle');
    langToggle.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
}

function updateLanguage() {
    const t = translations[currentLanguage];
    
    // 更新页面标题
    document.title = currentLanguage === 'zh' ? 
        '杭州易希信息技术有限责任公司 - 专业视频制作服务' : 
        'Hangzhou Yixi Information Technology Co., Ltd. - Professional Video Production Services';
    
    // 更新导航
    document.querySelector('a[href="#home"]').textContent = t.home;
    document.querySelector('a[href="#about"]').textContent = t.about;
    document.querySelector('a[href="#services"]').textContent = t.services;
    document.querySelector('a[href="#cases"]').textContent = t.cases;
    document.querySelector('a[href="#studio"]').textContent = t.studio;
    document.querySelector('a[href="#partners"]').textContent = t.partners;
    document.querySelector('a[href="#process"]').textContent = t.process;
    document.querySelector('a[href="#contact"]').textContent = t.contact;
    
    // 更新首页内容
    document.querySelector('.hero-title').textContent = t.heroTitle;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelector('.hero-description').textContent = t.heroDescription;
    document.querySelector('.btn-primary').textContent = t.consultNow;
    document.querySelector('.btn-secondary').textContent = t.viewCases;
    
    // 更新各个部分的标题
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles[0].textContent = t.aboutTitle;
    sectionTitles[1].textContent = t.servicesTitle;
    sectionTitles[2].textContent = t.casesTitle;
    sectionTitles[3].textContent = t.studioTitle;
    sectionTitles[4].textContent = t.partnersTitle;
    sectionTitles[5].textContent = t.processTitle;
    sectionTitles[6].textContent = t.contactTitle;
    
    // 更新关于我们内容
    document.querySelector('.about-text h3').textContent = t.aboutCompany;
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs[0].textContent = t.aboutText1;
    aboutParagraphs[1].textContent = t.aboutText2;
    
    // 更新公司信息
    const companyInfoPs = document.querySelectorAll('.company-info p');
    companyInfoPs[0].innerHTML = `<strong>${t.address}</strong>${t.addressText}`;
    companyInfoPs[1].innerHTML = `<strong>${t.serviceField}</strong>${t.serviceFieldText}`;
    
    // 更新服务项目
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = t.videoEditing;
    serviceCards[0].querySelector('p').textContent = t.videoEditingDesc;
    serviceCards[1].querySelector('h3').textContent = t.shortVideo;
    serviceCards[1].querySelector('p').textContent = t.shortVideoDesc;
    serviceCards[2].querySelector('h3').textContent = t.softwarePromo;
    serviceCards[2].querySelector('p').textContent = t.softwarePromoDesc;
    serviceCards[3].querySelector('h3').textContent = t.materialProvision;
    serviceCards[3].querySelector('p').textContent = t.materialProvisionDesc;
    
    // 更新案例展示
    const caseCards = document.querySelectorAll('.case-card');
    caseCards[0].querySelector('h3').textContent = t.case1Title;
    caseCards[0].querySelector('p').textContent = t.case1Desc;
    caseCards[1].querySelector('h3').textContent = t.case2Title;
    caseCards[1].querySelector('p').textContent = t.case2Desc;
    caseCards[2].querySelector('h3').textContent = t.case3Title;
    caseCards[2].querySelector('p').textContent = t.case3Desc;
    
    // 更新拍摄环境
    if (document.querySelector('.studio-subtitle')) {
        document.querySelector('.studio-subtitle').textContent = t.studioSubtitle;
    }
    
    // 更新合作伙伴
    if (document.querySelector('.partners-subtitle')) {
        document.querySelector('.partners-subtitle').textContent = t.partnersSubtitle;
    }
    
    // 更新合作流程
    const steps = document.querySelectorAll('.step');
    steps[0].querySelector('h3').textContent = t.step1;
    steps[0].querySelector('p').textContent = t.step1Desc;
    steps[1].querySelector('h3').textContent = t.step2;
    steps[1].querySelector('p').textContent = t.step2Desc;
    steps[2].querySelector('h3').textContent = t.step3;
    steps[2].querySelector('p').textContent = t.step3Desc;
    steps[3].querySelector('h3').textContent = t.step4;
    steps[3].querySelector('p').textContent = t.step4Desc;
    steps[4].querySelector('h3').textContent = t.step5;
    steps[4].querySelector('p').textContent = t.step5Desc;
    
    // 更新联系我们
    document.querySelector('.contact-form h3').textContent = t.onlineConsult;
    document.querySelector('input[placeholder*="姓名"], input[placeholder*="Name"]').placeholder = t.namePlaceholder;
    document.querySelector('input[placeholder*="邮箱"], input[placeholder*="Email"]').placeholder = t.emailPlaceholder;
    document.querySelector('input[placeholder*="电话"], input[placeholder*="Phone"]').placeholder = t.phonePlaceholder;
    document.querySelector('textarea').placeholder = t.messagePlaceholder;
    document.querySelector('button[type="submit"]').textContent = t.submitConsult;
    
    // 更新页脚
    document.querySelector('.footer p').textContent = t.copyright;
}

// 平滑滚动到指定部分
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const message = form.querySelector('textarea').value;
            
            // 简单的表单验证
            if (!name || !email || !phone || !message) {
                alert(currentLanguage === 'zh' ? '请填写所有必填字段' : 'Please fill in all required fields');
                return;
            }
            
            // 这里可以添加实际的表单提交逻辑
            // 例如发送到服务器或第三方服务
            
            alert(currentLanguage === 'zh' ? 
                '感谢您的咨询！我们会尽快与您联系。' : 
                'Thank you for your inquiry! We will contact you soon.');
            
            // 清空表单
            form.reset();
        });
    }
});

// 滚动时导航栏效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画效果
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
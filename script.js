import './input.css';

const i18n = {
  'en': {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.vision': 'Vision',
    'nav.membership': 'Volunteering',
    'nav.contact': 'Contact',
    'nav.brand.full': 'BILINK Canada-China<br>Culture & Education Society',
    'nav.brand.short': 'BILINK CCCES',
    'hero.eyebrow': 'Official Website',
    'hero.title': 'Empowering Community Institutions Through Technology, Culture, and Education',
    'hero.subtitle': 'BILINK Canada-China Culture & Education Society is a non-profit organization dedicated to strengthening community cultural and educational institutions through digital empowerment, collaborative partnerships, youth development, and Canada–China exchange.',
    'hero.btn.programs': 'Explore Programs',
    'about.title': 'About Us',
    'about.text': 'We believe that community cultural and educational institutions play a vital role in preserving heritage, fostering belonging, and creating opportunities for future generations. In an increasingly digital world, these institutions need not only dedication and vision, but also the right tools, networks, and long-term support.<br><br>We work at the intersection of technology, community engagement, and cultural education to help organizations strengthen capacity, deepen collaboration, and expand their public impact.',
    'about.eyebrow': 'Our Essence',
    'about.v_title': 'Visionary',
    'about.v_sub': 'Approach',
    'about.c_title': 'Collaborative',
    'about.c_sub': 'Spirit',
    'mission.title': 'Our Mission',
    'mission.lead': 'To empower community cultural and educational institutions through technology.',
    'mission.text': 'We support the long-term development of community institutions through practical digital solutions, collaborative initiatives, cultural exchange, and youth leadership development.',
    'programs.title': 'Programs & Initiatives',
    'prog1.t': 'Digital Capacity & Operational Support',
    'prog1.d': 'Provide affordable information services and SaaS platform support for educational and cultural organizations, improving operational efficiency and reducing repetitive administrative workload.',
    'prog2.t': 'Community Collaboration & Shared Resource Network',
    'prog2.d': 'Strengthen collaboration among community cultural and educational institutions through shared resources, joint initiatives, and cross-organizational partnerships that increase collective impact.',
    'prog3.t': 'Youth Leadership & Volunteer Development',
    'prog3.d': 'Support young people in building responsibility, leadership, and service capacity through volunteer engagement, project-based learning, and community participation.',
    'prog4.t': 'Canada–China Cultural & Educational Exchange',
    'prog4.d': 'Organize and support public programs, workshops, community events, and collaborative initiatives that deepen cultural understanding and educational exchange between Canada and China.',
    'vision.title': 'Our Vision',
    'vision.text': 'To become a trusted platform connecting technology, culture, education, and community—enabling institutions and people to grow together across generations and across borders.',
    'membership.eyebrow': 'Community',
    'membership.title': 'Volunteer Action',
    'membership.text': 'We welcome families, students, educators, and community members to support Canada–China cultural and educational exchange through volunteer service and meaningful action.',
    'membership.empower': 'Collaborative Growth',
    'membership.p1': 'Participate in educational programs and cultural activities',
    'membership.p2': 'Receive priority access to talks, workshops, and community resources',
    'membership.p3': 'Join volunteer efforts and support community initiatives',
    'membership.p4': 'Collaborate across organizations to advance public-interest partnerships',
    'contact.title': 'Contact Us',
    'footer.brand': 'BILINK Canada-China Culture & Education Society',
    'contact.addr': 'Address: Greater Vancouver, British Columbia, Canada',
    'contact.email': 'Email: info@bilinkccces.ca',
    'contact.web': 'Website: bilinkccces.ca',
    'footer.rights': '© 2026 BILINK Canada-China Culture & Education Society. All rights reserved.'
  },
  'zh-Hans': {
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.programs': '项目与活动',
    'nav.vision': '愿景',
    'nav.membership': '志愿者行动',
    'nav.contact': '联系我们',
    'nav.brand.full': '比邻加中文化教育协会',
    'nav.brand.short': '比邻加中文化教育协会',
    'hero.eyebrow': '官方网站',
    'hero.title': '以技术、文化与教育赋能社区机构',
    'hero.subtitle': '比邻加中文化教育协会 (BILINK CCCES) 是一家非营利机构，致力于通过数字化赋能、协作伙伴关系、青年发展与中加交流，支持社区文化与教育机构实现更可持续的发展。',
    'hero.btn.programs': '探索项目',
    'about.title': '关于我们',
    'about.text': '我们相信，社区文化与教育机构在传承文化、凝聚归属感以及为下一代创造机会方面发挥着重要作用。在日益数字化的时代，这些机构不仅需要热忱与愿景，也需要合适的工具、合作网络与长期支持。<br><br>我们立足于技术、社区参与与文化教育的交汇点，帮助机构提升能力、深化协作并扩大其公共影响力。',
    'about.eyebrow': '核心精髓',
    'about.v_title': '前瞻远见',
    'about.v_sub': '执行方法',
    'about.c_title': '协作共赢',
    'about.c_sub': '团队精神',
    'mission.title': '我们的使命',
    'mission.lead': '通过技术为社区文化教育机构赋能。',
    'mission.text': '我们通过务实的数字化方案、协作项目、文化交流与青年领导力培养，支持社区机构实现长期发展。',
    'programs.title': '项目与活动',
    'prog1.t': '数字化与运营赋能计划',
    'prog1.d': '为教育与文化机构提供可负担的信息化服务与 SaaS 平台支持，提升运营效率并减少重复性行政投入。',
    'prog2.t': '社区协作与资源共享计划',
    'prog2.d': '通过资源共享、联合项目与跨机构合作，促进社区文化与教育机构之间的联动，提升整体社区影响力。',
    'prog3.t': '青年领导力与志愿者发展计划',
    'prog3.d': '通过志愿服务、项目实践与社区参与，支持青年培养责任感、领导力与服务能力。',
    'prog4.t': '中加文化教育交流计划',
    'prog4.d': '组织并支持公共项目、工作坊、社区活动与合作计划，推动加拿大与中国之间更深层次的文化理解与教育交流。',
    'vision.title': '我们的愿景',
    'vision.text': '成为一个值得信赖的平台，连接技术、文化、教育与社区，推动机构与个人跨代际、跨文化共同成长。',
    'membership.eyebrow': '社区',
    'membership.title': '志愿者行动',
    'membership.text': '我们欢迎家庭、学生、教育工作者与社区成员通过志愿服务与实际行动，共同支持中加文化教育交流与社区发展。',
    'membership.empower': '协作共建',
    'membership.p1': '参与协会教育项目与文化活动',
    'membership.p2': '优先获取讲座、研讨与社区资源',
    'membership.p3': '参与志愿行动，支持社区项目落地',
    'membership.p4': '参与跨机构协作，推动社区公益合作',
    'contact.title': '联系我们',
    'footer.brand': '比邻加中文化教育协会',
    'contact.addr': '地址：加拿大不列颠哥伦比亚省大温哥华地区',
    'contact.email': '邮箱：info@bilinkccces.ca',
    'contact.web': '官网：bilinkccces.ca',
    'footer.rights': '© 2026 比邻加中文化教育协会. 版权所有.'
  },
  'zh-Hant': {
    'nav.home': '首頁',
    'nav.about': '關於我們',
    'nav.programs': '項目與活動',
    'nav.vision': '願景',
    'nav.membership': '志願行動',
    'nav.contact': '聯絡我們',
    'nav.brand.full': '比鄰加中文化教育協會',
    'nav.brand.short': '比鄰加中文化教育協會',
    'hero.eyebrow': '官方網站',
    'hero.title': '以技術、文化與教育賦能社區機構',
    'hero.subtitle': '比鄰加中文化教育協會 (BILINK CCCES) 是一家非營利機構，致力於透過數位化賦能、協作夥伴關係、青年發展與中加交流，支持社區文化與教育機構實現更可持續的發展。',
    'hero.btn.programs': '探索項目',
    'about.title': '關於我們',
    'about.text': '我們相信，社區文化與教育機構在傳承文化、凝聚歸屬感以及為下一代創造機會方面發揮著重要作用。在日益數位化的時代，這些機構不僅需要熱忱與願景，也需要合適的工具、合作網絡與長期支持。<br><br>我們立足於技術、社區參與與文化教育的交匯點，幫助機構提升能力、深化協作並擴大其公共影響力。',
    'about.eyebrow': '核心精髓',
    'about.v_title': '前瞻遠見',
    'about.v_sub': '執行方法',
    'about.c_title': '協作共贏',
    'about.c_sub': '團隊精神',
    'mission.title': '我們的使命',
    'mission.lead': '透過技術為社區文化教育機構賦能。',
    'mission.text': '我們透過務實的數位化方案、協作項目、文化交流與青年領導力培養，支持社區機構實現長期發展。',
    'programs.title': '項目與活動',
    'prog1.t': '數位化與營運賦能計畫',
    'prog1.d': '為教育與文化機構提供可負擔的資訊化服務與 SaaS 平台支持，提升營運效率並減少重複性行政投入。',
    'prog2.t': '社區協作與資源共享計畫',
    'prog2.d': '透過資源共享、聯合項目與跨機構合作，促進社區文化與教育機構之間的聯動，提升整體社區影響力。',
    'prog3.t': '青年領導力與志願者發展計畫',
    'prog3.d': '透過志願服務、項目實踐與社區參與，支持青年培養責任感、領導力與服務能力。',
    'prog4.t': '中加文化教育交流計畫',
    'prog4.d': '組織並支持公共項目、工作坊、社區活動與合作計畫，推動加拿大與中國之間更深層次的文化理解與教育交流。',
    'vision.title': '我們的願景',
    'vision.text': '成為一個值得信賴的平台，連接技術、文化、教育與社區，推動機構與個人跨世代、跨文化共同成長。',
    'membership.eyebrow': '社區',
    'membership.title': '志願者行動',
    'membership.text': '我們歡迎家庭、學生、教育工作者與社區成員透過志願服務與實際行動，共同支持中加文化教育交流與社區發展。',
    'membership.empower': '協作共建',
    'membership.p1': '參與協會教育項目與文化活動',
    'membership.p2': '優先獲取講座、研討與社區資源',
    'membership.p3': '參與志願行動，支持社區項目落地',
    'membership.p4': '參與跨機構協作，推動社區公益合作',
    'contact.title': '聯絡我們',
    'footer.brand': '比鄰加中文化教育協會',
    'contact.addr': '地址：加拿大卑詩省大溫哥華地區',
    'contact.email': '郵箱：info@bilinkccces.ca',
    'contact.web': '官網：bilinkccces.ca',
    'footer.rights': '© 2026 比鄰加中文化教育協會. 版權所有.'
  }
};

// 3. GSAP Snapping Logic - 优化为基于精确百分比的强力吸附
let snapTrigger; 
/**
 * 初始化滑动吸附
 */
const initScrollSnapping = () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  
  if (snapTrigger) snapTrigger.kill();
  
  const points = gsap.utils.toArray('.snap-point');
  if (points.length > 0) {
    const maxScroll = ScrollTrigger.maxScroll(window);
    if (maxScroll <= 100) return; // 页面太短时不启动

    // 精确计算每个 Section 在滚动条上的进度位置 (0-1)
    const snapPoints = points.map(p => {
      const st = ScrollTrigger.create({ trigger: p, start: "top top" });
      const progress = st.start / maxScroll;
      st.kill();
      return progress;
    });

    snapTrigger = ScrollTrigger.create({
      snap: {
        snapTo: snapPoints,
        duration: { min: 0.2, max: 0.4 },
        delay: 0, 
        ease: "power3.inOut",
        inertia: false // 禁用惯性，强制吸附到最近的点，防止跳屏
      }
    });
  }
};

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n['en'];
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;

  // 修复：重新获取节点，确保克隆后的移动端菜单节点也能被翻译
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.innerHTML = dict[key];
    }
  });

  const allLangButtons = document.querySelectorAll('.lang-btn');
  allLangButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    if (isActive) {
        btn.classList.add('bg-brand-600', 'text-white');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
    } else {
        btn.classList.remove('bg-brand-600', 'text-white');
        btn.classList.add('text-slate-600', 'hover:bg-slate-100');
    }
  });

  localStorage.setItem('bilink-lang', lang);

  // 切换语言后，高度发生变化，需要刷新布局
  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(() => {
        // 确保在 200ms 后文字渲染和字体加载基本完成，强制重新计算所有位置
        ScrollTrigger.refresh();
        initScrollSnapping();
    }, 200);
  }
}

// --- Modern Animations Setup ---

// 1. Initialize Lenis (Smooth Scrolling)
let lenis;
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        duration: 1.0,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        gestureDirection: 'vertical',
        smooth: true,
    });

    function raf(time) {
        if (lenis) lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate Lenis with ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
    }
}

// 2. GSAP Animations
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Nav Entrance
// 1. 立即设置初始状态（隐藏），防止 Loader 消失时看到完整布局后又闪烁
if (typeof gsap !== 'undefined') {
    gsap.set("nav", { yPercent: -100 });
    gsap.set(".gsap-hero", { y: 50, opacity: 0 });
}

// 2. 定义播放动画函数（从隐藏状态 -> 正常状态）
const playHeroAnimation = () => {
  gsap.to("nav", {
    yPercent: 0,
    duration: 1,
    ease: "expo.out"
  });

  gsap.to(".gsap-hero", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
};

// Animate all sections with .gsap-scroll on scroll
gsap.utils.toArray('.gsap-scroll').forEach(sectionContent => {
  // Animate the direct children of the .gsap-scroll element
  const elementsToAnimate = sectionContent.children;

  if (elementsToAnimate.length > 0) {
    gsap.from(elementsToAnimate, {
      scrollTrigger: {
        trigger: sectionContent, // Use the element itself as the trigger
        start: "top 95%", // Trigger almost immediately when it enters viewport
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }
});

// Custom Animation for About Us Section
const aboutSection = document.getElementById('about');
if (aboutSection && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: "top 70%", // 当板块顶部到达视口 70% 处时触发
            toggleActions: "play none none reverse"
        }
    });

    // 1. 动画化左侧栏元素 (小标签, 标题, 装饰线)
    const leftCol = aboutSection.querySelector('.lg\\:col-span-5');
    if (leftCol) {
        tl.from(leftCol.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }

    // 2. 动画化右侧正文
    const rightText = aboutSection.querySelector('[data-i18n="about.text"]');
    if (rightText) {
        tl.from(rightText, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6"); // 与上一个动画稍微重叠，更流畅
    }

    // 3. 动画化底部的价值标签 (Visionary / Collaborative)
    const markers = aboutSection.querySelectorAll('.group');
    if (markers.length > 0) {
        tl.from(markers, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.6");
    }
}

// 3. Vanta.js Background Effect for Hero Section
if (typeof VANTA !== 'undefined') {
    try {
        VANTA.NET({
            el: "#hero",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0284c7,       // Brand-600 (Primary Blue)
            backgroundColor: 0xf8fafc, // Slate-50 (Light Background)
            points: 20.00,
            maxDistance: 18.00,
            spacing: 14.00
        });
    } catch (e) {
        console.warn("Vanta.js failed to initialize:", e);
    }
}

// Scrollspy for navigation links
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const sections = gsap.utils.toArray('section[id], footer[id]');
    const navLinks = gsap.utils.toArray('#desktop-menu a');

    function setActive(id) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = navLinks.find(link => link.getAttribute('href') === `#${id}`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    sections.forEach(section => {
        let start = "top 60%";
        let end = "bottom 40%";

        if (section.id === 'vision') {
            end = "bottom 71%";
        }
        if (section.id === 'contact') {
            start = "top 75%";
        }

        ScrollTrigger.create({
            trigger: section,
            start: start,
            end: end,
            onEnter: () => setActive(section.id),
            onEnterBack: () => setActive(section.id),
        });
    });
}

// 4. Vanilla Tilt Manual Initialization
if (typeof VanillaTilt !== 'undefined') {
    // Initialize premium glass cards which don't use data-tilt attributes
    VanillaTilt.init(document.querySelectorAll(".glass-card-premium"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: true
    });
    // .tilt-card elements are initialized automatically via data-tilt attributes in the HTML
}

// 4.5 Programs Card Hover - Background Blobs Interaction
const programCards = document.querySelectorAll('#programs .tilt-card');
const programBlobs = document.querySelectorAll('#programs .blob');

if (programCards.length > 0 && programBlobs.length > 1) {
    programCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 鼠标悬停时，改变背景气泡的颜色和大小
            gsap.to(programBlobs[0], { 
                backgroundColor: '#a5b4fc', // indigo-300
                scale: 1.2,
                duration: 1, 
                ease: "power2.out" 
            });
            gsap.to(programBlobs[1], { 
                backgroundColor: '#bfdbfe', // blue-200
                scale: 1.15,
                duration: 1, 
                ease: "power2.out" 
            });
        });

        card.addEventListener('mouseleave', () => {
            // 恢复原始颜色（Tailwind 50级别颜色）和比例
            gsap.to(programBlobs[0], { backgroundColor: '#f0f9ff', scale: 1, duration: 0.8 });
            gsap.to(programBlobs[1], { backgroundColor: '#eff6ff', scale: 1, duration: 0.8 });
        });
    });
}

// 5. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (target !== '#' && document.querySelector(target)) {
      e.preventDefault();
      if (typeof lenis !== 'undefined' && lenis) {
        lenis.scrollTo(target);
      } else {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// 6. Loader
let isIntroDone = false;

const hideLoader = () => {
  if (isIntroDone) return;
  isIntroDone = true;

  const loader = document.getElementById('loader');
  const isLoaderVisible = loader && loader.style.display !== 'none';
  
  if (isLoaderVisible) {
    // 确保隐藏前刷新布局计算
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
        initScrollSnapping();
    }

    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      if (typeof gsap !== 'undefined') playHeroAnimation();
    }, 500);
  } else {
      // 如果 Loader 已经被隐藏（例如通过超时机制），直接播放动画，确保内容可见
      if (typeof gsap !== 'undefined') playHeroAnimation();
      if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
          initScrollSnapping();
      }
  }
};

// 监听资源加载
window.addEventListener('load', hideLoader);

// 防御性处理：如果 3 秒后还没加载完，强制关闭加载动画，防止用户一直看 logo
setTimeout(hideLoader, 3000);

// 7. Back to Top Button
const backToTopBtn = document.getElementById('back-to-top-btn');

if (backToTopBtn) {
  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    if (typeof lenis !== 'undefined' && lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  const toggleBackToTop = (scrollPos) => {
    if (scrollPos > window.innerHeight * 0.5) {
      backToTopBtn.classList.remove('opacity-0', 'invisible');
    } else {
      backToTopBtn.classList.add('opacity-0', 'invisible');
    }
  };

  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', ({ scroll }) => toggleBackToTop(scroll));
  } else {
    window.addEventListener('scroll', () => toggleBackToTop(window.scrollY));
  }
}

// Mobile Hamburger Menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNavPanel = document.getElementById('mobile-nav-panel');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinksContainer = document.getElementById('mobile-links-container');
const mobileLangContainer = document.getElementById('mobile-lang-container');
const mainNav = document.getElementById('desktop-menu');
const desktopLangSwitcher = document.getElementById('desktop-lang-switch');

if (hamburgerBtn && mobileNavPanel && mobileMenuOverlay && mainNav && mobileLinksContainer && desktopLangSwitcher) {
    // Clone nav links to mobile panel
    mobileLinksContainer.innerHTML = mainNav.innerHTML;

    const mobileSwitcher = desktopLangSwitcher.cloneNode(true);
    mobileSwitcher.classList.remove('hidden', 'md:flex');
    mobileSwitcher.classList.add('flex', 'justify-center');
    mobileLangContainer.appendChild(mobileSwitcher);

    // Style mobile links
    const mobileLinks = mobileLinksContainer.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.className = 'mobile-nav-link text-lg font-bold text-slate-700 hover:text-brand-600 transition-colors py-2 block w-full text-center';
    });

    hamburgerBtn.addEventListener('click', () => {
        mobileNavPanel.classList.add('is-open');
        mobileMenuOverlay.classList.add('is-open');

        if (typeof gsap !== 'undefined') {
            gsap.fromTo(mobileLinks, 
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "power2.out", overwrite: "auto" }
            );
        }
    });

    const closePanel = () => {
        mobileNavPanel.classList.remove('is-open');
        mobileMenuOverlay.classList.remove('is-open');
    };

    closeMenuBtn.addEventListener('click', closePanel);
    mobileMenuOverlay.addEventListener('click', closePanel);

    mobileLinksContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            // 稍微延迟关闭，让点击反馈更自然
            setTimeout(closePanel, 300);
        }
    });

    document.addEventListener('click', (e) => {
        if (!mobileNavPanel.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            closePanel();
        }
    });
}

// 窗口缩放后重新计算吸附位置，防止进度错位
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
    initScrollSnapping();
});

// 统一语言按钮事件监听 (使用事件委托处理桌面和移动端按钮)
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
        applyLanguage(btn.dataset.lang);
    }
});

// 8. 统一初始化与布局刷新
// Get browser language
const browserLanguage = navigator.language || navigator.userLanguage;

// Set initial language based on browser language or default to 'zh-Hans'
let initialLang = localStorage.getItem('bilink-lang') || 'en';

// Set language based on local storage

applyLanguage(initialLang);

// 统一在最后进行一次干净的初始化
setTimeout(() => {
    ScrollTrigger.refresh();
    initScrollSnapping();
}, 300);

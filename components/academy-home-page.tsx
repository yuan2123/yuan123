"use client";

import { useEffect } from "react";

const HOME_MARKUP = '\n<header class="nav">\n<div class="shell nav-inner">\n<a class="brand" href="#top">\n<span class="brand-logo-wrap"><img alt="星火财商 Logo" class="brand-logo" src="/images/xhcs-logo-gold.png"/></span>\n<span class="brand-text">星火财商学院<small>SPARK WEALTH ACADEMY</small></span>\n</a>\n<nav aria-label="主导航" class="menu">\n<a href="#academy">财商学院</a><a href="#protection">家庭保障</a><a href="#medical">医疗资源</a>\n<a href="#cases">成功案例</a><a href="/about">关于我们</a><a class="nav-cta" href="/register">课程报名</a>\n</nav>\n<button aria-label="打开菜单" class="mobile-toggle">☰</button>\n</div>\n<div class="academy-mobile-menu" aria-label="移动端导航">\n<a href="#academy">财商学院</a><a href="#protection">家庭保障</a><a href="#medical">医疗资源</a>\n<a href="#cases">成功案例</a><a href="/about">关于我们</a><a class="academy-mobile-cta" href="/register">课程报名</a>\n</div>\n</header>\n<div id="top">\n<section class="hero">\n<div class="shell hero-grid">\n<div class="reveal">\n<span class="eyebrow">点燃财富 · IGNITE WEALTH</span>\n<h1 class="hero-title">\n<span class="hero-line">\n<span class="hero-brand-name">星火</span><span class="hero-slogan-dark">点亮未来</span>\n</span>\n<span class="hero-line">\n<span class="hero-slogan-gold">财商</span><span class="hero-slogan-dark">成就人生</span>\n</span>\n</h1>\n<p class="hero-copy">星火财商以财商教育为入口，帮助家庭建立正确认知、看懂财富逻辑、理解风险边界，并在保障规划、医疗资源与长期成长中持续同行。让每一个家庭都能拥有更清晰的判断、更从容的选择和更明亮的未来。</p>\n<div class="actions">\n<a class="btn btn-primary" href="#academy">了解学院学习路径 →</a>\n<a class="btn btn-ghost" href="/register">预约家庭财富体检</a>\n</div>\n</div>\n<div class="visual reveal">\n<div class="halo"></div>\n<div class="orbit o1"><i></i><i></i><i></i></div>\n<div class="orbit o2"><i></i><i></i><i></i></div>\n<div class="orbit o3"><i></i><i></i><i></i></div>\n<div class="academy-card">\n<img alt="星火财商学院" class="hero-logo" src="/images/xhcs-logo-gold.png"/>\n<small>学院成长地图</small>\n<h3>从认知到陪伴</h3>\n<p>先学会判断，再建立家庭财富安全系统。</p>\n<div class="mini-path">\n<div class="mini-step"><b>1</b>认知</div><div class="mini-step"><b>2</b>保障</div>\n<div class="mini-step"><b>3</b>医疗</div><div class="mini-step"><b>4</b>成长</div><div class="mini-step"><b>5</b>陪伴</div>\n</div>\n</div>\n<div class="float f1">财商学院</div><div class="float f2">家庭保障</div>\n<div class="float f3">医疗资源</div><div class="float f4">长期陪伴</div>\n</div>\n</div>\n</section>\n<section class="belief-section">\n<div class="shell belief-grid">\n<div class="belief-copy reveal">\n<span class="eyebrow">Our Belief</span>\n<h2>创造<br/><span class="gold">富而喜悦</span>的人生</h2>\n<p>“富”不只是拥有更多资产，而是拥有清晰的认知、稳定的家庭底盘和选择生活的能力；“喜悦”也不是短暂满足，而是在面对教育、养老、健康与未来时，依然保有从容、希望与陪伴。</p>\n<div class="belief-quote">星火财商希望点燃的，不只是财富增长，更是每个家庭掌控人生、守护所爱、持续成长的力量。</div>\n</div>\n<div class="belief-cards reveal">\n<article class="belief-card"><b>富</b><h3>有能力</h3><p>通过财商教育建立判断力，让家庭看懂现金流、目标与财富结构。</p></article>\n<article class="belief-card"><b>喜</b><h3>有底气</h3><p>通过家庭保障与医疗规划，让风险来临时依然拥有选择和行动能力。</p></article>\n<article class="belief-card"><b>悦</b><h3>有陪伴</h3><p>通过长期学习与持续检视，让家庭在成长路上更安心、更从容。</p></article>\n</div>\n</div>\n</section>\n<section class="section dark">\n<div class="shell">\n<div class="section-head reveal">\n<div><span class="eyebrow">Education before product</span><h2>为什么先学习，<br/>而不是先买产品？</h2></div>\n<p>产品会变化，但判断力会长期属于你。星火财商学院希望先帮助家庭理解目标、风险与现金流，再做真正适合自己的选择。</p>\n</div>\n<div class="education-grid reveal">\n<article class="why-card">\n<h3>先拥有判断力，再选择工具</h3>\n<p>很多家庭并不缺产品，而是缺少一套能判断“要不要、为什么、先做什么”的逻辑。</p>\n<div class="compare">\n<div class="compare-row"><b>01</b><div><strong>看懂家庭现状</strong><span>目标、收入、负债、责任、风险是否清晰？</span></div></div>\n<div class="compare-row"><b>02</b><div><strong>建立决策顺序</strong><span>先保障什么、后配置什么，避免被碎片信息带着走。</span></div></div>\n<div class="compare-row"><b>03</b><div><strong>理解方案逻辑</strong><span>让每一次选择都可解释、可执行、可长期复盘。</span></div></div>\n</div>\n</article>\n<article class="quote-panel">\n<small>学院核心理念</small>\n<p class="big">“先拥有判断力，再拥有选择力；让财富成为家庭安心、成长与喜悦的力量。”</p>\n<span>点燃财富 · 创造富而喜悦的人生</span>\n</article>\n</div>\n</div>\n</section>\n<section class="section" id="protection">\n<div class="shell">\n<div class="section-head reveal">\n<div><span class="eyebrow">Three capabilities, one closed loop</span><h2>从学习出发，形成家庭财富安全闭环</h2></div>\n<p>财商教育是入口，家庭保障是方案，医疗资源是在重大风险发生时真正发挥价值的专业壁垒。</p>\n</div>\n<div class="closed-loop reveal">\n<article class="loop-card"><div class="loop-icon">01</div><h3>财商教育</h3><p>帮助家庭建立正确财富观、现金流意识和决策框架。</p><ul><li>财富认知与家庭目标</li><li>现金流与资产负债</li><li>风险意识与工具认知</li></ul></article>\n<article class="loop-card"><div class="loop-icon">02</div><h3>家庭保障</h3><p>把学习形成的判断，转化为适合家庭阶段的风险防线。</p><ul><li>家庭责任与风险评估</li><li>保险规划与保障结构</li><li>定期检视与方案调整</li></ul></article>\n<article class="loop-card"><div class="loop-icon">03</div><h3>医疗资源</h3><p>重大风险发生时，协助家庭做医疗决策并链接优质资源。</p><ul><li>就医信息与路径梳理</li><li>医疗资源协调与转介</li><li>就医协助与持续支持</li></ul></article>\n</div>\n</div>\n</section>\n<section class="section path-section" id="academy">\n<div class="shell">\n<div class="section-head reveal">\n<div><span class="eyebrow">Academy Growth Path</span><h2>学院成长路径：陪你一步步建立家庭能力</h2></div>\n<p>不是一次课程结束，而是从认知、保障、医疗规划，到财富成长和长期陪伴的完整学习地图。</p>\n</div>\n<div class="growth-path reveal">\n<article class="growth-step"><div class="growth-no">01</div><h3>财富认知</h3><p>建立正确财富观，看懂家庭现金流、目标和风险。</p></article>\n<article class="growth-step"><div class="growth-no">02</div><h3>家庭保障</h3><p>识别不能承受的损失，建立家庭风险防线。</p></article>\n<article class="growth-step"><div class="growth-no">03</div><h3>医疗规划</h3><p>理解重大疾病决策、就医路径与医疗资源配置。</p></article>\n<article class="growth-step"><div class="growth-no">04</div><h3>财富成长</h3><p>在安全基础上，优化资产结构与长期目标安排。</p></article>\n<article class="growth-step"><div class="growth-no">05</div><h3>长期陪伴</h3><p>随着家庭生命周期变化，持续学习、复盘与调整。</p></article>\n</div>\n</div>\n</section>\n<section class="section">\n<div class="shell curriculum">\n<div class="sticky reveal">\n<span class="eyebrow">Curriculum System</span>\n<h2>课程体系，不只讲知识，更训练家庭决策能力</h2>\n<p>课程设计围绕真实家庭情境展开，让学习能够进入生活、进入家庭讨论，也进入实际行动。</p>\n<a class="btn btn-ghost" href="/courses">获取课程目录</a>\n</div>\n<div class="course-list reveal">\n<article class="course"><div class="course-no">A1</div><div><h3>财富认知基础课</h3><p>财富观、现金流、家庭目标与风险意识。</p></div><span>↗</span></article>\n<article class="course"><div class="course-no">A2</div><div><h3>家庭资产配置课</h3><p>从家庭生命周期出发，理解资产结构与配置逻辑。</p></div><span>↗</span></article>\n<article class="course"><div class="course-no">A3</div><div><h3>家庭保障规划课</h3><p>看懂保险工具，建立与家庭责任相匹配的保障结构。</p></div><span>↗</span></article>\n<article class="course"><div class="course-no">A4</div><div><h3>家庭健康与医疗决策课</h3><p>重大疾病就医决策、医疗资源与家庭应对机制。</p></div><span>↗</span></article>\n<article class="course"><div class="course-no">A5</div><div><h3>创业家庭财富课</h3><p>企业与家庭财务边界、风险隔离与长期规划。</p></div><span>↗</span></article>\n</div>\n</div>\n</section>\n<section class="section medical" id="medical">\n<div class="shell medical-grid">\n<div class="reveal">\n<span class="eyebrow">Medical Decision &amp; Resources</span>\n<h2>真正的医疗资源，<br/>是在关键时刻帮助家庭做对决定</h2>\n<p>当重大疾病发生，家庭面对的不只是费用问题，还有信息差、就医路径、专家选择和时间压力。我们把医疗资源放进家庭财富安全体系，在真正需要时提供决策与行动支持。</p>\n<div class="medical-list">\n<div class="medical-item"><strong>医疗决策梳理</strong>理解病情信息、诊疗路径与关键选择。</div>\n<div class="medical-item"><strong>优质资源链接</strong>协助对接适合的医院、专家及相关资源。</div>\n<div class="medical-item"><strong>就医协助</strong>减少家庭在复杂流程中的时间与沟通成本。</div>\n<div class="medical-item"><strong>保障协同</strong>让保障方案、现金流与医疗安排形成配合。</div>\n</div>\n</div>\n<div class="medical-visual reveal">\n<div class="medical-card"><strong>医疗资源不是附加服务，而是风险发生时的专业壁垒</strong><span>决策支持 · 资源协调 · 就医协助 · 持续陪伴</span></div>\n</div>\n</div>\n</section>\n<section class="section" id="method">\n<div class="shell">\n<div class="section-head reveal">\n<div><span class="eyebrow">Method &amp; Trust</span><h2>不做传统团队介绍，用方法和标准建立信任</h2></div>\n<p>我们更希望你看见：我们如何做判断、如何制定方案、如何协同资源，以及如何长期陪伴家庭。</p>\n</div>\n<div class="method-grid reveal">\n<article class="panel">\n<h3>家庭决策流程</h3>\n<div class="method-row"><b>1</b><p><strong>家庭财富体检</strong><br/>了解目标、责任、现金流、风险与已有资源。</p></div>\n<div class="method-row"><b>2</b><p><strong>问题优先级</strong><br/>先处理不能承受的风险，再讨论长期增长。</p></div>\n<div class="method-row"><b>3</b><p><strong>方案与行动</strong><br/>把学习、保障和资源支持转化为具体步骤。</p></div>\n<div class="method-row"><b>4</b><p><strong>年度检视</strong><br/>随着家庭变化持续学习、复盘与更新。</p></div>\n</article>\n<article class="panel black">\n<h3>学院服务标准</h3>\n<div class="method-row"><b>✓</b><p>教育先于销售，不用焦虑推动决策。</p></div>\n<div class="method-row"><b>✓</b><p>重大方案必须讲清逻辑、边界与替代选择。</p></div>\n<div class="method-row"><b>✓</b><p>保险、医疗与课程始终围绕家庭目标协同。</p></div>\n<div class="method-row"><b>✓</b><p>长期陪伴不是口号，而是持续检视机制。</p></div>\n</article>\n</div>\n<div class="trust-strip reveal">\n<div class="trust-item"><strong>需求分析能力</strong>从真实家庭问题出发</div>\n<div class="trust-item"><strong>保障规划能力</strong>建立清晰风险边界</div>\n<div class="trust-item"><strong>医疗资源能力</strong>关键时刻提供协同</div>\n<div class="trust-item"><strong>长期服务能力</strong>陪伴家庭持续成长</div>\n</div>\n</div>\n</section>\n<section class="section" id="cases">\n<div class="shell">\n<div class="section-head reveal">\n<div><span class="eyebrow">Family Growth Cases</span><h2>成功案例，不只展示结果，更展示家庭如何完成认知升级</h2></div>\n<p>正式版本将以匿名方式呈现家庭背景、决策难题、学习过程、方案逻辑与阶段性改变。</p>\n</div>\n<div class="case-grid reveal">\n<article class="case"><small>中产家庭</small><h3>收入持续增长，却始终缺乏家庭财务安全感</h3><p>通过现金流梳理、保障检视与学习路径，重新建立家庭决策顺序。</p></article>\n<article class="case"><small>创业家庭</small><h3>企业经营风险与家庭财富长期混在一起</h3><p>建立企业与家庭边界，识别责任风险，并形成阶段性行动清单。</p></article>\n<article class="case"><small>健康风险家庭</small><h3>面对重大疾病信息时，不知道如何判断与行动</h3><p>协助梳理医疗决策、保障安排和就医资源，降低家庭的无序感。</p></article>\n</div>\n</div>\n</section>\n</div>\n<footer>\n<div class="shell footer-grid">\n<div class="footer-brand"><img alt="星火财商" class="footer-logo" src="/images/xhcs-logo-gold.png"/><span>星火财商学院<br/><small>SPARK WEALTH ACADEMY</small></span></div>\n<div>财商教育 · 家庭保障 · 医疗资源</div>\n<div>品牌理念：创造富而喜悦的人生</div>\n</div>\n</footer>\n\n';

const JOURNEY_STARS = [
  ["认知", "看懂财富逻辑，建立清晰判断"],
  ["保障", "识别家庭风险，筑牢安全底盘"],
  ["医疗", "理解就医路径，链接专业资源"],
  ["成长", "优化财富结构，稳步实现目标"],
  ["陪伴", "持续学习复盘，陪伴长期变化"],
] as const;

const journeyStarMarkup = (label: string, description: string, index: number) => {
  const gradientId = `journey-star-pink-${index}`;
  return `<button class="journey-spark journey-spark-${index + 1}" type="button" aria-label="${label}：${description}">
    <span class="journey-star-visual">
      <svg class="spark-mark" viewBox="0 0 100 100" aria-hidden="true">
        <defs><radialGradient id="${gradientId}" gradientUnits="userSpaceOnUse" cx="24" cy="78" r="65">
          <stop class="spark-pink-accent" offset="0%" stop-color="#efbdc6"/>
          <stop class="spark-pink-soft" offset="28%" stop-color="#f8e1e3"/>
          <stop offset="58%" stop-color="#fff8ef"/><stop offset="100%" stop-color="#fffdf7"/>
        </radialGradient></defs>
        <path d="M47.78 8.67Q50 6 52.22 8.67L64.83 23.87Q67.05 26.54 70.27 27.82L88.62 35.12Q91.85 36.4 89.99 39.34L79.44 56.03Q77.58 58.96 77.36 62.42L76.09 82.13Q75.86 85.6 72.5 84.74L53.36 79.86Q50 79 46.64 79.86L27.5 84.74Q24.14 85.6 23.91 82.13L22.64 62.42Q22.42 58.96 20.56 56.03L10.01 39.34Q8.15 36.4 11.38 35.12L29.73 27.82Q32.95 26.54 35.17 23.87Z" fill="url(#${gradientId})" stroke="#b99a60" stroke-width="1.25" stroke-linejoin="round"/>
        <text x="50" y="54" text-anchor="middle" dominant-baseline="middle">${label}</text>
      </svg>
      <span class="journey-tooltip"><strong>${label}</strong>${description}</span>
    </span>
  </button>`;
};

const JOURNEY_MARKUP = `<div class="journey-stage">
  <div class="journey-halo"></div>
  <div class="journey-core"><img src="/images/xhcs-logo-gold.png" alt="星火财商"/><span>点燃财富 · 照亮生活</span><strong>从认知，到长期陪伴</strong></div>
  ${JOURNEY_STARS.map(([label, description], index) => journeyStarMarkup(label, description, index)).join("")}
</div>`;

export function AcademyHomePage() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".academy-home");
    if (!root) return;

    const visual = root.querySelector<HTMLElement>(".visual");
    if (visual) visual.innerHTML = JOURNEY_MARKUP;

    root.querySelectorAll<HTMLElement>(".method-row p").forEach((item) => {
      if (item.textContent?.startsWith("教育先于销售")) {
        item.textContent = "认知先于销售，不用焦虑推动决策。";
      }
    });

    const revealItems = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));

    const toggle = root.querySelector<HTMLButtonElement>(".mobile-toggle");
    const menu = root.querySelector<HTMLElement>(".academy-mobile-menu");
    const onToggle = () => {
      const isOpen = menu?.classList.toggle("open") ?? false;
      toggle?.setAttribute("aria-expanded", String(isOpen));
      if (toggle) toggle.textContent = isOpen ? "×" : "☰";
    };
    const onMenuClick = () => {
      menu?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      if (toggle) toggle.textContent = "☰";
    };
    toggle?.addEventListener("click", onToggle);
    menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", onMenuClick));

    return () => {
      observer.disconnect();
      toggle?.removeEventListener("click", onToggle);
      menu?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", onMenuClick));
    };
  }, []);

  return <div className="academy-home" dangerouslySetInnerHTML={{ __html: HOME_MARKUP }} />;
}

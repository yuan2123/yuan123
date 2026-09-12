"use client";

import { useEffect } from "react";

const SPARK_MARKUP = `<svg class="spark-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 1C13.8 8.2 15.8 10.2 23 12C15.8 13.8 13.8 15.8 12 23C10.2 15.8 8.2 13.8 1 12C8.2 10.2 10.2 8.2 12 1Z" fill="currentColor"/></svg>`;

const HOME_MARKUP = `
<header class="nav">
<div class="shell nav-inner">
<a class="brand" href="#top">
<span class="brand-logo-wrap"><img alt="星火财商 Logo" class="brand-logo" src="/images/xhcs-logo-gold.png"/></span>
<span class="brand-text">星火财商学院<small>SPARK WEALTH ACADEMY</small></span>
</a>
<nav aria-label="主导航" class="menu">
<a href="/">首页</a><a href="/about">关于我们</a><a class="menu-course-link" href="/courses">课程体系</a><a href="/academy">财商学院</a>
<a href="/mentors">导师团队</a><a href="/contact">联系我们</a><a class="nav-cta" href="/register">课程报名</a>
</nav>
<button type="button" aria-expanded="false" aria-controls="academy-mobile-menu" aria-label="打开菜单" class="mobile-toggle">☰</button>
</div>
<div id="academy-mobile-menu" class="academy-mobile-menu" aria-label="移动端导航">
<a href="/">首页</a><a href="/about">关于我们</a><a href="/courses">课程体系</a><a href="/academy">财商学院</a>
<a href="/mentors">导师团队</a><a href="/contact">联系我们</a><a class="academy-mobile-cta" href="/register">课程报名</a>
</div>
</header>
<div id="top">
<section class="hero">
<div class="shell hero-grid">
<div class="reveal">
<span class="eyebrow">点燃财富 · IGNITE WEALTH</span>
<h1 class="hero-title">
<span class="hero-line">
<span class="hero-brand-name">星火</span><span class="hero-slogan-dark">点亮未来</span>
</span>
<span class="hero-line">
<span class="hero-slogan-gold">财商</span><span class="hero-slogan-dark">成就人生</span>
</span>
</h1>
<p class="hero-copy">星火财商专注中产及高净值家庭一站式财富管理，深耕财商教育、资产配置与专属理财规划。围绕家庭不同财富阶段，提供财务诊断、方案定制、落地执行与财商授课服务。</p>
<div class="actions">
<a class="btn btn-primary" href="/courses">了解课程体系 →</a>
<a class="btn btn-ghost" href="/register">提交课程咨询</a>
</div>
</div>
<div class="visual reveal">
<div aria-hidden="true" class="halo"></div>
<div aria-hidden="true" class="orbit o1"><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i></div>
<div aria-hidden="true" class="orbit o2"><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i></div>
<div class="academy-card">
<img alt="星火财商学院" class="hero-logo" src="/images/xhcs-logo-gold.png"/>
<small>学院成长地图</small>
<h3>从认知到陪伴</h3>
<p>先学会判断，再建立家庭财富安全系统。</p>
<div class="mini-path">
<div class="mini-step"><b>1</b>认知</div><div class="mini-step"><b>2</b>保障</div>
<div class="mini-step"><b>3</b>医疗</div><div class="mini-step"><b>4</b>成长</div><div class="mini-step"><b>5</b>陪伴</div>
</div>
</div>
<div class="float f1">财商学院</div><div class="float f2">家庭保障</div>
<div class="float f3">医疗资源</div><div class="float f4">长期陪伴</div>
</div>
</div>
</section>
<section class="belief-section">
<div class="shell belief-grid">
<div class="belief-copy reveal">
<span class="eyebrow">Our Belief</span>
<h2>创造<br/><span class="gold">富而喜悦</span>的人生</h2>
<p>“富”不只是拥有更多资产，而是拥有清晰的认知、稳定的家庭底盘和选择生活的能力；“喜悦”也不是短暂满足，而是在面对教育、养老、健康与未来时，依然保有从容、希望与陪伴。</p>
<div class="belief-quote">星火财商希望点燃的，不只是财富增长，更是每个家庭掌控人生、守护所爱、持续成长的力量。</div>
</div>
<div class="belief-cards reveal">
<article class="belief-card"><b>富</b><h3>有能力</h3><p>通过财商教育建立判断力，让家庭看懂现金流、目标与财富结构。</p></article>
<article class="belief-card"><b>喜</b><h3>有底气</h3><p>通过家庭保障与医疗规划，让风险来临时依然拥有选择和行动能力。</p></article>
<article class="belief-card"><b>悦</b><h3>有陪伴</h3><p>通过长期学习与持续检视，让家庭在成长路上更安心、更从容。</p></article>
</div>
</div>
</section>
<section class="section dark">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Education before product</span><h2>为什么先学习，<br/>而不是先买产品？</h2></div>
<p>产品会变化，但判断力会长期属于你。星火财商学院希望先帮助家庭理解目标、风险与现金流，再做真正适合自己的选择。</p>
</div>
<div class="education-grid reveal">
<article class="why-card">
<h3>先拥有判断力，再选择工具</h3>
<p>很多家庭并不缺产品，而是缺少一套能判断“要不要、为什么、先做什么”的逻辑。</p>
<div class="compare">
<div class="compare-row"><b>01</b><div><strong>看懂家庭现状</strong><span>目标、收入、负债、责任、风险是否清晰？</span></div></div>
<div class="compare-row"><b>02</b><div><strong>建立决策顺序</strong><span>先保障什么、后配置什么，避免被碎片信息带着走。</span></div></div>
<div class="compare-row"><b>03</b><div><strong>理解方案逻辑</strong><span>让每一次选择都可解释、可执行、可长期复盘。</span></div></div>
</div>
</article>
<article class="quote-panel">
<small>学院核心理念</small>
<p class="big"><span class="quote-line">“先拥有判断力，再拥</span><span class="quote-line">有选择力；让财富成为</span><span class="quote-line">家庭安心、成长与喜悦</span><span class="quote-line">的力量。”</span></p>
<span>点燃财富 · 创造富而喜悦的人生</span>
</article>
</div>
</div>
</section>
<section class="section" id="lifecycle">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Three Wealth Life Stages</span><h2>围绕家庭财富生命周期，建立长期规划</h2></div>
<p>从财富创造期到稳定积累期，再到传承安排期，每个阶段都有不同的目标、责任和风险边界。</p>
</div>
<div class="closed-loop reveal">
<article class="loop-card"><div class="loop-icon">01</div><h3>创富防风险</h3><p>建立财富认知和风险意识，让家庭积累拥有稳固基础。</p><ul><li>财富观与家庭目标</li><li>收入、支出与现金流</li><li>责任识别与风险防范</li></ul></article>
<article class="loop-card"><div class="loop-icon">02</div><h3>保富稳增值</h3><p>梳理资产结构与目标期限，在风险边界内安排长期增长。</p><ul><li>家庭资产与负债盘点</li><li>资产配置与流动性</li><li>长期复盘与动态调整</li></ul></article>
<article class="loop-card"><div class="loop-icon">03</div><h3>传富做保全</h3><p>从家庭意愿、责任与治理出发，理解有序传承的规划逻辑。</p><ul><li>家庭意愿与目标共识</li><li>传承风险与常见误区</li><li>长期安排与持续陪伴</li></ul></article>
</div>
</div>
</section>
<section class="section path-section" id="service">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Four Core Services</span><h2>从了解家庭开始，让规划进入实际行动</h2></div>
<p>四项基础服务相互衔接，让家庭看清现状、明确方向，并在变化中持续复盘。</p>
</div>
<div class="growth-path reveal">
<article class="growth-step"><div class="growth-no">01</div><h3>财务诊断</h3><p>梳理家庭目标、收支、资产、负债与主要风险。</p></article>
<article class="growth-step"><div class="growth-no">02</div><h3>方案定制</h3><p>结合家庭阶段与责任边界，形成清晰的规划思路。</p></article>
<article class="growth-step"><div class="growth-no">03</div><h3>落地执行</h3><p>把规划转化为优先级明确、能够持续推进的行动。</p></article>
<article class="growth-step"><div class="growth-no">04</div><h3>财商授课</h3><p>通过成人、少儿课程和沙盘体验提升判断能力。</p></article>
</div>
</div>
</section>
<section class="section">
<div class="shell curriculum">
<div class="sticky reveal">
<span class="eyebrow">Curriculum System</span>
<h2>真实课程与体验，让财商知识进入生活</h2>
<p>目前成人与少儿课程均开放招生咨询，具体时间、地点和费用以当期沟通为准。</p>
<a class="btn btn-ghost" href="/courses">查看课程介绍</a>
</div>
<div class="course-list reveal">
<article class="course"><div class="course-no">A1</div><div><h3>家族财富智慧研修班</h3><p>面向成人家庭决策者，学习财富目标、风险管理、现金流与资产配置。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A2</div><div><h3>未来财富力·少年财商成长营</h3><p>面向9—14岁少年，通过游戏和实践学习金钱、消费与价值创造。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A3</div><div><h3>财富流沙盘</h3><p>在模拟人生与财富决策中观察选择、结果与行为模式。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A4</div><div><h3>绘画心理体验</h3><p>通过表达与互动，理解自己和家庭的真实需求与关系。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A5</div><div><h3>复盘沙龙</h3><p>围绕课程与家庭议题持续交流，把学习转化为长期行动。</p></div><span>↗</span></article>
</div>
</div>
</section>
<section class="section medical" id="medical">
<div class="shell medical-grid">
<div class="reveal">
<span class="eyebrow">Health Resource Support</span>
<h2>家庭财富规划，<br/>也需要看见健康责任</h2>
<p>星火财商正在持续完善家庭健康资源支持。相关合作机构、服务范围与具体安排确认后，将在本页面正式公布。</p>
<div class="medical-list">
<div class="medical-item"><strong>家庭健康责任</strong>把健康风险与家庭现金流、责任和长期目标共同考虑。</div>
<div class="medical-item"><strong>服务信息确认</strong>具体资源与服务以实际咨询、当期可提供范围为准。</div>
</div>
</div>
<div class="medical-visual reveal">
<div class="medical-card"><strong>健康资源服务正在完善</strong><span>不展示未经确认的机构、项目与服务承诺</span></div>
</div>
</div>
</section>
<section class="section" id="method">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Method &amp; Trust</span><h2>不做传统团队介绍，用方法和标准建立信任</h2></div>
<p>我们更希望你看见：我们如何做判断、如何制定方案、如何协同资源，以及如何长期陪伴家庭。</p>
</div>
<div class="method-grid reveal">
<article class="panel">
<h3>家庭决策流程</h3>
<div class="method-row"><b>1</b><p><strong>家庭财富体检</strong><br/>了解目标、责任、现金流、风险与已有资源。</p></div>
<div class="method-row"><b>2</b><p><strong>问题优先级</strong><br/>先处理不能承受的风险，再讨论长期增长。</p></div>
<div class="method-row"><b>3</b><p><strong>方案与行动</strong><br/>把学习、保障和资源支持转化为具体步骤。</p></div>
<div class="method-row"><b>4</b><p><strong>年度检视</strong><br/>随着家庭变化持续学习、复盘与更新。</p></div>
</article>
<article class="panel black">
<h3>学院服务标准</h3>
<div class="method-row"><b aria-hidden="true">${SPARK_MARKUP}</b><p>认知先于销售，不用焦虑推动决策。</p></div>
<div class="method-row"><b aria-hidden="true">${SPARK_MARKUP}</b><p>重大方案必须讲清逻辑、边界与替代选择。</p></div>
<div class="method-row"><b aria-hidden="true">${SPARK_MARKUP}</b><p>保险、医疗与课程始终围绕家庭目标协同。</p></div>
<div class="method-row"><b aria-hidden="true">${SPARK_MARKUP}</b><p>长期陪伴不是口号，而是持续检视机制。</p></div>
</article>
</div>
<div class="trust-strip reveal">
<div class="trust-item"><strong>需求分析能力</strong>从真实家庭问题出发</div>
<div class="trust-item"><strong>保障规划能力</strong>建立清晰风险边界</div>
<div class="trust-item"><strong>医疗资源能力</strong>关键时刻提供协同</div>
<div class="trust-item"><strong>长期服务能力</strong>陪伴家庭持续成长</div>
</div>
</div>
</section>
<section class="section" id="club">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Spark Wealth Club</span><h2>星火财富俱乐部，让学习持续发生</h2></div>
<p>课程之外，通过体验、交流和复盘活动，为成人与少儿提供持续学习的空间。</p>
</div>
<div class="case-grid reveal">
<article class="case"><small>沉浸体验</small><h3>财富流沙盘</h3><p>通过模拟人生选择和财务决策，看见行为模式对长期结果的影响。</p></article>
<article class="case"><small>自我探索</small><h3>绘画心理体验</h3><p>借助创作、表达与交流，理解自己和家庭关系中的真实需求。</p></article>
<article class="case"><small>长期陪伴</small><h3>复盘沙龙</h3><p>围绕真实家庭议题持续交流，让课程认知逐步进入生活与行动。</p></article>
</div>
</div>
</section>
</div>
<footer>
<div class="shell footer-grid">
<div class="footer-brand"><img alt="星火财商" class="footer-logo" src="/images/xhcs-logo-gold.png"/><span>星火财商学院<br/><small>SPARK WEALTH ACADEMY</small></span></div>
<div>财商教育 · 资产配置 · 专属理财规划</div>
<div>品牌理念：创造富而喜悦的人生</div>
</div>
</footer>

`;

export function AcademyHomePage() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".academy-home");
    if (!root) return;

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

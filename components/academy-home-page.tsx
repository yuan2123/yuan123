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
<a href="#academy">财商学院</a><a href="#protection">家庭保障</a><a href="#medical">医疗资源</a>
<a href="#cases">成功案例</a><a href="/about">关于我们</a><a class="nav-cta" href="/register">课程报名</a>
</nav>
<button type="button" aria-expanded="false" aria-controls="academy-mobile-menu" aria-label="打开菜单" class="mobile-toggle">☰</button>
</div>
<div id="academy-mobile-menu" class="academy-mobile-menu" aria-label="移动端导航">
<a href="#academy">财商学院</a><a href="#protection">家庭保障</a><a href="#medical">医疗资源</a>
<a href="#cases">成功案例</a><a href="/about">关于我们</a><a class="academy-mobile-cta" href="/register">课程报名</a>
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
<p class="hero-copy">星火财商以财商教育为入口，帮助家庭建立正确认知、看懂财富逻辑、理解风险边界，并在保障规划、医疗资源与长期成长中持续同行。让每一个家庭都能拥有更清晰的判断、更从容的选择和更明亮的未来。</p>
<div class="actions">
<a class="btn btn-primary" href="#academy">了解学院学习路径 →</a>
<a class="btn btn-ghost" href="/register">预约家庭财富体检</a>
</div>
</div>
<div class="visual reveal">
<div aria-hidden="true" class="halo"></div>
<div aria-hidden="true" class="orbit o1"><i>${SPARK_MARKUP}</i></div>
<div aria-hidden="true" class="orbit o2"><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i></div>
<div aria-hidden="true" class="orbit orbit-stars"><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i><i>${SPARK_MARKUP}</i></div>
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
<p class="big">“先拥有判断力，再拥有选择力；让财富成为家庭安心、成长与喜悦的力量。”</p>
<span>点燃财富 · 创造富而喜悦的人生</span>
</article>
</div>
</div>
</section>
<section class="section" id="protection">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Three capabilities, one closed loop</span><h2>从学习出发，形成家庭财富安全闭环</h2></div>
<p>财商教育是入口，家庭保障是方案，医疗资源是在重大风险发生时真正发挥价值的专业壁垒。</p>
</div>
<div class="closed-loop reveal">
<article class="loop-card"><div class="loop-icon">01</div><h3>财商教育</h3><p>帮助家庭建立正确财富观、现金流意识和决策框架。</p><ul><li>财富认知与家庭目标</li><li>现金流与资产负债</li><li>风险意识与工具认知</li></ul></article>
<article class="loop-card"><div class="loop-icon">02</div><h3>家庭保障</h3><p>把学习形成的判断，转化为适合家庭阶段的风险防线。</p><ul><li>家庭责任与风险评估</li><li>保险规划与保障结构</li><li>定期检视与方案调整</li></ul></article>
<article class="loop-card"><div class="loop-icon">03</div><h3>医疗资源</h3><p>重大风险发生时，协助家庭做医疗决策并链接优质资源。</p><ul><li>就医信息与路径梳理</li><li>医疗资源协调与转介</li><li>就医协助与持续支持</li></ul></article>
</div>
</div>
</section>
<section class="section path-section" id="academy">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Academy Growth Path</span><h2>学院成长路径：陪你一步步建立家庭能力</h2></div>
<p>不是一次课程结束，而是从认知、保障、医疗规划，到财富成长和长期陪伴的完整学习地图。</p>
</div>
<div class="growth-path reveal">
<article class="growth-step"><div class="growth-no">01</div><h3>财富认知</h3><p>建立正确财富观，看懂家庭现金流、目标和风险。</p></article>
<article class="growth-step"><div class="growth-no">02</div><h3>家庭保障</h3><p>识别不能承受的损失，建立家庭风险防线。</p></article>
<article class="growth-step"><div class="growth-no">03</div><h3>医疗规划</h3><p>理解重大疾病决策、就医路径与医疗资源配置。</p></article>
<article class="growth-step"><div class="growth-no">04</div><h3>财富成长</h3><p>在安全基础上，优化资产结构与长期目标安排。</p></article>
<article class="growth-step"><div class="growth-no">05</div><h3>长期陪伴</h3><p>随着家庭生命周期变化，持续学习、复盘与调整。</p></article>
</div>
</div>
</section>
<section class="section">
<div class="shell curriculum">
<div class="sticky reveal">
<span class="eyebrow">Curriculum System</span>
<h2>课程体系，不只讲知识，更训练家庭决策能力</h2>
<p>课程设计围绕真实家庭情境展开，让学习能够进入生活、进入家庭讨论，也进入实际行动。</p>
<a class="btn btn-ghost" href="/courses">获取课程目录</a>
</div>
<div class="course-list reveal">
<article class="course"><div class="course-no">A1</div><div><h3>财富认知基础课</h3><p>财富观、现金流、家庭目标与风险意识。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A2</div><div><h3>家庭资产配置课</h3><p>从家庭生命周期出发，理解资产结构与配置逻辑。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A3</div><div><h3>家庭保障规划课</h3><p>看懂保险工具，建立与家庭责任相匹配的保障结构。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A4</div><div><h3>家庭健康与医疗决策课</h3><p>重大疾病就医决策、医疗资源与家庭应对机制。</p></div><span>↗</span></article>
<article class="course"><div class="course-no">A5</div><div><h3>创业家庭财富课</h3><p>企业与家庭财务边界、风险隔离与长期规划。</p></div><span>↗</span></article>
</div>
</div>
</section>
<section class="section medical" id="medical">
<div class="shell medical-grid">
<div class="reveal">
<span class="eyebrow">Medical Decision &amp; Resources</span>
<h2>真正的医疗资源，<br/>是在关键时刻帮助家庭做对决定</h2>
<p>当重大疾病发生，家庭面对的不只是费用问题，还有信息差、就医路径、专家选择和时间压力。我们把医疗资源放进家庭财富安全体系，在真正需要时提供决策与行动支持。</p>
<div class="medical-list">
<div class="medical-item"><strong>医疗决策梳理</strong>理解病情信息、诊疗路径与关键选择。</div>
<div class="medical-item"><strong>优质资源链接</strong>协助对接适合的医院、专家及相关资源。</div>
<div class="medical-item"><strong>就医协助</strong>减少家庭在复杂流程中的时间与沟通成本。</div>
<div class="medical-item"><strong>保障协同</strong>让保障方案、现金流与医疗安排形成配合。</div>
</div>
</div>
<div class="medical-visual reveal">
<div class="medical-card"><strong>医疗资源不是附加服务，而是风险发生时的专业壁垒</strong><span>决策支持 · 资源协调 · 就医协助 · 持续陪伴</span></div>
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
<section class="section" id="cases">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Family Growth Cases</span><h2>成功案例，不只展示结果，更展示家庭如何完成认知升级</h2></div>
<p>正式版本将以匿名方式呈现家庭背景、决策难题、学习过程、方案逻辑与阶段性改变。</p>
</div>
<div class="case-grid reveal">
<article class="case"><small>中产家庭</small><h3>收入持续增长，却始终缺乏家庭财务安全感</h3><p>通过现金流梳理、保障检视与学习路径，重新建立家庭决策顺序。</p></article>
<article class="case"><small>创业家庭</small><h3>企业经营风险与家庭财富长期混在一起</h3><p>建立企业与家庭边界，识别责任风险，并形成阶段性行动清单。</p></article>
<article class="case"><small>健康风险家庭</small><h3>面对重大疾病信息时，不知道如何判断与行动</h3><p>协助梳理医疗决策、保障安排和就医资源，降低家庭的无序感。</p></article>
</div>
</div>
</section>
</div>
<footer>
<div class="shell footer-grid">
<div class="footer-brand"><img alt="星火财商" class="footer-logo" src="/images/xhcs-logo-gold.png"/><span>星火财商学院<br/><small>SPARK WEALTH ACADEMY</small></span></div>
<div>财商教育 · 家庭保障 · 医疗资源</div>
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

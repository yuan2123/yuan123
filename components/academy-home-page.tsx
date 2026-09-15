"use client";

import { useEffect } from "react";
import { LOGO_JOURNEY_ART } from "@/components/logo-journey-art";

const SPARK_MARKUP = `<svg class="spark-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 1C13.8 8.2 15.8 10.2 23 12C15.8 13.8 13.8 15.8 12 23C10.2 15.8 8.2 13.8 1 12C8.2 10.2 10.2 8.2 12 1Z" fill="currentColor"/></svg>`;

const journeyStarMarkup = (label: string) => {
  const gradientId = `journey-star-pink-${encodeURIComponent(label)}`;

  return `<svg class="spark-mark" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="${gradientId}" gradientUnits="userSpaceOnUse" cx="22" cy="78" r="76"><stop class="spark-pink-accent" offset="0%" stop-color="#e7a9b6"/><stop class="spark-pink-soft" offset="24%" stop-color="#f1c5ce"/><stop offset="43%" stop-color="#f9e3e5"/><stop offset="64%" stop-color="#fff8ef"/><stop offset="84%" stop-color="#f7e8c3"/><stop offset="100%" stop-color="#ebcf8e"/></radialGradient></defs><path d="M47.78 8.67Q50.00 6.00 52.22 8.67L64.83 23.87Q67.05 26.54 70.27 27.82L88.62 35.12Q91.85 36.40 89.99 39.34L79.44 56.03Q77.58 58.96 77.36 62.42L76.09 82.13Q75.86 85.60 72.50 84.74L53.36 79.86Q50.00 79.00 46.64 79.86L27.50 84.74Q24.14 85.60 23.91 82.13L22.64 62.42Q22.42 58.96 20.56 56.03L10.01 39.34Q8.15 36.40 11.38 35.12L29.73 27.82Q32.95 26.54 35.17 23.87Z" style="fill:url(#${gradientId})" stroke="#b68b47" stroke-width="1.3" stroke-linejoin="round"/><text x="50" y="54" text-anchor="middle" dominant-baseline="middle" fill="#694819" font-size="21" font-weight="500" font-family="system-ui, sans-serif">${label}</text></svg>`;
};

const HOME_MARKUP = `
<header class="nav">
<div class="shell nav-inner">
<a class="brand" href="#top">
<span class="brand-logo-wrap"><img alt="星火财商 Logo" class="brand-logo" src="/images/xhcs-logo-gold.png"/></span>
<span class="brand-text">星火财商学院<small>SPARK WEALTH ACADEMY</small></span>
</a>
<nav aria-label="主导航" class="menu">
<a class="menu-home-active" href="/">首页</a><a href="/about">关于我们</a><a href="/courses">课程体系</a><a href="/academy">财商学院</a>
<a href="/contact">联系我们</a><a class="nav-cta" href="/register">课程报名</a>
</nav>
<button type="button" aria-expanded="false" aria-controls="academy-mobile-menu" aria-label="打开菜单" class="mobile-toggle">☰</button>
</div>
<div id="academy-mobile-menu" class="academy-mobile-menu" aria-label="移动端导航">
<a href="/">首页</a><a href="/about">关于我们</a><a href="/courses">课程体系</a><a href="/academy">财商学院</a>
<a href="/contact">联系我们</a><a class="academy-mobile-cta" href="/register">课程报名</a>
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
<div class="visual reveal logo-journey">
<div aria-hidden="true" class="path-glow"></div>
<div class="spark-origin" aria-hidden="true">
${LOGO_JOURNEY_ART}
<svg class="spark-motion-guide" viewBox="0 0 520 465" aria-hidden="true"><path class="spark-full-route" d="M445 440C383 437 168 381 116 351C75 329 115 310 178 312C228 303 308 281 342 261C396 244 411 225 382 207C350 178 261 182 231 160C207 144 214 100 230 45"/><path class="spark-entry-route" d="M445 440C383 437 168 381 116 351C75 329 115 310 178 312"/><path class="spark-rear-route" d="M178 312C228 303 308 281 342 261"/></svg>
</div>
<div class="journey-message">
<small>点燃财富 · 照亮生活</small>
<h3>从认知，到长期陪伴</h3>
<p>让知识进入家庭，也让每一次选择更从容。</p>
</div>
<div class="journey-orbit journey-node journey-node-1">
<button type="button" class="journey-star" aria-expanded="false" aria-label="查看医疗阶段" data-journey="医疗">
${journeyStarMarkup("医疗")}<em>医疗</em><span class="journey-card"><b>医疗</b><small>连接医疗资源，让健康责任进入家庭规划。</small></span>
</button>
</div>
<div class="journey-orbit journey-node journey-node-2">
<button type="button" class="journey-star" aria-expanded="false" aria-label="查看保障阶段" data-journey="保障">
${journeyStarMarkup("保障")}<em>保障</em><span class="journey-card"><b>保障</b><small>识别家庭风险，建立清晰、稳固的安全底盘。</small></span>
</button>
</div>
<div class="journey-orbit journey-node journey-node-3">
<button type="button" class="journey-star" aria-expanded="false" aria-label="查看成长阶段" data-journey="成长">
${journeyStarMarkup("成长")}<em>成长</em><span class="journey-card"><b>成长</b><small>通过课程与实践，让判断力持续成长。</small></span>
</button>
</div>
<div class="journey-orbit journey-node journey-node-4">
<button type="button" class="journey-star" aria-expanded="false" aria-label="查看陪伴阶段" data-journey="陪伴">
${journeyStarMarkup("陪伴")}<em>陪伴</em><span class="journey-card"><b>陪伴</b><small>跟随家庭变化，持续检视、复盘与调整。</small></span>
</button>
</div>
<div class="journey-orbit journey-node journey-node-5">
<button type="button" class="journey-star" aria-expanded="false" aria-label="查看认知阶段" data-journey="认知">
${journeyStarMarkup("认知")}<em>认知</em><span class="journey-card"><b>认知</b><small>建立基础财商判断，理解金钱、目标与家庭责任。</small></span>
</button>
</div>
</div>
</div>
</section>
<section class="section manifesto-section dark">
<div class="shell">
<div class="manifesto-head reveal">
<div><span class="eyebrow">Education before product</span><h2>创造<span class="gold">富而喜悦</span>的人生</h2></div>
<p>产品会变化，但判断力会长期属于你。我们先帮助家庭看清目标、责任、风险与现金流，再选择真正合适的工具。</p>
</div>
<div class="manifesto-grid reveal">
<article><b>富</b><div><h3>有能力</h3><p>看懂现金流、家庭目标与财富结构，建立自己的判断。</p></div></article>
<article><b>喜</b><div><h3>有底气</h3><p>提前看见风险与责任，让家庭始终保有选择的空间。</p></div></article>
<article><b>悦</b><div><h3>有陪伴</h3><p>在持续学习和检视中，让财富服务于生活与成长。</p></div></article>
</div>
<div class="manifesto-quote reveal">先拥有判断力，再拥有选择力。</div>
</div>
</section>
<section class="section path-section" id="service">
<div class="shell">
<div class="section-head reveal">
<div><span class="eyebrow">Wealth Life Journey</span><h2>围绕家庭财富生命周期，<br/>让规划进入实际行动</h2></div>
<p>从创富、保富到传富，不同阶段对应不同责任。我们用四项连续服务，把家庭目标转化为能够执行和检视的行动。</p>
</div>
<div class="service-stage-line reveal"><span>创富 · 防风险</span><i></i><span>保富 · 稳增长</span><i></i><span>传富 · 做保全</span></div>
<div class="growth-path reveal">
<article class="growth-step"><div class="growth-no">01</div><h3>财务诊断</h3><p>梳理家庭目标、收支、资产、负债与主要风险。</p></article>
<article class="growth-step"><div class="growth-no">02</div><h3>方案定制</h3><p>结合家庭阶段与责任边界，形成清晰的规划思路。</p></article>
<article class="growth-step"><div class="growth-no">03</div><h3>落地执行</h3><p>把规划转化为优先级明确、能够持续推进的行动。</p></article>
<article class="growth-step"><div class="growth-no">04</div><h3>财商授课</h3><p>通过成人、少儿课程和沙盘体验提升判断能力。</p></article>
</div>
</div>
</section>
<section class="section courses-section">
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
<section class="section trust-cta-section" id="method">
<div class="shell trust-cta-grid">
<div class="trust-cta-copy reveal">
<span class="eyebrow">Our Standard</span>
<h2>让每一个家庭，<br/>看懂后再选择</h2>
<p>不靠焦虑推动决策，用清楚的方法、边界与持续检视建立长期信任。</p>
<div class="actions"><a class="btn btn-primary" href="/register">提交课程咨询 →</a><a class="btn btn-ghost" href="/about">了解我们</a></div>
</div>
<div class="standard-list reveal">
<article><b aria-hidden="true">${SPARK_MARKUP}</b><div><strong>认知先于销售</strong><p>先理解家庭真正需要什么，再讨论工具。</p></div></article>
<article><b aria-hidden="true">${SPARK_MARKUP}</b><div><strong>逻辑与边界清楚</strong><p>重要方案讲清依据、风险和替代选择。</p></div></article>
<article><b aria-hidden="true">${SPARK_MARKUP}</b><div><strong>家庭目标协同</strong><p>财商、保障与健康责任放在同一套规划里。</p></div></article>
<article><b aria-hidden="true">${SPARK_MARKUP}</b><div><strong>持续陪伴检视</strong><p>跟随家庭阶段变化，及时复盘和调整。</p></div></article>
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

    const visual = root.querySelector<HTMLElement>(".visual");
    const stars = Array.from(root.querySelectorAll<HTMLButtonElement>(".journey-star"));
    // Visual cards and interactive buttons use separate layers so orbiting cards
    // pass behind the flame while their descriptions stay above the artwork.
    const nodes = stars.map((star, i) => {
      const spark = document.createElement("span");
      spark.className = "journey-spark";
      spark.setAttribute("aria-hidden", "true");
      const icon = star.querySelector("svg");
      if (icon) spark.appendChild(icon.cloneNode(true));
      visual?.appendChild(spark);
      return { star, spark, orbit: star.closest<HTMLElement>(".journey-orbit"), progress: [.05, .24, .43, .62, .81][i], speed: [.034, .035, .0335, .0345, .0355][i] };
    });
    const syncFlame = () => visual?.classList.toggle("flame-lit", nodes.some(({ orbit }) => orbit?.classList.contains("active")));
    const closeJourneyCards = (except?: HTMLButtonElement) => {
      stars.forEach((star) => {
        if (star === except) return;
        star.closest(".journey-orbit")?.classList.remove("active");
        star.setAttribute("aria-expanded", "false");
      });
      syncFlame();
    };
    const placeJourneyCard = (star: HTMLButtonElement) => {
      const orbit = star.closest<HTMLElement>(".journey-orbit");
      const visualBox = visual?.getBoundingClientRect();
      const starBox = star.getBoundingClientRect();
      if (visualBox) {
        const isLeft = starBox.left + starBox.width / 2 < visualBox.left + visualBox.width / 2;
        const isTop = starBox.top + starBox.height / 2 < visualBox.top + visualBox.height / 2;
        star.dataset.cardSide = `${isTop ? "bottom" : "top"}-${isLeft ? "right" : "left"}`;
        const card = star.querySelector<HTMLElement>(".journey-card");
        if (card) {
          const cardWidth = card.offsetWidth;
          const desired = isLeft ? starBox.right - visualBox.left : starBox.left - visualBox.left - cardWidth;
          const left = Math.max(8, Math.min(desired, visualBox.width - cardWidth - 8));
          card.style.left = `${left + visualBox.left - starBox.left}px`;
          card.style.right = "auto";
          card.style.top = isTop ? `${starBox.height + 10}px` : "auto";
          card.style.bottom = isTop ? "auto" : `${starBox.height + 10}px`;
        }
      }
      return orbit;
    };
    const onStarEnter = (event: Event) => {
      if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
      const star = event.currentTarget as HTMLButtonElement;
      closeJourneyCards(star);
      placeJourneyCard(star)?.classList.add("active");
      star.setAttribute("aria-expanded", "true");
      syncFlame();
    };
    const onStarLeave = (event: Event) => {
      if (window.matchMedia("(hover: none)").matches) return;
      const star = event.currentTarget as HTMLButtonElement;
      star.closest(".journey-orbit")?.classList.remove("active");
      star.setAttribute("aria-expanded", "false");
      syncFlame();
    };
    const onStarClick = (event: Event) => {
      event.stopPropagation();
      const isTouchInteraction = window.matchMedia("(hover: none), (pointer: coarse)").matches;
      const isKeyboardInteraction = event instanceof MouseEvent && event.detail === 0;
      if (!isTouchInteraction && !isKeyboardInteraction) return;
      const star = event.currentTarget as HTMLButtonElement;
      const orbit = placeJourneyCard(star);
      const willOpen = !orbit?.classList.contains("active");
      closeJourneyCards(star);
      if (!orbit || !willOpen) {
        orbit?.classList.remove("active");
        star.setAttribute("aria-expanded", "false");
        syncFlame();
        return;
      }
      orbit.classList.add("active");
      star.setAttribute("aria-expanded", "true");
      syncFlame();
    };
    const onOutsideClick = () => closeJourneyCards();
    stars.forEach((star) => {
      star.addEventListener("mouseenter", onStarEnter);
      star.addEventListener("mouseleave", onStarLeave);
      star.addEventListener("focus", onStarEnter);
      star.addEventListener("blur", onStarLeave);
      star.addEventListener("click", onStarClick);
    });
    document.addEventListener("click", onOutsideClick);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const path = visual?.querySelector<SVGPathElement>(".spark-full-route");
    const pathLength = path?.getTotalLength() ?? 0;
    const entryLength = visual?.querySelector<SVGPathElement>(".spark-entry-route")?.getTotalLength() ?? 0;
    const rearLength = visual?.querySelector<SVGPathElement>(".spark-rear-route")?.getTotalLength() ?? 0;
    let frame = 0;
    let previous = 0;
    const animate = (time: number) => {
      const dt = previous ? Math.min((time - previous) / 1000, .05) : 0;
      previous = time;
      const logo = visual?.querySelector<HTMLElement>(".spark-origin");
      if (visual && logo) {
        const width = logo.offsetWidth;
        nodes.forEach((node) => {
          if (!motion.matches && !node.orbit?.classList.contains("active")) node.progress = (node.progress + dt * node.speed) % 1;
          if (node.orbit && path) {
            const distance = node.progress * pathLength;
            const point = path.getPointAtLength(distance);
            const edge = Math.max(0, Math.min(1, node.progress / .035, (1 - node.progress) / .045));
            const opacity = node.orbit.classList.contains("active") ? 1 : edge * edge * (3 - 2 * edge);
            const behindFlame = distance >= entryLength && distance <= entryLength + rearLength;
            node.orbit.style.left = `${logo.offsetLeft + point.x * width / 520}px`;
            node.orbit.style.top = `${logo.offsetTop + point.y * width / 520}px`;
            node.orbit.style.opacity = "1";
            node.spark.style.left = node.orbit.style.left;
            node.spark.style.top = node.orbit.style.top;
            node.spark.style.opacity = String(opacity);
            node.spark.style.zIndex = behindFlame ? "2" : "5";
            node.spark.classList.toggle("active", node.orbit.classList.contains("active"));
            node.star.style.pointerEvents = opacity < .05 ? "none" : "auto";
            node.star.tabIndex = opacity < .05 ? -1 : 0;
            if (node.orbit.classList.contains("active")) placeJourneyCard(node.star);
          }
        });
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      nodes.forEach(({ spark }) => spark.remove());
      toggle?.removeEventListener("click", onToggle);
      menu?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", onMenuClick));
      stars.forEach((star) => {
        star.removeEventListener("mouseenter", onStarEnter);
        star.removeEventListener("mouseleave", onStarLeave);
        star.removeEventListener("focus", onStarEnter);
        star.removeEventListener("blur", onStarLeave);
        star.removeEventListener("click", onStarClick);
      });
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);

  return <div className="academy-home" dangerouslySetInnerHTML={{ __html: HOME_MARKUP }} />;
}

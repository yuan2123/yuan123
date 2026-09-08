export function WealthVisual() {
  return (
    <div className="wealth-visual" aria-label="家庭财富规划插画">
      <div className="orbit orbit-one"><span>¥</span></div>
      <div className="orbit orbit-two"><span>✦</span></div>
      <div className="visual-card main-visual-card">
        <div className="visual-topline"><span>家庭财富全景</span><b>稳健 · 长期</b></div>
        <div className="wealth-arch">
          <div className="arch-line line-1" /><div className="arch-line line-2" /><div className="arch-line line-3" />
          <div className="family family-a"><i /><strong /></div>
          <div className="family family-b"><i /><strong /></div>
          <div className="family family-c"><i /><strong /></div>
        </div>
        <div className="coin-stage">
          <div className="coin-stack stack-1"><span/><span/><span/></div>
          <div className="coin-stack stack-2"><span/><span/><span/><span/><span/></div>
          <div className="coin-stack stack-3"><span/><span/><span/><span/><span/><span/><span/></div>
          <div className="gold-bar"><b>SPARK</b></div>
        </div>
        <div className="visual-labels"><span>保障底座</span><span>现金流</span><span>长期增长</span><span>有序传承</span></div>
      </div>
      <div className="mini-card mini-card-one"><span className="mini-coin">¥</span><div><b>现金流安全垫</b><small>先稳住，再增长</small></div></div>
      <div className="mini-card mini-card-two"><span className="mini-spark">✦</span><div><b>财富成长路径</b><small>认知 → 规划 → 行动</small></div></div>
    </div>
  );
}

import type { ArticleBlock } from "@/data/academy-articles";

// Editorial text remains escaped; only HTTPS references become links.
function InlineText({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https:\/\/[^)]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    return link ? <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a> : part;
  });
}
export function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
  return blocks.map((block, index) => {
    if (block.type === "heading") return <h2 key={index}><InlineText text={block.text} /></h2>;
    if (block.type === "table") return (
      <div key={index} className="article-table-scroll" role="region" aria-label="文章资料表，可横向滚动" tabIndex={0}>
        <table><thead><tr>{block.rows[0].map((cell, col) => <th key={col} scope="col"><InlineText text={cell} /></th>)}</tr></thead>
          <tbody>{block.rows.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, col) => <td key={col}><InlineText text={cell} /></td>)}</tr>)}</tbody>
        </table>
      </div>
    );
    return <p key={index} className={index === 0 ? "article-lead" : undefined}><InlineText text={block.text} /></p>;
  });
}

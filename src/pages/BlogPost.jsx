import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center">
        <div className="font-mono text-center">
          <p className="text-[#4a5568] text-sm mb-4">{'// 404'}</p>
          <p className="text-[#e2e8f0] text-xl mb-6">post not found</p>
          <Link to="/blog" className="text-[#00ff88] text-sm no-underline hover:underline">
            {'← back to blog'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        {/* Back link */}
        <Link
          to="/blog"
          className="font-mono text-sm text-[#64748b] no-underline hover:text-[#00ff88] transition-colors duration-150 inline-block mb-10"
        >
          {'← blog'}
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#4a5568]">{post.date}</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-[#00ff88] border border-[#00ff8833] px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-mono text-2xl text-[#e2e8f0] mb-10">{post.title}</h1>

        {/* Divider */}
        <div className="border-t border-[#1e293b] mb-10" />

        {/* Content */}
        <div className="flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-[#94a3b8] text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

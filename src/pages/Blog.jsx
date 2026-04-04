import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

export default function Blog() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[#4a5568] text-sm mb-3">{'// blog'}</p>
          <h1 className="font-mono text-2xl text-[#e2e8f0] mb-3">
            <span className="text-[#00ff88]">const</span> posts
          </h1>
          <p className="text-[#64748b] text-sm">
            Notes on Linux, cloud support, and things worth writing down.
          </p>
        </div>

        {/* Post list */}
        <ul className="list-none m-0 p-0 flex flex-col gap-6">
          {sorted.map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.id}`}
                className="block border border-[#1e293b] p-6 no-underline
                  hover:border-[#00ff8844] transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3 mb-2">
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
                <h2 className="font-mono text-lg text-[#e2e8f0] mb-2 group-hover:text-[#00ff88] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-[#64748b] text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-block font-mono text-xs text-[#00ff88] mt-4">
                  {'./read-more →'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

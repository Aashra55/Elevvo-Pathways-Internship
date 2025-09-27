export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition blog-card">
      <img loading="lazy" src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 text">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{post.description}</p>
        <p className="text-xs text-gray-400">{post.date}</p>
      </div>
    </div>
  );
}

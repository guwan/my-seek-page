import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-32 text-center">
      <div className="text-8xl font-extrabold gradient-text mb-6">404</div>
      <h1 className="text-2xl font-bold mb-4">页面不存在</h1>
      <p className="text-slate-500 mb-8">你访问的页面可能已被移动或删除。</p>
      <Link to="/" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold inline-block">
        返回首页
      </Link>
    </div>
  )
}
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[80dvh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-4">404</p>
      <h1 className="font-serif text-white text-3xl md:text-5xl mb-4">Page not found.</h1>
      <p className="text-neutral-500 text-sm mb-8">This page doesn't exist or was moved.</p>
      <Link
        to="/"
        className="border border-white/20 text-white py-3 px-8 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
      >
        Back Home
      </Link>
    </div>
  )
}

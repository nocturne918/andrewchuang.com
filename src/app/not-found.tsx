import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex">
      <div className="space-y-6 text center">
        <p className="text-8xl font-bold">404</p>
        <Link
          href="/"
          className="inline-block text-gray-400 hover:text-primary transition-colors"
        >
          return home
        </Link>
      </div>
    </div>
  );
}
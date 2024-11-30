import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Explore Psyche</h1>
            <p className="mt-2">Realize your potential, find where you excel</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/scores" className="hover:underline">
                  Your Results
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

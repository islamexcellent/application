import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-fluorescentGreen p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">Islam Excellent</h1>
        <nav>
          <Link href="/" legacyBehavior><a className="text-black px-2 hover:underline">Accueil</a></Link>
          <Link href="/about" legacyBehavior><a className="text-black px-2 hover:underline">À propos</a></Link>
        </nav>
      </div>
    </header>
  );
}

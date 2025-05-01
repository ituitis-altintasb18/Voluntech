import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          {/* Using cropped logo and adjusting size again for better visibility */}
          <Image src="/images/logotek_cropped.png" alt="VolunTech Logo" width={200} height={60} className="h-14 w-auto" /> 
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
          <Link href="/volunteer" className="text-gray-700 hover:text-blue-600 transition duration-300">Become a Volunteer</Link>
          <Link href="/supporter" className="text-gray-700 hover:text-blue-600 transition duration-300">Become a Supporter</Link>
          <Link href="/donate" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Donate</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import Link from 'next/link';

// import { signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { status } = useSession();

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          {status === 'authenticated' ? (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign out
              </button>
              <Link href="/user-area">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  User area
                </a>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/sign-in">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a>
              </Link>
              <Link href="/sign-up">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

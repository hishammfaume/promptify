"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  //sign in using google and next auth
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-26 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo-text"></p>
      </Link>

      {/**desktop navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 mg:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                width={37}
                height={37}
                src="/assets/images/logo.svg"
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                key={provider.name}                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >Sign In</button>
              ))}
          </>
        )}
      </div>

        {/**mobile navigation */}
    <div className="sm:hidden flex relative">
      {isUserLoggedIn ? 
      <div className="flex">
        <Image
                width={37}
                height={37}
                src="/assets/images/logo.svg"
                alt="profile"
                className="rounded-full"
                onClick={()=> setToggleDropdown((prev)=> !prev)}
              />
              {toggleDropdown && <div className="absolute top-12 right-0 bg-white p-2 rounded-lg shadow-md"></div>}
      </div> :<>
       {providers &&
              Object.values(providers).map((provider) => (
                <button
                key={provider.name}                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >Sign In</button>
              ))}
      </>}
    </div>
    </nav>
  );
};

export default Nav;

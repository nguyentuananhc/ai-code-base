"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import { VscSignOut, VscCreditCard } from "react-icons/vsc";

import Notice from "@components/Notice";

const Nav = () => {
  const { data: session } = useSession();

  console.log(session);

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-20 flex flex-col w-full mx-auto bg-white">
        {!session?.user && <Notice />}
        <div className="w-full flex-between h-[70px] px-6">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />

            <p className="logo_text">Cover Sing</p>
          </Link>

          <div className="flex gap-5 font-bold">
            <Link href="/">Home</Link>
            <Link href="/models">AI Model</Link>
            {/* <Link href="/">Trending</Link> */}
          </div>

          {session?.user ? (
            <div className="flex gap-5">
              <Menu>
                <MenuButton aria-label="Options" variant="outline">
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                    <Image
                      src={session?.user.image}
                      width={37}
                      height={37}
                      className="rounded-full"
                      alt="profile"
                    />
                  </span>
                </MenuButton>
                <MenuList className="p-1">
                  <MenuItem className="flex flex-col items-start">
                    Sign in as :
                    <p className="ml-2 text-orange-500">
                      {session?.user?.email}
                    </p>
                  </MenuItem>
                  <MenuItem icon={<VscCreditCard />}>
                    <b>{session?.user?.credit}</b>
                  </MenuItem>
                  <MenuItem onClick={signOut} icon={<VscSignOut />}>
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          ) : (
            <div className="flex gap-5">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                  >
                    Sign in
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        {/* <div className="hidden sm:flex">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div> */}

        {/* Mobile Navigation */}
        {/* <div className="relative flex sm:hidden">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="w-full mt-5 black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div> */}
      </nav>
    </>
  );
};

export default Nav;

"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { TiFolderOpen } from "react-icons/ti";
import { TiTree} from "react-icons/ti";


const Nav = () => {

  const isUserLoggedIn = true

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <TiFolderOpen/>
        <p className="logo_text">Prompt Library</p>
      </Link>

      {/* Desktop nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn &&
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt"
          className='black_btn'>
            Create new post
          </Link>

          <button type="button" onClick={signOut}
          className='outline_btn'>Sign out</button>
          <Link href="/profile"
          className='outline_btn'>
            <TiTree />
          </Link>
        </div> }
      </div>
    </nav>
  )
}

export default Nav

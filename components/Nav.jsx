"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { TiFolderOpen } from "react-icons/ti";
import { TiTree} from "react-icons/ti";


const Nav = () => {

  const isUserLoggedIn = true
  const [ providers, setProviders ] = useState(null)
  const [ toggleMenu, setToggleMenu ] = useState(false)

  // useEffect(() => {
  //   const setProviders = async () => {
  //     const response = await getProviders()
  //     setProviders(response)
  //   }
  //   setProviders()
  //   // The getProviders() method returns the list of providers currently configured for sign in.
  // }, [])

  const handleToggleMenu = () => {
    console.log("Changing state of toggleMenu")
    setToggleMenu((prevState) => {
      return !prevState
    })
  }

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <TiFolderOpen/>
        <p className="logo_text">Quotes Library</p>
      </Link>

      {/* Desktop nav */}
      <div className="hidden sm:flex">
        {isUserLoggedIn ?
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-quote" className='black_btn'>
            Add a quote
          </Link>

          <button type="button" onClick={signOut}
          className='outline_btn'>Sign out</button>
          <Link href="/profile" className='outline_btn'>
            <TiTree />
          </Link>
        </div>
        :
        <div>
          {/* { providers &&
          Object.values(providers).map((provider) => {
            <button type="button" key={provider.name}
            onClick={() => signIn(provider.id)} className="black_btn">
              Login
            </button>
          }) } */}
        </div>}
      </div>

       {/* Phone devices */}
       <div className="sm:hidden flex relative">
        {isUserLoggedIn
        ?
        <div className="flex">
          <div onClick={handleToggleMenu}>
            <TiTree />
          </div>
          { toggleMenu &&
            <div className="dropdown">
              <Link href="/profile" className='dropdown_link'
              onClick={() => setToggleMenu(false)}>
                My profile
              </Link>
              <Link href="/create-quote" className='dropdown_link'
              onClick={() => setToggleMenu(false)}>
                Add a quote
              </Link>
              <button type="button" onClick={() => {
                setToggleMenu(false)
                signOut();
                }}
                className='mt-5 w-full black_btn'>Sign out</button>
            </div>}
        </div>
        :
        <div>
          {/* { providers &&
          Object.values(providers).map((provider) => {
            <button type="button" key={provider.name}
            onClick={() => signIn(provider.id)} className="black_btn">
              Login
            </button>
          }) } */}
        </div>
        }
       </div>


    </nav>
  )
}

export default Nav

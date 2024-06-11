import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100   fixed top-0 left-0 w-full shadow-sm z-50 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {siteConfig.navItems.map((item) => (
       <li key={item.label}>
         <Link className="btn btn-ghost  text-base" href={item.href}>
         <div className="tooltip  tooltip-bottom" data-tip={item.tooltip}>
           {item.label}
</div>
         </Link>
       </li>
     ))}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl" href='/'>SnapNomad</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
     {siteConfig.navItems.map((item) => (
       <li key={item.label}>
         <Link className="btn btn-ghost  text-base" href={item.href}>
         <div className="tooltip  tooltip-bottom" data-tip={item.tooltip}>
           {item.label}
</div>
         </Link>
       </li>
     ))}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Book now</a>
  </div>
</nav>
  )
}

export default Navbar
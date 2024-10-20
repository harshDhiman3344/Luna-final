import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="flex justify-center">
        <nav className="inline-flex rounded-full backdrop-blur-sm bg-white/10">
          {[
            ["Home", "#mainpage"],
            ["Community", "#community"],
            ["Blogs", "#blogs"],
            ["News", "#news"],
            ["Learning", "#learning"],
            ["About", "#about"]
          ].map(([title, url], index) => (
            <a
              key={index}
              href={url}
              className="px-6 py-2 text-sm font-medium text-slate-100 hover:bg-white/20 transition-colors duration-200 first:rounded-l-full last:rounded-r-full"
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar;

/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-slate-400">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          bayE
          {/* TODO: Better with image here */}
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="/">Link 1</a>
                </li>
                <li>
                  <a href="/">Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

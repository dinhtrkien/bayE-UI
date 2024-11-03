/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React from 'react';
const Header = () => {
  return (
    <div className="navbar bg-slate-400">
      <div className="flex-1">
        <a className="text-xl btn btn-ghost" href="/">
          bayE
          {/* TODO: Better with image here */}
        </a>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 rounded-t-none bg-base-100">
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

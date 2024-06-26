import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import styles from './Header.modules.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return <header className={cx('wrapper')}>
    <div className={cx('inner')}>
      <img src={images.logo} alt="tiktok"></img>

      <Tippy
        interactive
        visible={searchResult.length > 0}
        render={attrs => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>

            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              <AccountItem></AccountItem>
              <AccountItem></AccountItem>
              <AccountItem></AccountItem>
            </PopperWrapper>
          </div>


        )}
      >
        <div className={cx('search')}>
          <input placeholder='Search account or videos' spellCheck="false"></input>
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>


        </div>
      </Tippy>
      <div className={cx('actions')}></div>
    </div>
  </header>;
}

export default Header;
import classNames from 'classnames/bind';
import styles from './AccountItem.modules.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1093423afcbce7e6434d4b072f557eb3~c5_300x300.webp?lk3s=a5d48078&x-expires=1712242800&x-signature=DD7BswzgdRdwVTXecVZDBAFyZZU%3D"
        alt="xxx"
        className={cx('avatar')}
      />

      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>xxxx</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <span className={cx('username')}>xxx2</span>
      </div>
    </div>
  );
}

export default AccountItem;
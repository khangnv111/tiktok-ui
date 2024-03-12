import Header from '../DefaultLayout/Header';
function HeaderLayout({ children }) {
  return <div>
    <Header></Header>
    <div className='container'>
      <div className='content'>
        {children}
      </div>
    </div>
  </div>;
}

export default HeaderLayout;
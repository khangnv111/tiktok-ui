
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers';
import { DefaultLayout } from './components/Layouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            if (route.layout === null) {
              Layout = Fragment
            }
            else if (route.layout) {
              Layout = route.layout
            }

            const Page = route.component

            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            }></Route>;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

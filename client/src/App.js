
import './App.css';
// import TopHeader from './TopHeader';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes/PageRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App" > 
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        bodyClassName='toastBody'
        />
      <Navigation />
      <div id="outer-container">
        <main id="page-wrap">
          <div className='overflow-hidden '>
            {/* <TopHeader /> */}
            <Header />
            <PageRoutes />

          
            <Footer />
          </div> 
        </main>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

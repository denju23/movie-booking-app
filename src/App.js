import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import MovieDetailPage from "./Components/MovieDetailPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieSeatLayout from "./Components/MovieSeatLayout";
import MovieTheaterList from "./Components/MovieTheaterList";
import BookingSummary from "./Components/BookingSummary";
import OrderSummary from "./Components/OrderSummary";
import LoginDetail from "./Components/LoginDetail";
import DummyPayment from "./Components/DummyPayment";
import OrderSummaryDetail from "./Components/OrderSummaryDetail";
import ConfirmTicket from "./Components/ConfirmTicket";
// import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/moviedetailpage/:id' element={<MovieDetailPage />} />
          <Route path='/movietheaterlist' element={<MovieTheaterList />} />
          <Route path='/movieseatlayout' element={<MovieSeatLayout />} />
          <Route path='/BookingSummary' element={<BookingSummary />} />
          <Route path='/ordersummary' element={<OrderSummary />} />
          <Route path='/logindetail' element={<LoginDetail />} />
          <Route path='/dummypayment' element={<DummyPayment />} />
          <Route path='/ordersummarydetail' element={<OrderSummaryDetail />} />
          <Route path='/confirmticket' element={<ConfirmTicket />} />
        </Routes>
      </Router>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;

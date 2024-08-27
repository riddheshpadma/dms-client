import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Dashboard, Event, Alumni, Attendence, Applications, Resources, Feedback, Timetables, Login} from '../pages';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Login />} />
          
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
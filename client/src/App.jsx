import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppLayout } from "./layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Loader } from "./UI/Loader";
import { Home } from "./pages/Home";
import { CoursePage } from "./pages/CoursePage";
import { ContestPage } from "./pages/ContestPage";
import { AboutPage } from "./pages/AboutPage";
import { useData } from "./context/data";
import { CourseLayout } from "./layouts/CourseLayout";
import { WatchLaterPage } from "./pages/WatchLaterPage";
import { HistoryPage } from "./pages/HistoryPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminUsers } from "./pages/admin/Admin-Users";
import { AdminContacts } from "./pages/admin/Admin-Contacts";
import { AdminUserUpdate } from "./pages/admin/Admin-User-Update";
import { AdminCourses } from "./pages/admin/Admin-Courses";
import { Contact } from "./pages/Contact";

const App = () => {
  const { loading } = useData();

  return (
    <>
      {
        loading ? <Loader /> : (
          <Router>
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/courses" element={<CourseLayout />}>
                  <Route path="" element={<CoursePage />} />
                  <Route path="history" element={<HistoryPage />} />
                  <Route path="watch-later" element={<WatchLaterPage />} />
                  <Route path="upload" element={<WatchLaterPage />} />
                </Route>
                <Route path="/contest" element={<ContestPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>

              {/* Admin */}
              <Route path="/admin" element={<AdminLayout />}>
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="users/:id/edit" element={<AdminUserUpdate />} />
                  <Route path="contacts" element={<AdminContacts />} />
                  <Route path="courses" element={<AdminCourses />} />
                  <Route path="course/upload" element={<AdminCourses />} />
                </Route>
            </Routes>
          </Router>
        )
      }
    </>
  )
}

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTop from "./components/common/ScrollTop.jsx";

import Navbar from "./components/common/Navbar.jsx";
import InitialLoader from './components/loader/InitialLoader'
import Home from "./pages/Home";
import SearchResults from './components/search/SearchResults';
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer.jsx";
import "./App.css"

// Career Routes
import InternshipsAndJobs from "./pages/InternshipsAndJobs.jsx";
import Internships from "./pages/Internships.jsx";
import InternshipsDetail from "./pages/InternshipsDetail.jsx";
import Courses from "./components/internshipJob/Courses.jsx";
// import Intern from "./pages/Internships.jsx";
// import InternshipJobs from "./pages/Internships";
// import Internship from "./pages/InternshipsAndJobs.jsx";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/services/JobDetail.jsx";
import JobsApplcation from "./pages/services/JobsApplcation.jsx";
import InternshipsApplcation from "./pages/services/InternshipsApplcation.jsx";


// Application Routes



// Services Routes
import CareerCounselling from "./pages/services/CareerCounselling";
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEO from "./pages/services/SEO";
import GraphicDesign from "./pages/services/GraphicDesign";
import ContentWriting from "./pages/services/ContentWriting";
import PartnerAndCollab from "./pages/services/PartnerAndCollab.jsx";

//collage career Routes
// import Counselling from "./pages/services/Counselling";
import CareerGuidance from "./pages/services/CareerGuidance.jsx";
// import CareerGuidanceDetails from "./pages/services/CareerGuidanceDetails.jsx";
import ScholarshipDetails from "./pages/services/ScholarshipDetails";
import AdmissionProcess from "./pages/services/AdmissionProcess";
import PlacementStats from "./components/education/PlacementStats.jsx";
import CourseComparison from "./pages/services/CourseComparison";
// import CampusLife from "./pages/services/CampusLife";
import CareerRoadmap from "./pages/services/CareerRoadmap";

// tech service
import IT_Tech_Based from "./pages/services/IT_Tech_Based.jsx";
import Aca_Scholarship_program from "./pages/services/Aca_Schorarship_program.jsx";
import CareerGuidanceProgram from "./pages/services/CareerGuidanceProgram.jsx";



// Add these imports
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Profile from './pages/auth/Profile';
import UpdateProfile from './pages/auth/UpdateProfile';
import WhatsAppButton from "./components/common/WhatsAppButton";
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'


//About Routes
import AboutCompany from "./pages/about/AboutCompany.jsx";
import OurStory from "./pages/about/OurStory.jsx";
import OurTeam from "./pages/about/OurTeam.jsx";
import Member from "./components/about1/Member.jsx";
import NotFound from './pages/NotFound';
import Counselling from "./pages/services/Counselling.jsx";
import Our_Blog from './pages/about/Our_Blog.jsx';
import BlogFullArticle from './pages/about/BlogFullArticle.jsx';
import OurPartner from "./pages/about/OurPartner.jsx";
import StudentSuccessStories from "./pages/about/StudentSuccessStories.jsx";

// Education Routes
import CollegeList from "./components/education/CollegeList.jsx";
import CollegeDetails from "./components/education/CollegeDetails.jsx";
import CourseDegrees from "./components/education/CourseDegrees.jsx";
import StudyAbroad from "./components/education/StudyAbroad.jsx";
import EntranceExams from "./components/education/EntranceExams.jsx";
import ScholarshipsFinancialAid from "./components/education/scholarshipsFinancialAid.jsx";

// Accommodation Routes
import OnCampusHousing from "./components/accommodation/OnCampusHousing.jsx";
import OffCampusHousing from "./components/accommodation/OffCampusHousing.jsx";
import StudentHousingCommunities from "./components/accommodation/StudentHousingCommunities.jsx";
import BudgetingTips from "./components/accommodation/BudgetingTips.jsx";
import SafetyTips from "./components/accommodation/SafetyTips.jsx";
import PGHostelDetails from "./components/accommodation/PGHostelDetails.jsx";
import HostelRules from "./components/accommodation/HostelRules.jsx";
import CampusLife from "./components/accommodation/CampusLife.jsx";
import ProgressTracker from './pages/ProgressTracker';


// other routes
import VirtualCampus from './components/3d/VirtualCampus';
import AICareerRecommender from './components/career/AICareerRecommender';
import LiveSupport from './components/chat/LiveSupport';
import Achievements from './components/gamification/Achievements';
import StudentPortfolio from './components/portfolio/StudentPortfolio';
import VirtualCareerFair from './components/events/VirtualCareerFair';
import CourseRoadmap from './components/learning/CourseRoadmap';
import StudentDashboard from './components/dashboard/StudentDashboard';
import ProgressAnalytics from './components/analytics/ProgressAnalytics';


// import CourseComparison from "./pages/services/CourseComparison.jsx";
import CourseComparisonAdmin from "./pages/admin/CourseComparisonAdmin.jsx";
import CourseAnalytics from "./pages/admin/CourseAnalytics.jsx";
import CourseManagement from "./pages/admin/CourseManagement.jsx";
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 10 });
  }, [location.pathname]);


  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      once: true,
      duration: 1500,  // Set duration to 0 for instant animation
      easing: "ease-in-out cubic-bezier(0.4, 0, 0.2, 1)", // Add easing for smoother animation
      delay: 100, // Add delay for smoother animation
    });
  }, []);

  AOS.refresh();
  return (
    <AuthProvider>
      <div className="w-screen min-h-screen font-poppins overflow-x-hidden">
        <ToastContainer position="top-right" autoClose={3000} />
        <InitialLoader />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* <Route path="/profile" element={ */}
            <Route path="/Profile" element={<Profile />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
          
            <Route path="/progress-tracker" element={
              <PrivateRoute>
                <Profile />
                <ProgressTracker />
              </PrivateRoute>
            } />
            <Route path="/update-profile" element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            } />

            {/* Admin Routes - Protected */}
            <Route path="/admin/course-comparison" element={
              <PrivateRoute>
                <CourseComparisonAdmin />
              </PrivateRoute>
            } />
            <Route path="/admin/course-analytics" element={
              <PrivateRoute>
                <CourseAnalytics />
              </PrivateRoute>
            } />
            <Route path="/admin/course-management" element={
              <PrivateRoute>
                <CourseManagement />
              </PrivateRoute>
            } />



            {/* About Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/about-company" element={<AboutCompany />} />
            <Route path="/about/our-story" element={<OurStory />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/about/our-team/:memberName" element={<Member />} />
            <Route path="/about/blogs" element={<Our_Blog />} />
            <Route path="/blogs" element={<Our_Blog />} />
            <Route path="/about/our-blog/:id" element={<BlogFullArticle />} />
            <Route path="/about/our-partners" element={<OurPartner />} />
            <Route path="/about/student-success-stories" element={<StudentSuccessStories />} />



            {/* Career Routes */}
            <Route path="/services/internships-jobs" element={<InternshipsAndJobs />} />
            <Route path="/services/internships-jobs/:type" element={<Courses />} />
            <Route path="/services/internships" element={<Internships />} />
            <Route path="/services/internships/:id" element={<InternshipsDetail />} />
            <Route path="/services/internships-application" element={<InternshipsApplcation />} />
            <Route path="/services/jobs" element={<Jobs />} />
            <Route path="/services/job/:id" element={<JobDetail />} />
            <Route path="/services/jobs-application" element={<JobsApplcation />} />


            {/* Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/counselling-sessions" element={<Counselling />} />
            <Route path="/services/career-counselling" element={<CareerCounselling />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/content-writing" element={<ContentWriting />} />
            {/* career guidance */}
            <Route path="/services/career-guidance" element={<CareerGuidance />} />
            {/* <Route path="/services/career-guidance/:id" element={<CareerGuidanceDetails />} /> */}
            {/* <Route path="/services/career-guidance/:id" element={<CareerGuidanceDetails />} /> */}

            <Route path="/services/scholarship-details" element={<ScholarshipDetails />} />
            <Route path="/services/admission-process" element={<AdmissionProcess />} />
            <Route path="/services/course-comparison" element={<CourseComparison />} />
            <Route path="/services/campus-life" element={<CampusLife />} />
            <Route path="/services/career-roadmap" element={<CareerRoadmap />} />
            <Route path="/services/partnership-collaborations" element={<PartnerAndCollab />} />

            {/* tech service */}
            <Route path="services/it-tech-based-services" element={<IT_Tech_Based />} />
            <Route path="services/aca-scholarship-program" element={<Aca_Scholarship_program />} />
            <Route path="services/career-guidance-program" element={<CareerGuidanceProgram />} />




            {/* Education Routes */}
            <Route path="/education/colleges" element={<CollegeList />} />
            <Route path="/education/colleges/:id" element={<CollegeDetails />} />
            {/* <Route path="/education/hostels/:id" element={<HostelDetails />} /> */}
            <Route path="/education/pg-hostel-details" element={<PGHostelDetails />} />
            <Route path="/education/hostel-rules" element={<HostelRules />} />
            <Route path="/education/placement-stats" element={<PlacementStats />} />
            <Route path="/education/course-comparison" element={<CourseComparison />} />
            <Route path="/education/courses-degrees" element={<CourseDegrees />} />
            <Route path="/education/study-abroad" element={<StudyAbroad />} />
            <Route path="/education/admission-process" element={<AdmissionProcess />} />
            <Route path="/education/entrance-exams" element={<EntranceExams />} />
            <Route path="/education/scholarships-financial-aid" element={<ScholarshipsFinancialAid />} />
            {/* <Route path="/education/placement-stats" element={<PlacementStats />} /> */}


            {/* Accommodation Routes */}
            <Route path="/accommodation/on-campus-housing" element={<OnCampusHousing />} />
            <Route path="/accommodation/off-campus-housing" element={<OffCampusHousing />} />
            <Route path="/accommodation/student-housing-communities" element={<StudentHousingCommunities />} />
            <Route path="/accommodation/budgeting-tips" element={<BudgetingTips />} />
            <Route path="/accommodation/safety-tips" element={<SafetyTips />} />
            <Route path="/accommodation/pg-hostel-details" element={<PGHostelDetails />} />
            <Route path="/accommodation/hostel-rules" element={<HostelRules />} />
            <Route path="/accommodation/campus-life" element={<CampusLife />} />


            {/* other routes 2nd */}
            <Route path="/virtual-campus" element={<VirtualCampus />} />
            <Route path="/career-recommender" element={<AICareerRecommender />} />
            <Route path="/live-support" element={<LiveSupport />} />
            <Route path="/achievements" element={
              <PrivateRoute>
                <Achievements />
              </PrivateRoute>
            } />
            <Route path="/portfolio" element={
              <PrivateRoute>
                <StudentPortfolio />
              </PrivateRoute>
            } />

            <Route path="/virtual-career-fair" element={<VirtualCareerFair />} />
            <Route path="/course-roadmap" element={
              <PrivateRoute>
                <CourseRoadmap />
              </PrivateRoute>
            } />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            } />

            <Route path="/analytics" element={
              <PrivateRoute>
                <ProgressAnalytics />
              </PrivateRoute>
            } />


            {/* Other Routes */}
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ScrollTop />
        <WhatsAppButton />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
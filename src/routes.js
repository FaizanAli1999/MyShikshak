import React from 'react';


const Currentjobs = React.lazy(() => import('./views/Currentjobs/Currentjobs'));
const Appliedjobs = React.lazy(() => import('./views/Appliedjobs/Appliedjobs'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const DemoLectures = React.lazy(() => import('./views/DemoLectures/DemoLectures/DemoLectures'));
const StudyRelated = React.lazy(() => import('./views/DemoLectures/DemoLectures/StudyRelated'));
const Profile = React.lazy(() => import('./views/Profile/Profile'));
const jobinvites = React.lazy(() => import('./views/jobinvites/jobinvites'));
const Closedjobs = React.lazy(() => import('./views/Closedjobs/Closedjobs'));
const Tutioninfo = React.lazy(() => import('./views/Closedjobs/Tutioninfo'));
const Calendar2 = React.lazy(() => import('./views/Closedjobs/Calendar2'));
const Attendance2 = React.lazy(() => import('./views/Closedjobs/Attendance2'));
const Assignment2 = React.lazy(() => import('./views/Closedjobs/Assignment2'));
const Performance2 = React.lazy(() => import('./views/Closedjobs/Performance2'));
const Complaint2 = React.lazy(() => import('./views/Closedjobs/Complaint2'));
const Educationalinfo = React.lazy(() => import('./views/Profile/Educationalinfo'));
const RunningTutions = React.lazy(() => import('./views/Currentjobs/RunningTutions'));
const Attendence = React.lazy(() => import('./views/Currentjobs/Attendence'));
const Calender = React.lazy(() => import('./views/Currentjobs/Calender'));
const Assignment = React.lazy(() => import('./views/Currentjobs/Assignment'));
const Performance = React.lazy(() => import('./views/Currentjobs/Performance'));
const Complaints = React.lazy(() => import('./views/Currentjobs/Complaints'));
const Tutuoring = React.lazy(() => import('./views/Profile/Tutuoring'));
const Documents = React.lazy(() => import('./views/Profile/Documents'));
const Searchjobs = React.lazy(() => import('./views/Searchjobs/Searchjobs'));
const Wallet = React.lazy(() => import('./views/Wallet/Wallet'));
const Earning = React.lazy(() => import('./views/Wallet/Earning'));
const Coins = React.lazy(() => import('./views/Wallet/Coins'));
const BuyCoin = React.lazy(() => import('./views/Wallet/BuyCoin'));
const Test = React.lazy(() => import('./views/Test/Test'));
const Notification = React.lazy(() => import('./views/Notifications/Notification'));
const Setting = React.lazy(() => import('./views/Setting/Setting'));
const Review = React.lazy(() => import('./views/Review/Review'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Appliedjobs', name: 'Appliedjobs', component: Appliedjobs },
  { path: '/Profile', name: 'Profile', component: Profile },
  { path: '/Educationalinfo', name: 'Educationalinfo', component: Educationalinfo },
  { path: '/RunningTutions', name: 'RunningTutions', component: RunningTutions },
  { path: '/Attendence', name: 'Attendence', component: Attendence },
  { path: '/jobinvites', name: 'jobinvites', component: jobinvites },
  { path: '/closedjobs', name: 'Closedjobs', component: Closedjobs },
  { path: '/Tutioninfo', name: 'Tutioninfo', component: Tutioninfo },
  { path: '/Attendance2', name: 'Attendance2', component: Attendance2 },
  { path: '/Calendar2', name: 'Calendar2', component: Calendar2 },
  { path: '/Assignment2', name: 'Assignment2', component: Assignment2 },
  { path: '/Performance2', name: 'Performance2', component: Performance2 },
  { path: '/Complaint2', name: 'Complaint2', component: Complaint2 },
  { path: '/Calender', name: 'Calender', component: Calender },
  { path: '/Assignment', name: 'Assignment', component: Assignment },
  { path: '/Performance', name: 'Performance', component: Performance },
  { path: '/Complaints', name: 'Complaints', component: Complaints },
  { path: '/Tutuoring', name: 'Tutuoring', component: Tutuoring },
  { path: '/Documents', name: 'Educationalinfo', component: Documents },
  { path: '/Searchjobs', name: 'Searchjobs', component: Searchjobs },
  { path: '/Currentjobs', exact: true, name: 'Currentjobs', component: Currentjobs }, 
  { path: '/DemoLectures', exact: true, name: 'DemoLectures', component: DemoLectures },
  { path: '/StudyRelated', exact: true, name: 'StudyRelated', component: StudyRelated },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: DemoLectures },
  { path: '/widgets', name: 'Widgets', component: Wallet },
  { path: '/Earning', name: 'Earning', component: Earning }, 
  { path: '/Coins', name: 'Coins', component: Coins }, 
  { path: '/BuyCoin', name: 'BuyCoin', component: BuyCoin },
  { path: '/Test', name: 'Test', component: Test },
  { path: '/Notification', name: 'Notification', component: Notification }, 
  { path: '/Setting', name: 'Setting', component: Setting }, 
  { path: '/Review', name: 'Review', component: Review }, 
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;

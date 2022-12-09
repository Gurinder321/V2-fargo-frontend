import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';


import Menu from '../../components/menu/Menu';
import MembersList from '../../components/membersList.jsx/MembersList';

export default function Home() {
  return (
    <> 
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-start max-w-[1240px] mx-auto px-7">
        <Sidebar />
        <MembersList />
      </div>
    </>
  );
}
   
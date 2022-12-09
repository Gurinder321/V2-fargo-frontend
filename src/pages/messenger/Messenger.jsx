import Topbar from '../../components/topbar/Topbar';
// import Sidebar from '../../components/sidebar/Sidebar';
import Menu from '../../components/menu/Menu';
import Messages from './Messages';

export default function Home() {
  return (
    <>
      <Topbar />
      <Menu />
      <div className="mt-8 lg:flex lg:justify-center max-w-[1240px] mx-auto px-7">
        <Messages />
      </div>
    </>
  );
}

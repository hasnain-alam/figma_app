import Image from 'next/image'
import SettingsIcon from '@mui/icons-material/Settings';


const Header = () => {
  return (
    <header className="flex justify-end items-center p-4">
      <div className="p-4"> <SettingsIcon/></div>
     
      <div className=" bg-gray-300 rounded-full"><img className=" rounded-full w-10 h-10" src="image.jpg" alt="logo" ></img>
      </div>
    </header>
  );
};

export default Header;

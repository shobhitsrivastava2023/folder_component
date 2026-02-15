import Image from "next/image";
import Folder from "./components/folder";

export default function Home() {
  return (<div className="h-screen bg-white ">
    <div className="h-screen grid items-center justify-center">
      
    <Folder />
    </div>
  </div>
  );
}

import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import Editor from "@/components/Editor";
import StatusBar from "@/components/StatusBar";
import FileExplorer from "@/components/FileExplorer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <TabBar />
      <div className="flex flex-1">
        <Sidebar />
        <FileExplorer />
        <Editor />
      </div>
      <StatusBar />
    </div>
  );
}

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  TopAlbums,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  AlbumDetails,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const scrollContainerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-purple-500 to-blue-900">
        <Searchbar />
        <div
          ref={scrollContainerRef}
          className="px-6 h-[calc(100vh-24px)] overflow-y-auto xl:overflow-hidden flex xl:flex-row flex-col hide-scrollbar"
        >
          <div className="flex-1 xl:overflow-y-auto hide-scrollbar pb-10 xl:pb-40 mt-5 lg:mt-0">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/top-albums" element={<TopAlbums />} />
              <Route path="/albums/:albumid" element={<AlbumDetails />} />
              <Route path="/artists/:artistid" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>

          <div className="lg:max-w-[400px] flex-shrink-0 xl:overflow-y-auto hide-scrollbar pt-0">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-20">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;

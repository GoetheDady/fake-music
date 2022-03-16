import { lazy, Suspense } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Loading from '../components/loading';

const Recommend = lazy(() => import('../pages/recommend'));
const SongList = lazy(() => import('../pages/songList'));
const SongListDetail = lazy(() => import('../pages/songListDetail'));
const TopList = lazy(() => import('../pages/topList'));
const Singer = lazy(() => import('../pages/singer'));
const SingDetail = lazy(() => import('../pages/singerDetail'));
const SingerHotSongsList = lazy(() => import('../pages/singerHotSongsList'));
const Search = lazy(() => import('../pages/search'));
const Video = lazy(() => import('../pages/video'));

function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path="/" element={<Recommend />} />
        <Route exact path="/songList" element={<SongList />} />
        <Route exact path="/songListDetail/:id" element={<SongListDetail />} />
        <Route exact path="/rankingList" element={<TopList />} />
        <Route exact path="/singer" element={<Singer />} />
        <Route exact path="/singerDetail/:id" element={<SingDetail />} />
        <Route exact path="/singerHotSongsList/:id" element={<SingerHotSongsList />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/video" element={<Video />} />
        <Route path="/dashboard" element={<div>22</div>} />
      </Routes>
    </Suspense>

  );
}

export default Routers;

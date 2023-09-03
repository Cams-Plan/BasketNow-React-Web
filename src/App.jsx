import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage, StartTraining, NotFoundPage, MyLockerRoom} from './pages';
import { MainHeader } from './components';

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Homepage />} />
          <Route path="start-training" element={<StartTraining />} />
          <Route path="my-locker-room">
            <Route index element={<MyLockerRoom />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App

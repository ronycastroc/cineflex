import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import MainPage from './MainPage'
import TimeTable from './TimeTable'
import Section from './Section'
import Sucess from './Sucess'

export default function App() {
    return (
        <BrowserRouter>
            <Header />            
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/movie/:movieID' element={<TimeTable />}/>
                <Route path='/section/:sectionID' element={<Section />}/>
                <Route path='/sucess' element={<Sucess />}/>
            </Routes>
        </BrowserRouter>
    )
}
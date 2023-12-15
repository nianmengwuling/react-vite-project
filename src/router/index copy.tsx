//组件形式写法
import App from '@/App';
import Home from "../views/Home";
import About from "../views/About";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

/* const baseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} */

const baseRouter = () =>
(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/* 重定向到home */}
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter
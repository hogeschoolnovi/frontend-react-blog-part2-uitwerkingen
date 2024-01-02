import {Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import PostDetail from './pages/postDetailPage/PostDetail.jsx';
import './App.css'
import NotFound from './pages/notFoundPage/NotFound.jsx';
import Navigation from './components/navigation/Navigation.jsx';

function App() {


    return (
        <>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NewPost />} />
                    <Route path="/posts" element={<Overview />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            {/*Van de footer zou je ook een component mogen maken*/}
            <footer className="footer-navigation outer-content-container">
                Blogventure &copy; 2023 - ontwikkeld voor NOVI Hogeschool
            </footer>
        </>
    )
}

export default App
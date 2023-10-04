import {Link, useParams} from 'react-router-dom';
import formatDateString from '../../helpers/formatDateString.js';
import {CaretLeft, Clock} from "@phosphor-icons/react";
import './PostDetail.css';
import {useState} from 'react';
import axios from 'axios';
import Button from '../../components/button/Button.jsx';

function PostDetail() {
    const [post, setPost] = useState([]);
    const [error, toggleError] = useState(false);

    const {id} = useParams();

    async function fetchPost() {
        toggleError(false);

        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            console.log(response.data);
            setPost(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container">
                <Button type="button" onClick={fetchPost} variant="primary">Haal de post op</Button>
                {Object.keys(post).length > 0 && (<>
                    <h1>{post.title}</h1>
                    <h2>{post.subtitle}</h2>
                    <p className="post-detail-author">Geschreven door <em>{post.author}</em> op {formatDateString(post.created)}
                    </p>
                    <span className="post-detail-read-time">
                    <Clock color="#50535C" size={18}/>
                    <p> {post.readTime} minuten lezen</p>
                </span>
                    <p>{post.content}</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>

                </>)}
                {error && <p>Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw</p>}
                <Link to="/posts" className="back-link">
                    <CaretLeft color="#38E991" size={22}/>
                    <p>Terug naar de overzichtspagina</p>
                </Link>
            </div>
        </section>
    );
}

export default PostDetail;
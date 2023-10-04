import {Link} from 'react-router-dom';
import './PostItem.css';

function PostItem({id, title, author, comments, shares}) {
    return (
        <li className="post-item">
            <h2 className="post-title"><Link to={`/posts/${id}`}>{title}</Link> ({author})</h2>
            <p>{comments} reacties - {shares} keer gedeeld</p>
        </li>
    );
}

export default PostItem;
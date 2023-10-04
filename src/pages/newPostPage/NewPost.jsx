import './NewPost.css';
import {useState} from 'react';
import calculateReadTime from '../../helpers/calculateReadTime.js';
import {Link, useNavigate} from 'react-router-dom';
import Input from '../../components/input/Input.jsx';
import Button from '../../components/button/Button.jsx';
import axios from 'axios';

function NewPost() {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });
    const [submitSuccessId, setSubmitSuccessId] = useState(null);
    const [error, toggleError] = useState(false);

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        console.log({
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(formState.content),
        });

        try {
            const response = await axios.post('http://localhost:3000/posts', {
                ...formState,
                shares: 0,
                comments: 0,
                created: new Date().toISOString(),
                readTime: calculateReadTime(formState.content),
            });
            console.log(response.data);

            console.log('De blog is succesvol toegevoegd! 🌈');
            setSubmitSuccessId(response.data.id);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                {!submitSuccessId ?
                <form className="new-post-form" onSubmit={handleSubmit}>
                    <h1>Post toevoegen</h1>
                    <Input
                        type="text"
                        name="title"
                        labelText="Titel"
                        required={true}
                        formStateValue={formState.title}
                        handleChange={handleChange}/>
                    <Input
                        type="text"
                        name="subtitle"
                        labelText="Subtitel"
                        required={true}
                        formStateValue={formState.subtitle}
                        handleChange={handleChange}/>
                    <Input
                        type="text"
                        name="author"
                        labelText="Naam en achternaam"
                        required={true}
                        formStateValue={formState.author}
                        handleChange={handleChange}/>

                    <label htmlFor="post-content">Blogpost</label>
                    <textarea
                        name="content"
                        id="post-content"
                        cols="30"
                        rows="10"
                        required
                        minLength={300}
                        maxLength={2000}
                        value={formState.content}
                        onChange={handleChange}></textarea>
                    <Button type="submit" variant="primary">
                        Toevoegen
                    </Button>
                    {error && <p>Er is iets misgegaan bij het versturen van het formulier. Probeer het opnieuw</p>}
                </form>
                : <p>De blogpost is succesvol toegevoegd. Je kunt deze <Link to={`/posts/${submitSuccessId}`}>hier</Link> bekijken.</p>}
            </div>
        </section>
    );
}

export default NewPost;
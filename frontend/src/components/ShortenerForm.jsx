import { useState } from "react";
import { shortenUrl } from '../api';

const ShortenerForm = ({handleNewShortUrl}) => {

    const [input, setInput] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

    }

}

export default ShortenerForm;
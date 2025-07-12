# 🔗 MERN URL Shortener

A full-stack URL shortener built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to shorten long URLs and track click analytics with a clean, responsive UI.

---

## 🚀 Features

- 🔒 Shorten any valid long URL into a short one
- 📊 View click count analytics for each short link
- 🕒 Automatically stores creation date for each short URL
- 💾 Local history of past shortened URLs using `localStorage`
- 🔁 Duplicate prevention with existing short URL reuse
- ✅ React Icons & Toastify UI feedback
- 🌐 Redirect short URL to original link
- ✨ Built with TailwindCSS and React

---

## 📁 Project Structure

```
/url-shortner
├── /backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
├── /frontend
│   ├── components/
│   ├── api/
│   ├── App.jsx
│   └── main.jsx
```

---

## 🧪 API Endpoints

### `POST /api/shorten`

**Description:** Create a short URL

#### Request Body:

```json
{
  "url": "https://example.com"
}
```

#### Response:

```json
{
  "message": "Short URL created successfully",
  "short_url": "http://localhost:5000/abc123",
  "original_url": "https://example.com"
}
```

---

### `GET /:code`

**Description:** Redirects to original URL

**Example:**  
`GET http://localhost:5000/abc123` → redirects to `https://example.com`

---

### `GET /api/analytics/:code`

**Description:** Returns click analytics

#### Response:

```json
{
  "short_code": "abc123",
  "original_url": "https://example.com",
  "click_count": 12,
  "created_at": "2025-07-12T10:24:53.245Z"
}
```

---

## ⚙️ Tech Stack

- **Frontend:** React, TailwindCSS, React Icons, Toastify
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Tools:** Mongoose, Axios

---

## 💡 How It Works

1. User enters a long URL in the frontend.
2. The frontend calls the backend API to generate a unique `short_code` using nanoid.
3. The backend stores the mapping in MongoDB.
4. The frontend saves the result in `localStorage` and updates the UI.
5. Clicking the short URL triggers redirection via Express.
6. Click count is incremented on each visit.

---

## 🛠️ Installation & Running Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sharmaHarshit2000/url-shortener.git
   cd url-shortener
   ```

2. **Setup Backend**

   ```bash
   cd backend
   npm install
   ```

   Create `.env` file:

   ```
   PORT=5000
   MONGO_URI=<your_mongodb_uri>
   BASE_URL=http://localhost:5000
   ```

   Start the server:

   ```bash
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 🧪 Testing

Basic manual testing done using Postman and browser:

- Short URL generation
- Redirection behavior
- Click count increment
- Analytics fetch
- UI/UX with form validations

---

### 🌐 Live Demo

- **Frontend (Vercel):** [https://mern-url-shortener-frontend.vercel.app](https://mern-url-shortener-frontend.vercel.app)
- **Backend (Render):** [https://mern-url-shortener-backend.onrender.com](https://mern-url-shortener-backend.onrender.com)

---

## 👨‍💻 Author

**Harshit Sharma**  
📧 harshitsharma9989@gmail.com  
🌐 [GitHub](https://github.com/sharmaHarshit2000)

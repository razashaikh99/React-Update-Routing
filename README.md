
# React Routing Project 🚀

This is a simple React project that demonstrates how to implement client-side routing using **React Router DOM**. The project includes a multi-page layout with proper navigation and also demonstrates how to fetch data from the **GitHub API** dynamically.

---

## 📁 Project Structure

```
public/
src/
├── Components/
│   ├── Home/Home.jsx
│   ├── About/About.jsx
│   ├── Contact/Contact.jsx
│   ├── Github/Github.jsx
│   ├── User/User.jsx
│   └── NotFound/PageNotFound.jsx
├── Layout.jsx
├── index.css
└── main.jsx (entry file)
```

---

## 🌐 Features

- ✅ **React Router v6** routing system  
- ✅ Reusable **Layout** component with `Header` and `Footer`  
- ✅ Dedicated pages:
  - Home  
  - About  
  - Contact  
  - GitHub (with API integration)  
  - Dynamic User Route (`/user/:userid`)  
  - 404 Page Not Found  
- ✅ GitHub API integration for:
  - Followers  
  - Following  
  - Repositories  
- ✅ Styled with Tailwind CSS  
- ✅ Mobile-responsive UI  

---

## 🧭 Routing Overview

This project uses `createBrowserRouter` and `createRoutesFromElements` from **react-router-dom v6+**.

```jsx
<Route path='/' element={<Layout />}>
  <Route index element={<Home />} />
  <Route path='about' element={<About />} />
  <Route path='contact' element={<Contact />} />
  <Route path='user/:userid' element={<User />} />
  <Route path='github' element={<Github />} />
  <Route path='*' element={<PageNotFound />} />
</Route>
```

---

## 🔗 GitHub API Integration

In the `/github` route, we fetch data from the GitHub API using `useEffect`:

```jsx
useEffect(() => {
  fetch("https://api.github.com/users/<username>")
    .then(response => response.json())
    .then(data => {
      setFollowers(data.followers);
      setFollowing(data.following);
      setRepos(data.public_repos);
    });
}, []);
```

---

## 📦 Tech Stack

- React.js  
- React Router DOM v6  
- Tailwind CSS  
- GitHub REST API  

---

## 🚀 How to Run Locally

1. Clone the repository  
2. Run `npm install`  
3. Run `npm run dev`  
4. Visit `http://localhost:5173`

---

## 📄 License

This project is open source and free to use.

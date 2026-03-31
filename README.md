# 🌍 Hotel Explorer App

A modern React application that allows users to explore countries and fetch hotels dynamically using a public API. The app provides an interactive UI with tables and cards to display hotel details and amenities.

---

## 🚀 Features

* 🌐 Fetch and display **countries list**
* 🏨 Get **hotels by selected country**
* 📊 Display hotels in a **structured table**
* 🧾 Show **hotel amenities as cards**
* ⚡ Fast and responsive UI using **React + Bootstrap**
* 🔄 Dynamic routing using **React Router**
* ❌ Handles empty states and API errors

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Bootstrap (React-Bootstrap)
* **Routing:** React Router DOM
* **API:** Hotels API
* **JavaScript:** ES6+

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Show.jsx                # Countries table
│   ├── ShowHotels.jsx         # Hotels table + amenities
│   ├── CardHotelAmenities.jsx # Card UI for amenities
│
├── pages/
│   ├── Hotels.jsx             # Hotels page (routing target)
│
├── App.js                     # Routes configuration
├── index.js                   # Entry point
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hotel-explorer.git
cd hotel-explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

---

## 🔑 Environment Variables


## 🔌 API Integration

The app fetches hotel data using:

```
https://api.hotels-api.com/v1/hotels/search
```

## 🧠 How It Works

1. User selects a **country**
2. App sends request to fetch hotels
3. Redirects to **Hotels page**
4. Displays:

   * Hotels in table format
   * Amenities as cards

---

## ⚠️ Known Limitations

* Some countries may return **no hotel data**
* API has **rate limits (429 error)**
* Data depends on external API availability

---

## 💡 Future Improvements

* 🔍 Search & filter hotels
* 📄 Pagination for large datasets
* ⭐ Sort by rating
* 🗺️ Map integration (Google Maps)
* 🔐 Move API calls to backend (Laravel)
* ⏳ Loading spinner & better error UI

---

## 👨‍💻 Author

**Ibrahim Shakhatreh**

* Full-Stack Developer
* Backend Focus (Laravel + Python)

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 📢 Share it

---

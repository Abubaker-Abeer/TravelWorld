# 🌍 TravelWorld

**TravelWorld** is a full-featured travel planning and booking web application designed for a seamless user experience. Built with **React**, **Firebase**,**Bootstrap + Reactstrap** and inspired by a professional Figma design, this app lets users explore tours, view photo galleries, leave testimonials, and book trips — all from one place.

> 🔗 **Live Demo:** [https://travelworld-auth.web.app/home](https://travelworld-auth.web.app/home)  
> 🎨 **Figma Design:** [TravelWorld on Figma](https://www.figma.com/design/CP5YwT48dKU5qsh0AYVyfa/TravelWorld---Travel-Planning---Booking-Website--Community-?node-id=0-1&p=f&t=mkN35lx3d49EAcxb-0)

---

## ✨ Features

- 🔐 **Authentication System** with Firebase (Login/Register)
- 🏠 **Home Page** with animated Hero and interactive SearchBar
- 🗺️ **Tours Pages**:  
  - Tour listing with **pagination**  
  - **Search filter** for quick results
- 📄 **Tour Details**:
  - View full details of the trip
  - Comment system (requires login)
  - Booking system + Booking Confirmation (requires login)
- 🖼️ **Gallery**: Showcase of real travel moments
- 💬 **Fans Love**: Testimonials slider built using Swiper
- 📩 **Newsletter**: Email subscription form
- 🏢 **About Us** and **Our Services** pages
- 🎨 Animations using **AOS** & **CountUp.js**
- ☁️ **Hosted on Firebase**

---

## 🔧 Tech Stack

| Tech        | Use                         |
|-------------|------------------------------|
| React       | Front-end Framework          |
| Vite        | Fast build tool              |
| Firebase    | Auth & Hosting               |
| Swiper.js   | Testimonials Carousel        |
| AOS         | Animations on Scroll         |
| CountUp.js  | Animated Counters            |
| Bootstrap + Reactstrap| Styling and UI components|
| React Toastify       | Toast notifications                             |
| React Phone Input    | International phone input field                 |

---


## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/Abubaker-Abeer/TravelWorld.git
cd TravelWorld

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# (Optional) Install Firebase CLI if not already installed
npm install -g firebase-tools

# Deploy to Firebase (after login and init)
firebase deploy

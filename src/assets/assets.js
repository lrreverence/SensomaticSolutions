import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import brand_img1 from './brand_img1.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    brand_img1,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Sensomatic Smart Dry",
      price: "₱9,999",
      location: "A weather-responsive laundry system that automatically retracts and extends your clothesline based on real-time weather changes. Protect your clothes from unexpected rain and optimize drying time with sunlight, giving you one less chore to worry about.",
      image: project_img_1
    },
    {
      title: "Home Sensor Modules",
      price: "₱5,999",
      location: "Our smart sensor modules provide real-time monitoring and automated responses for various household tasks, from temperature control to security, giving you full control and peace of mind.",
      image: project_img_2
    },
    {
      title: "Automated Chore Sensors",
      price: "₱4,999",
      location: "Designed to automate repetitive tasks like cleaning, drying, and monitoring, these sensors are tailored for easy integration with your home devices, reducing the time and effort needed for household maintenance.",
      image: project_img_3
    },

    
  ];

  export const testimonialsData = [
    {
        name: "Maria Tereza",
        title: "Housewife",
        image: profile_img_1,
        alt: "Portrait of Maria Tereza",
        rating: 5,
        text: "As a stay-at-home mom with three kids, laundry was always stressful, especially with unexpected rain. Since using the Sensomatic Smart Dry System, my clothes are protected automatically, saving me time and effort. Now, I have more time for my family and feel more organized—Sensomatic has truly made my life easier."
    },
    {
        name: "Joy Marie Fabregas",
        title: "Call Center Agent",
        image: profile_img_2,
        alt: "Portrait of Joy Marie Fabregas",
        rating: 4,
        text: "Working night shifts and caring for two kids, laundry was a struggle with costly machine drying and fabric damage. Sensomatic’s Smart Dry System changed everything—it protects my clothes from the weather, saves money, and keeps fabrics intact. It’s been a lifesaver!"
    },
    {
        name: "Ethan Del Rosario",
        title: "Farmer",
        image: profile_img_3,
        alt: "Portrait of Ethan Del Rosario",
        rating: 5,
        text: "As a farmer during the rainy harvest season, drying clothes was a constant challenge. Unpredictable weather left my laundry damp, and machine drying only added to high electricity bills and fabric damage. Sensomatic’s Smart Dry System solved it all. Its Rain & Sunlight Sensor protects my clothes and dries them naturally, saving me time, money, and stress. It’s the perfect solution for my busy life!"
    }
];
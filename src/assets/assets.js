import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
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
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Home Sensor Modules",
      price: "$2,50,000",
      location: "Our smart sensor modules provide real-time monitoring and automated responses for various household tasks, from temperature control to security, giving you full control and peace of mind.",
      image: project_img_2
    },
    {
      title: "Automated Chore Sensors",
      price: "$2,50,000",
      location: "Designed to automate repetitive tasks like cleaning, drying, and monitoring, these sensors are tailored for easy integration with your home devices, reducing the time and effort needed for household maintenance.",
      image: project_img_3
    },

    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "Maria Tereza, a 36-year-old stay-at-home mom in La Paz, Iloilo City, juggles multiple responsibilities in managing her household, caring for her three children, and handling daily chores. Her typical day is a balancing act of cooking, cleaning, and laundry. However, with Sensomatic Solutions, her routine becomes more manageable, as the smart automation of household tasks significantly reduces stress and enhances efficiency."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];
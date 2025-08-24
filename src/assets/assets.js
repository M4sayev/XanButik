// Logo 

import logo_black_bg from "./logo_black_bg.jpg"; 
import logo_no_bg from "./logo_no_bg.png";

import logo_sheki_bg from "./logo_sheki_bg.jpg";
import logo_no_frame from "./logo_no_frame.png";

// Carousel 

import brand_company_one from "./companies/brand_company_one.png";
import brand_company_two from "./companies/brand_company_two.png";
import brand_company_three from "./companies/brand_company_three.png";
import brand_company_four from "./companies/brand_company_four.png";
import brand_company_five from "./companies/brand_company_five.png";
import brand_company_six from "./companies/brand_company_six.png";
import brand_company_seven from "./companies/brand_company_seven.png";
import brand_company_eight from "./companies/brand_company_eight.png";

// -----Home Page----- //

import header_image from "./header_imgs/header_image.jpg";

import tie_image from "./header_imgs/tie_image.jpg";
import shirts_img from "./header_imgs/shirts_img.jpg";
import shirts_front from "./header_imgs/shirts_front.jpg";
import bomber_home from "./header_imgs/bomber_home.jpg"

import calvin_klein_sweatshirt from "./header_imgs/calvin_klein_sweatshirt.jpg";
import calvin_klein_sweatshirt_two from "./header_imgs/calvin_klein_sweatshirt_two.jpg";
import genuine_leather_dress_shoes_one from "./header_imgs/genuine_leather_dress_shoes_one.jpg";
import half_classic_genuine_leather_dress_shoes from "./header_imgs/half_classic_genuine_leather_dress_shoes.jpg";
import lv_tracksuit from "./header_imgs/lv_tracksuit.jpg";

// services icons
import services_icon_one from "./services_icons/services_icon_one.png";
import services_icon_two from "./services_icons/services_icon_two.png";
import services_icon_three from "./services_icons/services_icon_three.png";
import services_icon_four from "./services_icons/services_icon_four.png";

// -----About Us Page----- //

// services imgs
import personal_consultation_service from "./services_imgs_about/personal_consultation_service.jpg";
import premium_fitting from "./services_imgs_about/premium_fitting.jpg";
import shoe_care_n_repair from "./services_imgs_about/shoe_care_n_repair.jpg";
import tailoring_n_alteration from "./services_imgs_about/tailoring_n_alteration.jpg";

// coming soon
import video_coming_soon from "./video_coming_soon.mp4";
export { video_coming_soon as videoBg };

// -----Testimonials Page----- //

// reviews
import david_pp from "./reviews/david_pp.jpg";
import dina_pp from "./reviews/dina_pp.jpg";
import william_pp from "./reviews/william_pp.jpg";
import emma_pp from "./reviews/emma_pp.jpg";

// form
import testimonials_form_section from "./header_imgs/testimonials_form_section.jpg";

// -----Contact Us Page----- //

import contact_us_form from "./header_imgs/contact_us_form.jpg";

// map icon 
import xan_butik_marker from "./xan_butik_marker.png";
export { xan_butik_marker as x_marker };

// -----Cart Page----- //

import store_header from "./header_imgs/store_header.jpg";

export const assets = {
    logo_no_frame,
    //
    testimonials_form_section,
    //
    contact_us_form,
    //
    logo_sheki_bg,
    //
    services_icon_one,
    services_icon_two,
    services_icon_three,
    services_icon_four,
    //
    store_header
}

export const ourBrandCompanies = [
    {
        brandName: "Elegance",
        img: brand_company_one
    },
    {
        brandName: "Rolestigana",
        img: brand_company_two
    },
    {
        brandName: "Blanco Y Negro",
        img: brand_company_three
    },
    {
        brandName: "Clean Sleep",
        img: brand_company_four
    },
    {
        brandName: "Dame Elegante",
        img: brand_company_five
    },
    {
        brandName: "Lullaby",
        img: brand_company_six
    },
    {
        brandName: "Knitted Dreams",
        img: brand_company_seven
    },
    {
        brandName: "roberto cavalli",
        img: brand_company_eight
    }
];

export const favoriteItems = [
    {
        name: "Dark Blue Tie",
        price: 20,
        img: tie_image
    },
    {
        name: "Classic Shirts",
        price: 45,
        img: shirts_img
    },
    {
        name: "Flannel Shirts",
        price: 50,
        img: shirts_front
    },
    {
        name: "Copper Bomber",
        price: 64,
        img: bomber_home
    }
]

export const ourResults = [
    {
        achievement: "5",
        result: "years of experience"
    },
    {
        achievement: "100%",
        result: "happy clients"
    },
    {
        achievement: "50+",
        result: "events hosted"
    },
    {
        achievement: "230",
        result: "projects completed"
    }
];

export const ourServices = [
    {
        name: "Personal Styling Consulatition",
        description: "Experience a personalized styling consultation with our fashion experts, who will curate signature looks tailored to your individual taste and lifestyle, elevating your wardrobe.",
        img: personal_consultation_service
    },
    {
        name: "Tailoring and Alteration",
        description: "Discover our precise tailoring and alteration services, ensuring your clothing fits impeccably, reflecting your unique style and enhancing your confidence.",
        img: tailoring_n_alteration
    },
    {
        name: "Premium Suit Fittings",
        description: "Indulge in premium suit fittings, where our skilled professionals will guide you through selecting the perfect suit, exuding sophistication and refinement for every occasion.",
        img: premium_fitting
    },
    {
        name: "Shoe Care and Repair",
        description: "Trust our specialized shoe care and repair services to keep your footwear in pristine condition, preserving their quality and extending their longevity.",
        img: shoe_care_n_repair
    }
];

export const clientReviews = [
    {
        review: "The men's fashion ecommerce site offered a diverse range of trendy clothing options, and the quality exceeded my expectations. My go-to online store for fashion-forward pieces.",
        name: "David Smith",
        occupation: "Stylish Trendsetter",
        img: david_pp
    },
    {
        review: "The seamless shopping experience on the men's fashion ecommerce site was impressive. The clothing arrived promptly, and the fit and fabric were fantastic. Highly recommended for quality and service.",
        name: "Dina Maro",
        occupation: "Satisfied Customer",
        img: dina_pp
    },
    {
        review: "The men's fashion ecommerce site consistently delivers on their promise of stylish, high-quality clothing. The website's user-friendly interface and fast shipping make shopping a pleasure every time.",
        name: "William Brown",
        occupation: "Fashion Enthusiast",
        img: william_pp
    },
    {
        review: "I found unique and stylish pieces on the men's fashion ecommerce site that perfectly matched my taste. The timely delivery and excellent customer service were the cherry on top. Will be returning for more!",
        name: "Emma Stone",
        occupation: "Happy Shopper",
        img: emma_pp
    }
];

export const askedQuestions = [
    {
        id: 1000,
        question: "How can I find the right size when shopping for men's clothing online?",
        ans: "To find the right size when shopping for men's clothing online, refer to the brand's size chart and take accurate body measurements. Additionally, read customer reviews for insights on the fit and consider reaching out to customer support for guidance.",
        category: "Styling Questions"
    },
    {
        id: 1001,
        question: "What are some essential wardrobe pieces for men?",
        ans: "Essential wardrobe pieces for men include versatile items such as a well-fitted suit, quality denim jeans, classic white sneakers, a tailored dress shirt, a leather belt, and a versatile jacket. These pieces can be mixed and matched for various looks.",
        category: "Styling Questions"
    },
    {
        id: 1002,
        question: "What should I consider when buying men's fashion accessories?",
        ans: "When buying men's fashion accessories, consider the quality of materials, versatility, and how the accessory complements your personal style. Pay attention to details such as hardware, stitching, and functionality. Choose accessories that can add a stylish and practical touch to your outfits.",
        category: "Styling Questions"
    },
    {
        id: 1003,
        question: "Can I pick up my order in person at a store location?",
        ans: "Currently, we do not offer in-store pickup for online orders. However, you can choose from various shipping options during checkout, including standard and expedited shipping. Keep an eye on our site for future updates, as we may offer in-store pickup or local pickup options in the future.",
        category: "Delivery Questions"
    },
    {
        id: 1004,
        question: "How long will it take for my order to be delivered?",
        ans: "Delivery times vary based on your location and the shipping method you select during checkout. Standard shipping typically takes 5-7 business days, while expedited options can deliver in 2-3 business days. Once your order ships, we’ll send you tracking information so you can monitor its progress.",
        category: "Delivery Questions"
    },
    {
        id: 1005,
        question: "What should I do if my order hasn't arrived yet?",
        ans: "If your order hasn't arrived by the estimated delivery date, please first check the tracking information you received via email for updates. If the tracking shows no updates or if there are any issues with the delivery, contact our customer service team. We’ll work with the carrier to resolve any issues and ensure your order is delivered.",
        category: "Delivery Questions"
    },
    {
        id: 1006,
        question: "What are the advantages of shopping for men's fashion online?",
        ans: "Shopping for men's fashion online offers the advantage of convenience, a wide range of options, easy price comparison, and access to exclusive collections. Online retailers often provide detailed product descriptions and customer reviews, making it easier to make informed choices.",
        category: "Other Questions"
    }
]
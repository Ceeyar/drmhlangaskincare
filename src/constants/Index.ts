import { IconName } from "utils/Types";

export const MENU_ITEMS = [

    {
        id: 0,
        name: "Home",
        route: '/'
    },
    {
        id: 1,
        name: "About Us",
        route: '/about'
    },
    {
        id: 2,
        name: "Treatment",
        route: '/treatment'
    },
    {
        id: 3,
        name: "Contact",
        route: '/contact'
    },
    {
        id: 4,
        name: "Appointment",
        route: '/appointment'
    },
]

export const TESTMONIES = [
    {
        id: 1,
        name: 'Kwezi Dlomo',
        testimony: `Living with eczema was a daily challenge until I found Mhlanga Skincare. His tailored treatment plan and compassionate approach made a significant impact on my life. The itching and redness are finally under control, and I can't express how grateful I am. Dr. Mhlanga truly goes above and beyond for her patients`,
    },
    {
        id: 2,
        name: 'Nolwazi Khumalo',
        testimony: `Years of sun exposure had taken a toll on my skin, but Dr. Mhlanga's laser treatment was a game-changer. The results were remarkable, and the procedure was virtually painless. Dr. Mhlanga's professionalism and skill are commendable. I highly recommend him for anyone looking to address sun damage and rejuvenate their skin.`,
    },
    {
        id: 3,
        name: 'Naleen Naidoo',
        testimony: `Turning 40 made me more conscious of my skin's aging signs. Dr. Mhlanga's anti-aging recommendations and treatments have been a game-changer. The personalized care and attention to detail exceeded my expectations. I look and feel rejuvenated, and I'm so glad I found Dr. Mhlanga for my skincare needs.`,
    },
    {
        id: 4,
        name: 'Scott Salmon',
        testimony: `Routine skin checks with Mhlanga Skincare undoubtedly saved my life. During a regular appointment, she identified a suspicious mole and promptly conducted further tests. The early detection of skin cancer made all the difference in my successful treatment. Dr. Mhlanga's vigilance and expertise are unmatched.`,
    },
    {
        id: 5,
        name: 'Jenn Eyre',
        testimony: `I can't thank Mhlanga Skincare enough for transforming my skin! I struggled with persistent acne for years, and after trying various treatments with little success, I decided to consult Dr. Mhlanga. His personalized approach and expertise made all the difference. Now, my skin is clearer than ever, and I feel so much more confident.`,
    },
];

export const TIMELINE_ITEMS = [
    {
        institution: "Ngwelezane Tertiary Hospital",
        duration: "2023",
        position: "Dermatologist",
        additionalText: "He is passionate about education and community development, roles that he plays as one of the skin specialists serving the King Cetshwayo District at Ngwelezane Tertiary Hospital, and an honorary lecturer at the University of KwaZulu-Natal.",
        icon: "AssuredWorkloadIcon" as IconName,
        isWork: true
    },
    {
        duration: "2018 - 2023",
        institution: "Stanger hospital",
        position: "Medical Officer",
        additionalText: "",
        icon: "AssuredWorkloadIcon" as IconName,
        isWork: true
    },
    {
        duration: "2017",
        institution: "A minute with Dr Mhlanga",
        position: "Managing Director",
        additionalText: "A minute with Dr Mhlanga: is a leadership consulting and motivational company.",
        icon: "FoundationIcon" as IconName,
        isWork: true
    },
    {
        duration: "2016 - 2017",
        institution: "uMphumulo Hospital",
        position: "Community Medical Officer",
        additionalText: "",
        icon: "AssuredWorkloadIcon" as IconName,
        isWork: true
    },
    {
        duration: "2015",
        institution: "Stanger (GJGM) Hospital",
        position: "Medical Intern",
        additionalText: "Served his residency in the KwaZulu-Natal from Stanger (GJGM) Hospital, Addington Hospital, Inkosi Albert Luthuli Central Hospital, and King Edward VIII Hospital.",
        icon: "AssuredWorkloadIcon" as IconName,
        isWork: true
    },
    {
        duration: "2011",
        institution: "Maximum OutPut Foundation",
        position: "Founder",
        additionalText: "A registered NPO, established in 2011. Aimed at raising and developing leaders who will redress the socio-economic issues of our country and beyond. A. Leadership seminars B. Career expo C. Mentorship to young leaders.",
        icon: "FoundationIcon" as IconName,
        isWork: true
    },
    {
        duration: "2008 - 2014",
        institution: "University of Cape Town",
        position: "Bachelor of Medicine, Bachelor of Surgery - MBBS, Health Services/Allied Health/Health Sciences, General",
        additionalText: "Dr Mhlanga graduated from the University of Cape Town with a Bachelor of Medicine and a Bachelor of Surgery in 2014.",
        icon: "SchoolIcon" as IconName,
        isWork: false
    },
]
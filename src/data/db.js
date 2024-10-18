import kristen from "../assets/Kristin.svg";
import jane from "../assets/jane.svg";
import cody from "../assets/cody.svg";
import bessie from "../assets/bessie.svg";
import leslie from "../assets/leslie.svg";
import guy from "../assets/guy.svg";
import theresa from "../assets/theresa.svg";
import jerome from "../assets/jerome.svg";
import savannah from "../assets/savannah.svg";
import wade from "../assets/wade.svg";
import eneh from "../assets/eneh.svg";
import kinney from "../assets/mckinney.svg";
import brooklyn from "../assets/brooklyn.svg";
import dianne from "../assets/dianne.svg";
import codyF from "../assets/codyF.svg";
import hawkins from "../assets/hawkins.svg";
import lane from "../assets/lane.svg";
import ronald from "../assets/ronald.svg";
import cooper from "../assets/cooper.svg";
import pena from "../assets/pena.svg";
import nguyen from "../assets/nguyen.svg";

const schoolData = {
  teachers: [
    {
      id: 1,
      name: "Kristin Watson",
      age: 43,
      about:"has over ten years of experience teaching Chemistry at various levels, from middle school to advanced high school courses. she has a unique ability to break down complex concepts into manageable pieces, making chemistry accessible and enjoyable for all her students. Kristin is passionate about fostering a supportive learning environment, where every student feels valued and motivated to succeed. she often incorporates real-world applications into her lessons, helping students see the relevance of Chemistry in everyday life. Outside the classroom, Kristin enjoys participating in chemistry competitions and mentoring students in their academic pursuits.",
      profilePhoto: kristen,
      subject: "Chemistry",
      class: "JSS 2",
      email: "michelle.rivera@example.com",
      gender: "Female",
    },
    {
      id: 2,
      name: "Marvin McKinney",
      age:"40",
      about: "specializes in teaching french, with a focus on making complex concepts accessible and engaging for his students. His passion for the subject is evident in his dynamic teaching style, which includes hands-on practice and interactive demonstrations. Marvin believes that students learn best when they can see and experience  principles in action, so he regularly incorporates projects and field trips into his curriculum. He encourages students to ask questions and develop their curiosity about the natural world, fostering a lifelong love for french. Outside the classroom, Michael enjoys hiking and exploring nature, often sharing his adventures with his students to inspire their interest in the environment.",
      profilePhoto: "/src/assets/marvin.svg",
      subject: "French",
      class: "JSS 3",
      email: "debbie.baker@example.com",
      gender: "Female",
    },
    {
      id: 3,
      age: 38,
      name: "Jane Cooper",
      about: "is a dedicated history teacher, Sarah brings the past to life through interactive and thought-provoking lessons. She believes that understanding history is crucial for making sense of the present and shaping the future. Sarah uses a variety of teaching methods, including group projects, debates, and multimedia presentations, to engage her students and encourage critical thinking. Her classroom is filled with artifacts, maps, and historical documents that spark curiosity and invite exploration. Sarah’s goal is to help students appreciate the relevance of historical events and their impact on contemporary society. In her free time, she enjoys visiting historical sites and participating in community events that promote local history.",
      profilePhoto: jane,
      subject: "Maths",
      class: "JSS 3",
      email: "kenzi.lawson@example.com",
      gender: "Female",
    },
    {
      id: 4,
      age: 43,
      about:"is known for his innovative approach to teaching English, where he promotes a holistic view of health and wellness. His classes focus not only on physical fitness but also on teamwork, sportsmanship, and personal development. David encourages students to embrace a healthy lifestyle through various sports and physical activities, helping them build confidence and social skills. He believes that English is essential for mental well-being and academic success. Outside of school, David is an avid athlete, participating in marathons and community sports leagues, and he often shares his experiences to motivate his students to stay active.",
      name: "Cody Fisher",
      profilePhoto: cody,
      subject: "English",
      class: "SS 3",
      email: "nathan.roberts@example.com",
      gender: "Female",
    },
    {
      id: 5,
      age: 39,
      about:"With a focus on art education, Bessie nurtures creativity in her students, encouraging them to express themselves through various artistic mediums. She believes that art is a powerful form of communication and self-discovery. Bessie’s classroom is a vibrant space filled with supplies and student artwork, where experimentation and exploration are encouraged. She integrates art history and contemporary practices into her lessons, helping students understand the cultural significance of art. In addition to teaching, Jessica organizes art exhibitions to showcase her students’ work, fostering a sense of pride and accomplishment. She is also passionate about community art projects, believing in the importance of art in enriching lives and communities.",
      name: "Bessie Cooper",
      profilePhoto: bessie,
      subject: "Social Studies",
      class: "SS 3",
      email: "felicia.reid@example.com",
      gender: "Male",
    },
    {
      id: 6,
      age:34,
      name: "Leslie Alexander",
      about:"is a passionate music teacher who believes in the transformative power of music education. He encourages his students to explore their musical abilities through performance, composition, and appreciation of various musical genres. Chris emphasizes the importance of collaboration, often organizing ensembles and group performances to help students develop their teamwork and communication skills. His classroom is filled with instruments and resources that inspire creativity and exploration. Outside of teaching, Chris enjoys performing with local bands and sharing his love for music through workshops and community events, making music accessible to all.",
      profilePhoto: leslie,
      subject: "Home Economics",
      class: "SS 3",
      email: "tim.jennings@example.com",
      gender: "Male",
    },
    {
      id: 7,
      age:35,
      about:" is committed to teaching foreign languages, specializing in Spanish. She emphasizes cultural understanding alongside language acquisition, helping her students appreciate the rich diversity of Spanish-speaking countries. Laura uses immersive techniques in her classroom, incorporating music, films, and authentic materials to create a dynamic learning environment. She believes that language learning is a journey that opens doors to new experiences and perspectives. In addition to her teaching, Laura organizes cultural events and language clubs, encouraging students to practice their skills in real-life contexts. She is passionate about travel and often shares her experiences from her visits to Spanish-speaking countries to inspire her students.",
      name: "Guy Hawkins",
      profilePhoto: guy,
      subject: "Geography",
      class: "JSS 1",
      email: "alma.lawson@example.com",
      gender: "Male",
    },
    {
      id: 8,
      age:37,
      about: "A technology enthusiast, Daniel integrates digital tools into his teaching to prepare students for the future. He believes that technology is an essential part of modern education and equips his students with the skills they need to navigate the digital world. Daniel’s lessons often include coding, digital media, and responsible internet use, fostering creativity and innovation among his students. He encourages them to think critically about technology and its impact on society. Outside the classroom, Daniel participates in tech workshops and community initiatives that promote digital literacy, working to make technology accessible to everyone.",
      name: "Theresa Webb",
      profilePhoto: theresa,
      subject: "Psychology",
      class: "JSS 3",
      email: "debra.holt@example.com",
      gender: "Female",
    },
    {
      id: 9,
      age: 38,
      about: "focuses on nurturing young minds in early childhood education, where her patient and playful approach helps children develop a love for learning. She believes that early experiences shape a child’s educational journey, and she strives to create a warm, inviting classroom that encourages exploration and curiosity. Megan uses a variety of teaching methods, including hands-on activities, storytelling, and play-based learning, to engage her students. She emphasizes social-emotional development, helping children build confidence and interpersonal skills. In her free time, Megan enjoys reading and crafting, often incorporating these activities into her lessons to inspire creativity in her students.",
      name: "Jerome Bell",
      profilePhoto: jerome,
      subject: "Physics",
      class: "JSS 4",
      email: "deanna.curtis@example.com",
      gender: "Male",
    },
    {
      id: 10,
      age: 50,
      about: "focuses on nurturing young minds in early childhood education, where her patient and playful approach helps children develop a love for learning. She believes that early experiences shape a child’s educational journey, and she strives to create a warm, inviting classroom that encourages exploration and curiosity. Megan uses a variety of teaching methods, including hands-on activities, storytelling, and play-based learning, to engage her students. She emphasizes social-emotional development, helping children build confidence and interpersonal skills. In her free time, Megan enjoys reading and crafting, often incorporating these activities into her lessons to inspire creativity in her students.",
      name: "Savannah Nguyen",
      profilePhoto: savannah,
      subject: "Accounting",
      class: "JSS 4",
      email: "georgia.young@example.com",
      gender: "Female",
    },
    {
      id: 11,
      name: "Wade Warren",
      age: 45,
      about: "teaches economics and financial literacy, equipping students with practical knowledge that empowers them to make informed financial decisions. He believes that understanding economics is crucial for navigating the complexities of modern life. James uses real-world examples and case studies to make his lessons relatable and engaging. He encourages students to think critically about economic issues and their impact on society. Outside of the classroom, James is actively involved in community financial literacy programs, helping individuals and families improve their financial well-being. He enjoys discussing current events and their economic implications with his students.",
      profilePhoto: wade,
      subject: "C.R.S",
      class: "JSS 5",
      email: "jackson.graham@example.com",
      gender: "Male",
    },
    {
      id: 12,
      name: "Annette Black",
      age: 45,
      about: "is a dedicated special education teacher who works tirelessly to ensure that all students, regardless of their challenges, receive the support they need to succeed. She believes that every child has the potential to learn and grow. Sophia employs individualized teaching strategies and adaptations to cater to diverse learning needs, fostering an inclusive classroom environment. She collaborates closely with families and support staff to develop personalized education plans. Outside of teaching, Sophia advocates for special education resources and awareness in her community, striving to create a more inclusive society for all learners.",
      profilePhoto: jane,
      subject: "Politics",
      class: "JSS 1",
      email: "dolores.chambers@example.com",
      gender: "Female",
    },
  ],

  students: [
    {
      id: 1,
      age: 18,
      about:
        "A passionate bookworm who loves fantasy novels and dreams of becoming a writer. In her free time, she enjoys painting and hiking.",
      name: "Eneh Mercy",
      profilePhoto: eneh,
      studentId: 703703,
      email: "michelle.rivera@example.com",
      class: "JSS 2",
      gender: "Female",
    },
    {
      id: 2,
      name: "Marvin Kinney",
      profilePhoto: kinney,
      studentId: 877037,
      email: "kenzi.lawson@example.com",
      class: "JSS 3",
      gender: "Female",
    },
    {
      id: 3,
      name: "Brooklyn Simon",
      profilePhoto: brooklyn,
      studentId: 370357,
      email: "nathan.roberts@example.com",
      class: "SS 3",
      gender: "Female",
    },
    {
      id: 4,
      name: "Dianne Russell",
      profilePhoto: dianne,
      studentId: 870316,
      email: "felicia.reid@example.com",
      class: "SS 3",
      gender: "Male",
    },
    {
      id: 5,
      name: "Cody Fisher",
      profilePhoto: codyF,
      studentId: 547030,
      email: "tim.jennings@example.com",
      class: "SS 3",
      gender: "Female",
    },
    {
      id: 6,
      name: "Guy Hawkins",
      profilePhoto: hawkins,
      studentId: 270374,
      email: "alma.lawson@example.com",
      class: "JSS 1",
      gender: "Male",
    },
    {
      id: 7,
      name: "Devon Lane",
      profilePhoto: lane,
      studentId: 970322,
      email: "debra.holt@example.com",
      class: "JSS 3",
      gender: "Female",
    },
    {
      id: 8,
      name: "Ronald Richards",
      profilePhoto: ronald,
      studentId: 570336,
      email: "deanna.curtis@example.com",
      class: "JSS 4",
      gender: "Male",
    },
    {
      id: 9,
      name: "Bessie Cooper",
      profilePhoto: cooper,
      studentId: 157034,
      email: "georgia.young@example.com",
      class: "JSS 4",
      gender: "Female",
    },
    {
      id: 10,
      name: "Eleanor Pena",
      profilePhoto: pena,
      studentId: 570356,
      email: "jackson.graham@example.com",
      class: "JSS 5",
      gender: "Female",
    },
    {
      id: 11,
      name: "Savannah Nguyen",
      profilePhoto: nguyen,
      studentId: 177037,
      email: "dolores.chambers@example.com",
      class: "JSS 1",
      gender: "Female",
    },
  ],
};
export default schoolData;

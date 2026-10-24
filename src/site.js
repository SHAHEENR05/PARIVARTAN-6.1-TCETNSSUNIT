import content from "./content.json";

export const { faculty, articles, poems, projects } = content;

export const magazine = {
  name: "परिवर्तन",
  latin: "Parivartan",
  theme: "Prakriti ka Sankalp, Parivartan ka Vikalp",
  themeDeva: "प्रकृति का संकल्प, परिवर्तन का विकल्प",
  volume: "Volume 6",
  issue: "Issue 1.0",
  year: "2026-27",
  presenter: "TCET NSS UNIT",
  unit: "TCET NSS UNIT B-34",
  college: "Thakur College of Engineering and Technology",
  place: "Kandivali (East), Mumbai",
};

export const council = {
  officers: ["Dr. Satish Singh", "Dr. Vinita Agarwal"],
  deputies: ["Dr. Sajjankumar Lal", "Ms. Jyoti Vanawe"],
  members: [
    "Mr. Ashutosh Pandey",
    "Ms. Sejal Gupta",
    "Mr. Indresh Prajapati",
    "Mr. Sumit Gupta",
    "Ms. Jyoti Gupta",
    "Mr. Lakshya Jha",
    "Mr. Vishesh Saroj",
  ],
};

export const achievements = [
  {
    value: "74+",
    unit: "blood donors",
    title: "Blood Donation Camp",
    text: "In collaboration with Nair Hospital Blood Centre and Lions Club of Millennium, a blood donation camp successfully collected blood from 74+ donors, contributing to the cause of saving lives.",
  },
  {
    value: "60+",
    unit: "saplings planted",
    title: "Tree Plantation at INS Hamla",
    text: "At INS Hamla, 60+ saplings, including chikoo and custard apple, were planted to promote environmental sustainability and nurture a greener future.",
  },
  {
    value: "90+",
    unit: "people trained",
    title: "CPR Training & Awareness",
    text: "A CPR training and awareness session empowered 90+ participants, including faculty members, NCC cadets, and members of other social bodies, with essential life-saving knowledge.",
  },
  {
    value: "1st",
    unit: "prize",
    title: "Anti-Ragging Skit",
    text: "TCET NSS UNIT won 1st prize in the Anti-Ragging Skit, which was performed in front of the college and the Principal.",
  },
];

export const teams = {
  technical: ["Mr. Harsh Patel", "Ms. Vanshika Shrivastava", "Mr. Atharva Hande", "Mr. Vikas Madheshiya", "Mr. Brijesh Gupta", "Mr. Sanmay Chavan"],
  creative: ["Mr. Gaurang Bhoir", "Ms. Ankita Jha", "Ms. Sanskriti Prasad", "Ms. Shaheen Madeena"],
};

export const isDeva = (s) => /[ऀ-ॿ]/.test(s);
export const langCode = (l) => (l === "Hindi" ? "hi" : l === "Marathi" ? "mr" : "en");
export const pad = (n) => String(n).padStart(2, "0");
export const img = (name) => `./img/${name}.jpg`;
export const logo = { tcet: "./img/tcet-logo.png", nss: "./img/nss-logo.png" };

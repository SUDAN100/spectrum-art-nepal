import { CommitteeMember } from "@/types";

export const executiveCommittee: CommitteeMember[] = [
  {
    id: "indra-shrestha",
    name: "Indra Shrestha",
    position: "President",
    category: "executive",
    image: "/images/committee/indra-shrestha.jpg",
    order: 1,
  },
  {
    id: "ramkrishna-thapa",
    name: "Ramkrishna Thapa",
    position: "Vice President",
    category: "executive",
    image: "/images/committee/ramkrishna-thapa.jpg",
    order: 2,
  },
  {
    id: "kishor-kanaujiya",
    name: "Kishor Kanaujiya",
    position: "Secretary",
    category: "executive",
    image: "/images/committee/kishor-kanaujiya.jpg",
    order: 3,
  },
  {
    id: "dal-bahadur-rai",
    name: "Dal Bahadur Rai",
    position: "Joint Secretary",
    category: "executive",
    image: "/images/committee/dal-bahadur-rai.jpg",
    order: 4,
  },
  {
    id: "deepak-maharjan",
    name: "Deepak Maharjan",
    position: "Treasurer",
    category: "executive",
    image: "/images/committee/deepak-maharjan.jpg",
    order: 5,
  },
  {
    id: "nisha-maharjan",
    name: "Nisha Maharjan",
    position: "Member",
    category: "executive",
    image: "/images/committee/nisha-maharjan.jpg",
    order: 6,
  },
  {
    id: "binita-buddhacharya",
    name: "Binita Buddhacharya",
    position: "Member",
    category: "executive",
    image: "/images/committee/binita-buddhacharya.jpg",
    order: 7,
  },
  {
    id: "bishnu-chaudhari",
    name: "Bishnu Chaudhari",
    position: "Member",
    category: "executive",
    image: "/images/committee/bishnu-chaudhari.jpg",
    order: 8,
  },
  {
    id: "hari-nepali",
    name: "Hari Nepali",
    position: "Member",
    category: "executive",
    image: "/images/committee/hari-nepali.jpg",
    order: 9,
  },
];

export const advisors: CommitteeMember[] = [
  {
    id: "kk-karmacharya",
    name: "K.K. Karmacharya",
    position: "Founding Advisor",
    category: "advisor",
    order: 10,
  },
  {
    id: "advocate-chandra-maharjan",
    name: "Advocate Chandra Maharja",
    position: "Legal Advisor",
    category: "advisor",
    order: 11,
  },
];

export const allLeadership = [...executiveCommittee, ...advisors];

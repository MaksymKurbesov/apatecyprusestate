import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../index";

const ipMap = {};

const nicknames = [
  "1nvestor",
  "ADMIN",
  "Career",
  "David",
  "Dima77",
  "Dreammo10",
  "MakarInvestor",
  "Monetaryabundance",
  "Pavel",
  "Success",
  "Tasya",
  "Trader228",
  "beast",
  "diamond",
  "investbiz",
  "investor",
  "kimpossible",
  "Nerox",
  "Roxan",
];

export const checkIp = async () => {
  const duplicates = [];

  const userDocs = await collection(db, "users");
  const snapshot = await getDocs(userDocs);

  snapshot.docs.forEach((doc) => {
    const userData = doc.data();
    const backendInfo = userData.backendInfo; // предполагаем, что это массив

    if (!backendInfo) return;

    backendInfo.forEach((info) => {
      const ip = info.ip;
      if (!ipMap[ip]) {
        ipMap[ip] = [];
      }
      ipMap[ip].push(doc.id); // или userData для полной информации о пользователе
    });
  });

  for (const [ip, users] of Object.entries(ipMap)) {
    if (users.length > 1) {
      duplicates.push({ ip, users });
    }
  }

  console.log(duplicates, "duplicates");
  return duplicates;
};

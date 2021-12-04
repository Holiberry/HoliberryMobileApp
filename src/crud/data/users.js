import {user, user2, user3, user4, user5, user6} from "./user";
import {schools} from "./schools";

let curr = 0;
export const users = [
    "Acemi",
    "Bends",
    "Boardwa",
    "Bridiazo",
    "ChatBradel",
    "CrownWizard",
    "DayMura",
    "Egerylig",
    "Ergonet",
    "Frontin",
    "Gleemiskn",
    "AverageEnjoyer",
    "Hearch",
    "Islandra",
    "Jinotok",
    "Ninjarv",
    "OlympicRonz",
    "Plashexc",
    "Plentypy",
    "Poetia",
    "Primart",
    "Susakeel",
    "SynchroAnon",
    "Tencerifi",
    "Terrifish",
    "Twingtoda",
    "Wayla",
].sort(() => (Math.random() > .5) ? 1 : -1).map(name => {
    curr += Math.random() * 1000;
    return ({
        name,
        pts: curr
    })
}).reverse();
users[0].pictureurl = user4.picture.large;
users[1].pictureurl = user5.picture.large;
users[2].pictureurl = user6.picture.large;
users[3].pictureurl = "https://randomuser.me/api/portraits/women/56.jpg"

let curr2 = users[0].pts + 4000;
export const users2 = [
    "Adistresc",
    "ApenguinKnight",
    "BeautyLove",
    "Bitleon",
    "Chikkerce",
    "ContentForever",
    "ExclusiveMunde",
    "Firepres",
    "Geniusbelk",
    "GuruMiracle",
    "Imettaal",
    "Interge",
    "Jaymery",
    "Kinold",
    "Marrayee",
    "Milution",
    "MrBroadcast",
    "RadiantScoop",
    "RedKaptain",
    "Richiekh",
    "RobBlond",
    "Rodeoneli",
    "Standze",
    "StoopSparkling",
    "Tagzhodo",
    "Talentedit",
    "Thinnels",
    "Tubator",
    "UrGold",
    "Valinger",
].sort(() => (Math.random() > .5) ? 1 : -1).map(name => {
    curr2 += Math.random() * 2000;
    return ({
        name,
        pts: curr2
    })
}).reverse();

users2[0].pictureurl = user.picture.large;
users2[1].pictureurl = user3.picture.large;
users2[2].pictureurl = user2.picture.large;
users2[3].pictureurl = "https://randomuser.me/api/portraits/women/59.jpg"

const roman = ['IV', 'V', 'VI', 'VII', 'VIII']
const subclass = ['a', 'b', 'c', 'd', 'e']

let mockedSchools = [];
for (let i = 0; i < 3; i++) {
    mockedSchools.push({
        school: schools[i].name,
        class: roman[Math.floor(Math.random() * 5)],
        subclass: subclass[Math.floor(Math.random() * 5)]
    })
}
export const mockSchools = mockedSchools

for (let i = 0; i < 8; i++) {
    users2[i].school = schools[i+3].name;
    users2[i].class = roman[Math.floor(Math.random() * 5)]
    users2[i].subclass = subclass[Math.floor(Math.random() * 5)]
}
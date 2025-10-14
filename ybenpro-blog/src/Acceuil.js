import { useState } from "react";
import Bloglist from "./Blocklist";

const Acceuil = () => {
    let [age, setAge] = useState(24);
    let [name, setName] = useState("duplex");
    const handclick = () => {
        setName("yben alex");
        setAge(26);
    };

    const handclick2 = (nom) => {
        console.log(`salut ${nom}`);
    };
    const [blogs, setblog] = useState([
        {
            id: 1,
            title: "bienvenue dans mon blog",
            body: "un jour ou l autre je finirais par etre un consultant BI et python developper",
            author: "yben alex",
            date: "10/10/2025"
        },
        {
            id: 2,
            title: "la nuit des codeurs",
            body: "de nuit je code aussi bien avec django qu avec react , c est a dire que j utile le python et le javascript , je termine par le powerBI",
            author: "delors Bene",
            date: "15/10/2025"
        },
        {
            id: 3,
            title: "parcours d un dveloppeur",
            body: "j ai commence a me former en travaillant , piuis j ai ouvert ma petite boite , je suis aller de petit projets en petit projet , jusqu a obtenir mon premier contrat et c etait le debut d une nouvelle ere",
            author: "Ben Yétè",
            date: "17/10/2027"
        }
    ]);
    const Handledelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setblog(newBlogs);
    }
    return (
        <div className="home">
            <h2>Notre page d'accueil</h2>
            <br />
            <p>{name} a {age} ans </p>
            <br />
            <button onClick={handclick}>clcquer moi</button>
            <br />
            <br />
            <button onClick={() => handclick2("ybenpro")}>appuyer moi</button>
            <div className="home_2">
                <Bloglist blogs={blogs} title={"liste des blogs"} Handledelete={Handledelete} />
                <Bloglist blogs={blogs.filter((blog) => blog.author == "Ben Yétè")} title={"liste des blogs de Ben Yétè"} />
            </div>
        </div>
    );
}


export default Acceuil;
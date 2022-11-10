import style from "./about.module.css"

export default function About() {

    return (
        <div>
            <div className={style.About}>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores quidem quas ducimus similique eum porro accusantium natus, ex aliquid! Veritatis explicabo fugit saepe adipisci porro harum maiores est hic.</p>
            </div>
            <div className={style.About2}>
                <div className={style.Detail}>
                    <h2>Subtitle</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, sit. Maxime vitae sunt harum deleniti aut quisquam, doloremque veritatis rerum dolor qui! Ducimus cum, maiores modi at quibusdam porro corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora laboriosam voluptatem numquam tenetur pariatur, inventore id perspiciatis reiciendis magni nulla, autem consequuntur accusantium recusandae dolore necessitatibus aliquam porro placeat.</p>
                </div>
                <img src="https://images.pexels.com/photos/2771927/pexels-photo-2771927.jpeg?auto=compress&cs=tinysrgb&w=600" alt="about us"></img>
            </div>
        </div>
    )
}
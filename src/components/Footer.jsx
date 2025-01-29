import styles from './Footer.module.css'

const Footer = () => {

    let year = new Date().getFullYear()

    return(
        <footer>
            <p>{year} ©  Jose Dino Abaya</p>
        </footer>
    )
}



export default Footer
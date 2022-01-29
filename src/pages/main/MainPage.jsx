import React, {useState} from 'react';
import MyAppBar from "../../components/MyAppBar/MyAppBar";
import LoginModal from "../../components/LoginModal/LoginModal";
import AboutInfo from "./AboutInfo/AboutInfo";
import WelcomeMain from "./Welcome/WelcomeMain";
import GridMain from "./Grid/GridMain";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    return (
        <div>

            <MyAppBar openModal={setIsModalOpen} />

            <LoginModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>

            <main>
                <AboutInfo/>
                <WelcomeMain/>
                <GridMain cards={cards}/>
                <Footer/>
            </main>

            <footer>

            </footer>

        </div>
    );
};

export default MainPage;
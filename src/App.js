import React, {Component} from 'react';

import Section from './Section'
import Menu from './Menu'
import TitleContent from './TitleContent'
import MainContent from './MainContent'
import Guests from './Guests'
import MoreInformationSoon from './MoreInformationSoon'
import Timetable from './Timetable'

import './style/App.css';

import { IoIosMenu, IoIosClose } from "react-icons/io";

import logoKNF from './images/logoKNF.jpg'
import KNFphoto from './images/placeholder.png'
import PeopleImg from './images/person.jpg'


class App extends Component{ 

    mainText = `Jako Koło Naukowe Fizyków działające na Wydziale Fizyki Politechniki Warszawskiej
    mamy przyjemność zaprosić Doktorantów i Studentów na XIX edycję Ogólnopolskiej 
    Sesji Kół Naukowych Fizyków, która odbędzie się na jesieni 2020 r. w Warszawie.`

    guests = [
        {id: 0, name: "Jan Kowalski", subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", image: PeopleImg},
        {id: 1, name: "Jan Kowalski", subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", image: PeopleImg},
        {id: 2, name: "Jan Kowalski", subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", image: PeopleImg}
    ]

    closeMenuButton = <IoIosClose />;
    openMenuButton = <IoIosMenu />;

    state = {
        width: window.innerWidth,
        menuActive: false,
        buttonContent: this.openMenuButton,
        sections: [
            {id: 0 , name: "", content: <TitleContent />, active: true},
            {id: 1 , name: "XIX OSKNF", content: <MainContent text={this.mainText} img={KNFphoto} />, active: false},
            {id: 2 , name: "Goście specjalni", content: <Guests guests={this.guests}/>, active: false},
            {id: 3 , name: "Plan konferencji", content: <Timetable />, active: false},
            {id: 4 , name: "Rejestracja", content: <MoreInformationSoon />, active: false},
            {id: 5 , name: "Patroni i sponsorzy", content: <MoreInformationSoon />, active: false},
            {id: 6 , name: "Kontakt", content: <MoreInformationSoon />, active: false}
        ]
    }

    webSections = this.state.sections.map(section=> <Section key={section.id} id={section.id} name={section.name} content={section.content} />)

    closeMenu = () =>{
        this.setState({
            menuActive: false,
            buttonContent: this.openMenuButton
        })
    }

    openMenu = () => {
        this.setState({
            menuActive: true,
            buttonContent: this.closeMenuButton
        })
    }

    handleOpenOrCloseMenuClick = () =>{
        if(this.state.menuActive){
            this.closeMenu()
        } else{
            this.openMenu()
        }
    }
    
    updateWindowWidth = () => {
        this.setState({ 
            width: window.innerWidth
        });
    }
    
    activeSectionId = this.state.sections.indexOf(section => section.active===true);
    
    updateActiveSection = e => {
        let sections = this.state.sections;
        sections.map(section => section.active = false)
        let windowSections = document.querySelectorAll('section');
        let sectionsHeight = [0];
        windowSections.forEach(section => sectionsHeight.push(section.scrollHeight + sectionsHeight[sectionsHeight.length - 1]));
        // windowSections.map((section, index) => section = windowSections.slice(0,index).reduce((a,b) => a+b));
        let windowHeight = document.documentElement.scrollTop + 0.9*window.innerHeight;
        console.log(windowHeight)
        console.log(sectionsHeight)
        
        for(let i=0 ; i < sectionsHeight.length - 1 ; i++){
            if(windowHeight >= sectionsHeight[i] && windowHeight < sectionsHeight[i + 1]){
                sections[i].active = true;
                // console.log(i)
            }
        }

        this.setState({ 
            sections,
        });
    }

    componentDidMount() {
        // this.updateWindowWidth();
        window.addEventListener('resize', this.updateWindowWidth);
        window.addEventListener('scroll',this.updateActiveSection);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
        window.removeEventListener('scroll',this.updateActiveSection);
      }
      

    render(){
        if(window.innerWidth > 1100) return(
            <>
                <div className="nav-section">
                    <img src={logoKNF} alt="KNF"/>
                    <Menu sections={this.state.sections} click={undefined}/>
                </div>
                {this.webSections}
            </>
        )
        else return(
            <>
                <div className="nav-section">
                    <img src={logoKNF} alt="KNF" />
                    <div className="menu-button" onClick={this.handleOpenOrCloseMenuClick}>{this.state.buttonContent}</div>
                    {this.state.menuActive ? <Menu sections={this.state.sections} click={this.closeMenu}/> : null}
                </div>
                {this.state.menuActive ? null: this.webSections}
            </>
        )
    }
}

export default App;
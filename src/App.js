import React, {Component} from 'react';

import Section from './Section'
import Menu from './Menu'
import TitleContent from './TitleContent'
import MainContent from './MainContent'
import Guests from './Guests'
import MoreInformationSoon from './MoreInformationSoon'

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
            {id: 3 , name: "Plan konferencji", content: <MoreInformationSoon />, active: false},
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
        //Scroll to section up or down
        const activeSectionIdMin = Math.floor((document.documentElement.scrollTop/document.documentElement.clientHeight));
        const activeSectionIdMax = Math.ceil((document.documentElement.scrollTop/document.documentElement.clientHeight));
        if(this.activeSectionId === this.state.sections.length-1){
            this.activeSectionId=Math.floor((document.documentElement.scrollTop/document.documentElement.clientHeight)+0.002);
        }
        else if(this.activeSectionId === 0){
            this.activeSectionId=activeSectionIdMax;
        }
        else{
            this.activeSectionId = this.activeSectionId===activeSectionIdMax ? activeSectionIdMin : activeSectionIdMax;
        }
            
        //Update sections (which section is active now)
        let sections = this.state.sections;
        sections.forEach(section => {section.id === this.activeSectionId ? section.active=true : section.active=false});


        this.setState({
            sections,
        })

        // Scroll to active section
        if(this.state.sections.indexOf(section => section.active===true) !== this.activeSectionId){
            window.scrollTo(0, this.activeSectionId*window.innerHeight);
        }            
    }

    componentDidMount() {

        this.updateWindowWidth();
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
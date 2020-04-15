import React, {Component} from 'react';
import Section from './Section'
import MenuItem from './MenuItem'
import './Menu.css';
import logoKNF from './images/logoKNF.jpg'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import TitleContent from './TitleContent'
import MainContent from './MainContent'

class Menu extends Component{ 

    closeMenuButton = <IoIosClose value={{className: "menuButton"}}/>;
    openMenuButton = <IoIosMenu value={{className: "menuButton"}}/>;

    state = {
        width: window.innerWidth,
        menuElements: "",
        menuActive: false,
        buttonContent: this.openMenuButton,
        sections: [
            {id: 0 , name: "", content: <TitleContent />, active: true},
            {id: 1 , name: "XIX OSKNF", content: <MainContent />, active: false},
            {id: 2 , name: "Goście specjalni", content: "", active: false},
            {id: 3 , name: "Plan konferencji", content: "", active: false},
            {id: 4 , name: "Rejestracja", content: "", active: false},
            {id: 5 , name: "Patroni i sponsorzy", content: "", active: false},
            {id: 6 , name: "Kontakt", content: "", active: false}
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

    updateMenuElements = sections =>{
        const menuElements = sections.map(section => section.name==="" ? null : <MenuItem key={section.id} id={section.id} name={section.name} click={this.closeMenu} active={section.active}/>)
        this.setState({
            menuElements
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
            this.activeSectionId=Math.floor((document.documentElement.scrollTop/document.documentElement.clientHeight)+0.004);
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

        //Update menuElements (which section is active now)
        this.updateMenuElements(sections);

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
        if(window.innerWidth > 1000) return(
            <div>
                <div className="nav-section">
                    <img src={logoKNF} alt="KNF"/>
                    <nav>
                        {this.state.menuElements}
                    </nav>
                </div>
                {this.webSections}
            </div>
        )
        else return(
            <div>
                <div className="nav-section">
                    <img src={logoKNF} alt="KNF" />
                    <div className="menu-button" onClick={this.handleOpenOrCloseMenuClick}>{this.state.buttonContent}</div>
                    {this.state.menuActive ? <nav className="menu--active">{this.state.menuElements}</nav> : null}
                </div>
                {this.state.menuActive ? null: this.webSections}
            </div>
        )
    }
 
}

export default Menu;
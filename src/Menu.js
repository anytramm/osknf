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

    menuElements = this.state.sections.map(section => section.name==="" ? null : <MenuItem key={section.id} id={section.id} name={section.name} active={section.active}/>)

    webSections = this.state.sections.map(section=> <Section key={section.id} id={section.id} name={section.name} content={section.content} />)

    handleMenuClick = e =>{
        let buttonContent;
        if(this.state.menuActive){
            buttonContent = this.openMenuButton;
        } else{
            buttonContent = this.closeMenuButton;
        }
        this.setState({
            menuActive: !this.state.menuActive,
            buttonContent

        })
    }
    

    updateWindowWidth = () => {
        this.setState({ 
            width: window.innerWidth
        });
    }

    
    activeSectionId = this.state.sections.indexOf(section => section.active===true);
    
    updateActiveSection = e => {

            // Active section ID
            const activeSectionIdMin = Math.floor((document.documentElement.scrollTop/document.documentElement.clientHeight));
            const activeSectionIdMax = Math.ceil((document.documentElement.scrollTop/document.documentElement.clientHeight));
            if(this.activeSectionId === this.state.sections.length-1){
                this.activeSectionId=Math.floor((document.documentElement.scrollTop/document.documentElement.clientHeight)+0.003418803418803);
            }
            else if(this.activeSectionId === 0){
                this.activeSectionId=activeSectionIdMax;
            }
            else{
                this.activeSectionId = this.activeSectionId===activeSectionIdMax ? activeSectionIdMin : activeSectionIdMax;
            }
            console.log(document.documentElement.scrollTop/document.documentElement.clientHeight)
            
            let sections = this.state.sections;
            sections.forEach(section => {section.id === this.activeSectionId ? section.active=true : section.active=false});

            //Update menuElements
            this.menuElements = sections.map(section => section.name==="" ? null :<MenuItem key={section.id} id={section.id} name={section.name} active={section.active}/>);

            this.setState({
                sections,
                menuActive: false,
                buttonContent: this.openMenuButton
            })

            // Scroll animation
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
                        {this.menuElements}
                    </nav>
                </div>
                {this.webSections}
            </div>
        )
        else return(
            <div>
                <div className="nav-section">
                    <img src={logoKNF} alt="KNF" />
                    <div className="menu-button" onClick={this.handleMenuClick}>{this.state.buttonContent}</div>
                    {this.state.menuActive ? <nav className="menu--active">{this.menuElements}</nav> : null}
                </div>
                {this.webSections}
            </div>
        )
    }
 
}

export default Menu;
import React, {Component} from 'react';
import Section from './Section'
import MenuItem from './MenuItem'
import './Menu.css';
// import logoKNF from './images/logoKNF.jpg'
import { IoIosMenu, IoIosClose } from "react-icons/io";

class Menu extends Component{ 

    closeMenuButton = <IoIosClose value={{className: "menuButton"}}/>;
    openMenuButton = <IoIosMenu value={{className: "menuButton"}}/>;

    state = {
        width: window.innerWidth,
        menuActive: false,
        buttonContent: this.openMenuButton,
        sections: [
            {id:0 , name: "Strona główna", content: "", active: true},
            {id:1 , name: "XIX OSKNF", content: "", active: false},
            {id:2 , name: "Lokalizacja", content: "", active: false},
            {id:3 , name: "Goście specjalni", content: "", active: false},
            {id:4 , name: "Plan konferencji", content: "", active: false},
            {id:5 , name: "Rejestracja", content: "", active: false},
            {id:6 , name: "Patroni i sposnorzy", content: "", active: false},
            {id:7 , name: "Kontakt", content: "", active: false}
        ]

    }

    menuElements = this.state.sections.map(section => <MenuItem key={section.id} id={section.id} name={section.name} active={section.active}/>)

    webSections = this.state.sections.map(section=> <Section key={section.id} id={section.id} name={section.name} content={section.content} />)

    handleClick = e =>{
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

    updateActiveSection = e => {
        const activeSectionId = Math.floor(document.documentElement.scrollTop/window.innerHeight);
        let sections = this.state.sections;
        sections.forEach(section => {section.id === activeSectionId ? section.active=true : section.active=false});
        this.menuElements = sections.map(section => <MenuItem key={section.id} id={section.id} name={section.name} active={section.active}/>)
        
        this.setState({
            sections
        })

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
                {/* <img src={logoKNF} alt="KNF"/> */}
                <nav>
                    {this.menuElements}
                </nav>
                {this.webSections}
            </div>
        )
        else return(
            <div>
                {/* <img src={logoKNF} alt="KNF" /> */}
                <nav>
                    <div onClick={this.handleClick}>{this.state.buttonContent}</div>
                    {this.state.menuActive ? this.menuElements : null}
                </nav>
                {this.webSections}
            </div>
        )
    }
 
}

export default Menu;
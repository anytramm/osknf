import React, {Component} from 'react';
import './Menu.css';
import logoKNF from './images/logoKNF.jpg'
import { IoIosMenu, IoIosClose } from "react-icons/io";

const MenuElements = props => {
    const sections = props.sections.filter(section => section.name)
    return sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.name.toUpperCase()}</a>)
}


class Menu extends Component{ 
    closeMenuButton = <IoIosClose value={{className: "menuButton"}}/>;
    openMenuButton = <IoIosMenu value={{className: "menuButton"}}/>;

    state = {
        width: window.innerWidth,
        menuActive: false,
        buttonContent: this.openMenuButton
    }

    handleClick = e =>{
        let buttonContent;
        if(this.state.menuActive){
            buttonContent = this.openMenuButton;
        } else{
            buttonContent = this.closeMenuButton;
        }
        this.setState({
            menuActive: !this.state.menuActive,
            buttonContent: buttonContent

        })
    }

    componentDidMount() {
        this.updateWindowWidth();
        window.addEventListener('resize', this.updateWindowWidth);
      }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
      }
      
      updateWindowWidth = () => {
        this.setState({ 
            width: window.innerWidth
        });
      }

    render(){
        if(window.innerWidth > 1000) return(
            <div>
                <img src={logoKNF} alt="KNF"/>
                <nav>
                    <MenuElements sections={this.props.sections}/>
                </nav>
            </div>
        )
        else return(
            <div>
                <img src={logoKNF} alt="KNF" />
                <nav>
                    <div onClick={this.handleClick}>{this.state.buttonContent}</div>
                    {this.state.menuActive ? <MenuElements sections={this.props.sections}/> : null}
                </nav>
            </div>
        )
    }
 
}

export default Menu;
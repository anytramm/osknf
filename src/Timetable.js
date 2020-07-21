import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import './style/Timetable.css'

class Timetable extends Component{ 
	state = {
		width: window.innerWidth
	}

	updateWindowWidth = () => {
		this.setState({ 
				width: window.innerWidth,
		});
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateWindowWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowWidth);
	}
	

	render(){
  if(this.state.width > 900){
    return(
      <table>
        <thead>
          <tr>
            <th>Godzina</th>
            <th>Czwartek</th>
            <th>Piątek</th>
            <th>Sobota</th>
            <th>Niedziela</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00-9:00</td>
            <td></td>
            <td>Wyjście do Instytutu Plazmy</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>9:00-10:00</td>
            <td></td>
            <td>Wyjście do Instytutu Plazmy</td>
            <td>Sesja wykładowa 7</td>
            <td>Sesja wykładowa 11</td>
          </tr>
          <tr>
            <td>10:00-11:00</td>
            <td></td>
            <td>Wyjście do Instytutu Plazmy</td>
            <td>Sesja wykładowa 8</td>
            <td>Sesja wykładowa 12</td>
          </tr>
          <tr>
            <td>11:00-12:00</td>
            <td></td>
            <td>Wyjście do Instytutu Plazmy</td>
            <td>Wykład specjalny</td>
            <td>Omównienie przyszłości OSKNF</td>
          </tr>
          <tr>
            <td>12:00-13:00</td>
            <td></td>
            <td>Wykład specjalny</td>
            <td>Sesja wykładowa 9</td>
            <td>Omównienie przyszłości OSKNF</td>
          </tr>
          <tr>
            <td>13:00-14:00</td>
            <td></td>
            <td>Sesja wykładowa 3</td>
            <td>Sesja wykładowa 10</td>
            <td>Zakończenie konferencji</td>
          </tr>
          <tr>
            <td>14:00-15:00</td>
            <td>Otwarcie konferencji</td>
            <td>Sesja wykładowa 4</td>
            <td>Obiad</td>
						<td></td>
          </tr>
          <tr>
            <td>15:00-16:00</td>
            <td>Wykład specjalny</td>
            <td>Obiad</td>
            <td>Sesja plakatowa</td>
						<td></td>
          </tr>
          <tr>
            <td>16:00-17:00</td>
            <td>Sesja wykładowa 1</td>
            <td>Sesja wykładowa 5</td>
            <td>Sesja plakatowa</td>
						<td></td>
          </tr>
          <tr>
            <td>17:00-18:00</td>
            <td>Sesja wykładowa 2</td>
            <td>Sesja wykładowa 6</td>
            <td>Sesja plakatowa</td>
						<td></td>
          </tr>
          <tr>
            <td>???</td>
            <td>Wyjście wieczorne</td>
            <td>Wyjście wieczorne</td>
            <td>Wyjście wieczorne</td>
						<td></td>
          </tr>
        </tbody>
      </table>
    )
  }
  return(
    <Router>
      <ul className="timetable">
        <li>
          <NavLink to="/" exact>Czwartek</NavLink>
        </li>
        <li>
          <NavLink to="/piatek">Piątek</NavLink>
        </li>
        <li>
          <NavLink to="/sobota">Sobota</NavLink>
        </li>
        <li>
          <NavLink to="/niedziela">Niedziela</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <table>
            <thead>
              <tr>
                <th>Godzina</th>
                <th>Plan dnia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14:00-15:00</td>
                <td>Otwarcie konferencji</td>
              </tr>
              <tr>
                <td>15:00-16:00</td>
                <td>Wykład specjalny</td>
              </tr>
              <tr>
                <td>16:00-17:00</td>
                <td>Sesja wykładowa 1</td>
              </tr>
              <tr>
                <td>17:00-18:00</td>
                <td>Sesja wykładowa 2</td>
              </tr>
              <tr>
                <td>???</td>
                <td>Wyjście wieczorne</td>
              </tr>
            </tbody>
          </table>
        </Route>
        <Route path="/piatek">
          <table>
            <thead>
              <tr>
                <th>Godzina</th>
                <th>Plan dnia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00-9:00</td>
                <td>Wyjście do Instytutu Plazmy</td>
              </tr>
              <tr>
                <td>9:00-10:00</td>
                <td>Wyjście do Instytutu Plazmy</td>
              </tr>
              <tr>
                <td>10:00-11:00</td>
                <td>Wyjście do Instytutu Plazmy</td>
              </tr>
              <tr>
                <td>11:00-12:00</td>
                <td>Wyjście do Instytutu Plazmy</td>
              </tr>
              <tr>
                <td>12:00-13:00</td>
                <td>Wykład specjalny</td>
              </tr>
              <tr>
                <td>13:00-14:00</td>
                <td>Sesja wykładowa 3</td>
              </tr>
              <tr>
                <td>14:00-15:00</td>
                <td>Sesja wykładowa 4</td>
              </tr>
              <tr>
                <td>15:00-16:00</td>
                <td>Obiad</td>
              </tr>
              <tr>
                <td>16:00-17:00</td>
                <td>Sesja wykładowa 5</td>
              </tr>
              <tr>
                <td>17:00-18:00</td>
                <td>Sesja wykładowa 6</td>
              </tr>
              <tr>
                <td>???</td>
                <td>Wyjście wieczorne</td>
              </tr>
            </tbody>
          </table>
        </Route>
        <Route path="/sobota">
        	<table>
						<thead>
            	<tr>
              	<th>Godzina</th>
              	<th>Plan dnia</th>
            	</tr>
						</thead>
						<tbody>
            	<tr>
              	<td>9:00-10:00</td>
              	<td>Sesja wykładowa 7</td>
            	</tr>
            	<tr>
              	<td>10:00-11:00</td>
              	<td>Sesja wykładowa 8</td>
            	</tr>
            	<tr>
              	<td>11:00-12:00</td>
              	<td>Wykład specjalny</td>
            	</tr>
            	<tr>
              	<td>12:00-13:00</td>
              	<td>Sesja wykładowa 9</td>
            	</tr>
            	<tr>
              	<td>13:00-14:00</td>
              	<td>Sesja wykładowa 10</td>
            	</tr>
            	<tr>
              	<td>14:00-15:00</td>
              	<td>Obiad</td>
            	</tr>
            	<tr>
              	<td>15:00-16:00</td>
              	<td>Sesja plakatowa</td>
            	</tr>
            	<tr>
              	<td>16:00-17:00</td>
              	<td>Sesja plakatowa</td>
            	</tr>
            	<tr>
              	<td>17:00-18:00</td>
              	<td>Sesja plakatowa</td>
            	</tr>
            	<tr>
              	<td>???</td>
              	<td>Wyjście wieczorne</td>
            	</tr>
						</tbody>
          </table>
        </Route>
        <Route path="/niedziela">
        	<table>
						<thead>
            	<tr>
              	<th>Godzina</th>
              	<th>Plan dnia</th>
            	</tr>
						</thead>
						<tbody>
            	<tr>
              	<td>9:00-10:00</td>
              	<td>Sesja wykładowa 11</td>
            	</tr>
            	<tr>
              	<td>10:00-11:00</td>
              	<td>Sesja wykładowa 12</td>
            	</tr>
            	<tr>
              	<td>11:00-12:00</td>
              	<td>Omównienie przyszłości OSKNF</td>
            	</tr>
            	<tr>
              	<td>12:00-13:00</td>
              	<td>Omównienie przyszłości OSKNF</td>
            	</tr>
            	<tr>
              	<td>13:00-14:00</td>
              	<td>Zakończenie konferencji</td>
            	</tr>
						</tbody>
          </table>
        </Route>
      </Switch>
    </Router>
	)
	}
}

export default Timetable;
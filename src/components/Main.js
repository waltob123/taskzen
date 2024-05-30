import { Switch, Route } from "react-router-dom";
import Tasks from "./Tasks";
import About from "./About";
import Task from "./Task";
import NotFound from "./NotFound";


const Main = () => {
  return ( 
    <main className="container">
      <Switch>
        <Route exact path='/'>
          <Tasks />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/task/:id'>
          <Task />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}
export default Main;

/**
 * Switch, Route
 * 
 * Used for switching and defining each component to be rendered when the path is matched.
 * 
 */
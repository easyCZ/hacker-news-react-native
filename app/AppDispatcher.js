import Flux from 'flux';


const VIEW_ACTION = 'VIEW_ACTION';


class AppDispatcher extends Flux.Dispatcher {

  constructor() { super(); }

  handleView(action) {
    this.dispatch({
      source: VIEW_ACTION,
      action: action
    });
  }

}

let appDispatcher = new AppDispatcher();

export default appDispatcher;

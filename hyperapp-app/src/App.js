import {app} from "hyperapp"
import {defaultState} from "./state.js"
import {SetRoute} from "./actions";
import {Route, Routes} from "./Router";

export default app({
    init: defaultState,
    node: document.getElementById("app"),
    view: (state) => <div>{Routes[state.route].view(state)}</div>,
    subscriptions: state => [
        Route.sub(SetRoute)
    ]

})

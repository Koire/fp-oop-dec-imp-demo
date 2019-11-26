export const Route = (() => {
    const get = (dispatch, action) => dispatch(action, window.location.hash || '#')
    const sub = (dispatch, action) => {
        const handler = () => get(dispatch, action)
        window.addEventListener('hashchange', handler)
        return () => window.removeEventListener('hashchange', handler)
    }
    return {
        get: action => [get, action],
        sub: action => [sub, action]
    }
})()

export const Routes = {
    "#home": {
        title: "Home",
            view: (state) => <div>home</div>
    }
}

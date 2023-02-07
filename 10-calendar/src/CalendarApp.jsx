import { Provider } from "react-redux"
import { BrowserRouter, HashRouter } from "react-router-dom"
import { AppRouter } from "./router"
import { store } from "./store"

export const CalendarApp = () => {
  return (
    <Provider store={ store }>
        {/* <HashRouter> */}
       <BrowserRouter> 
          <AppRouter />
|     </BrowserRouter> 
        {/* </HashRouter> */}
    </Provider>
  )
}

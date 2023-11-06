import ThemeContext from '../contexts/ThemesContext';

export const withTheme = (Component) => (props) => {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => {
                return <Component theme = {theme} setTheme = {setTheme} {...props}/>
            }}
        </ThemeContext.Consumer>
    )
}
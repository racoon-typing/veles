import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeTheme } from '../../store/user-process/user-process';
import { State, Theme } from '../../types/state';
import './header.scss';


export default function Header() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state: State) => state.user.theme);

    function handleTheme(theme: Theme) {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(changeTheme({theme: newTheme}))
    }

    return (
        <header className="">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Veles</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>

                <button
                    onClick={() => handleTheme(theme)}
                    className="header__button inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                   {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
            </nav>
        </header>
    )
}
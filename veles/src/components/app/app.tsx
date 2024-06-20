import './app.scss'
import Header from "../header/header";
import ListWrapper from '../list-wrapper/list-wrapper';
import Card from '../сard/сard';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { State } from "../../types/state";
import { useEffect } from 'react';
import { setUser, setUsers } from '../../store/user-process/user-process';

export default function App() {
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((state: State) => state.user.activeUser);
  const userInfo = useAppSelector((state: State) => state.user.userInfo);
  const theme = useAppSelector((state: State) => state.user.theme);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(setUsers({ users: data }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers(); // Вызываем загрузку всех пользователей только один раз при старте

  }, [dispatch]);

  useEffect(() => {
    const applyTheme = () => {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark-theme');
      } else {
        root.classList.remove('dark-theme');
      }
    };

    applyTheme(); // Применяем тему при загрузке страницы
  }, [theme]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (activeUser !== null) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${activeUser}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          dispatch(setUser({ user: data }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser(); // Вызываем загрузку активного пользователя только при изменении activeUser

  }, [dispatch, activeUser]);

  return (
    <>
      <div>
        <Header></Header>

        {activeUser && userInfo !== null && <Card userInfo={userInfo} />}
        <ListWrapper></ListWrapper>
      </div>
    </>
  )
}

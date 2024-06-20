import './card.scss';
import { State, User } from '../../types/state';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteUser, setActiveUsers } from '../../store/user-process/user-process';

type CardProp = {
    userInfo: User | null,
}

export default function Card({ userInfo }: CardProp) {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state: State) => state.user.users);
    
    if (!userInfo) {
        return <div>Loading...</div>;
    }

    const { id, name, username, email, address, phone, website, company } = userInfo;

    // Проверяем наличие адреса и компании перед их использованием
    const fullAddress = address ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode} (${address.geo.lat}, ${address.geo.lng})` : 'Address not available';
    const companyInfo = company ? `${company.name}, "${company.catchPhrase}". ${company.bs}` : 'Company info not available';

    const handleDeleteCard = (id: number) => {
        // Функция для удаления пользователя по ID
        const updatedUsers = users.filter(user => user.id !== id);

        if (updatedUsers.length > 0) {
            dispatch(setActiveUsers({ activeUser: updatedUsers[0].id }));
        } else {
            dispatch(setActiveUsers({ activeUser: null })); // Устанавливаем null, если нет пользователей
        }

        dispatch(deleteUser({ users: updatedUsers }));
    };

    return (
        <div className="card group relative mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
            <h3 className="text-lg ">
                <b>
                    Name:
                </b>

                <span className="pl-2">
                    {name}
                </span>
            </h3>
            <p className="mt-1 text-sm font-medium ">
                <b>
                    Name:
                </b>

                <span className="pl-2">
                    {username}
                </span>
            </p>
            <p className="mt-1 text-sm font-medium ">
                <b>
                    E-mail:
                </b>

                <span className="pl-2">
                    {email}
                </span>
            </p>
            <p className="mt-1 text-sm font-medium ">
                <b>
                    Address:
                </b>

                <span className="pl-2">
                    {fullAddress}
                </span>
            </p>
            <p className="mt-1 text-sm font-medium ">
                <b>
                    Phone:
                </b>

                <span className="pl-2">
                    {phone}
                </span>
            </p>
            <p className="mt-1 text-sm font-medium ">
                <b>
                    Website:
                </b>

                <span className="pl-2">
                    {website}
                </span>
            </p>
            <p className="mt-1 text-sm font-medium ">
                <b>
                    Company:
                </b>

                <span className="pl-2">
                    {companyInfo}
                </span>
            </p>

            <button
                onClick={() => handleDeleteCard(id)}
                className='card__button inline-flex items-center rounded-md mt-4 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10'>
                Delete
            </button>
        </div>
    );
}
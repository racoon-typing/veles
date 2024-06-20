import ListItem from "../list-item/list-item";
import { useAppSelector } from "../../hooks";
import { State } from "../../types/state";

export default function ListBox() {
    const users = useAppSelector((state: State) => state.user.users);

    return (
        <ul className="list-box grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {users.map((user) => (
                <ListItem key={`card-${user.id}`} user={user}></ListItem>
            ))}
        </ul>
    )
}
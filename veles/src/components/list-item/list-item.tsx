import { useState } from "react";
import "./list-item.scss";

export default function ListItem({ user }) {
    const {activeCard, setActiveCard} = useState(0);

    const { id, name, username, email, address, phone, website, company } = user;
    const { street, suite, city, zipcode, geo } = address;
    const { name: companyName, catchPhrase, bs } = company;

    const fullAddress = `${street}, ${suite}, ${city}, ${zipcode} (${geo.lat}, ${geo.lng})`;
    const companyInfo = `${companyName}, "${catchPhrase}". ${bs}`;

    function handleItemChange(id: number) {
        setActiveCard(id);
    }

    return (
        <li className="list-item group relative"
            onClick={() => handleItemChange(id)}
        >
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
        </li>
    );
}
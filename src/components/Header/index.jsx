import './index.scss';
import { useLocation } from 'react-router';
import { useState } from "react";
import { Link } from 'react-router-dom';
import IconHome from '../../icons/IconHome';
import IconStats from '../../icons/IconStats';
import IconProfile from '../../icons/IconProfile';


export default function Header() {
    
    const path = useLocation();

    const isSelected = (name) => {
        return name === path.pathname;
    };

    const IconLink = ({icon, to, name}) => {
        const [hover, setHover] = useState(false);
        
        return (
            <div 
                className='header_link'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Link to={to}>
                    <icon.type color={isSelected(to)||hover?"#6B38FB" : "#000"} />
                </Link>
                {isSelected(to) && <div>{name}</div>}
            </div>
        );
    }

    return (
        <div className='header'>
        <Link to="/" className="header_logo">Yogasaan</Link>
            <div className='header_links'>
                <IconLink icon={<IconHome />} to="/" name="Home" />
                <IconLink icon={<IconStats />} to="/stats" name="Analytics" />
                <IconLink icon={<IconProfile />} to="/profile" name="Profile" />
            </div>
        </div>
    );
};
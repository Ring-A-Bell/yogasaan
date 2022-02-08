import './index.scss';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import IconHome from '../../icons/IconHome';
import IconStats from '../../icons/IconStats';
import IconProfile from '../../icons/IconProfile';


export default function Header() {
    
    const path = useLocation();

    const setColor = (name) => {
        return name === path.pathname ? "#6B38FB" : "#000";
    };

    const IconLink = ({icon, to}) => {
        return (
            <div className='header_link'>
                <Link to={to}>
                    <icon.type color={setColor(to)} />
                </Link>
            </div>
        );
    }

    return (
        <div className='header'>
            <div className='header_links'>
                <IconLink icon={<IconHome />} to="/" />
                <IconLink icon={<IconStats />} to="/stats" />
                <IconLink icon={<IconProfile />} to="/profile" />
            </div>
        </div>
    );
};
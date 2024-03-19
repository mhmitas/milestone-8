
const Link = ({route}) => {
    return (
        <li className="mr-8 hover:text-secondary">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;
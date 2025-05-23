import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
    'linkbank': 'Linked Bank',
    'add': 'Add Bank',
    'edit': 'Edit Bank',
    'recurringsettlement':'Recurring Settlements',
    'addrecurringsettlement': 'Add Recurring Settlement',
    'editrecurringsettlement': 'Edit Recurring Settlement',
    'editRole':'Edit Role',
    'addRole':'Add Role',
    'editUser':'Edit User',
    'addUser':'Add User',
    'rolemanagement':'Role Management',
    'usermanagement':'User Management',
    'manualsettlement':'Manual Settlement',
    'addmanualsettlement':'Add Manual Settlement',
    'editmanualsettlement':'Edit Manual Settlement',
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <li
                            className="breadcrumb-item active"
                            style={{ color: '#0A3A84' }}
                            key={to}
                            aria-current="page"
                        >
                            {breadcrumbNameMap[value] || value}
                        </li>
                    ) : (
                        <li className="breadcrumb-item" key={to}>
                            <Link to={to} className="text-decoration-none text-dark">
                                {breadcrumbNameMap[value] || value}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

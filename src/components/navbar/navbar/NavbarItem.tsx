
type NavbarItemProps = {
    href : string;
    label : string
}

function NavbarItem(props: NavbarItemProps) {
    // Render
    return (
        <li> 
            <a href={props.href}>{props.label}</a>
        </li>
    )
}

export default NavbarItem;
import {HeaderProps} from "./Header.types";

const Header = (props: HeaderProps) => {
    return (
        <header
            className="bg-gray-800 max-h-20 flex flex-col  justify-center text-4xl text-slate-400 p-12 cursor-pointer">
            <h2 onClick={() => window?.location?.reload()}>{props.text}</h2>
        </header>
    )
}

export default Header
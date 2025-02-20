// eslint-disable-next-line react/prop-types
const Button = ({className, text, onclick, icon}) => {
    return (
        <button
            onClick={onclick}
            className={`${className} cursor-pointer bg-[#8ec0fd] hover:bg-[#7cafed] px-4 py-2 text-center rounded-md shadow-gray-600 shadow-sm`}>
            {text}
            {icon}
        </button>
    );
};

export default Button;
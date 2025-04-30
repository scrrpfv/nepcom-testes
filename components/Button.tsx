

export interface IProps{
    text: string;
    resize?: boolean;
    styles?: string;
}

export default function Button({text, resize = true, styles = "button"}: IProps){

    let buttonStyle = "";

    switch (styles) {
        case "nav":
            buttonStyle = "text-(--color-light-text) text-lg font-bold px-[12px] py-[12px] transition-colors duration-150 hover:bg-(--color-primary) hover:text-(--color-dark-bg) hover:scale-105 rounded-lg";
            break;
        default:
            buttonStyle = `bg-(--color-primary) text-(--color-dark-text) cursor-pointer transition-colors transition-transform duration-300 ease-in-out hover:bg-yellow-500 ${resize ? "hover:scale-105" : ""}`;
            break;
    }


    return(
        <button className={buttonStyle}>
            {text}
        </button>
    )
}
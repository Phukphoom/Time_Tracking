import { CSSTransition } from 'react-transition-group';

const AlertBoxTop = ({ isShow, className, text, onClick }) => {
    return (
        <CSSTransition in={isShow} timeout={300} classNames="alert-box-top" unmountOnExit>
            <div className=" fixed top-0 w-full">
                <label
                    className={`cursor-pointer flex items-center justify-between w-full p-4 shadow text-white bg-red-500 ${className}`}
                    onClick={onClick}
                >
                    {text}
                </label>
            </div>
        </CSSTransition>
    );
};
export default AlertBoxTop;

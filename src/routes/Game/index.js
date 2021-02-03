import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
    const handleClickButton = () => {
        onChangePage && onChangePage('app');
    };

    return (
        <>
            <h1>This is Game Page!!!</h1>
            <button onClick={handleClickButton}>Go to Home</button>
        </>
    );
};

export default GamePage;

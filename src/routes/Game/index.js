import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
    const handleClickButton = () => {
        onChangePage && onChangePage('app');
    };

    return (
        <>
            <div>This is Game Page!!!</div>
            <button onClick={handleClickButton}>Go to Home</button>
        </>
    );
};

export default GamePage;

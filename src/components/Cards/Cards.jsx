/* eslint-disable react/prop-types */
const Cards = ({ handleBtnActive, btnActive,count}) => {

    return (
        <div className="flex justify-end sticky top-24">
            <div className=" gap-4 border p-2 rounded-2xl font-semibold ">
                <button onClick={() =>handleBtnActive(true) } className={`${btnActive.status? 'button bgColor' : 'button'}`}>Available </button>
                <button onClick={() =>handleBtnActive(false) } className={`${btnActive.status? 'button ' : 'button bgColor'}`} >Selected ({count})</button>
            </div>
        </div>
    );
};

export default Cards;
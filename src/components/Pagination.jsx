

export const TOTAL_POKEMONS = 1155;
export const PER_PAGE = 20;

const Pagination = ({page, setPage, total}) => {


    const prevPage = () => {
        setPage(page-1)
    }

    const nextPage = () => {
        setPage(page+1)
    }

    const getNumberPages = () => {
        return Math.ceil(total   / PER_PAGE);
    }

    const range = (start, end) => {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }

    const getRangePages = () => {
        const lastPage = getNumberPages();
        if (lastPage < 7 ) return range(1, lastPage+1);
        if(page<4) return [1,2,3,4,5,6,7];
        if( page >= (lastPage-3) ) return range(lastPage-6,lastPage+1);
        return range(page-3, page+4);
    }

    return <div className="pagination">

        { (page !== 1 && getNumberPages() > 7)  && (<a className="item active" onClick={prevPage}> {'<'} </a>)}

        {getRangePages().map(i => {
            return <a key={i}
                        onClick={() => {
                            setPage(i)
                        }}
                        className={ 'item ' + (i === page? 'active':'')}>
                {i}
            </a>
        })}
        {(page !== getNumberPages() && getNumberPages() > 7) && ( <a className="item active" onClick={nextPage}>></a>)}

    </div>;
}
 
export default Pagination;

import React from "react"
 
export default function PaginationPayments({ paymentsPerPage, allPayments, paginado, currentPage, totalPages }) {
    const pageNumbers = []
    
    for(let i=1; i<=Math.ceil(allPayments.length/paymentsPerPage); i++) {
        pageNumbers.push(i)
    }
 
    const nextHandler = () => {
        if(currentPage < totalPages) {
        return paginado(currentPage + 1)}
    }
    const prevHandler = () => {
        if(currentPage > 1)
        return paginado(currentPage - 1)
    }
    console.log(totalPages)
    console.log(currentPage)
    
    return (
        <nav>
            <button>
                <a onClick={() => prevHandler()}>Prev</a>
            </button>
            <ul>
                {pageNumbers &&
                    pageNumbers.map(number =>
                        currentPage === number ?
                        (
                            <button key={number}>
                                <a onClick={() => paginado(number)}>{number}</a>
                            </button>
                        ) :
                        (
                            <button key={number}>
                                <a onClick={() => paginado(number)}>{number}</a>
                            </button>
                        )
                    )
                }
               
            </ul>
            <button>
                <a onClick={() => nextHandler()}>Next</a>
            </button>
        </nav>
    )
}

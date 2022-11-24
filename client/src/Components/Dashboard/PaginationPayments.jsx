import React from "react"
 
export default function PaginationPayments({ paymentsPerPage, allPayments, paginado, currentPage }) {
    const pageNumbers = []
    
    for(let i=1; i<=Math.ceil(allPayments.length/paymentsPerPage); i++) {
        pageNumbers.push(i)
    }
 
    return (
        <nav>
            <button>
                <a onClick={() => paginado(currentPage-1)}>Prev</a>
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
                <a onClick={() => paginado(currentPage+1)}>Next</a>
            </button>
        </nav>
    )
}

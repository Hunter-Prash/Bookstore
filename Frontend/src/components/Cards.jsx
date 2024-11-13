import React from 'react'

function Cards({item}) {
    //console.log(item)
    return (
        <>
            <div>
                <div className="card bg-base-100 w-96 h-[470px]  shadow-xl hover:scale-105 duration-200 ">
                    <figure>
                        <img
                            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1728866958~exp=1728870558~hmac=5dd87343a2d92bd89ab51065c8160056251a577261907b803a39ed5d05d7300a&w=740"
                            alt="Books" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline cursor-pointer p-4 hover:bg-pink-500 text-white">{item.price}$</div>
                            <div className="badge badge-outline cursor-pointer p-4 hover:bg-pink-500 text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards

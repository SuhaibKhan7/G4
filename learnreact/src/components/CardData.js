import React from 'react'

export default function CardData() {

    const products = [
        {
            id: 1,
            title: "Product 1",
            des: "Description of Product 1",
            img: "https://images.unsplash.com/photo-1709855609223-3303a37994f0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            title: "Product 2",
            des: "Description of Product 2",
            img: "https://images.unsplash.com/photo-1709855609223-3303a37994f0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "Product 3",
            des: "Description of Product 3",
            img: "https://images.unsplash.com/photo-1709855609223-3303a37994f0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        // Add more products as needed
    ];


  return (
    <section className='d-flex gap-3'>

                {
                products.map( (p)=>{

                 return   <div class="card w-25">
                        <img src={p.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{p.title}</h5>
                                <p class="card-text">{p.des}</p>
                                <a href="#" class="btn btn-success">Go somewhere</a>
                            </div>
                    </div>



                }
                )
                
                
                
                
                }



    </section>
  )
}

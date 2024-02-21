import React from 'react'


const Recipee = ({data}) => {
    return (
        <div>
            <center className='d-grid gap-3'>
            <div className="row">
                {data.map(data =>  
                <div className="col-md-4">
                    <div className="card" style={{"width": "18rem"}}>
                    <img className="card-img-top" src={data.recipe.image} alt="Null" />
                    <div className="card-body">
                    <h5 class="card-title">{data.recipe.label}</h5>
                    <p class="card-text" >Visit <b style={{color : 'red'}} >{data.recipe.url}</b></p>
                    </div>
                    <ul class="list-group list-group-flush">
    
                        <li class="list-group-item">{data.recipe.ingredientLines[0]}</li>
                        <li class="list-group-item">{data.recipe.ingredientLines[1]}</li>
                        <li class="list-group-item">{data.recipe.ingredientLines[2]}</li>
                        <li class="list-group-item">{data.recipe.ingredientLines[3]}</li>
                        <li class="list-group-item">{data.recipe.ingredientLines[4]}</li>
                        <li class="list-group-item">{data.recipe.ingredientLines[5]}</li>
                    </ul>
                    </div>
                </div>
                )}
            </div>
            </center>
        </div>
    )
}

export default Recipee
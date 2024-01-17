import './styles/filterHome.css'

const FilterHome = () => {

    return(
        <div className="Filter_Home">

            <div className='filter__home-container'>

                    <form className={`sheard__name-from `}>

                        <input type="text" className='sheard_input' placeholder="Sheard"/>


                        <button className='sheard-btn'>Buscar</button>

                    </form>


                    <section className='filter__all'>

                        <div className='filter__category-title filter_shear'>

                            <h3 className='category__title'>Category</h3>

                            <i className='bx bxs-chevron-down-circle'></i>

                        </div>

                        {/*
                        <ul className={`filter__category__list ${displayCategory}`}>
                            <li onClick={handleClickAllProduct}>All Products</li>
                            {
                                categories?.map(category => (
                                <li onClick={() => handleClickCategories(category.id)} className='category__item' key={category.id}>{category.name}</li>))
                            }
                        </ul> */
                        }

                        <div className='filter__marca-title filter_shear'>

                            <h3 className='marca__title'>Marca</h3>

                            <i className='bx bxs-chevron-down-circle'></i>

                        </div>

                        {/*
                        <ul className={`filter__marca__list ${displayCategory}`}>
                        <li onClick={handleClickAllProduct}>All Products</li>
                        {
                            categories?.map(category => (
                            <li onClick={() => handleClickCategories(category.id)} className='category__item' key={category.id}>{category.name}</li>))
                        }
                        </ul> */
                        }

                    </section>
            
            </div>
        </div>
    )
}

export default FilterHome;
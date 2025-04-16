import CategoryList from '../../Ui/CategoryList'

const Category = ({data}) => {



  return (
    <section>
            <div className="container">
                <CategoryList categories={data}/>
            </div>
        </section>
  )
}

export default Category
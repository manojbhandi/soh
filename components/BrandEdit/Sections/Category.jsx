import CategoryList from '../../Ui/CategoryList'

const Category = ({data}) => {



  return (
    <section>
            <div className="container max-w-[575px] px-0">
                <CategoryList categories={data}/>
            </div>
        </section>
  )
}

export default Category
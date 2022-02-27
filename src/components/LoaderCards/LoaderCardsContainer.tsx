import LoaderCards from "../LoaderCards/LoaderCards";
import st from './LoaderCardContainer.module.css'


const LoaderCardsContainer = () => {
    const loaderItems = new Array(20).fill(null)


    return (
        <div className={st.container}>
            {
                loaderItems.map((e, i) => (
                    <LoaderCards key={i}/>
                ))
            }
        </div>
    )
}

export default LoaderCardsContainer
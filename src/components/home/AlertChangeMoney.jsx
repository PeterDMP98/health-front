import './styles/alertChangeMoney.css'

const AlertchangeMoney = ({change, setchange, nequi}) => {

    const handleClickBuyAcept = () =>{
        setchange("off")
    }

    return(
        <section className={`Alert_Change_Money ${change}`}>
            
            {
                nequi 
                ?
                    <div className="change_money">
                        <p>Listo</p>
                        <button onClick={handleClickBuyAcept} className="btn_acept"> Aceptar</button>
                    </div> 
                 
                :                    
                    <div className="change_money">
                        <p>Ingreso: 10.000</p>
                        <p>Devuelta: 5000</p>

                        <button onClick={handleClickBuyAcept} className="btn_acept"> Aceptar</button>
                    </div>

            }
            
        </section>
    )
}

export default AlertchangeMoney;
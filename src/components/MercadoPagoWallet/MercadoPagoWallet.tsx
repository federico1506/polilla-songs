// React
import React from 'react'

// MercadoPago
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Constants
import { ENDPOINT_LOCAL } from '../../constants/constants';

interface MercadoPagoPropsType{
    descripcion: string;
    precio: number;
    cantidad: number;
}

const MercadoPagoWallet: React.FC<MercadoPagoPropsType> = ({descripcion, precio, cantidad}) => {
    const [preferenceId, setPreferenceId] = React.useState<string>("");
    const publicKey = "";
    const createPreferenceIdEndppont = ENDPOINT_LOCAL;

    const getPreference = async () => {
        const bodyTicket = {
            descripcion,
            precio,
            cantidad
        }
        try{
            const res = await fetch(createPreferenceIdEndppont, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(bodyTicket),
            })
            const mercadoPagoData = await res.json();
            setPreferenceId(mercadoPagoData.id);
        } catch (error){
            console.error(error);
        }
    }

    React.useEffect(() => {
        const initMercadoPagoPreference = async () => (
            await getPreference()
        )
        initMercadoPagoPreference();
        initMercadoPago(publicKey);
    }, [])

  return (
    <>
        {preferenceId && (
        <Wallet initialization={{ preferenceId }} />
        )}
    </>
  )
}

export default MercadoPagoWallet
